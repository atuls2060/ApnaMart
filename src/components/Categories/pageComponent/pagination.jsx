import React from "react";
import { Button } from "@chakra-ui/react";

const Pagination = ({ totalPages, currentPage, onPageClick }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav
      style={{
        textAlign: "center",
        marginTop:"10px"
      }}
    >
      <Button
        mr="7"
        colorScheme="teal"
        isDisabled={currentPage === 1}
        className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
        onClick={() => onPageClick(currentPage - 1)}
      >
        Previous
      </Button>
      <Button mr="7" colorScheme="teal" key={currentPage}>
        {currentPage}
      </Button>
      <Button
        isDisabled={currentPage === pageNumbers.length}
        className={`page-item ${
          currentPage === pageNumbers.length ? "disabled" : ""
        }`}
        onClick={() => onPageClick(currentPage + 1)}
        colorScheme="teal"
      >
        Next
      </Button>
    </nav>
  );
};

export default Pagination;
