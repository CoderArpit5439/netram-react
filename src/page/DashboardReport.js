import React from "react";

const DashboardReport = () => {
    const topcards = [
        {
            title : "Next Eye test",
            subtitle : "25-06-2025",
        },
        {
            title : "Next Eye test",
            subtitle : "25-06-2025",
        },
    ]
  return (
    <div>
      <section class="pricing-con position-relative">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div
                class="pricing_content text-center aos-init aos-animate"
                data-aos="fade-up"
              >
                <h6>DASHBOARD</h6>
                <h2>My Prescription</h2>
              </div>
            </div>
          </div>
           <div class="row all_row aos-init mb-3 servicepage-con" data-aos="fade-up">
            {[1, 2,3,4].map((card, i) => {
              return (

                <div class="col-lg-3 col-md-6 col-sm-6 col-12 all_column">
                <div class="service-box all_boxes">
                    {/* <figure class="icon">
                        <img src="assets/images/service-icon1.png" alt="image" class="img-fluid"/>
                    </figure> */}
                    <h5>Laser</h5>
                    <p class="text-size-16">Duis aute irure dolor </p>
                    {/* <a href="service-detail.html" class="text-decoration-none arrow">Learn More<i class="fa-solid fa-arrow-right"></i></a> */}
                </div>
            </div>
              );
            })}
          </div>
          <div class="row all_row aos-init" data-aos="fade-up">
            {[1, 2].map((card, i) => {
              return (
                <div class="col-lg-6 col-md-6 col-sm-6 col-12 mx-auto all_column">
                  <div class="pricing-box all_boxes mb-0">
                    <div class="content">
                      <h5>Arpit sharma</h5>
                    <p class="text text-size-16">
                     Power type : Single Vision
                    </p>
                    <p class="text text-size-16">
                     Lense type : Single Vision
                    </p>
                    </div>
                    <p class="text text-size-16">
                     Created Mon Sep 30 2024
                    </p>

                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">EYE</th>
                          <th scope="col">Spherical</th>
                          <th scope="col">Cylindrical</th>
                          <th scope="col">Axis</th>
                          <th scope="col">Add</th>
                          <th scope="col">PD</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>OD</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                        </tr>
                        <tr>
                          <td>OS</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardReport;
