import { Button, Space, Table } from "antd";
import { FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { DynamicCategoryTableProps } from "./types";
import { getApi } from "../../redux/apis";
import { useNavigate } from "react-router";
import { toastText } from "../../utils/utils";

const DynamicCategoryTable: FC<DynamicCategoryTableProps> = (props) => {
  const navigate = useNavigate();

  const { dataSource, type } = props;

  const { Column } = Table;

  const [formData, setFormData] = useState<FormData | undefined>(undefined);
  const [titleKey, setTitleKey] = useState<string | undefined>(undefined);
  const [softwareType, setSoftwareType] = useState<string | undefined>(
    undefined
  );
  const [ButtonLabel, SetButtonLabel] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectCompany, setSelectCompany] = useState(false);

  const width = 800;
  const height = 600;
  const left = window.innerWidth / 2 - width / 2;
  const top = window.innerHeight / 2 - height / 2;

  const position = `width=${width},height=${height},left=${left},top=${top}`;

  useEffect(() => {
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleStorageChange = (data: any) => {
    const { key } = data;
    if (key === "callBackUpdatedData") {
      const callbackdata = JSON.parse(localStorage.getItem(key) as string);
      if (!callbackdata.error) {
        toastText("App Connected Successfully", "success");
        navigate("/home/connectedApps");
      } else {
        toastText(callbackdata?.message || "Fail to Connect", "error");
        setIsModalOpen(false);
      }
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const onConnect = async (card: CardInterface) => {
    if (card.formData) {
      setIsLoading(true);
      setFormData(card.formData);
      setTitleKey(card.titleKey);
      setSoftwareType(card.type);
      showModal();
    }

    // QuickbooksOnline
    if (card.titleKey === "QuickbooksOnline") {
      const res = await getApi("/qbo/authurl");
      console.log("res: ", res);

      const windowName = "qboWindow";
      if (res?.data?.data?.authUri) {
        window.open(res?.data?.data?.authUri, windowName, position);
      }
    }

    //Xero
    if (card?.titleKey === "Xero") {
      try {
        const res = await getApi("/xero/getxerourl");
        if (res?.status === 200) {
          const XeroUrl = res?.data?.data;

          const windowName = "xeroWindow";

          // Open the new window
          window.open(XeroUrl, windowName, position);
        }
      } catch (error) {
        console.error("Error fetching Xero URL:", error);
        // Handle the error here
      }
    }
  };

  // JSX
  return (
    <div className={"dynamic-table"}>
      <Table
        dataSource={dataSource}
        scroll={{ y: "64vh", x: "63vh" }}
        className="connectButtons"
        pagination={false}
        // onChange={tableChangeHandler}
      >
        <Column
          title={<p>{type} Apps</p>}
          dataIndex="titleKey"
          key="titleKey"
          width={"10%"}
          showSorterTooltip={{ title: "" }}
          className="bg-white"
          render={(_, record: CardInterface) => (
            <>
              <img
                loading="eager"
                src={record.logo}
                height={"30px"}
                crossOrigin={
                  process.env.REACT_APP_ENV === "local"
                    ? undefined
                    : "anonymous"
                }
              />
            </>
          )}
        />

        <Column
          title="Description"
          dataIndex="description"
          key="description"
          width={"25%"}
          showSorterTooltip={{ title: "" }}
          className="bg-white"
          render={(_, record: CardInterface) => <p>{record.description}</p>}
        />
        <Column
          title="Action"
          dataIndex="buttonText"
          key="buttonText"
          className="bg-white"
          width={"5%"}
          render={(values, data: CardInterface) => (
            <Space size={20}>
              {!(data.isCompanyAdmin || data.isAdmin) ? (
                <>
                  <div className="cursor-pointer flex align-center justify-center">
                    <Button
                      type={"primary"}
                      ghost={data.ghost}
                      className={styles.connectButtons__btnConnect}
                      onClick={() => onConnect(data)}
                      danger={data?.connect}
                    >
                      {data.buttonText}
                    </Button>
                  </div>
                </>
              ) : null}
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

export default DynamicCategoryTable;

interface CardInterface {
  title: string;
  description: string;
  buttonText: string;
  logo: string;
  ghost: boolean;
  select: boolean;
  type: string;
  connect: boolean;
  titleKey: string;
  formData?: FormData;
  isCompanyAdmin: boolean;
  isAdmin: boolean;
}

interface FormData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
