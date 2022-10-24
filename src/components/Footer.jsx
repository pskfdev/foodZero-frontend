import React from "react";
import { Container, Button, Row, Col, Form } from "react-bootstrap";
import { FiInstagram, FiTwitter, FiFacebook, FiYoutube } from "react-icons/fi";

function Footer() {
  return (
    <>
      <footer className="bg-primary w-100 py-5">
        <Container className="foot-top">
          <Row>
            <Col md={3} className="p-5 my-auto text-center">
              <h1 className="w-75">Food Zero.</h1>
            </Col>
            <Col md={3} className="p-5">
              <h5>Contact</h5>
              <br />
              <p>+1+86 852 346 000 info@foodzero.com</p>
              <p>1959 Sepulveda Blvd. Culver City, CA, 90230</p>
            </Col>
            <Col md={6} className="p-5">
              <h5>Never Miss a Recipe</h5>
              <br />
              <div className="d-flex">
                <Form.Control
                  type="text"
                  placeholder="Email Address"
                  className="ps-3 me-2 bg-transparent text-white"
                  size="sm"
                />
                <Button variant="info" size="lg">
                  Subscribe
                </Button>
              </div>
              <Form.Text>
                Join our subscribers and get best recipe delivered each week!
              </Form.Text>
            </Col>
          </Row>
        </Container>
        <Container className="d-flex justify-content-between mt-5">
          <div className="textfoot">
            <p>© 2020 Zero Inc. All rights Reserved</p>
          </div>
          <div className="d-flex text-white">
            <FiInstagram className="me-3" />
            <FiTwitter className="me-3" />
            <FiFacebook className="me-3" />
            <FiYoutube />
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
