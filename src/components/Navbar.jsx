import React, { useState } from "react";
import { Navbar, Nav, Container, Button, Modal, CloseButton, Card } from 'react-bootstrap';
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";


function Navbarr() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [colorNav, setColorNav] = useState(false);

    const changColorNav = () => {
      if(window.scrollY >= 80){
        setColorNav(true);
      }else{
        setColorNav(false);
      }
    };
    window.addEventListener('scroll', changColorNav);

  return (
    <>
      <Navbar expand="lg" variant="dark" fixed="top" className={colorNav ? 'bg-primary text-white':''}>
        <Container fluid className="mx-5">
          <div className="d-flex">
            <Navbar.Brand as={Link} to="/">FoodZero</Navbar.Brand>
            <FiMenu className="my-auto ms-4 menu text-white" onClick={handleShow} />
          </div>
          <div className="d-flex d-none d-sm-flex">
            <p className="my-auto me-3">+86 852 346 000</p>
            <Button size="md" variant="outline-light">Reservation</Button>
          </div>
        </Container>
      </Navbar>

      {/* --hidden navbar */}
      <Modal show={show} onHide={handleClose} fullscreen={true}>
        <Container fluid className="bg d-flex align-items-center">
          <CloseButton className="closebtn" variant="white" onClick={handleClose} />
          <Container className="w-75 d-flex justify-content-between">
            <Nav className="d-flex flex-column">
              <Nav.Link as={Link} to="/" onClick={handleClose}>
                <h1>Home</h1>
              </Nav.Link>
              <Nav.Link as={Link} to="/menu" onClick={handleClose}>
                <h1>Menu</h1>
              </Nav.Link>
              <Nav.Link as={Link} to="/blog" onClick={handleClose}>
                <h1>Blog</h1>
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" onClick={handleClose}>
                <h1>Contact</h1>
              </Nav.Link>
            </Nav>
            <Card
              className="d-none d-md-block"
              border="0"
              bg="transparent"
              text="white"
              style={{ width: "15rem", height: "12rem", top: "7rem" }}
            >
              <Card.Body>
                <Card.Title>Secondary</Card.Title>
                <hr />
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </Container>
      </Modal>
    </>
  );
}

export default Navbarr;
