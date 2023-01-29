import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Form, Container, Button, ListGroup, Modal, ProgressBar } from "react-bootstrap";
import { createProduct } from "../../../functions/product";
import { listCategory } from "../../../functions/category";

const initialState = {
  title: "",
  description: "",
  categories: [],
  category: "",
  price: "",
  image: "",
};

function ManageProduct() {
  const { user } = useSelector((state) => ({ ...state }));
  const [values, setValues] = useState(initialState);

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  /* console.log(values) */

  //Add product
  const handleSubmit = (e) => {
    e.preventDefault();
    /* console.log(values) */
    const formData = new FormData(); //สร้าง formData เพื่อส่งไปหลังบ้าน
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("category", values.category);
    formData.append("price", values.price);
    formData.append("image", values.image); //image ส่งไปทำ uploadfile.js

    createProduct(user.user.token, formData, setProgress)
      .then((res) => {
        /* console.log(res); */
        setProgress(0)
        alert(`Add product ${res.data.title} success!`);
      })
      .catch((err) => {
        alert(err.response.data);
      });
    e.target.reset();
  };

  //Load Menu Category
  const loadData = (authtoken) => {
    listCategory(authtoken)
      .then((res) => {
        setValues({ ...values, categories: res.data });
      })
      .catch((err) => {
        alert(err.response);
      });
  };

  useEffect(() => {
    loadData(user.user.token);
  }, []);

  return (
    <div className="bg-warning py-3">
      <Container>
        <h3 className="text-dark">Add Product</h3>
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
              /* value={values.title} */
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label as="h5" className="text-dark text-start">
              Description
            </Form.Label>
            <Form.Control
              type="text"
              name="description"
              className="my-3"
              onChange={handleChange}
              /* value={values.description} */
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label as="h5" className="text-dark text-start">
              Price
            </Form.Label>
            <Form.Control
              type="number"
              name="price"
              className="my-3"
              onChange={handleChange}
              /* value={values.price} */
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label as="h5" className="text-dark text-start">
              Category
            </Form.Label>
            <Form.Select
              name="category"
              className="my-3"
              onChange={handleChange}
            >
              <option>select category</option>
              {values.categories.map((item) => {
                return (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                );
              })}
            </Form.Select>
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

export default ManageProduct;
