import React, { useState, useEffect } from "react";
import { Table, Form, Modal, Button } from "react-bootstrap";
import { MdDeleteForever, MdModeEdit, MdAutorenew } from "react-icons/md";
import { listBlog, deleteBlog } from "../../../functions/blog";
import { useSelector } from "react-redux";

function ManageBlog() {
  const { user } = useSelector((state) => ({ ...state }));

  const [data, setData] = useState([]);

  const loadData = () => {
    listBlog()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRemove = (id) => {
    if (window.confirm("Are you sure delete!")) {
      deleteBlog(user.user.token, id)
        .then((res) => {
          console.log(res.data);
          alert(`Delete blog ${res.data.title} success!`);
        })
        .catch((err) => {
          console.log(err);
          alert(`Delete blog fail!!`);
        });
    }
  };

  const refreshPage = (e) => {
    e.preventDefault();
    loadData();
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td className="align-middle col-3">{item.title}</td>
              <td className="align-middle col-4">{item.description}</td>
              <td className="align-middle">
                <img
                  src={`${process.env.REACT_APP_IMAGE}${item.image}`}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
              </td>
              <td className="align-middle">
                <MdDeleteForever
                  className="mx-2 text-danger"
                  role="button"
                  onClick={() => handleRemove(item._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex">
        <Button size="sm" onClick={refreshPage} className="px-3">
          <MdAutorenew size={28} />
        </Button>
      </div>
    </div>
  );
}

export default ManageBlog;
