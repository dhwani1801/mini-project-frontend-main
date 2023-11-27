import { LockOutlined, MailOutlined  , PhoneOutlined ,UserOutlined} from "@ant-design/icons";

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
  registerFields: [
    {
      title: "First Name",
      id: "firstName",
      type: "text",
      name: "firstName",
      svg: <UserOutlined />,
      placeHolder: "",
      required: true,
      rules: [
        {
          required: true,
          message: "Please enter your first name",
          validateTrigger: "onChange",
        },
      ],
    },
    {
      title: "Last Name",
      id: "lastName",
      type: "text",
      name: "lastName",
      svg: <UserOutlined />,
      placeHolder: "",
      required: true,
      rules: [
        {
          required: true,
          message: "Please enter your last name",
          validateTrigger: "onChange",
        },
      ],
    },
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
          message: "Please Enter your Password ",
          validationTrigger: "onBlur",
        },
        ({ getFieldValue }: any) => ({
          validator() {
            const re =
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
            if (getFieldValue("password") !== undefined) {
              if (re.test(getFieldValue("password"))) {
                return Promise.resolve();
              } else {
                return Promise.reject(
                  new Error(
                    "Please enter a password that is 8 characters long and contains at least 1 digit, 1 lowercase letter, and 1 uppercase letter"
                  )
                );
              }
            }
            return Promise.reject();
          },
          validateTrigger: "onSubmit",
        }),
      ],
    },
    {
      title: "Re Enter Password",
      id: "confirmPassword",
      type: "password",
      name: "confirmPassword",
      svg: <LockOutlined />,
      placeHolder: "",
      required: true,
      rules: [
        {
          required: true,
          message: "Please Re Enter your Password ",
          validationTrigger: "onBlur",
        },
        ({ getFieldValue }: any) => ({
          validator(_: any, value: any) {
            if (!value || getFieldValue("password") === value) {
              return Promise.resolve();
            }
            return Promise.reject(new Error("Passwords do not match!"));
          },
          validateTrigger: "onSubmit",
        }),
      ],
    },
    {
      title: "Phone Number",
      id: "phone",
      type: "text",
      name: "phone",
      svg: <PhoneOutlined />,
      placeHolder: "",
      required: true,
      rules: [
        {
          required: true,
          message: "Please input your phone number!",
          validationTrigger: "onBlur",
        },
        // ({ getFieldValue }: any) => ({
        //   validator() {
        //     const re = /^(\+\d{1,3}[- ]?)?\d{10}$/;
        //     if (getFieldValue("phone") !== undefined) {
        //       if (re.test(getFieldValue("phone"))) {
        //         return Promise.resolve();
        //       } else {
        //         return Promise.reject(new Error("Please enter phone number"));
        //       }
        //     }
        //     return Promise.reject();
        //   },
        //   validateTrigger: "onSubmit",
        // }),
      ],
    },
  ],  
  resetPassword: [
    {
      title: "New Password",
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
    {
      title: "Confirm Password",
      id: "confirmPassword",
      type: "password",
      name: "confirmPassword",
      svg: <LockOutlined />,
      placeHolder: "",
      required: true,
      rules: [
        {
          required: true,
          message: "Please enter your password again",
          validationTrigger: "onChange",
        },
        ({ getFieldValue }: any) => ({
          validator(_: any, value: any) {
            if (!value || getFieldValue("password") === value) {
              return Promise.resolve();
            }
            return Promise.reject(new Error("Passwords do not match"));
          },
          validateTrigger: "onChange",
        }),
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
