import React, { useEffect, useState } from "react";
import Formreserv from "../components/Formreserv";
import Header from "../components/Header";
import BlogList from "../components/BlogList";
import imgAbout from "../img/Habout.png";
import ReactLoading from "react-loading";
import { Container } from "react-bootstrap";
import NavPagination from "../components/NavPagination";

function Blog() {
  const [data, setData] = useState([]); /* variable keep data fetch */
  const [loading, setLoading] = useState(false); /* variable loading */
  const [currentPage, setCurrentPage] = useState(1); /* variable pagination */
  const [recordsPerPage] = useState(4); /* variable pagination */
  const indexOfLastRecord =
    currentPage * recordsPerPage; /* variable pagination */
  const indexOfFirstRecord =
    indexOfLastRecord - recordsPerPage; /* variable pagination */
  const nPages = Math.ceil(
    data.length / recordsPerPage
  ); /* variable pagination */

  const fetchData = async () => {
    /* variable function fetch */
    await fetch("./DataMaterial.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
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
    }, 500); /* หน่วงเวลา 2000 s แล้วค่อย fetch data */
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header
        img={imgAbout}
        head="Who We Are"
        title="The most important thing for us is to give you the comfortable dining experience"
      />
      <Container className="my-6">
        <h1 className="text-center text-dark">BLOG</h1>
        {loading ? (
          <ReactLoading
            type="bars"
            color="#9CAA00"
            height={"20%"}
            width={"20%"}
            className="mx-auto"
          />
        ) : (
          <>
            {data.slice(indexOfFirstRecord, indexOfLastRecord).map((item) => {
              return (
                <BlogList
                  src={item.url}
                  title={item.title}
                  detail={item.detail}
                />
              );
            })}
            <NavPagination
              nPages={nPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </>
        )}
      </Container>

      <Formreserv />
    </>
  );
}

export default Blog;
