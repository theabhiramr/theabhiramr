import { useState, useEffect } from "react";

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        return window.matchMedia(query).matches;
      } catch (e) {
        return false;
      }
    }
    return false;
  });

  useEffect(() => {
    let media;
    try {
      media = window.matchMedia(query);
    } catch (e) {
      return;
    }

    // Set initial value
    setMatches(media.matches);

    const listener = (e) => {
      try {
        setMatches(e.matches);
      } catch (err) {
        // Ignore errors in Firefox iOS
      }
    };

    // Use addEventListener with proper error handling
    try {
      if (media.addEventListener) {
        media.addEventListener("change", listener);
      } else if (media.addListener) {
        media.addListener(listener);
      }
    } catch (e) {
      // Ignore errors
    }

    return () => {
      try {
        if (media.removeEventListener) {
          media.removeEventListener("change", listener);
        } else if (media.removeListener) {
          media.removeListener(listener);
        }
      } catch (e) {
        // Ignore errors
      }
    };
  }, [query]);

  return matches;
};
