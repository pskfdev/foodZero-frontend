import React from "react";
import { Pagination, Container } from "react-bootstrap";

function NavPagination({ nPages, currentPage, setCurrentPage }) {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <Container>
      <Pagination className="justify-content-center">
        <Pagination.Item onClick={prevPage}>Previous</Pagination.Item>
        {pageNumbers.map((pgNumber) => (
          <Pagination.Item
            key={pgNumber}
            className={`${currentPage == pgNumber ? "active" : ""} `}
            onClick={() => setCurrentPage(pgNumber)}
          >
            {pgNumber}
          </Pagination.Item>
        ))}
        <Pagination.Item onClick={nextPage}>Next</Pagination.Item>
      </Pagination>
    </Container>
  );
}

export default NavPagination;
