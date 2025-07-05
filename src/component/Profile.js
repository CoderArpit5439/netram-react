import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";

const Profile = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div>
      <div class="container py-5">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            {/* <!-- Profile Card -->  */}
            <div class="card shadow-sm border-0">
              <div class="card-body p-4">
                {/* <!-- Profile Header --> */}
                <div class="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4">
                  <div>
                    <figure class="mb-0 image2">
                      <img
                        src="./assets/images/testimonial-personimage2.jpg"
                        alt="image"
                        class="img-fluid invert_effect"
                      />
                    </figure>
                  </div>
                  <div>
                    <h4 class="fw-bold mb-1">Netra Jyoti Hospital</h4>
                    <p class="text-muted mb-0">
                      Eye Care & Cataract Surgery Specialist
                    </p>
                  </div>
                  {/* <!-- Button --> */}
                  <button
                    class="btn btn-primary"
                    // data-bs-toggle="modal"
                    // data-bs-target="#updateProfileModal"
                    type="button"
                    onClick={open}
                  >
                    <i class="fa fa-edit me-2"></i>Update Profile
                  </button>
                </div>

                {/* <!-- Contact Info --> */}
                <div class="row g-4">
                  <div class="col-md-6">
                    <h6 class="text-uppercase text-muted">Contact Details</h6>
                    <ul class="list-unstyled mb-0">
                      <li>
                        <i class="fa fa-user me-2 text-primary"></i>Dr. V. Rao
                      </li>
                      <li>
                        <i class="fa fa-phone me-2 text-primary"></i>
                        022-44556677
                      </li>
                      <li>
                        <i class="fa fa-envelope me-2 text-primary"></i>
                        care@netrajyoti.com
                      </li>
                    </ul>
                  </div>

                  <div class="col-md-6">
                    <h6 class="text-uppercase text-muted">Location</h6>
                    <ul class="list-unstyled mb-0">
                      <li>
                        <i class="fa fa-map-marker-alt me-2 text-primary"></i>
                        Borivali West, Mumbai
                      </li>
                      <li>
                        <i class="fa fa-thumbtack me-2 text-primary"></i>Pin:
                        400092
                      </li>
                    </ul>
                  </div>
                </div>

                {/* <!-- Divider --> */}
                <hr class="my-4" />

                {/* <!-- Specialties or Services --> */}
                <div class="row">
                  <div class="col-md-6">
                    <h6 class="text-uppercase text-muted">Specialties</h6>
                    <span class="badge bg-info me-1 mb-1">Cataract</span>
                    <span class="badge bg-info me-1 mb-1">Retina</span>
                    <span class="badge bg-info me-1 mb-1">Pediatric</span>
                  </div>

                  <div class="col-md-6">
                    <h6 class="text-uppercase text-muted">Rating</h6>
                    <p class="mb-0">
                      <span class="text-warning">★★★★☆</span>
                      <small class="text-muted">(4.5 / 5)</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div class="modal fade" id="updateProfileModal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <form>
              <div class="modal-header">
                <h5 class="modal-title">Update Profile</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div class="modal-body">
                {/* <!-- Form fields here --> */}
                <input
                  type="text"
                  class="form-control mb-3"
                  placeholder="Hospital/Shop Name"
                />
                <input
                  type="email"
                  class="form-control mb-3"
                  placeholder="Email"
                />
                <input
                  type="text"
                  class="form-control mb-3"
                  placeholder="Phone"
                />
                {/* <!-- Add more as needed --> */}
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" class="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* mantine modal */}
      <Modal opened={opened} onClose={close} title="Authentication">
        {/* Modal content */}
      </Modal>
    </div>
  );
};

export default Profile;
