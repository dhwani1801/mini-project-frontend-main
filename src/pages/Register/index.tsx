import RegisterLayout from "../../layouts/register";
import { FORMDATA } from "../../constants/data";
import RegisterLayoutBody from "../../components/register/RegisterLayoutBody";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getApi } from "../../redux/apis";
import { toastText } from "../../utils/utils";
import { registerAction } from "../../redux/action/registerAction";
// Register page
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  console.log("🚀 ~ file: index.tsx:18 ~ Register ~ phoneNumber:", phoneNumber);

  const onSubmit = (values: any) => {
    const newValues = {
      ...values,
      phone: phoneNumber,
    };

    setIsLoading(true);

    const { email } = values;

    getApi(`/auth/get-email`, { email })
      .then((res: any) => {
        if (res?.data?.data === null) {
          dispatch(registerAction(newValues) as any)
            .unwrap()
            .then((res: any) => {
              if (res.statusCode === 200) {
                toastText(
                  "Registration successfully, Please check your inbox to verify your email. ",
                  "success"
                );
                navigate("/login");
              }
            })
            .catch((error: any) => {
              setIsLoading(false);
              navigate("/register");
              toastText(error.message, "error");
            });
        } else {
          toastText("User Already exist", "error");
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log("err: ", err);
        setIsLoading(false);
      });
    // }
  };
  return (
    <RegisterLayout>
      <RegisterLayoutBody
        title="Register"
        description="<p>
							Please Enter your
							Details.
						</p>"
        formData={FORMDATA.registerFields}
        buttonTitle={"Register Now!"}
        accountText={"Already have an account?"}
        accountUrl={"Login Now!"}
        onSubmit={onSubmit}
        setPhoneNumber={setPhoneNumber}
        phoneNumber={phoneNumber}
        isLoading={isLoading}
      ></RegisterLayoutBody>
    </RegisterLayout>
  );
};

export default Register;
