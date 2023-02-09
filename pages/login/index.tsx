import { useRouter } from "next/router";
import { useEffect } from "react";
import ForgotPassword from "../../components/Forms/ForgotPassword";
import LoginForm from "../../components/Forms/LoginForm";
import ResetPassword from "../../components/Forms/ResetPassword";

export default function Login() {
  const router = useRouter();

  const { emailId, isFirstLogin, code, isForgotPasswordFlow } = router.query;

  const getForm = () => {
    if ((isFirstLogin && emailId) || code) {
      return (
        <ResetPassword
          emailId={emailId}
          isFirstLogin={isFirstLogin === "true"}
          code={code}
        />
      );
    } else if (isForgotPasswordFlow === "true") {
      return <ForgotPassword />;
    } else {
      return <LoginForm />;
    }
  };

  return getForm();
}

Login.getLayout = function getLayout(page: any) {
  return page;
};
