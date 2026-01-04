import React, { useState, useEffect } from 'react';

/**
 * Default mobile breakpoint (matching common CSS standards)
 */
const DEFAULT_MOBILE_BREAKPOINT = 768;

/**
 * useMobile
 *
 * An industry-standard hook utilizing window.matchMedia to efficiently
 * detect if the current viewport width is considered "mobile" based on
 * the provided breakpoint.
 *
 * @param breakpoint The maximum pixel width (exclusive) for which the device is considered mobile. Defaults to 768.
 * @returns boolean - True if the current viewport width is less than the breakpoint.
 */
export const useMobile = (breakpoint = DEFAULT_MOBILE_BREAKPOINT): boolean => {
  const isClient = typeof window !== 'undefined';
  
  // Initialize state based on the calculated query (will be calculated safely in useEffect)
  const [isMobile, setIsMobile] = useState(false);

  // Construct the CSS media query string
  // Note: We use max-width: (breakpoint - 1)px to align with common responsive design practices
  const mobileQuery = `(max-width: ${breakpoint - 1}px)`;

  useEffect(() => {
    if (!isClient) {
      // During SSR, we assume desktop or default to false
      return;
    }

    const mediaQueryList = window.matchMedia(mobileQuery);

    const handleMatch = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // 1. Set initial state immediately on mount
    setIsMobile(mediaQueryList.matches);

    // 2. Attach listener for changes
    // Using 'change' event listener is the modern standard
    mediaQueryList.addEventListener('change', handleMatch);

    // Cleanup function
    return () => {
      mediaQueryList.removeEventListener('change', handleMatch);
    };
  }, [isClient, mobileQuery]);

  return isMobile;
};

// Optional: Export the default constant for external use if needed
export { DEFAULT_MOBILE_BREAKPOINT };