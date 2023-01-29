import React, { useState, useEffect } from "react";
import { Table, Form, Button, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { readProduct, updateProduct } from "../../../functions/product";
import { listCategory } from "../../../functions/category";

const initialState = {
  title: "",
  description: "",
  /* categories: [], */
  category: "",
  price: "",
  imageOld: "",
  image: "",
};

function UpdateProduct() {
  const { user } = useSelector((state) => ({ ...state }));
  const { id } = useParams();
  const navigate = useNavigate();
  /* console.log(id) */
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialState);
  const [showCategory, setShowCategory] = useState(); /* variable category */


  //Load Data Old
  const loadData = (idd) => {
    readProduct(idd)
      .then((res) => {
        setData(res.data);
        setValues({...values, imageOld: res.data.image})
        setShowCategory(res.data.category.name)
        /* console.log(res.data); */
      })
      .catch((err) => {
        console.log(err);
        alert(`Read data Error!!`);
      });
  };

  //Load Menu Category
  const loadCategory = (authtoken) => {
    listCategory(authtoken)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        alert(err.response);
      });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  //Update product
  const handleSubmit = (e) => {
    e.preventDefault();
    /* console.log(values) */
    const formData = new FormData(); //สร้าง formData เพื่อส่งไปหลังบ้าน
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("category", values.category);
    formData.append("price", values.price);
    formData.append("imageOld", values.imageOld);
    formData.append("image", values.image); //image ส่งไปทำ uploadfile.js

    updateProduct(user.user.token, id, formData)
      .then((res) => {
        console.log(res.data);
        
        alert(`Update product ${res.data.title} success!`);
        navigate("/admin/HomeAdmin");
      })
      .catch((err) => {
        alert(err.response.data);
      });
    e.target.reset();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    loadData(id);
    loadCategory(user.user.token);
  }, []);

  /* console.log(values.imageOld); */
  return (
    <div className="bg-warning py-7 text-center">
      <Container>
        <h3 className="text-dark">Update Product</h3>
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
              {categories.map((item) => {
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
            Update
          </Button>
          <Link to="/admin/HomeAdmin">
            <Button variant="danger" type="button" className="ms-2">Cancle</Button>
          </Link>
        </Form>
        <hr />

        
        <Table striped bordered hover>
          <thead className="bg-success">
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            <tr key={data._id}>
              <td className="align-middle">{data.title}</td>
              <td className="align-middle">{showCategory}</td>
              <td className="align-middle">{data.price}</td>
              <td>
                <img
                  src={`${process.env.REACT_APP_IMAGE}${data.image}`}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default UpdateProduct;
