import React from 'react'

const Card = ({data}) => {
  return (
    <div>
       <div class="item">
                      <div className="service-box">
                        <div
                          class="card shadow-sm"
                          style={{ width: "22rem" }}
                        >
                          <div class="position-relative m-2 overflow-hidden rounded">
                            <img
                              src={data?.image}
                              alt="card-image"
                              class="img-fluid rounded"
                              style={{ height: "14rem", objectFit: "cover" }}
                            />
                          </div>
                          <div class="card-body">
                            <div class="d-flex align-items-center mb-2">
                              <h5 class="card-title mb-0 text-dark fw-semibold">
                                {data?.name}
                              </h5>
                              <div class="d-flex align-items-center ms-auto">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="#f59e0b"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                                <span class="ms-2 text-secondary">{data?.rating}</span>
                              </div>
                            </div>

                          </div>
                            <p class="card-text text-secondary small">
                             {data?.specialties ? data?.specialties?.map((spec,i) => spec + ", " ) : "" }
                            </p>
                            <p class="card-text text-secondary small">
                             {data?.address + ", " +data?.city + ", " + data?.state}
                            </p>
                        </div>
                      </div>
                    </div>
    </div>
  )
}

export default Card
