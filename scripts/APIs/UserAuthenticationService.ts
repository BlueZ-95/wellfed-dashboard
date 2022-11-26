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

  async login(emailOrUsername: string, password: string) {
    const res = await fetch(
      UserAuthenticationEndpoints.instance.authenticateUser,
      {
        method: Methods[Methods.POST],
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identifier: emailOrUsername,
          password: password,
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

  async changePassword(
    email: string,
    currentPassword: string,
    newPassword: string,
    newPasswordConfirmation: string
  ) {
    const verifiedLogin = await this.login(email, currentPassword);

    if (verifiedLogin.error) {
      throw verifiedLogin.error;
    }

    const res = await fetch(
      UserAuthenticationEndpoints.instance.changePassword,
      {
        method: Methods[Methods.POST],
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${verifiedLogin.jwt}`,
        },
        body: JSON.stringify({
          currentPassword: currentPassword,
          password: newPassword,
          passwordConfirmation: newPasswordConfirmation,
        }),
      }
    );

    const data = await res.json();
    console.log(data);

    return data;
  }
}
