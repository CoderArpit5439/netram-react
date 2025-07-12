import React from "react";
import { useNavigate } from "react-router-dom";

const OpticalList = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div class="blog-posts blogpage-section background-gradient">
        <div class="container">
          <div
            class="row wow fadeInUp"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            <div id="blog" class="col-xl-12">
              <div class="row">
                {[1, 1, 1, 1]?.map((card, i) => {
                  return (
                    <div class="col-xl-3 col-lg-6 col-md-6">
                      <div
                        class="blog-box fourcolumn-blog float-left w-100 post-item mb-4 aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration="700"
                      >
                        <div class="post-item-wrap position-relative">
                          <div
                            id="blogslider"
                            class="carousel slide"
                            data-ride="carousel"
                          >
                            <div class="carousel-inner">
                              <div class="carousel-item">
                                <img
                                  src="assets/images/standard_post_img06.jpg"
                                  alt="image"
                                  loading="lazy"
                                  class="img-fluid"
                                />
                                {/* <!--carousel-item--> */}
                              </div>
                              <div class="carousel-item active carousel-item-left">
                                <img
                                  src="assets/images/standard_post_img05.jpg"
                                  alt="image"
                                  loading="lazy"
                                  class="img-fluid"
                                />
                                {/* <!--carousel-item--> */}
                              </div>
                              <div class="carousel-item carousel-item-next carousel-item-left">
                                <img
                                  src="assets/images/standard_post_img04.jpg"
                                  alt="image"
                                  loading="lazy"
                                  class="img-fluid"
                                />
                                {/* <!--carousel-item--> */}
                              </div>
                              {/* <!--carousel-inner--> */}
                            </div>
                            {/* <!-- Left and right controls --> */}
                            <a
                              class="carousel-control-prev"
                              href="#blogslider"
                              data-slide="prev"
                            >
                              <span class="carousel-control-prev-icon"></span>
                            </a>
                            <a
                              class="carousel-control-next"
                              href="#blogslider"
                              data-slide="next"
                            >
                              <span class="carousel-control-next-icon"></span>
                            </a>
                            {/* <!--blogslider--> */}
                          </div>
                          <div class="lower-portion">
                            <div class="span-i-con">
                              <i class="fas fa-user"></i>
                              <span class="text-size-14 text-mr">
                                By : Admin
                              </span>
                              <i class="fas fa-tag"></i>
                              <span class="text-size-14">
                                Virtual Assistant
                              </span>
                            </div>
                            <p class="mb-0 text-size-16">
                              Curabitur pulvinar euismod ante, ac sagittis ante
                              posuere ac. Vivamus luctus commodo dolor porta
                              feugiat.
                            </p>
                          </div>
                          <div class="button-portion">
                            <div class="date">
                              <i class="fas fa-calendar-alt"></i>
                              <span class="mb-0 text-size-14">Dec 20,2022</span>
                            </div>
                            <div class="button">
                              <a
                                class="mb-0 read_more text-decoration-none"
                                onClick={() =>
                                  navigate("/optical/slug-of-optical")
                                }
                              >
                                Read More
                              </a>
                            </div>
                          </div>
                          {/* <!--post-item-wrap--> */}
                        </div>
                        {/* <!--post-item--> */}
                      </div>
                      {/* <!--col--> */}
                    </div>
                  );
                })}
              </div>
              {/* <!--blog--> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpticalList;
