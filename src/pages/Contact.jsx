import React, { useEffect } from "react";
import Formreserv from "../components/Formreserv";
import Header from "../components/Header";
import imgContact from "../img/Hcontact.png";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import contact1 from "../img/Contact1.png";
import contact2 from "../img/Contact2.png";
import bgcontact from "../img/BgContact.png";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0); /* scroll to top when render page */
  }, []);

  return (
    <>
      <Header
        img={imgContact}
        head="Get in Touch"
        title="The freshest ingredients for you every day"
      />
      <Container
        className="my-7 py-7"
        style={{
          background: `url(${bgcontact}) no-repeat center top`,
          backgroundSize: "300px auto",
        }}
      >
        <Row xs={1} md={2} className="gy-5">
          <Col className="">
            <Image src={contact1} fluid />
          </Col>
          <Col className="d-flex justify-content-center my-md-auto my-sm-5">
            <p className="w-50 text-start text-dark">
              We can be contacted via <br />
              email info@foodzero.com
              <br /> or telephone on +86 852 346 000
            </p>
          </Col>

          <Col
            className="my-md-auto my-sm-5"
            xs={{ order: 2 }}
            md={{ order: 1 }}
          >
            <p className="w-75 text-dark">
              We are located in 1959 Sepulveda Blvd. Culver City, CA, 90230
            </p>
            <Button
              variant="outline-dark"
              href="https://www.google.com/maps/place/Sepulveda+Blvd,+Culver+City,+CA,+%E0%B8%AA%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%90%E0%B8%AD%E0%B9%80%E0%B8%A1%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2/@33.9995968,-118.4030951,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2ba0fe1fa3f7d:0x9a832e6c1a48997!8m2!3d33.9995924!4d-118.4009064"
              target="_blank"
            >
              Veiw in maps
            </Button>
          </Col>
          <Col className="" xs={{ order: 1 }} md={{ order: 2 }}>
            <Image src={contact2} fluid />
          </Col>
        </Row>
      </Container>

      <Formreserv />
    </>
  );
}

export default Contact;
