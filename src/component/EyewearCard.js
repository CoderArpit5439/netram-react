import React from "react";

const EyewearCard = ({data}) => {
  return (
    <div>
      <div class="card shadow-sm border rounded-3 h-100">
        <div class="bg-light p-3 text-center">
          <a href="#">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
              alt="Product"
              class="img-fluid"
              style={{ height: "200px", objectFit: "contain" }}
            />
          </a>
        </div>

        <div class="card-body d-flex flex-column justify-content-between">
          <div>
            {/* <!-- Discount Badge & Quick Buttons --> */}
            <div class="d-flex justify-content-between align-items-start mb-2">
              <span class="badge bg-primary text-white">Up to 35% off</span>
{/* 
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Quick Look"
                >
                  <i class="fa fa-eye"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Add to Favorites"
                >
                  <i class="fa fa-heart"></i>
                </button>
              </div> */}
            </div>

            {/* <!-- Title --> */}
            <h5 class="card-title fw-semibold text-dark mb-2">
             {data.name}
            </h5>

            {/* <!-- Rating --> */}
            <div class="d-flex align-items-center mb-2">
              <div class="text-warning me-2">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
              <small class="text-muted">{data?.rating} ({data.reviews_count})</small>
            </div>

            {/* <!-- Features --> */}
            <div class="d-flex justify-content-between mb-3">
              <div className="small">
                <i class="fa fa-truck me-2"></i> Fast Delivery
              </div>
              <div className="small">
                <i class="fa fa-tag me-2"></i> Best Price
              </div>
            </div>
          </div>

          {/* <!-- Price & Button --> */}
          <div class="d-flex justify-content-between align-items-center mt-auto">
            <span class="h5 fw-bold text-dark mb-0">{data.price}</span>
            <button class="btn btn-primary btn-sm d-flex align-items-center">
              <i class="fa fa-shopping-cart me-2"></i> Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EyewearCard;
