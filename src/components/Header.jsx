import React from "react";
import { Row, Col } from 'react-bootstrap';

function Header(props) {
  return (
    <>
      <div
        className="bg-image d-flex align-items-center"
        style={{
          backgroundImage: `url(${props.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh"
        }}
      >
        <Row className="ms-sm-5">
          <Col lg={12}>
            <h1 className="display-1">{props.head}</h1>
            <p>{props.title}</p>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Header;
