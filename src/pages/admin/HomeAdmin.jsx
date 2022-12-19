import React from "react";
import { Container, Row, Col, ListGroup, Tab } from "react-bootstrap";
import Header from "../../components/Header";
import imgContact from "../../img/Hcontact.png";
import ManageUser from "./ManageUser";
import ManageProduct from "./ManageProduct";
import CreateCategory from './category/CreateCategory'

function HomeAdmin() {
  return (
    <>
      <Header
        img={imgContact}
        head="Admin"
        title="Manage user and product"
      />
      <Container className="text-center" fluid>
        <h1 className="text-dark mt-5">Manage user and product</h1>
        <Tab.Container
          id="list-group-tabs-example"
          defaultActiveKey="#manage-user"
        >
          <Row className="my-5 gy-4">
            <Col sm={3}>
              <ListGroup>
                <ListGroup.Item action href="#manage-user">
                  Manage user
                </ListGroup.Item>
                <ListGroup.Item action href="#create-category">
                  Manage Category
                </ListGroup.Item>
                <ListGroup.Item action href="#manage-product">
                  Manage Product
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="#manage-user">
                  <ManageUser />
                </Tab.Pane>
                <Tab.Pane eventKey="#create-category">
                  <CreateCategory />
                </Tab.Pane>
                <Tab.Pane eventKey="#manage-product">
                  <ManageProduct />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </>
  );
}

export default HomeAdmin;
