export const BASE_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:1337";

// const BASEURL = "http://localhost:1337";

export const APIENDPOINTS = {
  AUTHENTICATE_USER: `${BASE_URL}/api/auth/local`,
  FETCH_USER_COURSES: `${BASE_URL}/api/courses?filters`,
};
