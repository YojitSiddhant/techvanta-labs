import { SiteFrame } from "./site-frame";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return <SiteFrame>{children}</SiteFrame>;
}
