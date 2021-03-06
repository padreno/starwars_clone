import React from "react";
import "./Pagination.css";
import { Link } from "react-router-dom";

const Pagination = ({ setPageNum,  }) => {
  const shipPages = [];
  for (let i = 1; i < 5; i++) {
    shipPages.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {shipPages.map((pageNumber, index) => (
          <Link to="/shipcards" key={index}>
            <li
              className="page-item"
              onClick={() => {
                setPageNum(index + 1);
              }}
            >
              {pageNumber}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default Pagination;
