// RegisterLayoutBody.tsx
import { Button, Form } from "antd";
import { Link, useNavigate } from "react-router-dom";
import InputWithLabelAndSvg from "../../InputWithLabel";
import "./register.css";

const RegisterLayoutBody = (props: any) => {
  const {
    title,
    onSubmit,
    description,
    formData: registerFields,
    buttonTitle,
    accountUrl,
    accountText,
    setPhoneNumber,
    isLoading,
  } = props;

  const navigate = useNavigate();

  console.log("My register: ",registerFields)

  const onFinishFailed = () => {
    console.log("first");
    // Regular expression to validate a phone number
    // const re = /^(\+\d{1,3}[- ]?)?\d{10}$/;

    // if (phoneNumber === "") {
    //   setPhoneError("Please enter phone number");
    // } else if (!re.test(phoneNumber)) {
    //   setPhoneError("Please enter a valid phone number");
    // } else {
    //   setPhoneError("");
    // }
  };

  return (
    <div className="register-body">
      <Form
        className="register-body__wrapper"
        name="basic"
        onFinishFailed={onFinishFailed}
        onFinish={onSubmit}
      >
        <div className="register-body__top">
          <h4 className="register-body__top--title">{title}</h4>
          {description && (
            <div className="register-body__top--description">
              <p dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          )}
        </div>
        <div className="inputcenter">
          {registerFields.map((singleUserInput: any, key: any) => (
            
            <InputWithLabelAndSvg
              key={key}
              singleUserInput={singleUserInput}
              setPhoneNumber={setPhoneNumber}
            />
          ))}
        </div>

        <div className="register-body__end">
          <Button
            type="primary"
            className="register-body__end--button"
            size="large"
            htmlType="submit"
          >
            {isLoading ? (
              <img src={"/assets/gifs/loading-black.gif"} height={40} />
            ) : (
              buttonTitle
            )}
          </Button>
        </div>
        {accountText && accountUrl && (
          <div className="register-body__account-text">
            <div className="register-body__account-text--text">
              {accountText}
            </div>
            <Link to={"/login"} className="register-body__account-text--link">
              {accountUrl}
            </Link>
          </div>
        )}
      </Form>
    </div>
  );
};

export default RegisterLayoutBody;
