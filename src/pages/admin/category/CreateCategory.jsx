import React, { useState, useEffect } from "react";
import { Form, Container, Button, ListGroup, Modal } from "react-bootstrap";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
//functions
import {
  createCategory,
  listCategory,
  deleteCategory,
  ReadCategory,
  EditCategory,
} from "../../../functions/category";
//Redux
import { useSelector } from "react-redux";

function CreateCategory() {
  const { user } = useSelector((state) => ({ ...state }));

  const [category, setCategory] = useState([]);
  const [values, setValues] = useState({
    name: "",
  });

  const loadData = (authtoken) => {
    listCategory(authtoken)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //add category
  const handleChangeCategory = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  //submit add category
  const handleSubmit = (e) => {
    e.preventDefault();
    createCategory(user.user.token, values)
      .then((res) => {
        /* console.log(res); */
        loadData(user.user.token);
        alert("Insert category " + res.data.name + " Success!!!");
      })
      .catch((err) => {
        console.log(err);
        alert("Error!!! Insert Data");
      });
    e.target.reset();
  };
  //Remove
  const handleRemove = (id) => {
    deleteCategory(user.user.token, id)
      .then((res) => {
        /* console.log(res); */
        alert("Remove Data " + res.data.name + " Success!!!");
        loadData(user.user.token);
      })
      .catch((err) => {
        console.log(err);
        alert("Error!!! Insert Data");
      });
  };

  //chang new category
  const [show, setShow] = useState(false);
  const [change, setChange] = useState({
    id: "",
    newData: "",
  });
  //chang new category
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setChange({ ...change, id: id });
  };
  const handleChangeData = (e) => {
    setChange({ ...change, [e.target.name]: e.target.value });
  };
  //submit change category
  const handleOk = () => {
    setShow(false);
    /* console.log(change) */
    EditCategory(user.user.token, change.id, { change })
      .then((res) => {
        loadData(user.user.token);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  
  useEffect(() => {
    loadData(user.user.token);
  }, []);

  return (
    <div className="bg-warning py-3">
      <Container className="">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label as="h3" className="text-dark">
              Add Category
            </Form.Label>
            <Form.Control
              type="text"
              name="name"
              className="my-3"
              onChange={handleChangeCategory}
              /* value={values.name} */
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
        <hr />
        <ListGroup as="ul">
          {category.map((item, index) => (
            <ListGroup.Item
              as="li"
              key={index}
              className="d-flex justify-content-between px-5"
            >
              {item.name}
              <div>
                <MdDeleteForever
                  role="button"
                  className="my-auto text-danger"
                  onClick={() => handleRemove(item._id)}
                />
                <MdModeEdit
                  className="mx-2"
                  role="button"
                  onClick={() => handleShow(item._id)}
                />
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edite category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>New category</Form.Label>
          <Form.Control
            type="text"
            name="newData"
            placeholder="New category"
            autoFocus
            onChange={handleChangeData}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleOk}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CreateCategory;
