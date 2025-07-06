import React from "react";
import { useForm } from "react-hook-form";

const CreateHospital = ({ show, onClose }) => {
    const {register,handleSubmit,watch,formState: { errors },} = useForm();
    if (!show) return null;
   const onSubmit = (data) => console.log(data)

  return (
    <div className="project_modal">
      <div className="modal fade show d-block" tabIndex="-1" style={{overflowY:"scroll"}}>
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
                  <div className="row" style={{display:"block"}}>
                    <div>
                      <div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                          <div
                            class="contact_form aos-init aos-animate"
                            data-aos="fade-up"
                          >
                            <h6>Register Hospital</h6>
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
                                          {...register("hos_logo", { required: true })}
                                        />
                                          {errors.hos_logo && <span>This field is required</span>}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="Hospital Name"
                                          {...register("hos_name", { required: true })}
                                        />
                                          {errors.hos_name && <span>This field is required</span>}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="Contact Person Name"
                                          {...register("hos_contact_person", { required: true })}
                                        />
                                          {errors.hos_contact_person && <span>This field is required</span>}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="Mobile number"
                                          {...register("hos_mobile", { required: true })}
                                        />
                                          {errors.hos_mobile && <span>This field is required</span>}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="Email"
                                          {...register("hos_email", { required: true })}
                                        />
                                          {errors.hos_email && <span>This field is required</span>}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="Address"
                                          {...register("hos_address", { required: true })}
                                        />
                                          {errors.hos_address && <span>This field is required</span>}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="Pincode"
                                          {...register("hos_pincode", { required: true })}
                                        />
                                          {errors.hos_pincode && <span>This field is required</span>}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="City"
                                          {...register("hos_city", { required: true })}
                                        />
                                          {errors.hos_city && <span>This field is required</span>}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="State"
                                          {...register("hos_state", { required: true })}
                                        />
                                          {errors.hos_state && <span>This field is required</span>}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="Location Latitude"
                                          {...register("hos_location_lat", { required: true })}
                                        />
                                          {errors.hos_location_lat && <span>This field is required</span>}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="Location Longitude"
                                          {...register("hos_location_long", { required: true })}
                                        />
                                          {errors.hos_location_long && <span>This field is required</span>}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="Specialties"
                                          {...register("hos_specialties", { required: true })}
                                        />
                                          {errors.hos_specialties && <span>This field is required</span>}
                                      </div>
                                    </li>
                                  
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="Status"
                                          {...register("hos_status", { required: true })}
                                        />
                                          {errors.hos_status && <span>This field is required</span>}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="Website"
                                          {...register("hos_website", { required: true })}
                                        />
                                          {errors.hos_website && <span>This field is required</span>}
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

export default CreateHospital;
