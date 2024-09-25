import { useCallback } from "react";

export const useViewTransition = (callback: any) => {
  const startViewTransition = useCallback(
    (...args: any) => {
      if (!("startViewTransition" in document)) {
        return callback(...args);
      }

      return (document as any).startViewTransition(() => {
        callback(...args);
      });
    },
    [callback]
  );

  return startViewTransition;
};
