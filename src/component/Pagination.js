import React from "react";

const Pagination = () => {
  return (
    <div>
      <nav aria-label="...">
        <ul class="pagination">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">
              <i class="fas fa-angle-left"></i>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="#">
              2 <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              4
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              5
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              6
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              7
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              8
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              <i class="fas fa-angle-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
