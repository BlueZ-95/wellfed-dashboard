interface SubLinkProps {
  href: string;
  title: string;
}

interface NavLinkProps {
  href: string;
  title: string;
  icon: string;
  subLinks?: Array<SubLinkProps>;
}

export interface SidebarProps {
  navLinks: Array<NavLinkProps>;
}
