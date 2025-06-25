import React from "react";

const Report = () => {
  return (
    <div>
      <section class="case-con position-relative">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div
                class="case_content text-center aos-init aos-animate"
                data-aos="fade-up"
              >
                <h6>Recent Activities</h6>
                <h2>Our Latest Case Studies</h2>
              </div>
            </div>
          </div>
          <div class="row aos-init aos-animate" data-aos="fade-up">
            <div class="col-lg-4 col-md-6 col-sm-12 col-12 mx-auto">
              <div class="case-box">
                <figure class="case-image mb-0">
                  <img
                    src="assets/images/case-image1.jpg"
                    alt="image"
                    class="img-fluid"
                  />
                </figure>
                <div class="content">
                  <div class="text">
                    <h5>Refractive Nature</h5>
                    <p class="text-size-16 mb-0">Nulla pariatur maiores...</p>
                  </div>
                  <a
                    href="#"
                    class="text-decoration-none"
                    data-toggle="modal"
                    data-target="#blog-model-1"
                  >
                    <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12 mx-auto">
              <div class="case-box">
                <figure class="case-image mb-0">
                  <img
                    src="assets/images/case-image2.jpg"
                    alt="image"
                    class="img-fluid"
                  />
                </figure>
                <div class="content">
                  <div class="text">
                    <h5>Retinal Surgery</h5>
                    <p class="text-size-16 mb-0">Eulla pariatur maiores...</p>
                  </div>
                  <a
                    href="#"
                    class="text-decoration-none"
                    data-toggle="modal"
                    data-target="#blog-model-1"
                  >
                    <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12 mx-auto">
              <div class="case-box">
                <figure class="case-image mb-0">
                  <img
                    src="assets/images/case-image3.jpg"
                    alt="image"
                    class="img-fluid"
                  />
                </figure>
                <div class="content">
                  <div class="text">
                    <h5>Glaucoma Surgery</h5>
                    <p class="text-size-16 mb-0">Mulla pariatur maiores...</p>
                  </div>
                  <a
                    href="#"
                    class="text-decoration-none"
                    data-toggle="modal"
                    data-target="#blog-model-1"
                  >
                    <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="project_modal">
        <div
          id="blog-model-1"
          class="modal fade blog-model-con"
          tabindex="-1"
          style={{display: "none"}}
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="btn-close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i class="fa-solid fa-x"></i>
                  </span>
                </button>
              </div>
              <div class="modal-body">
                <div class="blog-box-item mb-0">
                  <div class="blog-img">
                    <figure class="mb-0">
                      <img
                        src="assets/images/case-image1.jpg"
                        alt="image"
                        class="img-fluid"
                      />
                    </figure>
                  </div>
                  <div class="project_content">
                    <h4>Refractive Nature</h4>
                    <span class="text">
                      Eiusmod enim tempor incididunt aut labore et dolore magna
                      aliua ruis nostrud exercitation ullamco laboris.
                    </span>
                    <div class="properties">
                      <ul class="list-unstyled mb-0">
                        <li class="text-size-16">
                          <i class="circle fa fa-check" aria-hidden="true"></i>
                          Excepteur sint occaecat
                        </li>
                        <li class="text-size-16">
                          <i class="circle fa fa-check" aria-hidden="true"></i>
                          Rerum hic tenetur a sapiente
                        </li>
                        <li class="text-size-16">
                          <i class="circle fa fa-check" aria-hidden="true"></i>
                          Duis aute irure dolor
                        </li>
                      </ul>
                    </div>
                    <span class="text">
                      Amet consectetur adipiscing elit adipis eleifend dictum
                      poten mattis viverra eget quam lacus enimcing inti
                      porttitor bibenu relit duiteri nisl areo nuam lacus.
                    </span>
                    <a
                      href="contact.html"
                      class="text-decoration-none primary_btn"
                    >
                      Read More<i class="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
