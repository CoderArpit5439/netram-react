import React, { useEffect, useState } from "react";
import Pagination from "../../../component/Pagination";
import { followup_data } from "../../../component/DummyData";
import { useDispatch, useSelector } from "react-redux";
import { getFollowupList } from "../../../redux/Slices/patient/PatientSlice";

const ListFollowUp = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [updateData, setUpdateData] = useState();

  
  const { followupList,loading, followupResponse} = useSelector((state) => {
    return {
      followupList: state?.rootReducer?.PatientSlice?.followupList,
      loading: state?.rootReducer?.PatientSlice?.loading,
      followupResponse: state?.rootReducer?.PatientSlice?.followupResponse,
    }
  })
  useEffect(() => {
    // Fetch follow-up data here if needed
    dispatch(getFollowupList());
  }, [followupResponse]);

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
              <h5 class="card-title mb-0">follow Up</h5>
            </div>
            <div class="col-sm-auto">
              <div class="d-flex gap-1 flex-wrap">
                {/* <button
                  type="button"
                  class="btn btn-success add-btn"
                  data-bs-toggle="modal"
                  id="add-btn-customer"
                  data-bs-target="#showModalcustomer"
                >
                  <i class="ri-add-line align-bottom me-1"></i> Add Customer
                </button> */}
                <button
                  className="btn btn-success me-2"
                  onClick={() => setShowModal(true)}
                >
                  Add Customer
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
                    <th>Name</th>
                    <th>Sex/Age</th>
                    <th>Mobile/Email</th>
                    <th>Right Eye</th>
                    <th>Left Eye</th>
                    <th>Remark</th>
                    <th>Registered on</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody class="list form-check-all">
                 {followupList?.data?.map((followup_data, i) => {
                    const left_eye =  JSON.parse(followup_data?.ptn_left_eye);
                  const right_eye = JSON.parse(followup_data?.ptn_right_eye);

                  return (
                    <tr>
                    <td>{followup_data?.ptn_name}</td>
                    <td>{followup_data?.ptn_gender} / {followup_data?.ptn_age}</td>
                    <td>{followup_data?.ptn_mobile} / {followup_data?.ptn_email}</td>
                     <td>{right_eye?.sph} Sph / {right_eye?.cyl} * {right_eye?.axis}  </td>
                    <td>{left_eye?.sph} Sph / {left_eye?.cyl} * {left_eye?.axis}  </td>
                   
                    <td>{followup_data?.ptn_remark}</td>
                    <td>{followup_data?.ptn_created_at}</td>
                    <td>
                      <div className="d-flex">
                      <button class="btn btn-outline-danger ml-2">
                        <i class="fa fa-phone" ></i>
                      </button>
                      <button
                        className="btn btn-outline-info ml-2"
                      >
                      <i class="fa-brands fa-whatsapp"></i>
                      </button>
                      <button
                        className="btn btn-outline-info ml-2"
                      >
                      <i class="fas fa-sms"></i>
                      </button>
                      </div>
                    </td>
                  </tr>
                 )})}
                 
                </tbody>
              </table>
              {/* <Pagination /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListFollowUp;
