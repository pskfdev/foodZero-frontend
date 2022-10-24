import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IoFishOutline, IoLeafOutline, IoNutritionOutline } from "react-icons/io5";

function ThreeIcons() {
  return (
    <div className="py-7">
      <Container className="text-center tdark">
        <Row xs={1} md={3}>
          <Col>
            <IoFishOutline
              size={120}
              className="bg-warning p-3 rounded-circle text-dark"
            />
            <h1 className="py-3">Premium Quality</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              congue arcu
            </p>
          </Col>
          <Col>
            <IoLeafOutline
              size={120}
              className="bg-warning p-3 rounded-circle text-dark"
            />
            <h1 className="py-3">Seasonal Vegetables</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              congue arcu
            </p>
          </Col>
          <Col>
            <IoNutritionOutline
              size={120}
              className="bg-warning p-3 rounded-circle text-dark"
            />
            <h1 className="py-3">Fresh Fruit</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              congue arcu
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ThreeIcons;
