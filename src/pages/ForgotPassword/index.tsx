import { LoginLayoutBody } from "../../components/Login";
import { FORMDATA } from "../../constants/data";
import LoginLayout from "../../layouts/login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postApi } from "../../redux/apis";
import { loginAction } from "../../redux/action/loginAction";
import { toastText } from "../../utils/utils";

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (values: any) => {
    setIsLoading(true);

    try {
      const response = await postApi("/auth/forgot-password", values);
      console.log("inside forget password", response);
      const message = response?.data?.message;

      if (message) {
        toastText(message, "success");
      } else {
        throw new Error("No message in response.");
      }
      setIsLoading(false);
      navigate("/");
    } catch (error: any) {
      setIsLoading(false);
      toastText(error?.response?.data?.message, "error");
    }
  };

  return (
    <LoginLayout>
      <LoginLayoutBody
        title="Forgot Password"
        formData={FORMDATA.forgotPassword}
        buttonTitle="Verify"
        description="Please Enter your Registered Email Address, we will send reset password link there."
        redirectUrl="/login"
        redirectText="Back to login"
        action={loginAction}
        onSubmit={onSubmit}
        isLoading={isLoading}
      ></LoginLayoutBody>
    </LoginLayout>
  );
};

export default ForgotPassword;
