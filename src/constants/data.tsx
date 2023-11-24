import { LockOutlined, MailOutlined } from "@ant-design/icons";

export const FORMDATA = {
  loginFields: [
    {
      title: "Email Address",
      id: "email",
      type: "text",
      name: "email",
      svg: <MailOutlined />,
      placeHolder: "",
      required: true,
      rules: [
        {
          required: true,
          message: "Please enter your email address",
          validateTrigger: "onChange",
        },
        {
          type: "email",
          message: "Please enter valid e-mail",
          validateTrigger: "onChange",
        },
      ],
    },
    {
      title: "Password",
      id: "password",
      type: "password",
      name: "password",
      svg: <LockOutlined />,
      placeHolder: "",
      required: true,
      rules: [
        {
          required: true,
          message: "Please enter your password",
          validateTrigger: "onChange",
        },
      ],
    },
  ],


  forgotPassword: [
    {
      title: "Email Address",
      id: "email",
      type: "text",
      name: "email",
      svg: <LockOutlined />,
      placeHolder: "",
      required: true,
      rules: [
        {
          required: true,
          message: "Please enter your email address",
          validateTrigger: "onChange",
        },
        {
          type: "email",
          message: "Please enter valid e-mail",
          validateTrigger: "onChange",
        },
      ],
    },
  ],
};
