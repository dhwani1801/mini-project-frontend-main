// LoginLayoutBody.tsx

import React from "react";
import { Button, Checkbox, Form } from "antd";
import InputWithLabelAndSvg from "../../InputWithLabel";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const LoginLayoutBody = (props: any) => {
  const {
    title,
    description,
    formData: loginFields,
    setPhoneNumber,
    buttonTitle,
    redirectText,
    redirectUrl,
    rememberMe,
    accountUrl,
    accountText,
    onSubmit
  } = props;

  const navigate = useNavigate();

  return (
    <div className="login-body">
      <Form className="login-body__wrapper" name="basic" onFinish={onSubmit}>
        <div className="login-body__top">
          <h4 className="login-body__top--title">{title}</h4>
          {description && (
            <div className="login-body__top--description">
              <p dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          )}
        </div>
        <div className="login-body__center">
          {loginFields.map((singleUserInput: any, key: any) => (
            <InputWithLabelAndSvg key={key} singleUserInput={singleUserInput} setPhoneNumber={setPhoneNumber}/>
          ))}
        </div>
        <div className="login-body__remberme-forgot">
          {rememberMe && (
            <Form.Item name="rememberMe" valuePropName="checked">
              <Checkbox className="login-body__remberme-forgot--remeber-me">
                {rememberMe}
              </Checkbox>
            </Form.Item>
          )}
          <p
            className="login-body__remberme-forgot--forgot-password"
            onClick={() => navigate(`${redirectUrl}`)}
          >
            {redirectText}
          </p>
        </div>
        <div className="login-body__end">
          <Button
            type="primary"
            className="login-body__end--button"
            size="large"
            htmlType="submit"
          >
            {buttonTitle}
          </Button>
        </div>
        {accountText && accountUrl && (
          <div className="login-body__account-text">
            <div className="login-body__account-text--text">{accountText}</div>
            <Link to={"/register"} className="login-body__account-text--link">
              {accountUrl}
            </Link>
          </div>
        )}
      </Form>
    </div>
  );
};

export default LoginLayoutBody;
