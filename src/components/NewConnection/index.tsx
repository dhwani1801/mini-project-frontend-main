import { Image, Typography } from "antd";
import styles from "./index.module.scss";
const { Title } = Typography;

const NewConnectionApp = () => {
  return (
    <div className={styles["main-container"]}>
      <div className={styles["image-container"]}>
        <Image
          src={`/assets/images/add-new-connection.png`}
          className={styles["image-container__image"]}
          preview={false}
          crossOrigin={
            process.env.REACT_APP_ENV === "local" ? undefined : "anonymous"
          }
        />
        <Title level={3} className={styles["image-container__image--text"]}>
          You don&lsquo;t have any connected apps!
        </Title>
        <Title level={5} className={styles["image-container__image--text"]}>
          Please choose the category from the options available in the side bar
        </Title>
      </div>
    </div>
  );
};

export default NewConnectionApp;
