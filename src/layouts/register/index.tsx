import React from "react";
import { Row, Col, Image } from "antd";
import "./register.css"; 

const RegisterLayout = (props: any) => {
  const { children } = props;
  return (
    <div className="register">
      <Row
        className="register__wrapper"
        justify="space-between"
        align="middle"
      >
        <Col className="register__layout" span={11}>
          <Image
            className="register__layout--image"
            src="/assets/images/login.png"
            preview={false} 
            alt="register"
          />
        </Col>
        <Col className="register__details" span={13}>
          <div className="register__details--body">{children}</div>
        </Col>
      </Row>
    </div>
  );
};

export default RegisterLayout;
