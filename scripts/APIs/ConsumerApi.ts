import { APIENDPOINTS } from "./APIEndpoints.constants";
import { getUserDetails } from "../session";
import { AuthenticatedUserProps, CoursesListProps } from "../UIConfigs.types";
import { APIWrapper } from "./APIWrapper";

// export const APIWrapper = {
//   consumerAPIs: {
//     fetchCourses: async (): Promise<CoursesListProps> => {
//       const userDetails: AuthenticatedUserProps = getUserDetails();

//       const res = await fetch(APIENDPOINTS.FETCH_USER_COURSES, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${userDetails.token}`,
//         },
//       });

//       const data = await res.json();

//       return data;
//     },
//   },
//   enterpriseAPIs: {},
// };

class ConsumerAPI extends APIWrapper {}
