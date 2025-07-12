import React, { useState } from "react";
import Pagination from "../../../component/Pagination";
import { inq, inquiry_data, inquiry_datauiry_data } from "../../../component/DummyData";

const ListInquiry = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [updateData, setUpdateData] = useState();

  const openUpdatePopup = (data) => {
    setUpdateData(data);
    setShowModalUpdate(true);
  };
  return (
    <div>
      <div class="card" id="customerList">
        <div class="card-header bcustomer-0">
          <div class="row align-items-center gy-3">
            <div class="col-sm">
              <h5 class="card-title mb-0">Inquiry </h5>
            </div>
          </div>
        </div>
        <div class="card-body bcustomer bcustomer-dashed bcustomer-end-0 bcustomer-start-0">
          <form>
            <div class="row g-3">
              <div class="col-xxl-4 col-sm-4">
                <div class="search-box">
                  <input
                    type="text"
                    class="form-control search"
                    placeholder="Search for customer ID, customer, customer status or something..."
                  />
                  <i class="ri-search-line search-icon"></i>
                </div>
              </div>
              {/* <!--end col--> */}
              <div class="col-xxl-2 col-sm-3">
                <div>
                  <div>
                    <select class="form-control">
                      <option value="">Status</option>
                      <option value="all" selected="">
                        All
                      </option>
                      <option value="Pending">Pending</option>
                      <option value="Inprogress">Inprogress</option>
                      <option value="Cancelled">Cancelled</option>
                      <option value="Pickups">Pickups</option>
                      <option value="Returns">Returns</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* <!--end col--> */}
              <div class="col-xxl-2 col-sm-3">
                <div>
                  <select class="form-control">
                    <option value="">Select Payment</option>
                    <option value="all" selected="">
                      All
                    </option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="Paypal">Paypal</option>
                    <option value="Visa">Visa</option>
                    <option value="COD">COD</option>
                  </select>
                </div>
              </div>
              {/* <!--end col--> */}
              <div class="col-xxl-1 col-sm-2">
                <div>
                  <button
                    type="button"
                    class="btn btn-primary w-100"
                    onclick="SearchData();"
                  >
                    <i class="ri-equalizer-fill me-1 align-bottom"></i>
                    Filters
                  </button>
                </div>
              </div>
              {/* <!--end col--> */}
            </div>
            {/* <!--end row--> */}
          </form>
        </div>
        <div class="card-body pt-0">
          <div>
            <div class="table-responsive table-card mb-1">
              <table class="table table-nowrap align-middle">
                <thead class="text-muted table-light">
                  <tr class="text-uppercase">
                    <th>ID</th>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Inquiry type</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th>Assign Date</th>
                    <th>Remarks</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody class="list form-check-all">
                  <tr>
                    <td>{inquiry_data?.inq_id}</td>
                    <td>{inquiry_data?.inq_customer_name}</td>
                    <td>{inquiry_data?.inq_mobile}</td>
                    <td>{inquiry_data?.inq_type}</td>
                    <td>{inquiry_data?.inq_location}</td>
                    <td>{inquiry_data?.inq_status}</td>
                    <td>{inquiry_data?.inq_assigned_date}</td>
                    <td>{inquiry_data?.inq_remarks}</td>
                    <td>
                      <div className="d-flex">
                        <button class="btn btn-outline-danger ml-2">
                          <i class="fa fa-phone"></i>
                        </button>
                        <button className="btn btn-outline-info ml-2">
                          <i class="fa-brands fa-whatsapp"></i>
                        </button>
                        <button className="btn btn-outline-info ml-2">
                          <i class="fas fa-sms"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListInquiry;
