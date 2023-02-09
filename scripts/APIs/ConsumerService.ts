//import { AUTHENTICATION_ENDPOINTS } from "./APIEndpoints.constants";
import { json } from "stream/consumers";
import { getUserDetails } from "../session";
import { AuthenticatedUserProps, CoursesListProps } from "../UIConfigs.types";
import { ConsumerEndpoints } from "./APIEndpoints.constants";
import { Methods } from "./Enums";
// import { APIWrapper } from "./APIWrapper";

export class ConsumerService {
  private constructor() {}

  static instance = new ConsumerService();

  async fetchDashboardData() {
    const userDetails: AuthenticatedUserProps = getUserDetails();

    const res = await fetch(ConsumerEndpoints.instance.userCourses, {
      method: Methods[Methods.GET],
      headers: { Authorization: `Bearer ${userDetails.token}` },
    });

    const data = await res.json();

    console.log("res " + data);

    return data;
  }

  async scheduleOfflineExam(
    course: string,
    examDate: string,
    location: string
  ) {
    console.log("Inside api service");

    const userDetails: AuthenticatedUserProps = getUserDetails();

    const res = await fetch(ConsumerEndpoints.instance.scheduleOfflineExam, {
      method: Methods[Methods.POST],
      headers: {
        Authorization: `Bearer ${userDetails.token}`,
      },
      body: JSON.stringify({
        course: course,
        examDate: examDate,
        location: location,
      }),
    });

    const data = await res.json();
    return data;
  }
  //   async fetchEnrolledUsers() {
  //     console.log("Fetching enrolled users ");

  //     const userDetails: AuthenticatedUserProps = getUserDetails();

  //     const res = await fetch(EnterpriseEndpoints.instance.enrolledUsers, {
  //       method : Methods[Methods.GET],
  //       headers: {
  //         Authorization: `Bearer ${userDetails.token}`,
  //       },
  //     });

  //     const data = await res.json();

  //     return data;
  //   }
}

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

//class ConsumerAPI extends APIWrapper {}
