import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div class="top-bar-con">
          <div class="container">
            <div class="top-bar-box">
              <div class="top-bar-info">
                <ul class="list-unstyled mb-0">
                  <li class="info">
                    <img
                      src="assets/images/header-phoneimage.png"
                      alt="image"
                      class="img-fluid"
                    />
                    <a href="tel:9300062750" class="text-decoration-none">
                      <span class="number">9300062750</span>
                    </a>
                  </li>
                  <li class="info">
                            <img src="assets/images/header-locationimage.png" alt="image" class="img-fluid"/>
                            <a href="https://maps.app.goo.gl/PuFApPuaENvVnCkz7"
                                class="text-decoration-none address mb-0">Indore, India
                            </a>
                        </li>
                </ul>
              </div>
              <div class="top-bar-social">
                <div class="info">
                        <img src="assets/images/header-clockimage.png" alt="image" class="img-fluid"/>
                        <p class="mb-0">Mon - Sun 11:00 am - 7:00 pm</p>
                    </div>
                <ul class="list-unstyled mb-0 social-icons">
                        <li><a href="https://www.facebook.com/" class="text-decoration-none"><i class="fa-brands fa-facebook social-networks" aria-hidden="true"></i></a></li>
                        <li><a href="https://twitter.com/" class="text-decoration-none"><i class="fa-brands fa-x-twitter social-networks" aria-hidden="true"></i></a></li>
                        <li><a href="https://pk.linkedin.com/" class="text-decoration-none"><i class="fa-brands fa-linkedin social-networks" aria-hidden="true"></i></a></li>
                    </ul>
              </div>
            </div>
          </div>
        </div>
        <header class="header" style={{paddingTop:"5px",paddingBottom:"5px"}}>
          <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light p-0">
              <a class="navbar-brand" href="index.html">
                <figure class="logo mb-0">
                  <img
                    src="assets/images/sno-logo.png"
                    alt="image"
                    class="img-fluid"
                    style={{height:"80px", width:"auto"}}
                  />
                </figure>
              </a>
              <button
                class="navbar-toggler collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                  {/* <li class="nav-item dropdown active">
                            <a class="nav-link dropdown-toggle dropdown-color navbar-text-color" href="#"
                                id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false"> Home </a>
                            <div class="dropdown-menu drop-down-content">
                                <ul class="list-unstyled drop-down-pages">
                                    <li class="nav-item active"><a class="dropdown-item nav-link" href="index.html">Home 1</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="index1.html">Home 2</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="index2.html">Home 3</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about.html">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="service.html">Services</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle dropdown-color navbar-text-color" href="#"
                                id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false"> Pages </a>
                            <div class="dropdown-menu drop-down-content">
                                <ul class="list-unstyled drop-down-pages">
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="service-detail.html">Service Details</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="case-studies.html">Case Studies</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="pricing.html">Pricing</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="team.html">Team</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="review.html">Review</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="faq.html">Faq's</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="404.html">404</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="coming-soon.html">Coming Soon</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle dropdown-color navbar-text-color" href="#"
                                id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false"> Blog </a>
                            <div class="dropdown-menu drop-down-content">
                                <ul class="list-unstyled drop-down-pages">
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="blog.html">Blog</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="single-blog.html">Single Blog</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="load-more.html">Load More</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="one-column.html">One Column</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="two-column.html">Two Column</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="three-column.html">Three Column</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="three-colum-sidbar.html">Three Column Sidebar</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="four-column.html">Four Column</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="six-colum-full-wide.html">Six Column</a></li>
                                </ul>
                            </div>
                        </li> */}
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      Home
                    </a>
                  </li>
                </ul>
                <div class="last_list">
                  <a class="search" href="#search">
                    <i class="search-box fa-solid fa-magnifying-glass"></i>
                  </a>
                  <a
                    onClick={() => {navigate('/contact')}}
                    class="text-decoration-none get_started"
                  >
                    Appointment<i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </header>
    </div>
  )
}

export default Header