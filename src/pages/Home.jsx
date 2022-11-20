import React, { useEffect } from "react";
import Formreserv from "../components/Formreserv";
import ThreeIcons from "../components/ThreeIcons";
import { Row, Col, Container, Image } from "react-bootstrap";
import home1 from "../img/home1.png";
import home2 from "../img/home2.png";
import home3 from "../img/home3.png";
import home4 from "../img/home4.png";
import home5 from "../img/home5.png";
import bgleaf from "../img/bgleaf.png";
import bgleaf2 from "../img/bgleaf2.png";
import ImgLoad from "../components/ImgLoad";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); /* scroll to top when render page */
  }, []);

  return (
    <>
      <div className="bg-primary">
        <Container className="pt-7">
          <Row>
            <div className="w-sm-80 w-50 position-absolute">
              <h1 className="display-2">
                Healthy Eating is important part of lifestyle
              </h1>
              <p className="w-sm-80 w-75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                congue arcu
              </p>
            </div>

            <Col
              lg={{ span: 6, offset: 6 }}
              md={{ span: 10, offset: 2 }}
              xs={{ span: 12, offset: 0 }}
              className="pt-6"
            >
              <ImgLoad src={home1} />
            </Col>
          </Row>

          <Row className="py-7">
            <Col>
              <Image
                src={home2}
                rounded
                style={{ width: "100%", height: "400px", objectFit: "cover" }}
              />
              <div className="w-75 mt-5">
                <h1>Start to plan your diet today</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                  congue arcu
                </p>
              </div>
            </Col>
            <Col
              lg={{ span: 4, offset: 2 }}
              md={{ span: 10, offset: 2 }}
              className="d-flex flex-column-reverse flex-lg-column"
            >
              <div className="w-100 my-5">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                  congue arcu
                </p>
              </div>
              <Image
                src={home3}
                rounded
                style={{ width: "100%", height: "500px", objectFit: "cover" }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div
        className="bg-white"
        style={{
          background: `url(${home4}) no-repeat right top`,
          backgroundSize: "600px auto",
        }}
      >
        <Container className="tdark py-7">
          <div className="w-25 w-sm-80 mb-5">
            <h1>Our Menu</h1>
            <p>
              This is a section of your menu. Give your section a brief
              description
            </p>
          </div>
          <Row xs={1} md={2} className="gy-5">
            <Col>
              <p className="text-end">$20</p>
              <hr />
              <h1>Deep Sea Snow White Cod Fillet</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Col>
            <Col>
              <p className="text-end">$20</p>
              <hr />
              <h1>Steak With Rosemary Butter</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Col>
            <Col>
              <p className="text-end">$20</p>
              <hr />
              <h1>Cucumber Salad</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Col>
            <Col>
              <p className="text-end">$20</p>
              <hr />
              <h1>Natural Wine Pairing</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="bg-warning tdark">
        <Container className="pt-7 py-3">
          <Row>
            <Col
              lg={6}
              style={{
                background: `url(${bgleaf}) no-repeat left top`,
                backgroundSize: "50% auto",
              }}
            >
              <Image
                src={home5}
                style={{ width: "100%", height: "600px", objectFit: "cover" }}
              />
            </Col>
            <Col
              lg={6}
              style={{
                background: `url(${bgleaf2}) no-repeat right bottom`,
                backgroundSize: "50% auto",
              }}
            >
              <div className="w-75 mx-auto">
                <h1 className="display-2">Excellent cook</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                  lorem id penatibus imperdiet. Turpis egestas ultricies purus
                  auctor tincidunt lacus nunc.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <ThreeIcons />
      <Formreserv />
    </>
  );
}

export default Home;
