import React from "react";
import { Row, Col, Image } from "antd";
import "./customer.css";

const CustomerLayout = (props: any) => {
  const { children } = props;
  return (
    <div className="register">
      <Row className="register__wrapper " justify="space-between" align="top" gutter={[16, 16]}>
        {/* <Col className="register__layout" span={11}>
          <Image
            className="register__layout--image"
            src="/assets/images/login.png"
            preview={false}
            alt="register"
          />
        </Col> */}
        <Col >
          <div className="register__details--body">{children}</div>
        </Col>
      </Row>
    </div>
  );
};

export default CustomerLayout;
