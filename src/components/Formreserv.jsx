import React from "react";
import { Container, Button, Row, Col, Form } from "react-bootstrap";

function Formreserv() {
  return (
    <>
      <Container fluid className="bg-warning py-5">
        <Container className="my-5">
          <div className="text-center">
            <h1 className="text-dark">Make a Reservation</h1>
            <p className="text-dark">Get in touch with restaurant</p>
          </div>
          <Form.Group className="my-5">
            <Row>
              <Col xs={12} md>
                <Form.Control placeholder="25/09/22" />
              </Col>
              <Col xs={12} md>
                <Form.Select>
                  <option>06:00 pm</option>
                  <option>07:00 pm</option>
                  <option>08:00 pm</option>
                </Form.Select>
              </Col>
              <Col xs={12} md>
                <Form.Select>
                  <option>2 person</option>
                  <option>3 person</option>
                  <option>4 person</option>
                </Form.Select>
              </Col>
            </Row>
          </Form.Group>
          <div className="text-center">
            <Button
              type="submit"
              variant="info"
              size="lg"
            >
              Book Now
            </Button>
          </div>
        </Container>
      </Container>
    </>
  );
}

export default Formreserv;
