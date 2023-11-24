import React from "react";
import "./login.css";
import { Row, Col, Image } from "antd";

const LoginLayout = (props:any) => {
  const { children } = props;
  return (
    <div className="login">
      <Row
        className="login__wrapper"
        justify="space-between"
        align="middle"
      >
        <Col className="login__layout" span={11}>
          <Image
            className="login__layout--image"
            src={'/assets/images/login.png'}
            preview={false}
            alt="group"
          />
        </Col>
        <Col className="login__details" span={13}>
          <div className="login__details--body">{children}</div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginLayout;
