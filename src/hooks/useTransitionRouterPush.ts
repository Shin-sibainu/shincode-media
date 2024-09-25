import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useViewTransition } from "./useViewTransition";

export const useTransitionRouterPush = () => {
  const router = useRouter();

  const routerPush = useCallback(
    (href: string) => {
      router.push(href);
    },
    [router]
  );

  const routerPushWithTransition = useViewTransition(routerPush);

  return routerPushWithTransition;
};
