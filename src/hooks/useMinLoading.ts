"use client";

import { useEffect, useState } from "react";

/**
 * Returns true for at least `minMs` after `loading` becomes true.
 * Once shown, it stays true until `loading` is false AND `minMs` has elapsed.
 */
export function useMinLoading(loading: boolean, minMs = 1000): boolean {
  const [shown, setShown] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);

  useEffect(() => {
    if (loading) {
      setShown(true);
      setStartTime(Date.now());
      return;
    }

    if (shown && startTime !== null) {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minMs - elapsed);
      const timer = setTimeout(() => {
        setShown(false);
        setStartTime(null);
      }, remaining);
      return () => clearTimeout(timer);
    }
  }, [loading, minMs, shown, startTime]);

  return shown;
}
