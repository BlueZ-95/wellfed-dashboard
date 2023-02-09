import { UserAuthenticationEndpoints } from "./APIEndpoints.constants";
import { Methods } from "./Enums";

export class UserAuthenticationService {
  /**
   *
   */
  private constructor() {}

  public static instance = new UserAuthenticationService();

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
    newPasswordConfirmation: string,
    code: string
  ) {
    let verifiedLogin;
    if (currentPassword) {
      verifiedLogin = await this.login(email, currentPassword);

      if (verifiedLogin.error) {
        throw verifiedLogin.error;
      }
    }

    const getRequestObject = (): object => {
      const obj: { [key: string]: string } = {
        password: newPassword,
        passwordConfirmation: newPasswordConfirmation,
      };

      // If current flow is change-password flow
      if (currentPassword) obj.currentPassword = currentPassword;

      // If current flow is forgot-password flow
      if (code) obj.code = code;

      return obj;
    };

    const res = await fetch(
      UserAuthenticationEndpoints.instance[
        currentPassword ? "changePassword" : "resetPassword"
      ],
      {
        method: Methods[Methods.POST],
        headers: {
          "Content-Type": "application/json",
          Authorization: verifiedLogin && `Bearer ${verifiedLogin.jwt}`,
        },
        body: JSON.stringify(getRequestObject()),
      }
    );

    const data = await res.json();

    return data;
  }

  async isExistingUser(email: string) {
    try {
      const res = await fetch(
        UserAuthenticationEndpoints.instance.checkExistingUser.replace(
          "{email}",
          email
        ),
        {
          method: Methods[Methods.GET],
        }
      );

      const data = await res.json();

      return data.length > 0 ? true : false;
    } catch (error) {
      console.log(error);
    }
  }

  async forgotPassword(email: string) {
    const res = await fetch(
      UserAuthenticationEndpoints.instance.forgotPassword,
      {
        method: Methods[Methods.POST],
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
        }),
      }
    );

    const data = await res.json();

    return data;
  }
}
