import React, { useEffect } from "react";
import Pagination from "../../component/Pagination";
import DataTable from "../../component/DataTable";
import Profile from "../../component/Profile";
import Analytics from "../../component/Analytics";
// import ListCustomer from "./customer/ListCustomer";
import ListFollowUp from "./followUp/ListFollowUp";
import ListInquiry from "./inquiry/ListInquiry";
import OptProfile from "./profile/HosProfile";
import ListCustomer from "../patient/ListPatient";
import HosProfile from "./profile/HosProfile";
import ListPatient from "../patient/ListPatient";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboard } from "../../redux/Slices/hospital/HospitalSlice";

const HospitalDashboard = () => {
  const dispatch = useDispatch();
   const { dashboard,loading, hospitalResponse} = useSelector((state) => {
    return {
      dashboard: state?.rootReducer?.HospitalSlice?.dashboard,
      loading: state?.rootReducer?.HospitalSlice?.loading,
      hospitalResponse: state?.rootReducer?.HospitalSlice?.hospitalResponse,
    }
  })
  console.log(dashboard, "dashboard data");

  useEffect(() => {
    // Fetch data or perform any setup needed for the dashboard
    dispatch(fetchDashboard());
    // For example, you might want to dispatch an action to fetch the dashboard data
  }, []);
  
  return (
    <div>
      <div className="container my-5">
        {/* Cards */}
        <div
          class="row all_row aos-init mb-3 servicepage-con"
          data-aos="fade-up"
        >
          {dashboard?.data?.cards?.map((card, i) => {
            return (
              <div class="col-lg-3 col-md-6 col-sm-6 col-12 all_column">
                <div class="service-box all_boxes">
                  <h5>{card.count}</h5>
                  <p class="text-size-16">{card.title} </p>
                  </div>
              </div>
            );
          })}
        </div>

        {/* Tables */}
        <div
          class="blog-tabs-inner-section aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active" 
                id="dashboard-tab"
                data-toggle="tab"
                href="#dashboard"
                role="tab"
                aria-controls="dashboard"
                aria-expanded="true"
                aria-selected="true"
              >
                Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="regcus-tab"
                data-toggle="tab"
                href="#regcus"
                role="tab"
                aria-controls="regcus"
                aria-selected="false"
              >
                Registered patients
              </a>
            </li>
            {/* <li class="nav-item">
              <a
                class="nav-link"
                id="eyereport-tab"
                data-toggle="tab"
                href="#eyereport"
                role="tab"
                aria-controls="eyereport"
                aria-selected="false"
              >
                Eye Reports
              </a>
            </li> */}
            <li class="nav-item">
              <a
                class="nav-link"
                id="followup-tab"
                data-toggle="tab"
                href="#followup"
                role="tab"
                aria-controls="followup"
                aria-selected="false"
              >
                {" "}
                Follow-ups{" "}
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link "
                id="inquiry-tab"
                data-toggle="tab"
                href="#inquiry"
                role="tab"
                aria-controls="inquiry"
                aria-selected="false"
              >
                Inquiry{" "}
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
              >
                Profile
              </a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            
            {/* Dashboard */}
            <div
              class="tab-pane fade active show"
              id="dashboard"
              role="tabpanel"
              aria-labelledby="dashboard-tab"
            >
              <div class="row">
                <div class="col-lg-12">
                <Analytics />
                </div>
                {/* <!--end col--> */}
              </div>
            </div>

            {/* Registered patient */}
            <div
              class="tab-pane fade"
              id="regcus"
              role="tabpanel"
              aria-labelledby="regcus-tab"
            >
            <div class="row">
                <div class="col-lg-12">
                 <ListPatient  />
                </div>
                {/* <!--end col--> */}
              </div>
            </div>

            {/* eye reports */}
            {/* <div
              class="tab-pane fade"
              id="eyereport"
              role="tabpanel"
              aria-labelledby="eyereport-tab"
            >
             <div class="row">
                <div class="col-lg-12">
                 <DataTable  />
                </div>
              </div>
            </div> */}

            {/* Follow up */}
            <div
              class="tab-pane fade"
              id="followup"
              role="tabpanel"
              aria-labelledby="followup-tab"
            >
            <div class="row">
                <div class="col-lg-12">
                 <ListFollowUp  />
                </div>
                {/* <!--end col--> */}
              </div>
            </div>

            {/* Inquiry */}
            <div
              class="tab-pane fade "
              id="inquiry"
              role="tabpanel"
              aria-labelledby="inquiry-tab"
            >
             <div class="row">
                <div class="col-lg-12">
                 <ListInquiry />
                </div>
                {/* <!--end col--> */}
              </div>
            </div>

            {/* profile */}
            <div
              class="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <HosProfile />
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDashboard;
