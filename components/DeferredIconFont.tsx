"use client";

import { useEffect } from "react";

// Every Material Symbols ligature name (e.g. `material-symbols-outlined">star`)
// used anywhere in the app. Google's `icon_names` param subsets the font to just
// these glyphs (~5KB instead of the ~450KB full icon set), so the download
// finishes fast enough that visitors never hit the fallback below and see raw
// ligature text like "star" or "menu" flash on the page. Must stay alphabetized
// (the API rejects unsorted lists) and updated whenever a new icon name is used.
const ICON_NAMES = [
  "arrow_back",
  "arrow_forward",
  "arrow_forward_ios",
  "call",
  "chat",
  "check_circle",
  "child_care",
  "close",
  "directions",
  "expand_more",
  "family_restroom",
  "gavel",
  "group",
  "handshake",
  "local_parking",
  "location_on",
  "menu",
  "park",
  "person",
  "schedule",
  "star",
  "wifi",
  "zoom_in",
].join(",");

// `display=swap` (not `optional`): Chrome's `optional` mode reserves the right to
// abandon the font download entirely based on live network-condition heuristics,
// which is non-deterministic and was observed to sometimes leave the font stuck
// in the "loading" state forever, permanently freezing icons as fallback text.
// `swap` always eventually applies the font once it arrives; the `icons-ready`
// gating below is what already prevents the FOUC `swap` is normally used for.
export const MATERIAL_SYMBOLS_URL = `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:FILL@0..1&icon_names=${ICON_NAMES}&display=swap`;

/**
 * Loads the Material Symbols stylesheet after the page has painted instead of
 * as a render-blocking <link> in <head>, since a synchronous Google Fonts
 * stylesheet request was the largest render-blocking cost in PageSpeed audits.
 *
 * Icon glyphs are hidden (see `.material-symbols-outlined` in globals.css)
 * until the "icons-ready" class below is added, so visitors never see the
 * raw ligature text (e.g. "star", "menu") flash before the font arrives.
 */
export default function DeferredIconFont() {
  useEffect(() => {
    const reveal = () => document.documentElement.classList.add("icons-ready");
    // Safety net in case the font fails to load or the Font Loading API
    // is unavailable, so icons don't stay invisible forever. Kept long
    // because a short timeout can fire before a slow first load finishes,
    // which reveals the raw ligature text anyway (the original bug).
    const fallback = setTimeout(reveal, 6000);

    const onFontsReady = () => {
      document.fonts
        .load('24px "Material Symbols Outlined"')
        .catch(() => {})
        .finally(() => {
          clearTimeout(fallback);
          reveal();
        });
    };

    const existing = document.querySelector<HTMLLinkElement>(
      `link[rel="stylesheet"][href="${MATERIAL_SYMBOLS_URL}"]`
    );
    if (existing) {
      onFontsReady();
      return () => clearTimeout(fallback);
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = MATERIAL_SYMBOLS_URL;
    link.onload = onFontsReady;
    link.onerror = () => {
      clearTimeout(fallback);
      reveal();
    };
    document.head.appendChild(link);

    return () => clearTimeout(fallback);
  }, []);

  return null;
}
