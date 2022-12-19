import React, { useState } from "react";
import { Form, Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
//function register
import { register } from "../functions/auth";

function Register() {
  const [value, setValue] = useState({
    username: "",
    password: "",
    password1: "",
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /* console.log(value); */

    if (value.password !== value.password1) {
      alert("Password not match");
    } else {
      register(value) // axios.post(process.env.REACT_APP_API + "/register", value);
        .then((res) => {
          /* console.log(res); */
          alert(res.data);
        })
        .catch((err) => {
          console.log(err.response.data);
          alert(err.response.data);
        });
      e.target.reset();
    }
  };

  return (
    <div className="bg-warning">
      <h1 className="py-7 text-dark text-center">REGISTER</h1>
      <Form onSubmit={handleSubmit} className="container pb-7">
        <Form.Group className="mb-3" role="form">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Enter username"
            onChange={handleChange}
          />
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
          />
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            name="password1"
            placeholder="Confirm password"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Register;
