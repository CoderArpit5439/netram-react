import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  eye_hospital,
  eyewear_frame,
  faqs,
  frameData,
  hospital_data,
  offer,
  optical_shops,
} from "../component/DummyData";
import EyewearCard from "../component/EyewearCard";
import Slider from "react-slick";
import EyewearSlider from "../component/EyewearSlider";
import Card from "../component/hospital/Card";

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Add your API POST logic here
    reset(); // optional: reset form after submit
  };

  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  //   const settings = {
  //   dots: false,
  //   arrows: true,
  //   infinite: true,
  //   speed: 5000,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1200, // lg
  //       settings: {
  //         slidesToShow: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 992, // md
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 576, // sm
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // };
  return (
    <div>
      <div class="home1_banner_outer position-relative">
        {/* <!-- Topbar --> */}

        {/* <!-- Search Form --> */}
        <div id="search" class="">
          <span class="close">X</span>
          <form role="search" id="searchform" method="get">
            <input
              value=""
              name="q"
              type="search"
              placeholder="Type to Search"
            />
          </form>
        </div>
        {/* <!-- Banner --> */}
        <section class="banner-con position-relative">
          {/* <figure class="banner-leftimage mb-0">
            <img
              src="assets/images/banner-leftimage.png"
              alt="image"
              class="img-fluid"
            />
          </figure> */}
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                <div
                  class="banner_content"
                  data-aos="fade-up"
                  style={{ paddingTop: "100px" }}
                >
                  <h6>Welcome to the E-Netram</h6>
                  <h1 class="text-white">Clear Vision Starts With Experts</h1>
                  <p class="text-white text-size-18">
                    Experience personalized eye care from seasoned professionals
                    committed to protecting your vision and enhancing your eye
                    health.
                  </p>
                  <div className="footer-con">
                    <div className="upper-portion">
                      <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <div class="form-group position-relative mb-0">
                          <div className="d-lg-flex">
                            <div style={{ display: "inline-grid" }}>
                              <select
                                {...register("problem", {
                                  required: true,
                                })}
                                type="text"
                                class="form_style"
                                name="email"
                                style={{
                                  fontSize: "14px",
                                  lineHeight: "14px",
                                  fontWeight: "400",
                                  padding: "16px 28px",
                                  marginRight: "16px",
                                  marginTop: "16px",
                                  width: "245px",
                                  position: "relative",
                                  color: "var(--e-global-color-text)",
                                  backgroundColor:
                                    "var(--e-global-color-white)",
                                  borderRadius: "8px",
                                  border: "1px solid transparent",
                                  overflow: "visible",
                                  outline: "none",
                                }}
                              >
                                <option value="">Select problem</option>
                                <option value="Cataract">Cataract</option>
                                <option value="Eye Test">Eye Test</option>
                                <option value="Tear Film Dysfunction">
                                  Tear Film Dysfunction
                                </option>
                                <option value="Pterygium">Pterygium</option>
                                <option value="Glaucoma">Glaucoma</option>
                                <option value="Retina Issue">
                                  Retina Issue
                                </option>
                                <option value="Dry Eyes">Dry Eyes</option>
                                <option value="LASIK Consultation">
                                  LASIK Consultation
                                </option>
                              </select>
                              {errors.problem && (
                                <span className="text-danger ">
                                  Please select anyone problem
                                </span>
                              )}
                            </div>
                            <div style={{ display: "inline-grid" }}>
                              <input
                                type="text"
                                class="form_style"
                                placeholder="Enter Your Number"
                                {...register("mobile", {
                                  required: "Mobile number is required.",
                                  pattern: {
                                    value: /^[6-9]\d{9}$/,
                                    message:
                                      "Enter a valid 10-digit mobile number.",
                                  },
                                })}
                                style={{
                                  fontSize: "14px",
                                  lineHeight: "14px",
                                  fontWeight: "400",
                                  padding: "16px 28px",
                                  marginRight: "16px",
                                  marginTop: "16px",
                                  width: "245px",
                                  position: "relative",
                                  color: "var(--e-global-color-text)",
                                  backgroundColor:
                                    "var(--e-global-color-white)",
                                  borderRadius: "8px",
                                  border: "1px solid transparent",
                                  overflow: "visible",
                                  outline: "none",
                                }}
                              />
                              {errors.mobile && (
                                <span className="text-danger ">
                                  {errors.mobile.message}
                                </span>
                              )}
                            </div>
                            <div>
                              <button
                                style={{
                                  fontSize: "16px",
                                  lineHeight: "16px",
                                  fontWeight: 600,
                                  width: "170px",
                                  padding: "17px 27px",
                                  marginTop: "16px",
                                  color: "var(--e-global-color-secondary)",
                                  backgroundColor:
                                    "var(--e-global-color-accent)",
                                  borderRadius: "8px",
                                  position: "relative",
                                  border: "none",
                                  overflow: "visible",
                                  outline: "none",
                                  transition: "all 0.8s ease-in-out",
                                }}
                                type="submit"
                              >
                                Appointment
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div class="banner_wrapper position-relative">
                  <figure class="banner-rightbackground mb-0">
                    <img
                      src="assets/images/banner-rightbackground.jpg"
                      alt="image"
                      class="img-fluid"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-1 mx-auto">
                <a href="#dropdown" class="top-btn text-center">
                  <figure class="banner-dropdownimage mb-0">
                    <img
                      src="assets/images/banner-dropdownimage.png"
                      class="img-fluid"
                      alt="image"
                    />
                  </figure>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <!-- Hospital listing --> */}
      <section class="service2-con position-relative" id="dropdown" style={{paddingBottom:"50px"}}>
        <div class="container">
          <div class="row">
            <div class="col-12 mx-auto">
              <div class="service_content text-center" data-aos="fade-up">
                <h6>Top Eye Hospitals</h6>
                <h2>Find trusted care near your location</h2>
              </div>
            </div>
          </div>
          <div class="row" data-aos="fade-up">
            <div class="col-12">
              <div className="owl-carousel owl-theme">
                {eye_hospital?.map((hospital, i) => (
                  <div key={i}>
                    {/* <EyewearCard data={product} /> */}
                    <Card data={hospital} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 mx-auto"
              style={{ cursor: "pointer", marginTop: "90px", textDecoration:"underline" }}
            >
              <div class="service_content text-center" data-aos="fade-up" onClick={()=>{navigate('/hospital/list')}}>
                <h6>See More</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Eyewear listing --> */}
      <section
        class="case2-con position-relative"
        id="dropdown"
        style={{ paddingTop: "100px"}}
      >
        <div class="container">
          <div class="row">
            <div class="col-12 mx-auto">
              <div class="service_content text-center" data-aos="fade-up">
                <h6>Latest Eyewear Styles</h6>
                <h2 style={{ paddingBottom: "40px" }}>
                  Explore frames, goggles & trending designs
                </h2>
              </div>
            </div>
          </div>
          <div class="row" data-aos="fade-up">
            <div class="col-12">
              <div className="owl-carousel owl-theme">
                {eyewear_frame?.map((product, i) => (
                  <div key={i}>
                    <EyewearCard data={product} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 mx-auto"
              style={{ cursor: "pointer", marginTop: "90px", textDecoration:"underline" }}
            >
              <div class="service_content text-center" data-aos="fade-up" onClick={()=>{navigate('/eyewear/list')}}>
                <h6>See More</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Optical listing --> */}
      <section class="service2-con position-relative" id="dropdown" style={{paddingBottom:"50px"}}>
        <div class="container">
          <div class="row">
            <div class="col-12 mx-auto">
              <div class="service_content text-center" data-aos="fade-up">
                <h6>Nearby Optical Stores</h6>
                <h2>Get vision checked & frames selected easily</h2>
              </div>
            </div>
          </div>
          <div class="row" data-aos="fade-up">
            <div class="col-12">
              <div className="owl-carousel owl-theme">
                {optical_shops?.map((opt, i) => (
                  <div key={i}>
                    <Card data={opt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
            <div class="row">
            <div
              class="col-12 mx-auto"
              style={{ cursor: "pointer", marginTop: "90px", textDecoration:"underline" }}
            >
              <div class="service_content text-center" data-aos="fade-up" onClick={()=>{navigate('/optical/list')}}>
                <h6>See More</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Service --> */}
      <section class="service-con position-relative" id="dropdown">
        <div class="container">
          <div class="row">
            <div class="col-12 mx-auto">
              <div class="service_content text-center" data-aos="fade-up">
                <h6>What We Offer</h6>
                <h2>We Provide Best Services</h2>
              </div>
            </div>
          </div>
          <div class="row" data-aos="fade-up">
            <div class="col-12">
              <div className="owl-carousel owl-theme">
                {offer?.map((glass, i) => {
                  return (
                    <div className="item" key={i}>
                      <div className="service-box">
                        <figure className="icon">
                          <img
                            src={glass.icon}
                            alt="image"
                            className="img-fluid"
                          />
                        </figure>
                        <h5>{glass.heading}</h5>
                        <p className="text-size-16">{glass.subheading}</p>
                        {/* <a href="service.html" className="text-decoration-none arrow">
            Learn More<i className="fa-solid fa-arrow-right"></i>
          </a> */}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- About --> */}
      <section class="about-con position-relative">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-7 col-lg-6 col-12 text-lg-left text-center">
              <div class="about_wrapper position-relative" data-aos="fade-up">
                <figure class="about-image1 mb-0">
                  <img
                    src="assets/images/about-image1.jpg"
                    alt="image"
                    class="img-fluid"
                  />
                </figure>
                <div class="video-image">
                  <figure class="about-image2 mb-0">
                    <img
                      src="assets/images/about-image2.jpg"
                      alt="image"
                      class="img-fluid"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div class="col-xl-5 col-lg-6 col-12">
              <div class="about_content" data-aos="fade-up">
                <h6>About Us</h6>
                <h2>We Provide Expert Solutions For Eyes</h2>
                <p class="text text-size-18">
                  Dedicated to precise, personalized eye care solutions for your
                  long-term visual health and comfort.
                </p>
                <div class="propertise">
                  <ul class="list-unstyled mb-0 list1">
                    <li>
                      <i class="fa fa-check" aria-hidden="true"></i>
                      <p class="mb-0 text-size-16">Vision Correction Experts</p>
                    </li>
                    <li>
                      <i class="fa fa-check" aria-hidden="true"></i>
                      <p class="mb-0 text-size-16">Premium-Quality Lenses</p>
                    </li>
                  </ul>
                  <ul class="list-unstyled mb-0 list2">
                    <li>
                      <i class="fa fa-check" aria-hidden="true"></i>
                      <p class="mb-0 text-size-16">Trusted by Thousands</p>
                    </li>
                    <li>
                      <i class="fa fa-check" aria-hidden="true"></i>
                      <p class="mb-0 text-size-16">Personalized Eye Tests</p>
                    </li>
                  </ul>
                </div>
                {/* <a href="about.html" class="text-decoration-none primary_btn">
                  Buy Now<i class="fa-solid fa-arrow-right"></i>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Choose --> */}
      <section class="choose-con position-relative">
        <figure class="choose-lefttopimage image mb-0">
          <img src="assets/images/choose-lefttopimage.png" alt="image" />
        </figure>
        <figure class="choose-rightbottomimage image mb-0">
          <img src="assets/images/choose-rightbottomimage.png" alt="image" />
        </figure>
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-12 order-lg-1 order-1">
              <div class="choose_content" data-aos="fade-up">
                <h6>Why Choose Us</h6>
                <h2 class="mb-0 text-white">
                  Your Vision Has Been Our Focus for Over <span>02+</span>{" "}
                  Years.
                </h2>
              </div>
            </div>
            <div class="col-lg-6 col-12 order-lg-2 order-3">
              <div class="choose_wrapper position-relative" data-aos="fade-up">
                <figure class="choose-image mb-0">
                  <img src="assets/images/choose-image.png" alt="image" />
                </figure>
              </div>
            </div>
            <div class="col-lg-2 col-12 order-lg-3 order-2">
              <div class="choose_contentvalue" data-aos="fade-up">
                <ul class="list-unstyled mb-0">
                  <li>
                    <span class="number counter">50</span>
                    <sup class="plus">+</sup>
                    <span class="text">Camp</span>
                  </li>
                  <li>
                    <span class="number counter">25</span>
                    <sup class="plus">+</sup>
                    <span class="text">Expert Doctors</span>
                  </li>
                  <li>
                    <span class="number counter">100</span>
                    <sup class="plus">%</sup>
                    <span class="text">Satisified Patients</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Help --> */}
      <section class="help-con position-relative">
        <div class="container">
          <div class="row">
            <div class="col-lg-10 col-md-12 col-12 mx-auto">
              <div class="help_content text-center" data-aos="fade-up">
                <h6>Need Help?</h6>
                <h2 class="text-white">
                  Looking for a Check-up?
                  <br /> Call Us for Emergency Support!
                </h2>
                <div class="phone-number">
                  <img
                    src="assets/images/help-phoneimage.png"
                    alt="image"
                    class="img-fluid"
                  />
                  <a href="tel:9300062750" class="text-decoration-none">
                    <span class="number">9300062750</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Contact --> */}
      <section class="contact-con position-relative">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="contact_wrapper position-relative">
                <figure class="contact-leftbackground mb-0">
                  <img
                    src="assets/images/contact-leftbackground.jpg"
                    alt="image"
                    class="img-fluid"
                  />
                </figure>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="contact_content" data-aos="fade-up">
                <h6>Get Appointment</h6>
                <h2 class="text-white">Book Appointment for Consultation</h2>
                <form id="contactpage" method="post" class="position-relative">
                  <div class="form-group input1 float-left">
                    <input
                      type="text"
                      class="form_style"
                      placeholder="Name"
                      name="fname"
                      id="fname"
                    />
                  </div>
                  <div class="form-group float-left">
                    <input
                      type="tel"
                      class="form_style"
                      placeholder="Phone"
                      name="phone"
                      id="phone"
                    />
                  </div>
                  <div class="form-group input1 float-left">
                    <input
                      type="email"
                      class="form_style"
                      placeholder="Email"
                      name="email"
                      id="email"
                    />
                  </div>
                  <div class="form-group float-left">
                    <select class="form-control" required>
                      <option value="" disabled selected hidden>
                        Department
                      </option>
                      <option value="general">General</option>
                      <option value="cardiology">Cardiology</option>
                      <option value="neurology">Neurology</option>
                    </select>
                  </div>
                  <div class="form-group input1 float-left">
                    <input
                      type="date"
                      class="form_style"
                      name="date"
                      id="date"
                    />
                  </div>
                  <div class="form-group float-left time">
                    <input
                      type="time"
                      class="form_style"
                      name="time"
                      id="time"
                    />
                    <i class="fa-solid fa-clock"></i>
                  </div>
                  <button
                    type="submit"
                    id="submit"
                    class="submit_now text-decoration-none"
                  >
                    Book Appointment<i class="fa-solid fa-arrow-right"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Faq --> */}
      <section class="faq-con position-relative">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="faq_content" data-aos="fade-up">
                <h6>Faq’s</h6>
                <h2>Frequently Asked Questions</h2>
                <div class="accordian-section-inner position-relative">
                  <div class="accordian-inner">
                    <div id="faq_accordion">
                      {faqs?.map((qa, i) => {
                        return (
                          <div class="accordion-card">
                            <div class="card-header" id="headingOne">
                              <a
                                href="#"
                                class="btn btn-link collapsed"
                                data-toggle="collapse"
                                data-target={`#collapseOne` + i}
                                aria-expanded="false"
                                aria-controls={`collapseOne` + i}
                              >
                                <h4 class="mb-0">{qa.que}</h4>
                              </a>
                            </div>
                            <div
                              id={`collapseOne` + i}
                              class="collapse"
                              aria-labelledby="headingOne"
                              data-parent="#faq_accordion"
                            >
                              <div class="card-body">
                                <p class="text-size-16 text-left mb-0">
                                  {qa.ans}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 col-12 text-lg-left text-center">
              <div class="faq_wrapper position-relative" data-aos="fade-up">
                <figure class="faq-image mb-0">
                  <img
                    src="assets/images/faq-image.jpg"
                    alt="image"
                    class="img-fluid"
                  />
                </figure>
                <figure class="faq-circle mb-0">
                  <img
                    src="assets/images/faq-circle.png"
                    alt="image"
                    class="img-fluid"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
