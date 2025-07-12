import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const OptUpdate = ({ show, onClose, data }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue
  } = useForm();
  
  useEffect(()=>{
      if(data){
        setValue("opt_name",data?.opt_name)
        setValue("opt_pincode",data?.opt_pincode)
        setValue("opt_services",data?.opt_services)
        setValue("opt_state",data?.opt_state)
        setValue("opt_status",data?.opt_status)
        setValue("opt_website",data?.opt_website)
        setValue("opt_address",data?.opt_address)
        setValue("opt_city",data?.opt_city)
        setValue("opt_owner_name",data?.opt_owner_name)
        setValue("opt_email",data?.opt_email)
        setValue("opt_location_lat",data?.opt_location?.latitude)
        setValue("opt_location_long",data?.opt_location?.longitude)
        setValue("opt_logo",data?.opt_logo)
        setValue("opt_mobile",data?.opt_mobile)
    }
  },[data])

  if (!show) return null;

 
  const onSubmit = (data) => console.log(data);

  return (
    <div className="project_modal">
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        style={{ overflowY: "scroll" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <button className="btn-close" onClick={onClose}>
                <i className="fa-solid fa-x"></i>
              </button>
            </div>

            {/* Modal Body */}
            <div className="modal-body blog-model-con">
              <section
                class="contact-info-form-con"
                style={{ paddingTop: "10px" }}
              >
                <div class="container">
                  <div className="row" style={{ display: "block" }}>
                    <div>
                      <div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                          <div
                            class="contact_form aos-init aos-animate"
                            data-aos="fade-up"
                          >
                            <h6>Update Optical</h6>
                           <form
                              id="contactpage"
                              class="position-relative"
                              onSubmit={handleSubmit(onSubmit)}
                            >
                              <div class="row">
                                <div class="col-12">
                                  <ul class="list-unstyled mb-0">
                                      <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="file"
                                          class="form_style"
                                          placeholder="Logo"
                                          {...register("opt_logo", { required: true })}
                                        />
                                          {errors.opt_logo && <span>This field is required</span>}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="Optical Name"
                                          {...register("opt_name", { required: true })}
                                        />
                                          {errors.opt_name && <span>This field is required</span>}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="Owner Name"
                                          {...register("opt_owner_name", { required: true })}
                                        />
                                          {errors.opt_owner_name && <span>This field is required</span>}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="Mobile number"
                                          {...register("opt_mobile", { required: true })}
                                        />
                                          {errors.opt_mobile && <span>This field is required</span>}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="Email"
                                          {...register("opt_email", { required: true })}
                                        />
                                          {errors.opt_email && <span>This field is required</span>}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="Address"
                                          {...register("opt_address", { required: true })}
                                        />
                                          {errors.opt_address && <span>This field is required</span>}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="Pincode"
                                          {...register("opt_pincode", { required: true })}
                                        />
                                          {errors.opt_pincode && <span>This field is required</span>}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="City"
                                          {...register("opt_city", { required: true })}
                                        />
                                          {errors.opt_city && <span>This field is required</span>}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="State"
                                          {...register("opt_state", { required: true })}
                                        />
                                          {errors.opt_state && <span>This field is required</span>}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="Location Latitude"
                                          {...register("opt_location_lat", { required: true })}
                                        />
                                          {errors.opt_location_lat && <span>This field is required</span>}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="Location Longitude"
                                          {...register("opt_location_long", { required: true })}
                                        />
                                          {errors.opt_location_long && <span>This field is required</span>}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="Services"
                                          {...register("opt_services", { required: true })}
                                        />
                                          {errors.opt_services && <span>This field is required</span>}
                                      </div>
                                    </li>
                                  
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="Status"
                                          {...register("opt_status", { required: true })}
                                        />
                                          {errors.opt_status && <span>This field is required</span>}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="Website"
                                          {...register("opt_website", { required: true })}
                                        />
                                          {errors.opt_website && <span>This field is required</span>}
                                      </div>
                                    </li>
                                    <li class="button">
                                      <div class="manage-button">
                                        <button
                                        style={{width:"85%"}}
                                          type="submit"
                                          class="submit_now text-white text-decoration-none"
                                        >
                                          Submit
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

            {/* Optional Footer */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptUpdate;
