import React from "react";
import Pagination from "../../component/Pagination";
import DataTable from "../../component/DataTable";
import Profile from "../../component/Profile";
import Analytics from "../../component/Analytics";
import ListFollowUp from "./followUp/ListFollowUp";
import ListInquiry from "./inquiry/ListInquiry";
import OptProfile from "./profile/OptProfile";
import ListCustomer from "../customer/ListCustomer";

const OpticalDashboard = () => {
  const cards = [
    {
      title: "Registered Customers",
      count: 105,
    },
    {
      title: "This Month Follow up",
      count: 95,
    },
    {
      title: "Total Inquiry",
      count: 16,
    },
    {
      title: "Last 7 Days Activity",
      count: 57,
    },
  ];
  return (
    <div>
      <div className="container my-5">
        {/* Cards */}
        <div
          class="row all_row aos-init mb-3 servicepage-con"
          data-aos="fade-up"
        >
          {cards.map((card, i) => {
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
                class="nav-link"
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
                Registered Customers
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
                class="nav-link active"
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
              class="tab-pane fade"
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

            {/* Registered customer */}
            <div
              class="tab-pane fade"
              id="regcus"
              role="tabpanel"
              aria-labelledby="regcus-tab"
            >
            <div class="row">
                <div class="col-lg-12">
                 <ListCustomer />
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
              class="tab-pane fade active show"
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
              <OptProfile />
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpticalDashboard;
