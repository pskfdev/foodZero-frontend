import React, { useState, useEffect } from "react";
import { Table, Form, Modal, Button } from "react-bootstrap";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import { listUser, changeRole, removeUser } from "../../functions/users";

function ManageUser() {
  const { user } = useSelector((state) => ({ ...state })); //เอาค่าจาก Redux มา
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleOk = () => setShow(false);

  const roleData = ["admin", "user"];

  const loadData = async (authtoken) => {
    //code
    listUser(authtoken)
      .then((res) => {
        /* console.log(res.data); */
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const handleChangeRole = (e, id) => {
    let values = {
      id: id,
      role: e,
    };

    changeRole(user.user.token, values)
      .then((res) => {
        /* console.log(res); */
        loadData(user.user.token);
        alert(`Change role ${res.data.username} success!`)
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleRemove = (id) => {
    if (window.confirm("Are You Sure Delete!!")) {
      removeUser(user.user.token, id)
        .then((res) => {
          /* console.log(res); */
          loadData(user.user.token);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  useEffect(() => {
    //code
    loadData(user.user.token);
  }, []);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>username</th>
            <th>role</th>
            <th>created</th>
            <th>updated</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{item.username}</td>
              <td>
                <Form.Select
                  size="sm"
                  className="text-success"
                  value={item.role}
                  onChange={(e) => handleChangeRole(e.target.value, item._id)}
                >
                  {roleData.map((item, index) => (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  ))}
                </Form.Select>
              </td>
              <td>{item.createdAt}</td>
              <td>{item.updatedAt}</td>
              <td>
                <MdDeleteForever
                  className="mx-2 text-danger"
                  role="button"
                  onClick={() => handleRemove(item._id)}
                />
                <MdModeEdit
                  className="mx-2"
                  role="button"
                  onClick={handleShow}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Change password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>New password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="New password"
            autoFocus
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleOk}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ManageUser;
