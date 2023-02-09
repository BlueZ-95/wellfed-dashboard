import { METHODS } from "http";
import { getUserDetails } from "../session";
import { AuthenticatedUserProps } from "../UIConfigs.types";
import { EnterpriseEndpoints } from "./APIEndpoints.constants";
import { Methods } from "./Enums";
//import { ENTERPRISE_ENDPOINTS } from "./APIEndpoints.constants";

export class EnterpriseService {
  private constructor() {}

  static instance = new EnterpriseService();

  async fetchDashboardData() {
    console.log("Fetching enterprise dashboard data ");

    const userDetails: AuthenticatedUserProps = getUserDetails();

    const res = await fetch(EnterpriseEndpoints.instance.dashboardData, {
      method: Methods[Methods.GET],
      headers: {
        Authorization: `Bearer ${userDetails.token}`,
      },
    });

    const data = await res.json();

    return data;
  }

  async fetchEnrolledUsers() {
    console.log("Fetching enrolled users ");

    const userDetails: AuthenticatedUserProps = getUserDetails();

    const res = await fetch(EnterpriseEndpoints.instance.enrolledUsers, {
      method: Methods[Methods.GET],
      headers: {
        Authorization: `Bearer ${userDetails.token}`,
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    return data;
  }

  async assignNewUser(name: string, email: string, outlet: string) {
    console.log("Assign new user ");

    const userDetails: AuthenticatedUserProps = getUserDetails();

    const res = await fetch(EnterpriseEndpoints.instance.assignNewUser, {
      method: Methods[Methods.POST],
      headers: {
        Authorization: `Bearer ${userDetails.token}`,
      },
      body: JSON.stringify({
        name: name,
        email: email,
        outlet: outlet,
      }),
    });

    const data = await res.json();

    return data;
  }

  async uploadThirdPartyCertificates(
    name: string,
    email: string,
    outlet: string
  ) {
    console.log("Assign new user ");

    const userDetails: AuthenticatedUserProps = getUserDetails();

    const res = await fetch(EnterpriseEndpoints.instance.assignNewUser, {
      method: Methods[Methods.POST],
      headers: {
        Authorization: `Bearer ${userDetails.token}`,
      },
      body: JSON.stringify({
        name: name,
        email: email,
        outlet: outlet,
      }),
    });

    const data = await res.json();

    return data;
  }
}
