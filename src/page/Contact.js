import React from 'react'

const Contact = () => {
  return (
    <div>
         {/* <!-- Sub banner --> */}
    <section class="sub_banner_con position-relative">
        <div class="container position-relative">
            <div class="row">
                <div class="col-xl-6 col-lg-8 col-md-12 col-12">
                    <div class="sub_banner_content" data-aos="fade-up">
                        <h1 class="text-white">Contact Us</h1>
                        <p class="text-white text-size-18">Guis nostrud exercitation ullamco laboris nisi aut aliquio modo consenuar irure in reprehenderit esse.</p>
                        <div class="box">
                            <a href="index.html" class="text-decoration-none">
                                <span class="mb-0">Home</span>
                            </a>
                            <i class="arrow fa-solid fa-arrow-right"></i>
                            <span class="mb-0 box_span">Contact Us</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

{/* <!-- Contact Info Form --> */}
<section class="contact-info-form-con">
    <div class="container">
        <div class="row">
            <div class="col-xl-10 col-12 mx-auto">
                <div class="row">
                    <div class="col-lg-5 col-md-12 col-sm-12 col-12">
                        <div class="contact_content" data-aos="fade-up">
                            <div class="contact-box">
                                <figure class="icon">
                                    <img src="assets/images/contact-locationimage.png" alt="image" class="img-fluid"/>
                                </figure>
                                <div class="box-content">
                                    <h5>Our Location:</h5>
                                    <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8387096759398!2d144.95320007674053!3d-37.8172467342385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2s!4v1739525810895!5m2!1sen!2s"
                                         class="text-size-16 text-decoration-none mb-0"> 121 King Street, Melbourne Victoria 3000 Australia
                                    </a>
                                </div>
                            </div>
                            <div class="contact-box">
                                <figure class="icon">
                                    <img src="assets/images/contact-phoneimage.png" alt="image" class="img-fluid"/>
                                </figure>
                                <div class="box-content">
                                    <h5>Phone Number</h5>
                                    <a href="tel:+61383766284" class="text-decoration-none text text-size-16">(+61 3 8376 6284)</a>
                                    <div class="clearfix"></div>
                                    <a href="tel:+80023456789" class="mb-0 text-decoration-none text text-size-16 mb-0">(+800 2345 6789)</a>
                                </div>
                            </div>
                            <div class="contact-box">
                                <figure class="icon">
                                    <img src="assets/images/contact-emailimage.png" alt="image" class="img-fluid"/>
                                </figure>
                                <div class="box-content">
                                    <h5>Email us at</h5>
                                    <a href="mailto:info@opticest.com" class="text-decoration-none text-size-16">info@opticest.com</a>
                                    <div class="clearfix"></div>
                                    <a href="mailto:opticest@gmail.com" class="mb-0 text-decoration-none text-size-16 mb-0">opticest@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-12 col-sm-12 col-12">
                        <div class="contact_form" data-aos="fade-up">
                            <h6>Get in Touch</h6>
                            <h2>Send us a Message</h2>
                            <form id="contactpage" method="post" class="position-relative">
                                <div class="row">
                                    <div class="col-12">
                                        <ul class="list-unstyled mb-0">
                                            <li class="">
                                                <div class="form-group float-left input1 position-relative">
                                                    <input type="text" class="form_style" placeholder="First Name" name="fname" id="fname"/> 
                                                </div>
                                            </li>
                                            <li class="">
                                                <div class="form-group float-left position-relative">
                                                    <input type="text" class="form_style" placeholder="Last Name" name="lname" id="lname"/> 
                                                </div>
                                            </li>
                                            <li class="">
                                                <div class="form-group float-left input1 position-relative">
                                                    <input type="tel" class="form_style" placeholder="Phone" name="phone" id="phone"/>
                                                </div>
                                            </li> 
                                            <li class="">
                                                <div class="form-group float-left position-relative">
                                                    <input type="email" class="form_style" placeholder="Email" name="email" id="email"/>
                                                </div>
                                            </li>
                                            <li class="">
                                                <div class=" form-group message">
                                                    <textarea class="form_style w-100" placeholder="Message" rows="3" name="msg"></textarea>
                                                </div>
                                            </li>
                                            <li class="button">
                                                <div class="manage-button">
                                                    <button type="submit" id="submit" class="submit_now text-white text-decoration-none">Send Now<i class="fa-solid fa-arrow-right"></i></button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>            
                            </form>
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

export default Contact