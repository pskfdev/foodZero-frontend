import React, { useEffect, useState } from "react";
import Formreserv from "../components/Formreserv";
import Header from "../components/Header";
import imgMenu from "../img/menu.png";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import ReactLoading from "react-loading";
import FetchLoad from "../components/FetchLoad";

function Menu() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); /* variable loading */
  const [category, setCategory] = useState([]); /* variable keep item follow category */
  const [visible, setVisible] = useState(4); /* variable loading more item */

  const filterItem = (title) => {
    const updateItems = data.filter((item) => {
      return item.title == title;
    });
    setCategory(updateItems);
  };

  const showMoreItems = () => {
    setVisible(
      (prevValue) => prevValue + 1
    ); /* function set item show when onclick  */
  };

  const fetchData = async () => {
    /* variable function fetch */
    await fetch("./Data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setCategory(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0); /* scroll to top when render page */
    setLoading(true); /* แสดงการโหลดก่อน */
    const timer = setTimeout(() => {
      fetchData();
    }, 1000); /* หน่วงเวลา 2000 s แล้วค่อย fetch data */
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header
        img={imgMenu}
        head="View Our New Menu"
        title="The freshest ingredients for you every day."
      />

      <Container className="my-6 py-7">
        <Nav className="justify-content-center mb-5">
          <Nav.Item>
            <Nav.Link onClick={() => setCategory(data)}>All</Nav.Link>
          </Nav.Item>
          {data.map((item) => {
            return (
              <Nav.Item>
                <Nav.Link onClick={() => filterItem(`${item.title}`)}>
                  {item.title}
                </Nav.Link>
              </Nav.Item>
            );
          })}
        </Nav>

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
            {category.slice(0, visible).map((item) => {
              return (
                <Col className="" key={item.id}>
                  <FetchLoad src={item} />
                  <h1 className="text-dark text-center">{item.title}</h1>
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
    </>
  );
}

export default Menu;
