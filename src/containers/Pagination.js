import React from "react";

const Pagination = ({ postPerPage, totalPost, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      {pageNumbers.map((number) => {
        return (
          <button key={number} onClick={() => paginate(number)}>
            {number}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
