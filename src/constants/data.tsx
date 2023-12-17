import {
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";

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
  pageMenuItems: [
    {
      key: "dashboard",
      label: "Integrations",
    },
  ],
  quickBookCustomerFields: [
    {
      title: "Name",
      id: "Name",
      type: "text",
      name: "Name",
      svg: <UserOutlined />,
      placeHolder: "",
      required: true,
      rules: [
        {
          required: true,
          message: "Please enter your name",
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
    // {
    //   title: "Phone Number",
    //   id: "phone",
    //   type: "text",
    //   name: "phone",
    //   svg: <PhoneOutlined />,
    //   placeHolder: "",
    //   required: true,
    //   rules: [
    //     {
    //       required: true,
    //       message: "Please input your phone number!",
    //       validationTrigger: "onBlur",
    //     },
    //     // ({ getFieldValue }: any) => ({
    //     //   validator() {
    //     //     const re = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    //     //     if (getFieldValue("phone") !== undefined) {
    //     //       if (re.test(getFieldValue("phone"))) {
    //     //         return Promise.resolve();
    //     //       } else {
    //     //         return Promise.reject(new Error("Please enter phone number"));
    //     //       }
    //     //     }
    //     //     return Promise.reject();
    //     //   },
    //     //   validateTrigger: "onSubmit",
    //     // }),
    //   ],
    // },
    {
      title: "Address",
      id: "Line1",
      type: "text",
      name: "Line1",
      svg: <UserOutlined />,
      placeHolder: "",
      required: true,
      rules: [
        {
          required: true,
          message: "Please enter Address Line 1",
          validateTrigger: "onChange",
        },
      ],
    },
    {
      title: "City",
      id: "City",
      type: "text",
      name: "City",
      svg: <UserOutlined />,
      placeHolder: "",
      required: true,
      rules: [
        {
          required: true,
          message: "Please enter city",
          validateTrigger: "onChange",
        },
      ],
    },
    {
      title: "Country",
      id: "Country",
      type: "text",
      name: "Country",
      svg: <UserOutlined />,
      placeHolder: "",
      required: true,
      rules: [
        {
          required: true,
          message: "Please enter country",
          validateTrigger: "onChange",
        },
      ],
    },
    {
      title: "PostalCode",
      id: "PostalCode",
      type: "text",
      name: "PostalCode",
      svg: <UserOutlined />,
      placeHolder: "",
      required: true,
      rules: [
        {
          required: true,
          message: "Please enter postal code",
          validateTrigger: "onChange",
        },
      ],
    },
  ],
};

export const integrationDataSource: any = [
  {
    key: "1",
    Accounting_Software: {
      connection: "QBO",
      company: "sandbox",
    },
    // Ecommerce_Software: {
    //   connection: "Magento",
    //   company: "Magento 1",
    // },
    Status: true,
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    Accounting_Software: {
      connection: "XERO",
      company: "sandbox",
    },
    // Ecommerce_Software: {
    //   connection: "Shopify",
    //   company: "shopify 1",
    // },
    Status: false,
    tags: ["nice", "developer"],
  },
];
