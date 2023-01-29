import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Modal,
  CloseButton,
  Dropdown,
  DropdownButton,
  Card,
} from "react-bootstrap";
import { FiMenu, FiUser, FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../store/usersSlice";

function Navbarr() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [colorNav, setColorNav] = useState(false);
  const roleUser = localStorage.roleUser;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => ({ ...state }));

  /* //scoll Navbar change bg  */
  const changColorNav = () => {
    if (window.scrollY >= 80) {
      setColorNav(true);
    } else {
      setColorNav(false);
    }
  };
  window.addEventListener("scroll", changColorNav);

  /* //clear local storeg when logout */
  const logout = () => {
    dispatch(LOGOUT());
    navigate("/");
  };

  const scrollReserv = (e) => {
    e.preventDefault();
    window.scrollTo(0, document.body.scrollHeight);
  };
  /* console.log(user.user) */

  return (
    <>
      <Navbar
        expand="lg"
        variant="dark"
        fixed="top"
        className={colorNav ? "bg-primary text-white" : ""}
      >
        <Container fluid className="mx-5">
          <div className="d-flex">
            <Navbar.Brand as={Link} to="/">
              FoodZero
            </Navbar.Brand>
            <FiMenu
              className="my-auto ms-4 menu text-white"
              onClick={handleShow}
            />
          </div>
          <div className="d-flex">
            <p className="my-auto me-3 d-none d-sm-flex">+86 852 346 000</p>
            <Button
              className="d-none d-sm-flex me-2"
              variant="outline-light"
              onClick={scrollReserv}
            >
              Reservation
            </Button>

            {(!user.user || user.user.length === 0) && (
              <Link
                to="/login"
                className="my-auto mx-auto ms-3 menu text-white"
              >
                <FiUser className="menu" />
              </Link>
            )}

            {(user.user && user.user.length !== 0) && (
              <DropdownButton title={user.user.username} variant="outline-success" align="end">
                <Dropdown.Item>
                  <span className="text-dark mx-auto d-flex" onClick={logout}>
                    <FiLogOut className="my-auto"/>
                    <p className="text-dark my-auto text-inline px-2">logout</p>
                  </span>
                </Dropdown.Item>
              </DropdownButton>
            )}
          </div>
        </Container>
      </Navbar>

      {/* --hidden navbar */}
      <Modal show={show} onHide={handleClose} fullscreen={true}>
        <Container fluid className="bg d-flex align-items-center">
          <CloseButton
            className="closebtn"
            variant="white"
            onClick={handleClose}
          />
          <Container className="w-75 d-flex justify-content-between">
            <Nav className="d-flex flex-column">
              <Nav.Link as={Link}  to="/" onClick={handleClose}>
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
              {roleUser === 'admin' && (
                <Nav.Link as={Link} to="/admin/HomeAdmin" onClick={handleClose}>
                  <h1>Admin</h1>
                </Nav.Link>
              )}
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
