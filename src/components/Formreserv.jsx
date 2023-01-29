import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col, Form, Alert } from "react-bootstrap";
import { createReservation, listReservation } from "../functions/reservation";
import { MdAlarm } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

const initialState = {
  date: "",
  time: "",
  person: "",
  contact: "",
};

function Formreserv() {
  const { user } = useSelector((state) => ({ ...state }));
  const idtoken = localStorage.token;
  const nameUser = localStorage.nameUser;
  const navigate = useNavigate();

  const [values, setValues] = useState(initialState);
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (idtoken) {
      createReservation(user.user.token, values)
        .then((res) => {
          console.log(res.data);
          /* localStorage.setItem("userReserv", res.data.username); */
          alert(`Send reservation by ${res.data.username} success !`);
          loadData();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      if (window.confirm("Go to Login")) {
        navigate("/login");
      } else {
        navigate("/login");
      }
    }
    e.target.reset();
  };

  const loadData = () => {
    listReservation()
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkData = (dataUser) => {
    return dataUser.username === nameUser;
  };
  /* console.log(userName); */

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Container fluid className="bg-warning py-5">
        <Container className="my-5">
          <div className="text-center">
            <h1 className="text-dark">Make a Reservation</h1>
            <p className="text-dark">Get in touch with restaurant</p>

            {data.filter(checkData).map((item) => (
              <Alert className="" key={item._id} variant="success">
                <div className="d-flex justify-content-center">
                  <MdAlarm />
                  <Alert.Heading className="text-success">{`${item.username} | ${item.time} | ${item.person} | 0${item.contact}`}</Alert.Heading>
                </div>
                <p className="text-info">
                  ---Please wait for the officers called back.---
                </p>
              </Alert>
            ))}

          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="my-5">
              <Row>
                <Col xs={12} md>
                  <Form.Control
                    type="date"
                    name="date"
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col xs={12} md>
                  <Form.Select name="time" onChange={handleChange} required>
                    <option>--- choose time ---</option>
                    <option>14:00 pm</option>
                    <option>15:00 pm</option>
                    <option>16:00 pm</option>
                    <option>17:00 pm</option>
                    <option>18:00 pm</option>
                  </Form.Select>
                </Col>
                <Col xs={12} md>
                  <Form.Select name="person" onChange={handleChange} required>
                    <option>--- choose quantity ---</option>
                    <option>2 person</option>
                    <option>3 person</option>
                    <option>4 person</option>
                    <option>more than 4</option>
                  </Form.Select>
                </Col>
                <Col xs={12} md>
                  <Form.Control
                    name="contact"
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    required
                  />
                </Col>
              </Row>
            </Form.Group>
            <div className="text-center">
              <Button type="submit" variant="info" size="lg">
                Book Now
              </Button>
            </div>
          </Form>
        </Container>
      </Container>
    </>
  );
}

export default Formreserv;
