import React, { useState, useEffect } from "react";
import { Table, Form, Modal, Button } from "react-bootstrap";
import { MdDeleteForever, MdModeEdit, MdAutorenew } from "react-icons/md";
import { listReservation, deleteReservation } from "../../../functions/reservation";

function ListReservation() {
  const [data, setData] = useState([]);

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

  const deleteData = (id) => {
    if (window.confirm("Are you sure delete ?")) {
      deleteReservation(id)
        .then((res) => {
          console.log(res.data);
          alert(`Delete data ${res.data.username} success!`);
          loadData();
        })
        .catch((err) => {
          console.log(err);
          alert(`Delete data fail!!`);
        });
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Quantity Person</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((items) => (
            <tr key={items._id}>
              <td className="text-success">{items.username}</td>
              <td>{items.date}</td>
              <td>{items.time}</td>
              <td>{items.person}</td>
              <td>{`0${items.contact}`}</td>
              <td>
                <MdDeleteForever
                  className="text-danger"
                  role="button"
                  onClick={() => deleteData(items._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default ListReservation;
