import CustomerLayout from "../../layouts/Customer";
import { FORMDATA } from "../../constants/data";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toastText } from "../../utils/utils";
import { CustomerAction } from "../../redux/action/customerAction";
import { CustomerLayoutBody } from "../../components/Customer";

const mapFormDataToDesiredFormat = (values: any) => {
  const mappedData = {
    GivenName: values.Name,
    PrimaryEmailAddr: {
      Address: values.email,
    },
    CompanyName: "Sandbox Company_US_4",
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
  const [createdCustomer, setCreatedCustomer] = useState<any | null>(null);
  const onSubmit = (values: any) => {
    const newValues = mapFormDataToDesiredFormat(values);

    setIsLoading(true);

    dispatch(CustomerAction(newValues) as any)
      .unwrap()
      .then((res: any) => {
        if (res.statusCode === 200) {
          toastText("customer created successfully", "success");
          setIsLoading(false);
          setCreatedCustomer(res.data);
        }
      })
      .catch((error: any) => {
        setIsLoading(false);
      });
  };

  return (
    <CustomerLayout>
      <CustomerLayoutBody
        description="<p>Please Enter customer details Details.</p>"
        formData={FORMDATA.quickBookCustomerFields}
        buttonTitle="Add"
        onSubmit={onSubmit}
        isLoading={isLoading}
      ></CustomerLayoutBody>
      {createdCustomer && (
        <div>
          <h2>Customer Details:</h2>
          <table>
            <thead>
              <tr>
                <th>Customer ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{createdCustomer.qboCustomerId}</td>
                <td>{createdCustomer.givenName}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </CustomerLayout>
  );
};

export default Customer;
