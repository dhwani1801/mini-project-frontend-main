// import CustomerLayout from "../../layouts/Customer";
// import { FORMDATA } from "../../constants/data";
// import RegisterLayoutBody from "../../components/register/RegisterLayoutBody";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { getApi } from "../../redux/apis";
// import { toastText } from "../../utils/utils";
// import { CustomerAction } from "../../redux/action/customerAction";
// import CustomerLayoutBody from "../../layouts/Customer";
// // Register page
// const Customer = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(false);
//   //const [phoneNumber, setPhoneNumber] = useState("");
//   // console.log("🚀 ~ file: index.tsx:18 ~ Register ~ phoneNumber:", phoneNumber);

//   const onSubmit = (values: any) => {
//     const newValues = {
//       ...values,
//       //   phone: phoneNumber,
//     };

//     setIsLoading(true);
//     console.log("Submitting data:", newValues);
//     // const { email } = values;

//     dispatch(CustomerAction(newValues) as any)
//       .unwrap()
//       .then((res: any) => {
//         if (res.statusCode === 200) {
//           toastText("customer created successfully", "success");
//           //navigate("/login");
//         }
//       })
//       .catch((error: any) => {
//         setIsLoading(false);
//         // navigate("/customer");
//         toastText(error.message, "error");
//       });
//   };
//   return (
//     <CustomerLayout>
//       <RegisterLayoutBody
//         title="Customer"
//         description="<p>
// 							Please Enter customer details
// 				  			Details.
// 						</p>"
//         formData={FORMDATA.quickBookCustomerFields}
//         buttonTitle={"submit!"}
//         // accountUrl={"Login Now!"}
//         onSubmit={onSubmit}
//         //    setPhoneNumber={setPhoneNumber}
//         // phoneNumber={phoneNumber}
//         isLoading={isLoading}
//       ></RegisterLayoutBody>
//     </CustomerLayout>
//   );
// };

// export default Customer;
import CustomerLayout from "../../layouts/Customer";
import { FORMDATA } from "../../constants/data";
import RegisterLayoutBody from "../../components/register/RegisterLayoutBody";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getApi } from "../../redux/apis";
import { toastText } from "../../utils/utils";
import { CustomerAction } from "../../redux/action/customerAction";
import { UserOutlined, MailOutlined } from "@ant-design/icons";

const mapFormDataToDesiredFormat = (values : any) => {
  const mappedData = {
    GivenName: values.Name,
    PrimaryEmailAddr: {
      Address: values.email,
    },
    CompanyName: "Sandbox Company_US_4", // You may replace this with the actual company name logic
    BillAddr: {
      Line1: values.Line1,
      City: values.City,
      Country: values.Country,
      PostalCode: values.PostalCode,
    },
  };

  return mappedData;
};

const Customer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (values : any) => {
    const newValues = mapFormDataToDesiredFormat(values);

    setIsLoading(true);

    dispatch(CustomerAction(newValues) as any)
      .unwrap()
      .then((res : any) => {
        if (res.statusCode === 200) {
          toastText("customer created successfully", "success");
          setIsLoading(false); 
          //navigate("/login");
        }
      })
      .catch((error : any) => {
        setIsLoading(false);
        // navigate("/customer");
        toastText(error.message, "error");
      });
  };

  return (
    <CustomerLayout>
      <RegisterLayoutBody
        // title="Customer"
        description="<p>Please Enter customer details Details.</p>"
        formData={FORMDATA.quickBookCustomerFields}
        buttonTitle="Submit!"
        onSubmit={onSubmit}
        isLoading={isLoading}
      ></RegisterLayoutBody>
    </CustomerLayout>
  );
};

export default Customer;

