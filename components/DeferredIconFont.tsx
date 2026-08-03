"use client";

import { useEffect } from "react";

const MATERIAL_SYMBOLS_URL =
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=optional";

/**
 * Loads the Material Symbols stylesheet after the page has painted instead of
 * as a render-blocking <link> in <head>, since a synchronous Google Fonts
 * stylesheet request was the largest render-blocking cost in PageSpeed audits.
 */
export default function DeferredIconFont() {
  useEffect(() => {
    if (document.querySelector(`link[href="${MATERIAL_SYMBOLS_URL}"]`)) return;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = MATERIAL_SYMBOLS_URL;
    document.head.appendChild(link);
  }, []);

  return null;
}
