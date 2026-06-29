"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { flushSync } from "react-dom";

export default function PageTransitionLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const fadeTimeoutRef = useRef<number | null>(null);
  const removeTimeoutRef = useRef<number | null>(null);

  const showForOneSecond = useCallback((immediate = false) => {
    if (fadeTimeoutRef.current) window.clearTimeout(fadeTimeoutRef.current);
    if (removeTimeoutRef.current) window.clearTimeout(removeTimeoutRef.current);

    const revealLoader = () => {
      setVisible(true);
      setFading(false);
    };

    if (immediate) {
      flushSync(revealLoader);
    } else {
      revealLoader();
    }

    document.body.classList.add("loading");
    fadeTimeoutRef.current = window.setTimeout(() => {
      setFading(true);
      fadeTimeoutRef.current = null;
      removeTimeoutRef.current = window.setTimeout(() => {
        setVisible(false);
        document.body.classList.remove("loading");
        removeTimeoutRef.current = null;
      }, 1200);
    }, 1000);
  }, []);

  useEffect(() => {
    const start = window.setTimeout(showForOneSecond, 0);
    return () => window.clearTimeout(start);
  }, [pathname, showForOneSecond]);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const destination = new URL(anchor.href, window.location.href);
      const current = new URL(window.location.href);
      const isSameDocumentHash = destination.pathname === current.pathname
        && destination.search === current.search
        && Boolean(destination.hash);

      if (destination.origin === current.origin && !isSameDocumentHash && destination.href !== current.href) {
        showForOneSecond(true);
      }
    };

    const handleHistoryNavigation = () => showForOneSecond(true);
    document.addEventListener("click", handleDocumentClick, true);
    window.addEventListener("popstate", handleHistoryNavigation);

    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
      window.removeEventListener("popstate", handleHistoryNavigation);
      if (fadeTimeoutRef.current) window.clearTimeout(fadeTimeoutRef.current);
      if (removeTimeoutRef.current) window.clearTimeout(removeTimeoutRef.current);
      document.body.classList.remove("loading");
    };
  }, [showForOneSecond]);

  if (!visible) return null;

  return (
    <div
      id="preloader"
      className={fading ? "is-fading" : undefined}
      role="status"
      aria-label="Loading page"
    >
      <img className="route-loader-logo" src="/ahsanname.png" alt="" />
      <div className="loader" aria-hidden="true" />
    </div>
  );
}
