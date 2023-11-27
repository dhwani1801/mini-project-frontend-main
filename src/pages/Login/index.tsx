import LoginLayout from "../../layouts/login";
import { FORMDATA } from "../../constants/data";
import { LoginLayoutBody } from "../../components/Login";
import { loginAction } from "../../redux/action/loginAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (values: any) => {
    dispatch(loginAction(values) as any)
      .unwrap()
      .then((res: any) => {
        navigate("/dashboard");
      })
      .catch((error: any) => {
        console.error(error)
      }
      )
  };

  return (
    <LoginLayout>
      <LoginLayoutBody
        title="Sign In"
        description="<p>
            Welcome! Kindly provide your login details.
						</p>"
        formData={FORMDATA.loginFields}
        buttonTitle={"Sign in"}
        redirectUrl="/forgot-password"
        redirectText="Forgot password?"
        accountText={" Don't have an account yet?"}
        accountUrl={"Sign up!"}
        onSubmit={onSubmit}
      ></LoginLayoutBody>
    </LoginLayout>
  );
};

export default Login;
