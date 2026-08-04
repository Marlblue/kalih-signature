"use client";

import { useEffect, useRef, useState } from "react";

interface LazyMapEmbedProps {
  src: string;
  title: string;
  className?: string;
  allowFullScreen?: boolean;
}

/**
 * Mounts the Google Maps iframe only once the container enters the
 * viewport. Native loading="lazy" alone still fires early under PSI's
 * throttled mobile simulation (Chrome widens its lazy-load distance on
 * slow connections), pulling in ~300-400 KiB of Maps JS during the
 * critical LCP window.
 */
export default function LazyMapEmbed({
  src,
  title,
  className,
  allowFullScreen,
}: LazyMapEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      {shouldLoad && (
        <iframe
          src={src}
          className={className}
          allowFullScreen={allowFullScreen}
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
        />
      )}
    </div>
  );
}
