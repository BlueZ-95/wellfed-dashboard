type userType = "consumer" | "enterprise";

export interface UserProps {
  email: string;
  userType: userType;
}

export interface SessionProps {
  userDetails: UserProps;
  signIn: Function;
  signOut: Function;
}

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
