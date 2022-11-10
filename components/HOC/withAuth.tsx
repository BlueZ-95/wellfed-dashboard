import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getUserDetails } from "../../scripts/session";
import { AuthenticatedUserProps } from "../../scripts/UIConfigs.types";

export const withAuth = (Component) => {
  const AuthenticatedComponent = () => {
    const router = useRouter();
    const [userData, setData] = useState<AuthenticatedUserProps>();

    useEffect(() => {
      const getUser = async () => {
        const userDetails = getUserDetails();
        if (!userDetails || !userDetails.token) {
          router.push("/login");
        } else {
          setData(userDetails);
        }
      };
      getUser();
    }, []);

    return !!userData ? <Component data={userData} /> : "Loading";
  };

  return AuthenticatedComponent;
};
