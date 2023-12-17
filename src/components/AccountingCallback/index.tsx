import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { postApi } from "../../redux/apis";
import { toastText } from "../../utils/utils";
import styles from "./index.module.scss";

const CallbackComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [queryParams] = useSearchParams();
  const location = useLocation();

  const callbackData = {
    uuid: uuidv4(),
    data: true,
    error: false,
  };

  const handleApiCall = async (apiEndpoint: any, data: any) => {
    try {
      const res = await postApi(apiEndpoint, data);
      if (res?.status === 200) {
        localStorage.setItem(
          "callBackUpdatedData",
          JSON.stringify(callbackData)
        );

        toastText("Connection Successful", "success");
      } else {
        throw new Error("Fail to Connect");
      }
    } catch (error: any) {
      if (error?.response?.status === 409) {
        localStorage.setItem(
          "callBackUpdatedData",
          JSON.stringify({
            ...callbackData,
            error: true,
            message: error?.response?.data?.message,
          })
        );
      } else {
        localStorage.setItem(
          "callBackUpdatedData",
          JSON.stringify({ ...callbackData, error: true })
        );
      }
    }
    window.close();
  };

  useEffect(() => {
    const run = async () => {
      setIsLoading(true);
      if (location.pathname.startsWith("/qbo/callback")) {
        const url = window.location.href;
        console.log("url: ", url);
        await handleApiCall("/qbo/callback", { url });
      } else if (location.pathname.startsWith("/xero/callback")) {
        const currentURL = window.location.href;
        const origin = window.location.origin;
        const url = currentURL.replace(origin, "");
        await handleApiCall("/xero/callback", { url });
      }
      setIsLoading(false);
    };

    run();
  }, []);

  return (
    <div className={styles["main-container"]}>
      {isLoading && (
        <img
          src={`/assets/gifs/loading.gif`}
          height={60}
          crossOrigin={
            process.env.REACT_APP_ENV === "local" ? undefined : "anonymous"
          }
        />
      )}
    </div>
  );
};

export default CallbackComponent;
