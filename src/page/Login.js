import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginAuth } from "../redux/Slices/auth/AuthSlice";
import {AiFillEye, AiOutlineEyeInvisible} from "react-icons/ai"

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(741,location)

  const [isVisible, setIsVisible] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const { message, loading } = useSelector((state) =>{
    return {
    message : state?.rootReducer?.AuthSlice?.data,
    loading : state?.rootReducer?.AuthSlice?.loading
  }});

  const onSubmit = async(data) => {
    var role;
    if(location?.pathname == "/login/patient"){
      role = "patient"
    }
    else if ( location?.pathname == "/login/optical"){
      role = "optical"
    }
    else if ( location?.pathname == "/login/hospital"){
      role = "hospital"
    }
    else if ( location?.pathname == "/login/admin"){
      role = "admin"
    }
  const newData = {
    username:data.username,
    password:data.password,
    role,
  };

    dispatch(loginAuth(newData))
  }

  return (
    <div>
      <section class="contact-info-form-con">
        <div class="container">
          <div class="row">
            <div class="col-xl-10 col-12 mx-auto">
              <div class="row">
                <div class="col-12">
                  <div class="contact_form" data-aos="fade-up" style={{textAlign:"center"}}>
                    <h6>{
                      location?.pathname == "/login/patient" ? "Patient" :
                      location?.pathname == "/login/optical" ? "Optical" :
                      location?.pathname == "/login/hospital" ? "Hospital" :
                      "No permission"}</h6>
                    <h2>Login</h2>
                    <form
                      id="contactpage"
                      method="post"
                      class="position-relative"
                      onSubmit={handleSubmit(onSubmit)} 
                    >
                      <div class="row">
                        <div class="col-12">
                          <ul class="list-unstyled mb-0">
                            <li class="">
                              <div class="form-group w-100 position-relative">
                               
                                 <input type="text" className={`form_style ${errors.username && 'border border-danger'}`} id="username" placeholder="Enter username"  {...register('username', { required: true })} />
                          {errors.username && <span className="text-danger">User name is required</span>}
                      
                              </div>
                            </li>
                            <li class="">
                              <div class="form-group w-100 position-relative">
                               <input type={isVisible ? "text" : "password"} className={`form_style pe-5 password-input ${errors.password && 'border border-danger'}`} placeholder="Enter password" id="password-input"  {...register('password', { required: true })} />
                            {errors.password && <span className="text-danger">Password is required</span>}
                            <div className="btn btn-link text-decoration-none text-muted password-addon" style={{ position: 'absolute', top: '0px', right: '3px', fontSize: "20px" }} >
                              {isVisible ? <AiFillEye onClick={() => setIsVisible(false)} className="ri-eye-fill align-middle" /> : <AiOutlineEyeInvisible onClick={() => setIsVisible(true)} className="ri-eye-fill align-middle" />}
                            </div>
                              </div>
                            </li>
                            <li class="button">
                              <div class="manage-button">
                                <button
                                  type="submit"
                                  id="submit"
                                  // onClick={() => {
                                  //   navigate("/dashboard-report");
                                  // }}
                                  class="submit_now text-white text-decoration-none"
                                  style={{width:"38%"}}
                                >
                                  Login
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
