import React, { useState } from "react";
import HosUpdate from "./HosUpdate";
import { hospital_data } from "../../../component/DummyData";

const HosProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [updateData, setUpdateData] = useState();

  const openUpdatePopup = (data) => {
    setUpdateData(data);
    setShowModalUpdate(true);
  };
  return (
    <div>
      <div class="container py-5">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            {/* <!-- Profile Card -->  */}
            <div class="card shadow-sm border-0">
              <div class="card-body p-4">
                {/* <!-- Profile Header --> */}
                <div class="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4">
                  <div>
                    <figure class="mb-0 image2">
                      <img
                        src={hospital_data?.hos_logo}
                        alt={hospital_data?.hos_name}
                        class="img-fluid invert_effect"
                        style={{height:"70px",width:"auto"}}
                      />
                    </figure>
                  </div>
                  <div>
                    <h4 class="fw-bold mb-1">{hospital_data?.hos_name}</h4>
                    <p class="text-muted mb-0">
                      {hospital_data?.hos_services?.map((ser,i) => ser + ", ")}
                    </p>
                  </div>
                  {/* <!-- Button --> */}
                  <button class="btn btn-primary" type="button"  onClick={()=>openUpdatePopup(hospital_data)}>
                    <i class="fa fa-edit me-2"></i>Update Profile
                  </button>
                </div>

                {/* <!-- Contact Info --> */}
                <div class="row g-4">
                  <div class="col-md-6">
                    <h6 class="text-uppercase text-muted">Contact Details</h6>
                    <ul class="list-unstyled mb-0">
                      <li>
                        <i class="fa fa-user me-2 text-primary"></i>{hospital_data?.hos_contact_person}
                      </li>
                      <li>
                        <i class="fa fa-phone me-2 text-primary"></i>
                        {hospital_data?.hos_mobile}
                      </li>
                      <li>
                        <i class="fa fa-envelope me-2 text-primary"></i>
                        {hospital_data?.hos_email}
                      </li>
                      <li style={{textDecoration:"underline",cursor:"pointer"}} >
                        <i class="fa fa-envelope me-2 text-primary"></i>
                        {hospital_data?.hos_website}
                      </li>
                    </ul>
                  </div>

                  <div class="col-md-6">
                    <h6 class="text-uppercase text-muted">Location</h6>
                    <ul class="list-unstyled mb-0">
                      <li>
                        <i class="fa fa-map-marker-alt me-2 text-primary"></i>
                        {hospital_data?.hos_address}
                      </li>
                      <li>
                        <i class="fa fa-map-marker-alt me-2 text-primary"></i>
                        {hospital_data?.hos_city}
                      </li>
                      <li>
                        <i class="fa fa-map-marker-alt me-2 text-primary"></i>
                        {hospital_data?.hos_state}
                      </li>
                      <li>
                        <i class="fa fa-thumbtack me-2 text-primary"></i>
                        {hospital_data?.hos_pincode}
                      </li>
                    </ul>
                  </div>
                </div>

                {/* <!-- Divider --> */}
                <hr class="my-4" />

                {/* <!-- Specialties or Services --> */}
                <div class="row">
                  <div class="col-md-6">
                    <h6 class="text-uppercase text-muted">Specialties</h6>
                    <span class="badge bg-info ml-1 mb-1">Cataract</span>
                    
                  </div>

                  <div class="col-md-6">
                    <h6 class="text-uppercase text-muted">Rating</h6>
                    <p class="mb-0">
                      <span class="text-warning">★★★★☆</span>
                      <small class="text-muted">({hospital_data?.hos_rating})</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HosUpdate
        show={showModalUpdate}
        onClose={() => setShowModalUpdate(false)}
        data={updateData}
      />
    </div>
  );
};

export default HosProfile;
