//import { AUTHENTICATION_ENDPOINTS } from "./APIEndpoints.constants";

import { UserAuthenticationEndpoints } from "./APIEndpoints.constants";

export enum Methods {
  GET,
  POST,
}

export class UserAuthentication {
  /**
   *
   */
  private constructor() {}

  public static instance = new UserAuthentication();

  async login(
    emailOrUsername: string,
    password: string
    // isEnterprise: boolean
  ) {
    const res = await fetch(
      UserAuthenticationEndpoints.instance.authenticateUser,
      {
        method: Methods[Methods.POST],
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identifier: emailOrUsername,
          password: password,
          //isEnterprise: isEnterprise,
        }),
      }
    );

    const data = await res.json();

    return data;
  }

  async register(
    email: string,
    userName: string,
    password: string,
    fullName: string,
    phone: string,
    isEnterprise: boolean
  ) {
    const res = await fetch(UserAuthenticationEndpoints.instance.registerUser, {
      method: Methods[Methods.POST],
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        username: userName,
        password: password,
        fullName: fullName,
        phone: phone,
        isEnterprise: isEnterprise,
        confirmed: true,
      }),
    });

    return res.status;
  }
}
