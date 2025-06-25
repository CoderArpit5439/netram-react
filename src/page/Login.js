import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section class="contact-info-form-con">
        <div class="container">
          <div class="row">
            <div class="col-xl-10 col-12 mx-auto">
              <div class="row">
                <div class="col-lg-7 col-md-12 col-sm-12 col-12">
                  <div class="contact_form" data-aos="fade-up">
                    <h6>Get Report</h6>
                    <h2>Login</h2>
                    <form
                      id="contactpage"
                      method="post"
                      class="position-relative"
                    >
                      <div class="row">
                        <div class="col-12">
                          <ul class="list-unstyled mb-0">
                            <li class="">
                              <div class="form-group w-100 position-relative">
                                <input
                                  type="tel"
                                  class="form_style"
                                  placeholder="Phone"
                                  name="phone"
                                  id="phone"
                                />
                              </div>
                            </li>
                            <li class="button">
                              <div class="manage-button">
                                <button
                                  type="button"
                                  id="submit"
                                  onClick={() => {
                                    navigate("/report");
                                  }}
                                  class="submit_now text-white text-decoration-none"
                                >
                                  Send Now
                                  <i class="fa-solid fa-arrow-right"></i>
                                </button>
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
  );
};

export default Login;
