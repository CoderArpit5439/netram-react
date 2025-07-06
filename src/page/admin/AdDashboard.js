import React from 'react'
import Analytics from '../../component/Analytics';
import DataTable from '../../component/DataTable';
import Profile from '../../component/Profile';
import AdHospital from './AdHospital';
import AdOptical from './AdOptical';
import AdCustomer from './AdCustomer';
import AdInquiry from './AdInquiry';

const AdDashboard = () => {
  
 const cards = [
    {
      title: "Hospital",
      count: 105,
    },
    {
      title: "Optical",
      count: 95,
    },
    {
      title: "Customer",
      count: 16,
    },
    {
      title: "Inquiry",
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
                id="hospital-tab"
                data-toggle="tab"
                href="#hoslist"
                role="tab"
                aria-controls="hoslist"
                aria-selected="false"
              >
                Hospital
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="optical-tab"
                data-toggle="tab"
                href="#optlist"
                role="tab"
                aria-controls="optlist"
                aria-selected="false"
              >
               Optical
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="customer-tab"
                data-toggle="tab"
                href="#custlist"
                role="tab"
                aria-controls="custlist"
                aria-selected="false"
              >
                Customer
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
                Inquiry
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

            {/* Registered customer */}
            <div
              class="tab-pane fade"
              id="hoslist"
              role="tabpanel"
              aria-labelledby="hospital-tab"
            >
            <div class="row">
                <div class="col-lg-12">
                 <AdHospital  />
                </div>
                {/* <!--end col--> */}
              </div>
            </div>

            {/* eye reports */}
            <div
              class="tab-pane fade"
              id="optlist"
              role="tabpanel"
              aria-labelledby="optical-tab"
            >
             <div class="row">
                <div class="col-lg-12">
                 <AdOptical  />
                </div>
                {/* <!--end col--> */}
              </div>
            </div>

            {/* Follow up */}
            <div
              class="tab-pane fade"
              id="custlist"
              role="tabpanel"
              aria-labelledby="customer-tab"
            >
            <div class="row">
                <div class="col-lg-12">
                 <AdCustomer  />
                </div>
                {/* <!--end col--> */}
              </div>
            </div>

            {/* Inquiry */}
            <div
              class="tab-pane fade"
              id="inquiry"
              role="tabpanel"
              aria-labelledby="inquiry-tab"
            >
             <div class="row">
                <div class="col-lg-12">
                 <AdInquiry  />
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
              <Profile />
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdDashboard