"use client";

import { useEffect } from "react";

const MATERIAL_SYMBOLS_URL =
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:FILL@0..1&display=optional";

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
    // is unavailable, so icons don't stay invisible forever.
    const fallback = setTimeout(reveal, 2000);

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
      `link[href="${MATERIAL_SYMBOLS_URL}"]`
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
