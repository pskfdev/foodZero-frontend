import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Form, Container, Button, ProgressBar, ListGroup } from "react-bootstrap";
import { createBlog } from "../../../functions/blog"

const initialState = {
  title: "",
  description: "",
  image: "",
};

function AddBlog() {
  const { user } = useSelector((state) => ({ ...state }));
  const [values, setValues] = useState(initialState);

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  //Add blog
  const handleSubmit = (e) => {
    e.preventDefault();
    /* console.log(values) */
    const formData = new FormData(); //สร้าง formData เพื่อส่งไปหลังบ้าน
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("image", values.image); //image ส่งไปทำ uploadfile.js

    createBlog(user.user.token, formData, setProgress)
      .then((res) => {
        setProgress(0);
        alert(`Add bolg ${res.data.title} success!`);
      })
      .catch((err) => {
        alert(err.response.data);
      });
    e.target.reset();
  };


  return (
    <div className="bg-warning py-3">
      <Container>
        <h3 className="text-dark">Add Blog</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label as="h5" className="text-dark text-start">
              Title
            </Form.Label>
            <Form.Control
              type="text"
              name="title"
              className="my-3"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label as="h5" className="text-dark text-start">
              Description
            </Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              name="description"
              className="my-3"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label as="h5" className="text-dark text-start">
              Image
            </Form.Label>
            <Form.Control
              type="file"
              /* name="image" */
              className="my-3"
              onChange={(e) =>
                setValues({ ...values, image: e.target.files[0] })
              }
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
          <ProgressBar animated now={progress} className="my-3" />
        </Form>
      </Container>
    </div>
  );
}

export default AddBlog;
