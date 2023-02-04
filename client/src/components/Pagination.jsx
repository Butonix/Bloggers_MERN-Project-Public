import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({
  breakLabel = "...",
  nextLabel = "Next",
  previousLabel = "Previous",
  pageCount,
  handlePageChange,
}) => {
  return (
    <ReactPaginate
      breakLabel={breakLabel}
      nextLabel={nextLabel}
      previousLabel={previousLabel}
      pageCount={pageCount}
      renderOnZeroPageCount={null}
      onPageChange={handlePageChange}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      containerClassName={"pagination"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextClassName={"page-item"}
      nextLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default Pagination;
