import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect, useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import Layout from "../layouts";
import { UserContext } from "../contexts/userContext";
import { AuthenticatedUserProps } from "../scripts/UIConfigs.types";
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
        value={{ userDetails: userDetails, signOut: signOut }}
      >
        <Layout>{page}</Layout>
      </UserContext.Provider>
    ));

  return getLayout(
    <UserContext.Provider value={{ signIn: signIn }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
