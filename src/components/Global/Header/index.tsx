import { Col, Image, Row, Select, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
// import { logoutAction } from "redux/action/logoutAction";
import { LogoutOutlined } from "@ant-design/icons";
import styles from "./index.module.scss";
import "./index.scss";

// Website header
const Header = () => {
  const [isLogoutBtnClick, setIsLogoutBtnClick] = useState(false);

  return (
    <>
      <header className={styles["header"]}>
        <Row
          className={styles["header__wrapper"]}
          align={"middle"}
          justify={"space-between"}
        >
          <Col className={styles["header__details-left"]}>
            <div className={styles["header__details-left--logo"]}>
              <Image
                src={'/assets/images/animal_planet_logo.png'}
                preview={false}
                alt="group"
                crossOrigin={
                  process.env.REACT_APP_ENV === "local"
                    ? undefined
                    : "anonymous"
                }
              />
            </div>
          </Col>
          <Col className={styles["header__details-right"]}>
            
            <Tooltip placement="bottom" title={`Log out`}>
              <div className={styles["header__details-right--user-logout"]}>
                <LogoutOutlined
                  style={{
                    cursor: isLogoutBtnClick ? "not-allowed" : "pointer",
                    pointerEvents: isLogoutBtnClick ? "none" : "auto",
                    fontSize: 23,
                    color: "#727272",
                  }}
                />
              </div>
            </Tooltip>
          </Col>
        </Row>
      </header>
    </>
  );
};

export default Header;
