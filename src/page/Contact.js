import React from 'react'

const Contact = () => {
  return (
    <div>
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
                                    <a href="https://maps.app.goo.gl/qinUnyBNsX3ch3GT9"
                                         class="text-size-16 text-decoration-none mb-0">Indore, India
                                    </a>
                                </div>
                            </div>
                            <div class="contact-box">
                                <figure class="icon">
                                    <img src="assets/images/contact-phoneimage.png" alt="image" class="img-fluid"/>
                                </figure>
                                <div class="box-content">
                                    <h5>Phone Number</h5>
                                    <a href="tel:9300062750" class="text-decoration-none text text-size-16">93000 62750</a>
                                 
                                </div>
                            </div>
                            <div class="contact-box">
                                <figure class="icon">
                                    <img src="assets/images/contact-emailimage.png" alt="image" class="img-fluid"/>
                                </figure>
                                <div class="box-content">
                                    <h5>Email us at</h5>
                                    <a href="mailto:info@enetram.com" class="text-decoration-none text-size-16">info@enetram.com</a>
                                    <div class="clearfix"></div>
                                    <a href="mailto:shreenetramoptical@gmail.com" class="mb-0 text-decoration-none text-size-16 mb-0">shreenetramoptical@gmail.com</a>
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