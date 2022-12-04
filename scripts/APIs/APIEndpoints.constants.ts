//

export class BaseEndpoints {
  get BaseUrl(): string {
    return process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:1337";
  }
}

export class UserAuthenticationEndpoints extends BaseEndpoints {
  static instance = new UserAuthenticationEndpoints();

  get authenticateUser(): string {
    return `${this.BaseUrl}/api/auth/local`;
  }

  get registerUser(): string {
    return `${this.BaseUrl}/api/auth/local/register`;
  }

  get changePassword(): string {
    return `${this.BaseUrl}/api/auth/change-password`;
  }

  get resetPassword(): string {
    return `${this.BaseUrl}/api/auth/reset-password`;
  }

  get checkExistingUser(): string {
    return `${this.BaseUrl}/api/users?filters[email]={email}`;
  }

  get forgotPassword(): string {
    return `${this.BaseUrl}/api/auth/forgot-password`;
  }
}

export class ConsumerEndpoints extends BaseEndpoints {
  static instance = new ConsumerEndpoints();

  get dashboardData(): string {
    return `${this.BaseUrl}/api/dashboard`;
  }

  get userCourses(): string {
    return `${this.BaseUrl}/api/courses`;
  }

  get scheduleOfflineExam(): string {
    return `${this.BaseUrl}/api/schedule?filters`;
  }
}

export class EnterpriseEndpoints extends BaseEndpoints {
  static instance = new EnterpriseEndpoints();

  get dashboardData(): string {
    return `${this.BaseUrl}/api/dashboard`;
  }
  get enrolledUsers(): string {
    return `${this.BaseUrl}/api/enrolled-users?filters`;
  }

  get assignNewUser(): string {
    return `${this.BaseUrl}/api/enrolled-users?filters`;
  }
}

//export const BASE_URL =
//   process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:1337";

// // const BASEURL = "http://localhost:1337";

// export const AUTHENTICATION_ENDPOINTS = {
//   AUTHENTICATE_USER: `${BASE_URL}/api/auth/local`,
// };

// export const CONSUMER_ENDPOINTS = {
//   USER_COURSES: `${BASE_URL}/api/courses?filters`,
// };

// export const ENTERPRISE_ENDPOINTS = {
//   DASHBOARD_DATA: `${BASE_URL}/api/dashboard`,
//   ENROLLED_USERS: `${BASE_URL}/api/courses?filters`,
// };
