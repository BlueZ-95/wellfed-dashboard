import { useContext, useEffect } from "react";
import LoginForm from "../../components/Forms/LoginForm";
import { UserContext } from "../../contexts/userContext";

export default function Login() {
  const value = useContext(UserContext);

  useEffect(() => {
    console.log("eff", value);
  }, []);

  return <LoginForm />;
}

Login.getLayout = function getLayout(page: any) {
  return page;
};
