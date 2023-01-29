import React, { useState, useEffect } from "react";
import { Form, Container, Button } from "react-bootstrap";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//functions
import { login } from "../functions/auth";
//redux
import { signin, CHECKADMIN } from "../store/usersSlice";
import { useDispatch } from "react-redux";

function Login() {
  const [loading, setLoading] = useState(false); /* variable loading */
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [value, setValue] = useState({
    username: "",
    password: "",
  });

  const roleBaseRedirect = (role) => {
    console.log(role);
    if (role === "admin") {
      dispatch(CHECKADMIN());
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
          }) //เก็บ Data ไว้ใน redux
        );
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("nameUser", res.data.payload.user.username); //ใช้กับ listReservation
        localStorage.setItem("roleUser", res.data.payload.user.role); //ใช้กับ Menu Admin
        roleBaseRedirect(res.data.payload.user.role);
      })
      .catch((err) => {
        console.log(err.response.data);
        alert(err.response.data);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true); /* แสดงการโหลดก่อน */
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); /* หน่วงเวลา 2000 s แล้วค่อย fetch data */
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-warning">
      {loading ? (
        <div style={{height: "500px"}}>
          <ReactLoading
            type="bars"
            color="#9CAA00"
            height={"30%"}
            width={"20%"}
            className="mx-auto"
          />
        </div>
      ) : (
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
          <hr />
          <Link to="/register">
            register
          </Link>
        </Container>
      )}
    </div>
  );
}

export default Login;
