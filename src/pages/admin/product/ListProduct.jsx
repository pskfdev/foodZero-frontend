import React, { useState, useEffect } from "react";
import { Table, Form, Modal, Button } from "react-bootstrap";
import { MdDeleteForever, MdModeEdit, MdAutorenew } from "react-icons/md";
import { listProduct, deleteProduct } from "../../../functions/product";
import { useSelector } from "react-redux";
import NavPagination from "../../../components/NavPagination";
import { Link } from "react-router-dom";

function ListProduct() {
  const { user } = useSelector((state) => ({ ...state }));

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); /* variable pagination */
  const [recordsPerPage] = useState(5); /* variable pagination */
  const indexOfLastRecord =
    currentPage * recordsPerPage; /* variable pagination */
  const indexOfFirstRecord =
    indexOfLastRecord - recordsPerPage; /* variable pagination */
  const nPages = Math.ceil(
    data.length / recordsPerPage
  ); /* variable pagination */

  const handleRemove = (id) => {
    if (window.confirm("Are you sure delete!")) {
      deleteProduct(user.user.token, id)
        .then((res) => {
          console.log(res.data);
          loadProduct(user.user.token);
          alert("Remove Product " + res.data.title + " Success!!!");
        })
        .catch((err) => {
          console.log(err);
          alert("Error!!! Remove Product");
        });
    }
  };

  const refreshPage = (e) => {
    e.preventDefault();
    loadProduct();
  };

  const loadProduct = () => {
    //code
    listProduct()
      .then((res) => {
        /* console.log(res.data); */
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(indexOfFirstRecord, indexOfLastRecord).map((item) => (
            <tr key={item._id}>
              <td className="align-middle">{item.title}</td>
              <td className="align-middle">{item.category.name}</td>
              <td className="align-middle">{`${item.price} ฿`}</td>
              <td>
                <img
                  src={`${process.env.REACT_APP_IMAGE}${item.image}`}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
              </td>
              <td>
                <MdDeleteForever
                  className="mx-2 text-danger"
                  role="button"
                  onClick={() => handleRemove(item._id)}
                />
                <Link to={`/admin/update-product/${item._id}`}>
                  <MdModeEdit
                    className="mx-2"
                    role="button"
                    /* onClick={handleShow} */
                  />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex">
        <Button size="sm" onClick={refreshPage} className="px-3">
          <MdAutorenew size={28} />
        </Button>
        <NavPagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default ListProduct;
