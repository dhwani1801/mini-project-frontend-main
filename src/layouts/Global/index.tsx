import { Header, Sidebar } from "../../components";
import { Outlet } from "react-router-dom";
import styles from "./index.module.scss";
import { FORMDATA } from "../../constants/data";

const GlobalLayout = () => {

  const { pageMenuItems } = FORMDATA;

  
  // JSX
  return(

    <div className={styles["global-layout"]}>
      <div className={styles["global-layout__wrapper"]}>
        <div className={styles["global-layout__header"]}>
          <Header />
        </div>
        <div className={styles["global-layout__body"]}>
          <div className={styles["global-layout__body--sidebar"]}>
            <Sidebar
              items={pageMenuItems}
              isGetSupportButton={false}
              selectedSidebar="dashboard"
            />
          </div>
          <div className={styles["global-layout__body--body"]}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
  
};

export default GlobalLayout;
