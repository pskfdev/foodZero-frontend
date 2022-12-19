import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//functions
import { login } from "../functions/auth";
//redux
import { signin } from '../store/usersSlice';
import { useDispatch } from "react-redux";

function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [value, setValue] = useState({
    username: "",
    password: "",
  });

  const roleBaseRedirect = (role) => {
    console.log(role);
    if (role === "admin") {
      navigate("/admin/HomeAdmin");
    } else {
      navigate("/");
    }
  };

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);

    login(value) // axios.post(process.env.REACT_APP_API + "/login", value);
      .then((res) => {
        console.log(res);
        alert(res.data.payload.user.username + " Login Success");

        dispatch(
          signin({
            token: res.data.token,
            username: res.data.payload.user.username,
            role: res.data.payload.user.role,
          })//เก็บ Data ไว้ใน redux
        );
        localStorage.setItem("token", res.data.token);
        roleBaseRedirect(res.data.payload.user.role);
      })
      .catch((err) => {
        console.log(err.response.data);
        alert(err.response.data);
      });
  };

  return (
    <div className="bg-warning">
      <Container className="pb-7">
        <h1 className="py-7 text-dark text-center">LOGIN</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              type="text"
              placeholder="Enter username"
              onChange={handleChange}
            />
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Enter password"
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
        <Link to="/register" className="">
          register
        </Link>
      </Container>
    </div>
  );
}

export default Login;
