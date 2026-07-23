/**
 * convert-pdf-to-webp.mjs
 *
 * Converts each PDF page in menu-kalih/ and menu-ramadhan-kalih/
 * to a high-quality WebP image using pdfjs-dist + canvas + sharp.
 *
 * Each single-page PDF → one .webp file with the same base name.
 *
 * Usage: node scripts/convert-pdf-to-webp.mjs
 */

import fs from "fs/promises";
import path from "path";
import sharp from "sharp";
import { createCanvas } from "canvas";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

const WEBP_QUALITY = 90;
const SCALE = 3; // 3x scale for high quality

const FOLDERS = [
  path.resolve("public/menu-kalih"),
  path.resolve("public/menu-ramadhan-kalih"),
];

async function renderPageToBuffer(page) {
  const viewport = page.getViewport({ scale: SCALE });
  const canvas = createCanvas(viewport.width, viewport.height);
  const context = canvas.getContext("2d");

  await page.render({ canvasContext: context, viewport, canvas }).promise;

  return canvas.toBuffer("image/png");
}

async function convertPdfToWebp(pdfPath) {
  const baseName = path.basename(pdfPath, ".pdf");
  const outDir = path.dirname(pdfPath);

  const data = await fs.readFile(pdfPath);
  const pdf = await getDocument({ data: new Uint8Array(data) }).promise;

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const imgBuffer = await renderPageToBuffer(page);
    const suffix = pdf.numPages > 1 ? `-p${i}` : "";
    const outPath = path.join(outDir, `${baseName}${suffix}.webp`);

    await sharp(imgBuffer).webp({ quality: WEBP_QUALITY }).toFile(outPath);

    console.log(`  ✅ ${path.relative(".", outPath)}`);
  }

  await pdf.destroy();

  // Delete original PDF
  await fs.unlink(pdfPath);
  console.log(`  🗑️  Deleted ${path.relative(".", pdfPath)}`);
}

async function main() {
  for (const folder of FOLDERS) {
    console.log(`\n📂 Processing: ${path.relative(".", folder)}`);
    try {
      const files = await fs.readdir(folder);
      const pdfs = files.filter((f) => f.toLowerCase().endsWith(".pdf")).sort();

      if (pdfs.length === 0) {
        console.log("  No PDFs found, skipping.");
        continue;
      }

      for (const pdf of pdfs) {
        console.log(`\n  Converting: ${pdf}`);
        try {
          await convertPdfToWebp(path.join(folder, pdf));
        } catch(e) {
          console.error(`  ❌ Failed to convert ${pdf}: ${e.message}`);
        }
      }
    } catch(e) {
      console.error(`Failed to process folder ${folder}: ${e.message}`);
    }
  }

  console.log("\n🎉 All PDFs converted to WebP!");
}

main().catch(console.error);
