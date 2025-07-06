import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const UpdateCustomer = ({ show, onClose, data }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue
  } = useForm();
  
  
  useEffect(()=>{
      if(data){
        setValue("cus_name",data?.cus_name)
        setValue("cus_gender",data?.cus_gender)
        setValue("cus_age",data?.cus_age)
        setValue("cus_right_eye_sph",data?.cus_eye_power?.right_eye?.sph)
        setValue("cus_right_eye_cyl",data?.cus_eye_power?.right_eye?.cyl)
        setValue("cus_right_eye_axis",data?.cus_eye_power?.right_eye?.axis)
        setValue("cus_left_eye_sph",data?.cus_eye_power?.left_eye?.sph)
        setValue("cus_left_eye_cyl",data?.cus_eye_power?.left_eye?.cyl)
        setValue("cus_left_eye_axis",data?.cus_eye_power?.left_eye?.axis)
        setValue("cus_remarks",data?.cus_remarks)
        setValue("cus_lens",data?.cus_lens)
        setValue("cus_frame",data?.cus_frame)
        setValue("cus_address",data?.cus_address)
        setValue("cus_email",data?.cus_email)
        setValue("cus_mobile",data?.cus_mobile)
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
                            <h6>Update Customer</h6>
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
                                          type="text"
                                          class="form_style"
                                          placeholder="Customer Name"
                                          {...register("cus_name", {
                                            required: true,
                                          })}
                                        />
                                        {errors.cus_name && (
                                          <span>This field is required</span>
                                        )}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="Gender"
                                          {...register("cus_gender", {
                                            required: true,
                                          })}
                                        />
                                        {errors.cus_gender && (
                                          <span>This field is required</span>
                                        )}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="Age"
                                          {...register("cus_age", {
                                            required: true,
                                          })}
                                        />
                                        {errors.cus_age && (
                                          <span>This field is required</span>
                                        )}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="Mobile number"
                                          {...register("cus_mobile", {
                                            required: true,
                                          })}
                                        />
                                        {errors.cus_mobile && (
                                          <span>This field is required</span>
                                        )}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="Email"
                                          {...register("cus_email", {
                                            required: true,
                                          })}
                                        />
                                        {errors.cus_email && (
                                          <span>This field is required</span>
                                        )}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="Address"
                                          {...register("cus_address", {
                                            required: true,
                                          })}
                                        />
                                        {errors.cus_address && (
                                          <span>This field is required</span>
                                        )}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="RE Spherical"
                                          {...register("cus_right_eye_sph", {
                                            required: true,
                                          })}
                                        />
                                        {errors.cus_right_eye_sph && (
                                          <span>This field is required</span>
                                        )}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="RE Cylender"
                                          {...register("cus_right_eye_cyl", {
                                            required: true,
                                          })}
                                        />
                                        {errors.cus_right_eye_cyl && (
                                          <span>This field is required</span>
                                        )}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="RE Axis"
                                          {...register("cus_right_eye_axis", {
                                            required: true,
                                          })}
                                        />
                                        {errors.cus_right_eye_axis && (
                                          <span>This field is required</span>
                                        )}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="LE Spherical"
                                          {...register("cus_left_eye_sph", {
                                            required: true,
                                          })}
                                        />
                                        {errors.cus_left_eye_sph && (
                                          <span>This field is required</span>
                                        )}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="LE Cylender"
                                          {...register("cus_left_eye_cyl", {
                                            required: true,
                                          })}
                                        />
                                        {errors.cus_left_eye_cyl && (
                                          <span>This field is required</span>
                                        )}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="LE Axis"
                                          {...register("cus_left_eye_axis", {
                                            required: true,
                                          })}
                                        />
                                        {errors.cus_left_eye_axis && (
                                          <span>This field is required</span>
                                        )}
                                      </div>
                                    </li>

                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="Frame"
                                          {...register("cus_frame", {
                                            required: true,
                                          })}
                                        />
                                        {errors.cus_frame && (
                                          <span>This field is required</span>
                                        )}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="Lens"
                                          {...register("cus_lens", {
                                            required: true,
                                          })}
                                        />
                                        {errors.cus_lens && (
                                          <span>This field is required</span>
                                        )}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="Remark"
                                          {...register("cus_remarks", {
                                            required: true,
                                          })}
                                        />
                                        {errors.cus_remarks && (
                                          <span>This field is required</span>
                                        )}
                                      </div>
                                    </li>
                                    <li class="button">
                                      <div class="manage-button">
                                        <button
                                          style={{ width: "85%" }}
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

export default UpdateCustomer ;
