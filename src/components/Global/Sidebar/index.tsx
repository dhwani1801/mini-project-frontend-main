import { Button, Layout, Menu } from "antd";
import { FC, useState } from "react";
import styles from "./index.module.scss";
import "./index.scss";
import { SidebarProps } from "./types";

// Global sidebar
const Sidebar: FC<SidebarProps> = (props) => {
  // Initialize variables and state
  const { Sider } = Layout;
  const { handleSidebar, items,selectedSidebar } = props;

 
  // JSX
  return (
    <Sider
      style={{
        background: "#fff",
        maxHeight: "100%",
        height: "100%",
        overflow: "auto",
      }}
      className={styles.sidebar}
    >
      <div className={styles.sidebar__wrapper}>
        <Menu
          mode="inline"
          defaultSelectedKeys={[selectedSidebar]}
          selectedKeys={[selectedSidebar]}
          items={items}
          onClick={handleSidebar}
          className="menu-item "
          style={{
            background: "#fff",
            padding: 0,
          }}
        />
       
      </div>
      
    </Sider>
  );
};

export default Sidebar;
