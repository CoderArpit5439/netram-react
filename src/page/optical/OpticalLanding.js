import React from 'react'

const OpticalLanding = () => {
  return (
    <div>
        <section class="banner2-con position-relative">
        <figure class="banner-leftimage image mb-0">
            <img src="./assets/images/banner2-leftimage.png" alt="image" class="img-fluid"/>
        </figure>
        <div class="container">
            <div class="row aos-init aos-animate" data-aos="fade-up">
                <div class="col-lg-6 col-12">
                    <div class="banner_content">
                        <h1>Find Expert <span>Solutions</span> For Your Eyes</h1>
                        <p class="text-size-18">Explore personalized eye care solutions provided by our skilled specialists for overall eye health.</p>
                        <div class="button_wrapper">
                            <a href="./contact.html" class="text-decoration-none primary_btn">Make Appointment<i class="fa-solid fa-arrow-right"></i></a>
                            <a href="./contact.html" class="text-decoration-none primary_btn secondary_btn">Read More<i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="about2-con position-relative">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-xl-6 col-lg-6 col-12 text-lg-left text-center order-lg-1 order-2">
                <div class="about_wrapper position-relative aos-init" data-aos="fade-up">
                    <figure class="about-image1 image mb-0">
                        <img src="./assets/images/about2-image1.png" alt="image" class="img-fluid"/>
                    </figure>
                    <figure class="about-image2 image mb-0">
                        <img src="./assets/images/about2-image2.jpg" alt="image" class="img-fluid"/>
                    </figure>
                </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-12 order-lg-2 order-1">
                <div class="about_content aos-init" data-aos="fade-up">
                    <h6>About Us</h6>
                    <h2>Eye Care Solutions for All Ages</h2>
                    <p class="text1 text-size-18">Quis nostrud exercitation ullamco laboris nisi aut aliquio modo consequat ruis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore.
                    </p>
                    <p class="text2 text-size-18">Dolor in reprehenderit in voluptate velit esse cillum dolore aeu fugiat nulla pariatur.</p>
                    <div class="about_button">
                        <a href="./about.html" class="text-decoration-none primary_btn">Read More<i class="fa-solid fa-arrow-right"></i></a>
                        <div class="phone_wrapper">
                            <img src="./assets/images/about2-phoneicon.png" alt="image" class="img-fluid phone"/>
                            <div class="phone_content">
                                <span>Call us Today!</span>
                                <a href="tel:+568925896325" class="text-decoration-none d-block number">+5689 2589 6325</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default OpticalLanding