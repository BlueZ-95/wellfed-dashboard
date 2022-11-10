import LoginForm from "../../components/Forms/LoginForm";

export default function Login() {
  return <LoginForm />;
}

Login.getLayout = function getLayout(page: any) {
  return page;
};
