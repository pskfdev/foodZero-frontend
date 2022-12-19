import React from "react";
import { Table, Form } from "react-bootstrap";

function ManageProduct() {
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
          </tr>
        </thead>
        <tbody>
          {/* data.map((item, index) */}
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>
              <Form.Select size="sm" aria-label="Default select example">
                <option value="1">user</option>
                <option value="2">admin</option>
              </Form.Select>
            </td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default ManageProduct;
