import React, { useEffect, useState } from "react";
import Formreserv from "../components/Formreserv";
import Header from "../components/Header";
import imgMenu from "../img/menu.png";
import { Container, Row, Col, Button, Image, Modal } from "react-bootstrap";
import { FiX } from "react-icons/fi";
import ReactLoading from "react-loading";
import FetchLoad from "../components/FetchLoad";
import { listProduct, readProduct } from "../functions/product";
import { listCategory } from "../functions/category";

function Menu() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(
    []
  ); /* variable keep item follow category */
  const [category, setCategory] = useState([]); /* variable category */
  const [visible, setVisible] = useState(6); /* variable loading more item */
  const [loading, setLoading] = useState(false); /* variable loading */
  const [dataModal, setDataModal] = useState([]); /* variable Modal Product */
  const [showModal, setShowModal] = useState(false); /* variable show Modal */
  const [modalCategory, setModalCategory] =
    useState(); /* variable Modal category */
  const [activeId, setActiveId] = useState("All"); /* variable Active Button */

  const filterItem = (datafilter) => {
    const updateItems = data.filter((item) => {
      return item.category.name == datafilter;
    });
    setFilter(updateItems);
    setActiveId(datafilter);
  };

  const showMoreItems = () => {
    setVisible(
      (prevValue) => prevValue + 3
    ); /* function set item show when onclick  */
  };

  const loadCategory = () => {
    listCategory()
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loadProduct = () => {
    /* variable function fetch */
    listProduct()
      .then((res) => {
        setData(res.data);
        setFilter(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const loadModal = (id) => {
    readProduct(id)
      .then((res) => {
        setDataModal(res.data);
        setModalCategory(res.data.category.name);
        setShowModal(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /* console.log(activeId); */
  useEffect(() => {
    window.scrollTo(0, 0); /* scroll to top when render page */
    setLoading(true); /* แสดงการโหลดก่อน */
    const timer = setTimeout(() => {
      loadProduct();
      loadCategory();
    }, 1000); /* หน่วงเวลา 2000 s แล้วค่อย fetch data */
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header
        img={imgMenu}
        head="View Our New Menu"
        title="The freshest ingredients for you every day"
      />

      <Container className="my-6 py-lg-7 py-0">
        <div className="justify-content-center mb-6 d-flex mx-auto flex-column flex-lg-row">
          <Button
            onClick={() => {
              setFilter(data);
              setActiveId("All");
            }}
            variant="light"
            className={activeId === "All" ? "active" : ""}
          >
            All
          </Button>

          {category.map((item) => {
            return (
              <Button
                onClick={() => filterItem(`${item.name}`)}
                variant="light"
                className={`ms-lg-3 ms-0 ${
                  activeId === item.name ? "active" : ""
                }`}
                key={item._id}
              >
                {item.name}
              </Button>
            );
          })}
        </div>

        {loading ? (
          <ReactLoading
            type="bars"
            color="#9CAA00"
            height={"20%"}
            width={"20%"}
            className="mx-auto"
          />
        ) : (
          /* Condition operator - condition ? (true):(false) */
          /* .slice(0, visible) เอา array 0-4 มา map */
          <Row xs={1} sm={1} md={2} lg={3} className="gy-5">
            {filter.slice(0, visible).map((item) => {
              return (
                <Col
                  className=""
                  key={item._id}
                  onClick={() => loadModal(item._id)}
                >
                  <FetchLoad
                    src={`${process.env.REACT_APP_IMAGE}${item.image}`}
                  />
                  <div className="d-flex justify-content-between mt-3">
                    <h4 className="text-secondary text-center">{item.title}</h4>
                    <h4 className="text-success text-center">{`${item.price} ฿`}</h4>
                  </div>
                </Col>
              );
            })}
          </Row>
        )}

        {visible < data.length && (
          <Button
            className="d-block mx-auto mt-5"
            variant="info"
            size="lg"
            onClick={showMoreItems}
          >
            Load More
          </Button>
        )}
      </Container>
      <Formreserv />

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
      >
        <Modal.Body>
          <Row>
            <Col xs={12} md={8} lg={7}>
              <Image
                src={`${process.env.REACT_APP_IMAGE}${dataModal.image}`}
                fluid
              />
            </Col>
            <Col xs={12} md={4} lg={5}>
              <FiX
                role="button"
                style={{ position: "absolute", top: "10px", right: "10px" }}
                size={28}
                onClick={() => setShowModal(false)}
              />
              <h3 className="text-success text-center py-lg-0 py-sm-3">
                {dataModal.title}
              </h3>
              <hr style={{ borderTop: "4px dotted #000" }} />
              <p className="text-dark">
                <span className="text-success">Description : </span>
                {dataModal.description}
              </p>
              <p className="text-dark">
                <span className="text-success">Category : </span>
                {modalCategory}
              </p>
              <p className="text-dark">
                <span className="text-success">Price : </span>
                {`${dataModal.price} ฿`}
              </p>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Menu;
