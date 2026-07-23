/**
 * convert-png-to-webp.mjs
 *
 * Converts all .png / .jpg / .jpeg files in public/ to .webp
 * and deletes the originals. Also updates all source code references.
 *
 * Usage: node scripts/convert-png-to-webp.mjs
 */

import sharp from "sharp";
import fs from "fs/promises";
import path from "path";
import { globSync } from "fs";

const PUBLIC_DIR = path.resolve("public");
const SRC_DIRS = ["app", "components", "lib"]; // dirs to search for code refs

// Recursively find all image files
async function findImages(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await findImages(full)));
    } else if (/\.(png|jpg|jpeg)$/i.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

// Recursively find all source files to update refs
async function findSourceFiles(dirs) {
  const files = [];
  for (const dir of dirs) {
    const absDir = path.resolve(dir);
    try {
      const entries = await fs.readdir(absDir, { withFileTypes: true });
      for (const entry of entries) {
        const full = path.join(absDir, entry.name);
        if (entry.isDirectory()) {
          files.push(...(await findSourceFiles([full])));
        } else if (/\.(tsx?|jsx?|css|json|md)$/i.test(entry.name)) {
          files.push(full);
        }
      }
    } catch { /* skip missing dirs */ }
  }
  return files;
}

async function main() {
  // 1. Find all images
  const images = await findImages(PUBLIC_DIR);
  console.log(`Found ${images.length} image(s) to convert:\n`);

  const renames = []; // { oldRelPath, newRelPath }

  for (const imgPath of images) {
    const ext = path.extname(imgPath);
    const webpPath = imgPath.replace(/\.(png|jpg|jpeg)$/i, ".webp");
    const relOld = "/" + path.relative(PUBLIC_DIR, imgPath).replace(/\\/g, "/");
    const relNew = "/" + path.relative(PUBLIC_DIR, webpPath).replace(/\\/g, "/");

    console.log(`  ${relOld} → ${relNew}`);

    // Convert
    await sharp(imgPath).webp({ quality: 85 }).toFile(webpPath);

    // Delete original
    await fs.unlink(imgPath);

    renames.push({ oldRelPath: relOld, newRelPath: relNew });
  }

  // 2. Update source code references
  console.log(`\nUpdating source code references...`);
  const sourceFiles = await findSourceFiles(SRC_DIRS);

  let updatedCount = 0;
  for (const srcFile of sourceFiles) {
    let content = await fs.readFile(srcFile, "utf-8");
    let changed = false;

    for (const { oldRelPath, newRelPath } of renames) {
      if (content.includes(oldRelPath)) {
        content = content.replaceAll(oldRelPath, newRelPath);
        changed = true;
      }
    }

    if (changed) {
      await fs.writeFile(srcFile, content, "utf-8");
      updatedCount++;
      console.log(`  Updated: ${path.relative(".", srcFile)}`);
    }
  }

  console.log(`\n✅ Done! Converted ${images.length} images, updated ${updatedCount} source files.`);
}

main().catch(console.error);
