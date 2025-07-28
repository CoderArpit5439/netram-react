import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addPatient } from "../../redux/Slices/patient/PatientSlice";

const CreatePatient = ({ show, onClose }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  if (!show) return null;
  const onSubmit = (data) => {
    console.log(data);

    const ptn_left_eye = JSON.stringify({
      sph: data.ptn_left_eye_sph,
      cyl: data.ptn_left_eye_cyl,
      axis: data.ptn_left_eye_axis,
      add : data.ptn_eye_add,
    });
    const ptn_right_eye = JSON.stringify({
      sph: data.ptn_right_eye_sph,
      cyl: data.ptn_right_eye_cyl,
      axis: data.ptn_right_eye_axis,
      add : data.ptn_eye_add,
    });
    data.ptn_left_eye = ptn_left_eye;
    data.ptn_right_eye = ptn_right_eye;
    // Here you can handle the form submission, e.g., send data to an API
    onClose(); // Close the modal after submission
dispatch(addPatient(data)); // Dispatch the action to add patient
  };

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
                            <h6>Register Customer</h6>
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
                                          {...register("ptn_name", {
                                            required: true,
                                          })}
                                        />
                                        {errors.ptn_name && (
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
                                          {...register("ptn_gender", {
                                            required: true,
                                          })}
                                        />
                                        {errors.ptn_gender && (
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
                                          {...register("ptn_age", {
                                            required: true,
                                          })}
                                        />
                                        {errors.ptn_age && (
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
                                          {...register("ptn_mobile", {
                                            required: true,
                                          })}
                                        />
                                        {errors.ptn_mobile && (
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
                                          {...register("ptn_email", {
                                            required: true,
                                          })}
                                        />
                                        {errors.ptn_email && (
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
                                          {...register("ptn_address", {
                                            required: true,
                                          })}
                                        />
                                        {errors.ptn_address && (
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
                                          {...register("ptn_right_eye_sph", {
                                            required: true,
                                          })}
                                        />
                                        {errors.ptn_right_eye_sph && (
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
                                          {...register("ptn_right_eye_cyl", {
                                            required: true,
                                          })}
                                        />
                                        {errors.ptn_right_eye_cyl && (
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
                                          {...register("ptn_right_eye_axis", {
                                            required: true,
                                          })}
                                        />
                                        {errors.ptn_right_eye_axis && (
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
                                          {...register("ptn_left_eye_sph", {
                                            required: true,
                                          })}
                                        />
                                        {errors.ptn_left_eye_sph && (
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
                                          {...register("ptn_left_eye_cyl", {
                                            required: true,
                                          })}
                                        />
                                        {errors.ptn_left_eye_cyl && (
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
                                          {...register("ptn_left_eye_axis", {
                                            required: true,
                                          })}
                                        />
                                        {errors.ptn_left_eye_axis && (
                                          <span>This field is required</span>
                                        )}
                                      </div>
                                    </li>
                                    <li class="">
                                      <div class="form-group float-left input1 position-relative">
                                        <input
                                          type="text"
                                          class="form_style"
                                          placeholder="Addition"
                                          {...register("ptn_eye_add", {
                                            required: true,
                                          })}
                                        />
                                        {errors.ptn_eye_add && (
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
                                          {...register("ptn_frame", {
                                            required: true,
                                          })}
                                        />
                                        {errors.ptn_frame && (
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
                                          {...register("ptn_lens", {
                                            required: true,
                                          })}
                                        />
                                        {errors.ptn_lens && (
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
                                          {...register("ptn_remark", {
                                            required: true,
                                          })}
                                        />
                                        {errors.ptn_remark   && (
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

export default CreatePatient;
