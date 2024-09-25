import { useTransitionRouterPush } from "@/hooks/useTransitionRouterPush";
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const TransitionLink = ({ href, children, className, style }: Props) => {
  const pushWithTransition = useTransitionRouterPush();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    pushWithTransition(href);
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={className}
      style={style}
      prefetch={false}
    >
      {children}
    </Link>
  );
};
