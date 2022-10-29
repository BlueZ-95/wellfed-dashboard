type userType = "consumer" | "enterprise";

export interface UserProps {
  userName: string;
  email: string;
  userType: userType;
}

export interface AuthenticatedUserProps {
  token: string;
  user: UserProps;
}

export interface SessionProps {
  userDetails: AuthenticatedUserProps;
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
