import React from "react";
import { Container, Row, Col, ListGroup, Tab } from "react-bootstrap";
import Header from "../../components/Header";
import imgContact from "../../img/Hcontact.png";
import ManageUser from "./ManageUser";
import ManageProduct from "./product/AddProduct";
import CreateCategory from "./category/CreateCategory";
import ListProduct from "./product/ListProduct";
import ListReservation from "./reservation/ListReservation";
import AddBlog from "./blog/AddBlog";
import ManageBlog from "./blog/ManageBlog";

function HomeAdmin() {
  return (
    <>
      <Header img={imgContact} head="Admin" title="Manage user and product" />
      <Container className="text-center" fluid>
        <h1 className="text-dark mt-5">Admin Manage</h1>
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
                  Manage category
                </ListGroup.Item>
                <ListGroup.Item action href="#list-product">
                  Manage product
                </ListGroup.Item>
                <ListGroup.Item action href="#manage-reservation">
                  Manage Reservation
                </ListGroup.Item>
                <ListGroup.Item action href="#manage-blog">
                  Manage blog
                </ListGroup.Item>
                <ListGroup.Item action href="#add-blog">
                  Add blog
                </ListGroup.Item>
                <ListGroup.Item action href="#manage-product">
                  Add product
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
                <Tab.Pane eventKey="#list-product">
                  <ListProduct />
                </Tab.Pane>
                <Tab.Pane eventKey="#add-blog">
                  <AddBlog />
                </Tab.Pane>
                <Tab.Pane eventKey="#manage-blog">
                  <ManageBlog />
                </Tab.Pane>
                <Tab.Pane eventKey="#manage-reservation">
                  <ListReservation />
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
