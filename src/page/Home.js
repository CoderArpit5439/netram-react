import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
     const offer = [
    {
      icon: "assets/images/service-icon1.png",
      heading: "Night Drive Glasses",
      subheading:
        "Minimize glare and improve road visibility with lenses crafted for safe nighttime driving.",
    },
    {
      icon: "assets/images/service-icon2.png",
      heading: "Blue Cut Glasses",
      subheading:
        "Shield your eyes from digital screen exposure with lenses that reduce blue light strain.",
    },
    {
      icon: "assets/images/service-icon3.png",
      heading: "Near Vision Glasses",
      subheading:
        "Designed to help you focus clearly on reading or close-up tasks.",
    },
    {
      icon: "assets/images/service-icon4.png",
      heading: "Normal Glasses",
      subheading:
        "Everyday eyewear solutions combining clarity and comfort in classic styles.",
    },
    {
      icon: "assets/images/service-icon1.png",
      heading: "Progressive Glasses",
      subheading:
        "Seamless multi-distance vision without visible lens lines, perfect for all-day use.",
    },
    {
      icon: "assets/images/service-icon1.png",
      heading: "Bifocal Glasses",
      subheading:
        "Dual-purpose lenses that offer both near and distance correction in one frame.",
    },
    {
      icon: "assets/images/service-icon1.png",
      heading: "Photochromic Glasses",
      subheading:
        "Lenses that adapt to light, turning darker in sunlight for built-in UV protection.",
    },
  ];

  const faqs = [
    {
      que :"How often should I get my eyes tested?",
      ans : "We recommend a comprehensive eye exam once every year, or as advised by your optometrist."
    },
    {
      que :"What are the symptoms of digital eye strain?",
      ans : "Common signs include blurry vision, dry eyes, and headaches after screen use."
    },
    {
      que :"Can I wear progressive lenses for all-day use?",
      ans : "Yes! Progressive lenses are designed for comfortable, all-day wear across all distances."
    },
    {
      que :"How do photochromic lenses work?",
      ans : "They darken in sunlight and return to clear indoors, giving your eyes full-time protection."
    },
    {
      que :"Are blue cut glasses good for kids?",
      ans : "Absolutely. They reduce eye strain from digital screens, which is vital for growing eyes."
    },
  ]
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
                <div class="banner_content" data-aos="fade-up">
                  <h6>Welcome to the E-Netram</h6>
                  <h1 class="text-white">Clear Vision Starts With Experts</h1>
                  <p class="text-white text-size-18">
                    Experience personalized eye care from seasoned professionals
                    committed to protecting your vision and enhancing your eye
                    health.
                  </p>
                  <div class="button_wrapper">
                    <a onClick={() => {navigate('/contact')}} class="text-decoration-none primary_btn">
                      Make Appointment<i class="fa-solid fa-arrow-right"></i>
                    </a>
                    {/* <a href="contact.html" class="text-decoration-none primary_btn secondary_btn">Read More<i class="fa-solid fa-arrow-right"></i></a> */}
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
        {/* <figure class="about-rightimage mb-0">
          <img
            src="assets/images/about-rightimage.png"
            alt="image"
            class="img-fluid"
          />
        </figure> */}
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
                  {/* <div class="icon">
                    <a
                      class="popup-vimeo"
                      href="assets/video/video_preview_h264.mp4"
                    >
                      <div class="mb-0 video-icon">
                        <img
                          class="thumb img-fluid"
                          style={{ cursor: "pointer" }}
                          src="assets/images/about-playicon.png"
                          alt="image"
                        />
                      </div>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
            <div class="col-xl-5 col-lg-6 col-12">
              <div class="about_content" data-aos="fade-up">
                <h6>About Us</h6>
                <h2>We Provide Expert Solutions For Eyes</h2>
                <p class="text text-size-18">
                 Dedicated to precise, personalized eye care solutions for your long-term visual health and comfort.
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
                  Read More<i class="fa-solid fa-arrow-right"></i>
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
      {/* <!-- Pricing --> */}
      {/* <section class="pricing-con position-relative">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="pricing_content text-center" data-aos="fade-up">
                <h6>OUR PRICING</h6>
                <h2>Great Prices We Offer</h2>
              </div>
            </div>
          </div>
          <div class="row all_row" data-aos="fade-up">
            <div class="col-lg-4 col-md-6 col-sm-6 col-12 mx-auto all_column">
              <div class="pricing-box all_boxes">
                <div class="content">
                  <h5>Basic</h5>
                  <p class="text text-size-16">
                    Reiciendis voluptatibus maiores conseruatur perferendis.
                  </p>
                  <div class="value">
                    <sup class="dollar">$</sup>
                    <span class="number counter">70</span>
                    <span class="month">/checkup</span>
                  </div>
                </div>
                <ul class="list-unstyled all_boxes">
                  <li>
                    <i class="fa fa-check"></i>
                    <p class="mb-0 text-size-16">Comprehensive eye exam</p>
                  </li>
                  <li>
                    <i class="fa fa-check"></i>
                    <p class="mb-0 text-size-16">
                      Basic prescription for glasses
                    </p>
                  </li>
                  <li>
                    <i class="fa fa-check"></i>
                    <p class="mb-0 text-size-16">Personalized vision care</p>
                  </li>
                  <li>
                    <i class="fa fa-check"></i>
                    <p class="mb-0 text-size-16">Follow-up consultation</p>
                  </li>
                </ul>
                <a href="pricing.html" class="text-decoration-none primary_btn">
                  Get Started<i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6 col-12 mx-auto all_column">
              <div class="pricing-box all_boxes">
                <div class="content">
                  <h5>Enhanced</h5>
                  <p class="text text-size-16">
                    Reiciendis voluptatibus maiores conseruatur perferendis.
                  </p>
                  <div class="value">
                    <sup class="dollar">$</sup>
                    <span class="number counter">80</span>
                    <span class="month">/checkup</span>
                  </div>
                </div>
                <ul class="list-unstyled all_boxes">
                  <li>
                    <i class="fa fa-check"></i>
                    <p class="mb-0 text-size-16">
                      All features of the Basic Vision
                    </p>
                  </li>
                  <li>
                    <i class="fa fa-check"></i>
                    <p class="mb-0 text-size-16">Advanced diagnostic testing</p>
                  </li>
                  <li>
                    <i class="fa fa-check"></i>
                    <p class="mb-0 text-size-16">20% discount on eyewear</p>
                  </li>
                  <li>
                    <i class="fa fa-check"></i>
                    <p class="mb-0 text-size-16">
                      Priority scheduling for follow-up
                    </p>
                  </li>
                </ul>
                <a href="pricing.html" class="text-decoration-none primary_btn">
                  Get Started<i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6 col-12 mx-auto all_column">
              <div class="pricing-box all_boxes mb-0">
                <div class="content">
                  <h5>Premium</h5>
                  <p class="text text-size-16">
                    Reiciendis voluptatibus maiores conseruatur perferendis.
                  </p>
                  <div class="value">
                    <sup class="dollar">$</sup>
                    <span class="number counter">90</span>
                    <span class="month">/checkup</span>
                  </div>
                </div>
                <ul class="list-unstyled all_boxes">
                  <li>
                    <i class="fa fa-check"></i>
                    <p class="mb-0 text-size-16">
                      All features of the Enhanced Vision
                    </p>
                  </li>
                  <li>
                    <i class="fa fa-check"></i>
                    <p class="mb-0 text-size-16">
                      Customized contact lens fitting
                    </p>
                  </li>
                  <li>
                    <i class="fa fa-check"></i>
                    <p class="mb-0 text-size-16">
                      Annual eye health screenings
                    </p>
                  </li>
                  <li>
                    <i class="fa fa-check"></i>
                    <p class="mb-0 text-size-16">
                      Complimentary eyewear cleaning
                    </p>
                  </li>
                </ul>
                <a href="pricing.html" class="text-decoration-none primary_btn">
                  Get Started<i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- Specialist Intro --> */}
      {/* <section class="specialist-intro-con position-relative">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-4 col-md-12 col-12">
              <div class="timing_content" data-aos="fade-up">
                <figure class="specialist-intro-clockimage">
                  <img
                    src="assets/images/specialist-intro-clockimage.png"
                    class="img-fluid"
                    alt="image"
                  />
                </figure>
                <h5>Opening Hours</h5>
                <ul class="list-unstyled mb-0">
                  <li>
                    <span class="day">Monday - Friday</span>
                    <span class="time">8:00 am - 9:00 pm</span>
                  </li>
                  <li>
                    <span class="day">Saturday</span>
                    <span class="time">9:00 am - 6:00 pm</span>
                  </li>
                  <li>
                    <span class="day">Sunday</span>
                    <span class="time">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-8 col-md-12 col-12">
              <div class="intro_content" data-aos="fade-up">
                <div class="image position-relative">
                  <figure class="specialist-intro-image mb-0">
                    <img
                      src="assets/images/specialist-intro-image.jpg"
                      class="img-fluid"
                      alt="image"
                    />
                  </figure>
                  <figure class="specialist-intro-quoteimage mb-0">
                    <img
                      src="assets/images/specialist-intro-quoteimage.png"
                      class="img-fluid"
                      alt="image"
                    />
                  </figure>
                </div>
                <div class="content">
                  <h6>specialist</h6>
                  <h3>Premier Lasik Vision!</h3>
                  <p>
                    “Dr. James Anderson is devoted to ensuring his patients
                    receive the best care possible. We at MediCare are focused
                    on your well-being.”
                  </p>
                  <div class="lower_detail">
                    <div class="doc_detail">
                      <span class="name">James Anderson</span>
                      <span class="field">Specialist Doctor </span>
                    </div>
                    <figure class="specialist-intro-signature mb-0">
                      <img
                        src="assets/images/specialist-intro-signature.png"
                        class="img-fluid"
                        alt="image"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
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
      {/* <!-- Team --> */}
      {/* <section class="team-con position-relative">
        <figure class="team-leftimage mb-0">
          <img
            src="assets/images/team-leftimage.png"
            alt="image"
            class="img-fluid"
          />
        </figure>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="team_content text-center" data-aos="fade-up">
                <h6>Doctors Team</h6>
                <h2>Meet Our Professionals</h2>
              </div>
            </div>
          </div>
          <div class="row" data-aos="fade-up">
            <div class="col-lg-4 col-md-4 col-sm-6 col-12 mx-auto">
              <div class="team-box">
                <figure class="team-image">
                  <img
                    src="assets/images/team-image1.jpg"
                    alt="image"
                    class="img-fluid"
                  />
                </figure>
                <div class="content">
                  <h4>Marvin Joner</h4>
                  <span class="text-size-16">Senior Doctor</span>
                  <ul class="list-unstyled mb-0">
                    <li class="icons">
                      <a href="https://www.facebook.com/">
                        <i
                          class="fa-brands fa-facebook-f"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li class="icons">
                      <a href="https://twitter.com/">
                        <i
                          class="fa-brands fa-x-twitter"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li class="icons">
                      <a href="https://pk.linkedin.com/">
                        <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-12 mx-auto">
              <div class="team-box">
                <figure class="team-image">
                  <img
                    src="assets/images/team-image2.jpg"
                    alt="image"
                    class="img-fluid"
                  />
                </figure>
                <div class="content">
                  <h4>Patricia Woodrum</h4>
                  <span class="text-size-16">Eye Specialist</span>
                  <ul class="list-unstyled mb-0">
                    <li class="icons">
                      <a href="https://www.facebook.com/">
                        <i
                          class="fa-brands fa-facebook-f"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li class="icons">
                      <a href="https://twitter.com/">
                        <i
                          class="fa-brands fa-x-twitter"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li class="icons">
                      <a href="https://pk.linkedin.com/">
                        <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-12 mx-auto">
              <div class="team-box mb-0">
                <figure class="team-image">
                  <img
                    src="assets/images/team-image3.jpg"
                    alt="image"
                    class="img-fluid"
                  />
                </figure>
                <div class="content">
                  <h4>Hannaz Stone</h4>
                  <span class="text-size-16">Assistant Doctor</span>
                  <ul class="list-unstyled mb-0">
                    <li class="icons">
                      <a href="https://www.facebook.com/">
                        <i
                          class="fa-brands fa-facebook-f"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li class="icons">
                      <a href="https://twitter.com/">
                        <i
                          class="fa-brands fa-x-twitter"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li class="icons">
                      <a href="https://pk.linkedin.com/">
                        <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- Contact --> */}
      <section class="contact-con position-relative">
        {/* <figure class="contact-rightimage mb-0">
          <img
            src="assets/images/contact-rightimage.png"
            alt="image"
            class="img-fluid"
          />
        </figure> */}
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
      {/* <!-- Testimonial --> */}
      {/* <section class="testimonial-con position-relative">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="testimonial_content text-center" data-aos="fade-up">
                <h6>Testimonials</h6>
                <h2>What Our Patients Say!</h2>
              </div>
            </div>
            <div class="col-xl-10 col-12 mx-auto position-relative">
              <figure class="testimonial-sideimage mb-0" data-aos="fade-up">
                <img
                  src="assets/images/testimonial-sideimage.png"
                  alt="image"
                  class="img-fluid"
                />
              </figure>
              <div
                id="testimonialcarousel"
                class="carousel slide"
                data-ride="carousel"
                data-aos="fade-up"
              >
                <div class="testimonial_carousel text-center position-relative">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div class="testimonial-box">
                        <ul class="list-unstyled">
                          <li>
                            <i class="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i class="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i class="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i class="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i class="fa-solid fa-star"></i>
                          </li>
                        </ul>
                        <p class="text-size-18 paragarph">
                          “Quia voluptas aspernatur aurodit aut fugit, beatae
                          vitae dicta sunt explicabo nemo enim ipsam voluptatem
                          sed neatae vitae dicta ripiscing elit, sed do euismod
                          tempor incidunt labore are dolore magna aliqua ut enim
                          a minim adipiscing elit, sed do euismod tempor
                          incidunt labore minima veniam.”
                        </p>
                        <div class="lower_content">
                          <span class="name">Katrina Parker</span>
                          <span class="review">Happy Client</span>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="testimonial-box">
                        <ul class="list-unstyled">
                          <li>
                            <i class="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i class="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i class="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i class="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i class="fa-solid fa-star"></i>
                          </li>
                        </ul>
                        <p class="text-size-18 paragarph">
                          “Beatae vitae dicta sunt explicabo nemo enim ipsam
                          voluptatem quia voluptas aspernatur aur odit aut
                          fugit, sed neatae vitae dicta ripiscing elit, sed do
                          euismod tempor incidunt labore aredolore magna aliqua
                          ut enim ad minim adipiscing elit, sed do euismod
                          tempor incidunt labore minima veniam.”
                        </p>
                        <div class="lower_content">
                          <span class="name">Fergus Douchebag</span>
                          <span class="review">Happy Customer</span>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="testimonial-box">
                        <ul class="list-unstyled">
                          <li>
                            <i class="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i class="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i class="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i class="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i class="fa-solid fa-star"></i>
                          </li>
                        </ul>
                        <p class="text-size-18 paragarph">
                          “Tempor incidunt labore are dolore magna aliqua ut
                          enim a beatae vitae dicta sunt explicabo nemo enim
                          ipsam voluptatem quia voluptas aspernatur aurodit aut
                          fugit, sed neatae vitae dicta ripiscing elit, sed do
                          euismod minim adipiscing elit, sed do euismod tempor
                          incidunt labore minima veniam.”
                        </p>
                        <div class="lower_content">
                          <span class="name">Erika Neurth</span>
                          <span class="review">Happy Customer</span>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="testimonial-box">
                        <ul class="list-unstyled">
                          <li>
                            <i class="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i class="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i class="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i class="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i class="fa-solid fa-star"></i>
                          </li>
                        </ul>
                        <p class="text-size-18 paragarph">
                          “Incidunt labore are dolore magna aliqua ut enim a
                          minim adipiscing elit, sed do euismod tempor incidunt
                          labore minima veniam. Beatae vitae dicta sunt
                          explicabo nemo enim ipsam voluptatem quia voluptas
                          aspernatur aurodit aut fugit, sed neatae vitae dicta
                          ripiscing elit, sed do euismod tempor”
                        </p>
                        <div class="lower_content">
                          <span class="name">Alina James</span>
                          <span class="review">Happy Client</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                // <!-- Indicators -->
                <ul class="carousel-indicators">
                  <li
                    data-target="#testimonialcarousel"
                    data-slide-to="0"
                    class="active"
                  >
                    <figure class="mb-0 image1">
                      <img
                        src="assets/images/testimonial-personimage1.jpg"
                        alt="image"
                        class="img-fluid invert_effect"
                      />
                    </figure>
                  </li>
                  <li data-target="#testimonialcarousel" data-slide-to="1">
                    <figure class="mb-0 image2">
                      <img
                        src="assets/images/testimonial-personimage2.jpg"
                        alt="image"
                        class="img-fluid invert_effect"
                      />
                    </figure>
                  </li>
                  <li data-target="#testimonialcarousel" data-slide-to="2">
                    <figure class="mb-0 image3">
                      <img
                        src="assets/images/testimonial-personimage3.jpg"
                        alt="image"
                        class="img-fluid invert_effect"
                      />
                    </figure>
                  </li>
                  <li data-target="#testimonialcarousel" data-slide-to="3">
                    <figure class="mb-0 image4">
                      <img
                        src="assets/images/testimonial-personimage4.jpg"
                        alt="image"
                        class="img-fluid invert_effect"
                      />
                    </figure>
                  </li>
                </ul>
                <div class="pagination_outer">
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-target="#testimonialcarousel"
                    data-slide="prev"
                  >
                    <i class="fa-solid fa-arrow-left"></i>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-target="#testimonialcarousel"
                    data-slide="next"
                  >
                    <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
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
                      {
                        faqs?.map((qa,i) =>{
                          return(

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
                            <h4 class="mb-0">
                              {qa.que}
                            </h4>
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
                          )
                        })
                      }
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
  )
}

export default Home