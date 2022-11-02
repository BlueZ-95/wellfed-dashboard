import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect, useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import Layout from "../layouts";
import { UserContext } from "../contexts/userContext";
import {
  AuthenticatedUserProps,
  SessionProps,
} from "../scripts/UIConfigs.types";
import { useRouter } from "next/router";
import { getUserDetails } from "../scripts/session";
import { deleteCookie, setCookie } from "cookies-next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [userDetails, setUserDetails] = useState<AuthenticatedUserProps>(null);

  const router = useRouter();

  useEffect(() => {
    const _userDetails = getUserDetails();

    console.log("_UserDetails", _userDetails);

    setUserDetails(_userDetails);
  }, []);

  const signIn = (userDetails: AuthenticatedUserProps) => {
    setUserDetails(userDetails);
    setCookie("userDetails", userDetails);
    router.push(`/${userDetails.user.userType}`);
  };

  const signOut = () => {
    setUserDetails(null);
    deleteCookie("userDetails");
    router.push("/login");
  };

  const getLayout =
    Component.getLayout ??
    ((page) => (
      <UserContext.Provider
        value={{ userDetails: userDetails, signOut: signOut, signIn: signIn }}
      >
        <Layout>{page}</Layout>
      </UserContext.Provider>
    ));

  return getLayout(
    <UserContext.Provider
      value={{ userDetails: userDetails, signOut: signOut, signIn: signIn }}
    >
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
