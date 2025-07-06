import React, { useState } from "react";
import Pagination from "../../component/Pagination";
import { hospital_data } from "../../component/DummyData";
import ModalPopUp from "../../component/ModalPopUp";
import CreateHospital from "./hospital/CreateHospital";
import UpdateHospital from "./hospital/UpdateHospital";

const AdHospital = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [updateData, setUpdateData] = useState();

  const openUpdatePopup = (data) => { 
    setUpdateData(data);
setShowModalUpdate(true)
  }
  return (
    <div>
      <div class="card" id="hospitalList">
        <div class="card-header bhospital-0">
          <div class="row align-items-center gy-3">
            <div class="col-sm">
              <h5 class="card-title mb-0">Hospital </h5>
            </div>
            <div class="col-sm-auto">
              <div class="d-flex gap-1 flex-wrap">
                {/* <button
                  type="button"
                  class="btn btn-success add-btn"
                  data-bs-toggle="modal"
                  id="add-btn-hospital"
                  data-bs-target="#showModalhospital"
                >
                  <i class="ri-add-line align-bottom me-1"></i> Add Hospital
                </button> */}
                <button
                  className="btn btn-success me-2"
                  onClick={() => setShowModal(true)}
                >
                  Add Hospital
                </button>
                {/* <button type="button" class="btn btn-info">
                  <i class="ri-file-download-line align-bottom me-1"></i>
                  Import
                </button> */}
                <button
                  class="btn btn-soft-danger"
                  id="remove-actions"
                  onclick="deleteMultiple()"
                >
                  <i class="ri-delete-bin-2-line"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body bhospital bhospital-dashed bhospital-end-0 bhospital-start-0">
          <form>
            <div class="row g-3">
              <div class="col-xxl-4 col-sm-4">
                <div class="search-box">
                  <input
                    type="text"
                    class="form-control search"
                    placeholder="Search for hospital ID, customer, hospital status or something..."
                  />
                  <i class="ri-search-line search-icon"></i>
                </div>
              </div>
              {/* <!--end col--> */}
              <div class="col-xxl-2 col-sm-3">
                <div>
                  <div
                    
                  >
                    <select
                      class="form-control"
                    >
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
                  <select
                    class="form-control"
                   >
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
                    <th>Logo</th>
                    <th>Name</th>
                    <th>Contact Person</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Pincode</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Location</th>
                    <th>Specialties</th>
                    <th>Registration at</th>
                    <th>Status</th>
                    <th>Inquiry</th>
                    <th>Website</th>
                    <th>Rating</th>
                    <th>Review</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody class="list form-check-all">
                  <tr>
                    <td>
                      <img
                        src={hospital_data?.hos_logo}
                        alt={hospital_data?.hos_name}
                      />
                    </td>
                    <td>{hospital_data?.hos_name}</td>
                    <td>{hospital_data?.hos_contact_person}</td>
                    <td>{hospital_data?.hos_mobile}</td>
                    <td>{hospital_data?.hos_email}</td>
                    <td>{hospital_data?.hos_address}</td>
                    <td>{hospital_data?.hos_pincode}</td>
                    <td>{hospital_data?.hos_city}</td>
                    <td>{hospital_data?.hos_state}</td>
                    <td>
                      {hospital_data?.hos_location?.latitude}/
                      {hospital_data?.hos_location?.longitude}
                    </td>
                    <td>
                      {hospital_data?.hos_specialties?.map(
                        (spec, i) => spec + ", "
                      )}
                    </td>
                    <td>{hospital_data?.hos_registration_date}</td>
                    <td>
                      <span class="badge bg-danger-subtle text-danger text-uppercase">
                        {hospital_data?.hos_status}
                      </span>
                    </td>
                    <td>
                      {hospital_data?.hos_inquiries_resolved}/
                      {hospital_data?.hos_inquiries_received}
                    </td>
                    <td>{hospital_data?.hos_website}</td>
                    <td>{hospital_data?.hos_rating}</td>
                    <td>{hospital_data?.hos_reviews_count}</td>
                    <td>
                      <div className="d-flex">

                      </div>
                      <button class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></button>
                      <button className="btn btn-outline-info" onClick={()=>openUpdatePopup(hospital_data)}> <i class="fas fa-edit"></i></button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Pagination />
              <div class="noresult" style={{ display: "none" }}>
                <div class="text-center">
                  <lord-icon
                    src="https://cdn.lordicon.com/msoeawqm.json"
                    trigger="loop"
                    colors="primary:#405189,secondary:#0ab39c"
                    style={{ width: "75px", height: "75px" }}
                  ></lord-icon>
                  <h5 class="mt-2">Sorry! No Result Found</h5>
                  <p class="text-muted">
                    We've searched more than 150+ Hospitals We did not find any
                    hospitals for you search.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      {/* Modal Component */}
      <CreateHospital show={showModal} onClose={() => setShowModal(false)} />
      <UpdateHospital show={showModalUpdate} onClose={() => setShowModalUpdate(false)} data={updateData} />
    </div>
  );
};

export default AdHospital;
