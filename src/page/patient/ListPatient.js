import React, { useEffect, useState } from "react";
// import Pagination from "../../../component/Pagination";
import CreatePatient from "./CreatePatient";
import UpdatePatient from "./UpdatePatient";
import Pagination from "../../component/Pagination";
import { patient_data } from "../../component/DummyData";
import { fetchPatient } from "../../redux/Slices/patient/PatientSlice";
import { useDispatch, useSelector } from "react-redux";
// import { patient_data } from "../../../component/DummyData";

const ListPatient = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [updateData, setUpdateData] = useState();
const dispatch = useDispatch();
 
     const { patientList,loading, patientResponse} = useSelector((state) => {
        return {
            patientList: state?.rootReducer?.PatientSlice?.patientList,
            loading: state?.rootReducer?.PatientSlice?.loading,
            patientResponse: state?.rootReducer?.PatientSlice?.patientResponse,
        }
    })
  console.log("Patient List:", patientList);
  const [currentPage, setCurrentPage] = useState(1);

  
  useEffect(() => {
    // Fetch patient data here if needed
    const body = {
      page: currentPage,
    search : "",}
  dispatch(fetchPatient());
  }, [patientResponse]);

  const openUpdatePopup = (data) => { 
    setUpdateData(data);
setShowModalUpdate(true)
  }
  return (
    <div>
      <div class="card" id="patientList">
        <div class="card-header bpatient-0">
          <div class="row align-items-center gy-3">
            <div class="col-sm">
              <h5 class="card-title mb-0">Patient </h5>
            </div>
            <div class="col-sm-auto">
              <div class="d-flex gap-1 flex-wrap">
                {/* <button
                  type="button"
                  class="btn btn-success add-btn"
                  data-bs-toggle="modal"
                  id="add-btn-patient"
                  data-bs-target="#showModalpatient"
                >
                  <i class="ri-add-line align-bottom me-1"></i> Add Patient
                </button> */}
                <button
                  className="btn btn-success me-2"
                  onClick={() => setShowModal(true)}
                >
                  Add Patient
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
        <div class="card-body bpatient bpatient-dashed bpatient-end-0 bpatient-start-0">
          <form>
            <div class="row g-3">
              <div class="col-xxl-4 col-sm-4">
                <div class="search-box">
                  <input
                    type="text"
                    class="form-control search"
                    placeholder="Search for patient ID, patient, patient status or something..."
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
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Right Eye</th>
                    <th>Left Eye</th>
                    <th>Lens</th>
                    <th>Frame</th>
                    <th>Remark</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody class="list form-check-all">
                  {
                    patientList?.data?.map((patient_data, index) => {
                    console.log(999,JSON.parse(patient_data.ptn_left_eye))

                  const left_eye =  JSON.parse(patient_data?.ptn_left_eye);
                  const right_eye = JSON.parse(patient_data?.ptn_right_eye);

                  return (
                    
                  <tr key={index} >
                    <td>{patient_data?.ptn_name}</td>
                    <td>{patient_data?.ptn_gender}</td>
                    <td>{patient_data?.ptn_age}</td>
                    <td>{patient_data?.ptn_mobile}</td>
                    <td>{patient_data?.ptn_email}</td>
                    <td>{patient_data?.ptn_address}</td>
                    <td>{right_eye?.sph} Sph / {right_eye?.cyl} * {right_eye?.axis}  </td>
                    <td>{left_eye?.sph} Sph / {left_eye?.cyl} * {left_eye?.axis}  </td>
                    <td>{patient_data?.ptn_lens}</td>
                    <td>{patient_data?.ptn_frame}</td>
                    <td>{patient_data?.ptn_remark}</td>
                    <td>{patient_data?.ptn_created_at}</td>
                    <td>
                      <div className="d-flex">
                      </div>
                      <button class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></button>
                      <button className="btn btn-outline-info" onClick={()=>openUpdatePopup(patient_data)}> <i class="fas fa-edit"></i></button>
                    </td>
                  </tr>
                   )}
                  )}
                </tbody>
              </table>
              {/* <Pagination /> */}
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
                    We've searched more than 150+ Patients We did not find any
                    patients for you search.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      {/* Modal Component */}
      <CreatePatient show={showModal} onClose={() => setShowModal(false)} />
      <UpdatePatient show={showModalUpdate} onClose={() => setShowModalUpdate(false)} data={updateData} />
    </div>
  );
};

export default ListPatient;
