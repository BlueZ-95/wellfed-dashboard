import { useRouter } from "next/router";
import LoginForm from "../../components/Forms/LoginForm";
import ResetPassword from "../../components/Forms/ResetPassword";

export default function Login() {
  const router = useRouter();

  const { emailId, isFirstLogin } = router.query;

  return isFirstLogin && emailId ? (
    <ResetPassword emailId={emailId} isFirstLogin={isFirstLogin} />
  ) : (
    <LoginForm />
  );
}

Login.getLayout = function getLayout(page: any) {
  return page;
};
