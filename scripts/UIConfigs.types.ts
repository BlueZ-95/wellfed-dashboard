//#region Session related types

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
  userDetails?: AuthenticatedUserProps;
  signIn?: Function;
  signOut?: Function;
}

//#endregion

//#region Sidebar related types
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

//#endregion

//#region Courses related types
interface CourseProps {
  title: string;
  label: string;
}

export interface CoursesListProps {
  courseList: Array<CourseProps>;
}

//#endregion
