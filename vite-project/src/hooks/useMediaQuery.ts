import { useEffect, useState } from "react";

export function useMediaQuery(query: string, initialValue = false) {
  const [matches, setMatches] = useState<boolean>(initialValue);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}
