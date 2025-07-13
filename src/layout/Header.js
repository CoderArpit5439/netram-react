import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Header = () => {
  const navigate = useNavigate();
  const token = Cookies.get("enetramToken");
  const role = Cookies.get("role");
  return (
    <div>
      <div class="top-bar-con">
        <div class="container"></div>
      </div>
      <header
        class="header"
        style={{ paddingTop: "5px", paddingBottom: "5px" }}
      >
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light p-0">
            <a class="navbar-brand" href="index.html">
              <figure class="logo mb-0">
                <img
                  src="assets/images/sno-logo.png"
                  alt="image"
                  class="img-fluid"
                  style={{ height: "80px", width: "auto" }}
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
              {!token ? (
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      Home
                    </a>
                  </li>

                  <li class="nav-item">
                    <a
                      class="nav-link dropdown-toggle dropdown-color navbar-text-color"
                      id="navbarDropdown2"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{ cursor: "pointer" }}
                    >
                      Patient
                    </a>
                    <div class="dropdown-menu drop-down-content">
                      <ul class="list-unstyled drop-down-pages">
                        <li class="nav-item">
                          <a
                            class="dropdown-item nav-link"
                            onClick={() => {
                              navigate("/patient");
                            }}
                          >
                            Home
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="dropdown-item nav-link"
                            onClick={() => {
                              navigate("/login/patient");
                            }}
                          >
                            Login
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link dropdown-toggle dropdown-color navbar-text-color"
                      id="navbarDropdown2"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{ cursor: "pointer" }}
                    >
                      Optical
                    </a>
                    <div class="dropdown-menu drop-down-content">
                      <ul class="list-unstyled drop-down-pages">
                        <li class="nav-item">
                          <a
                            class="dropdown-item nav-link"
                            onClick={() => {
                              navigate("/optical");
                            }}
                          >
                            Home
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="dropdown-item nav-link"
                            onClick={() => {
                              navigate("/login/optical");
                            }}
                          >
                            Login
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="dropdown-item nav-link"
                            onClick={() => {
                              navigate("/optical/dashboard");
                            }}
                          >
                            Dashboard
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link dropdown-toggle dropdown-color navbar-text-color"
                      id="navbarDropdown2"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{ cursor: "pointer" }}
                    >
                      Hospital
                    </a>
                    <div class="dropdown-menu drop-down-content">
                      <ul class="list-unstyled drop-down-pages">
                        <li class="nav-item">
                          <a
                            class="dropdown-item nav-link"
                            onClick={() => {
                              navigate("/hospital");
                            }}
                          >
                            Home
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="dropdown-item nav-link"
                            onClick={() => {
                              navigate("/login/hospital");
                            }}
                          >
                            Login
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="dropdown-item nav-link"
                            onClick={() => {
                              navigate("/hospital/dashboard");
                            }}
                          >
                            Dashboard
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              ) : role == "admin" ? (
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link dropdown-toggle dropdown-color navbar-text-color"
                      id="navbarDropdown2"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{ cursor: "pointer" }}
                    >
                      Ad,
                    </a>
                    <div class="dropdown-menu drop-down-content">
                      <ul class="list-unstyled drop-down-pages">
                       
                        <li class="nav-item">
                          <a
                            class="dropdown-item nav-link"
                            onClick={() => {
                              navigate("/dashboard/admin");
                            }}
                          >
                            Dashboard
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                 
                </ul>
              ) : role == "patient" ? (
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link dropdown-toggle dropdown-color navbar-text-color"
                      id="navbarDropdown2"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{ cursor: "pointer" }}
                    >
                      Patient
                    </a>
                    <div class="dropdown-menu drop-down-content">
                      <ul class="list-unstyled drop-down-pages">
                        <li class="nav-item">
                          <a
                            class="dropdown-item nav-link"
                            onClick={() => {
                              navigate("/patient");
                            }}
                          >
                            Home
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="dropdown-item nav-link"
                            onClick={() => {
                              navigate("/login/patient");
                            }}
                          >
                            Login
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link dropdown-toggle dropdown-color navbar-text-color"
                      id="navbarDropdown2"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{ cursor: "pointer" }}
                    >
                      Optical
                    </a>
                    <div class="dropdown-menu drop-down-content">
                      <ul class="list-unstyled drop-down-pages">
                        <li class="nav-item">
                          <a
                            class="dropdown-item nav-link"
                            onClick={() => {
                              navigate("/optical");
                            }}
                          >
                            Home
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="dropdown-item nav-link"
                            onClick={() => {
                              navigate("/login/optical");
                            }}
                          >
                            Login
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="dropdown-item nav-link"
                            onClick={() => {
                              navigate("/optical/dashboard");
                            }}
                          >
                            Dashboard
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link dropdown-toggle dropdown-color navbar-text-color"
                      id="navbarDropdown2"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{ cursor: "pointer" }}
                    >
                      Hospital
                    </a>
                    <div class="dropdown-menu drop-down-content">
                      <ul class="list-unstyled drop-down-pages">
                        <li class="nav-item">
                          <a
                            class="dropdown-item nav-link"
                            onClick={() => {
                              navigate("/hospital");
                            }}
                          >
                            Home
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="dropdown-item nav-link"
                            onClick={() => {
                              navigate("/login/hospital");
                            }}
                          >
                            Login
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="dropdown-item nav-link"
                            onClick={() => {
                              navigate("/hospital/dashboard");
                            }}
                          >
                            Dashboard
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              ) : role == "hospital" ? (
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link dropdown-toggle dropdown-color navbar-text-color"
                      id="navbarDropdown2"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{ cursor: "pointer" }}
                    >
                      Patient
                    </a>
                    <div class="dropdown-menu drop-down-content">
                      <ul class="list-unstyled drop-down-pages">
                        <li class="nav-item">
                          <a
                            class="dropdown-item nav-link"
                            onClick={() => {
                              navigate("/patient");
                            }}
                          >
                            Home
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="dropdown-item nav-link"
                            onClick={() => {
                              navigate("/login/patient");
                            }}
                          >
                            Login
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link dropdown-toggle dropdown-color navbar-text-color"
                      id="navbarDropdown2"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{ cursor: "pointer" }}
                    >
                      Optical
                    </a>
                    <div class="dropdown-menu drop-down-content">
                      <ul class="list-unstyled drop-down-pages">
                        <li class="nav-item">
                          <a
                            class="dropdown-item nav-link"
                            onClick={() => {
                              navigate("/optical");
                            }}
                          >
                            Home
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="dropdown-item nav-link"
                            onClick={() => {
                              navigate("/login/optical");
                            }}
                          >
                            Login
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="dropdown-item nav-link"
                            onClick={() => {
                              navigate("/optical/dashboard");
                            }}
                          >
                            Dashboard
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link dropdown-toggle dropdown-color navbar-text-color"
                      id="navbarDropdown2"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{ cursor: "pointer" }}
                    >
                      Hospital
                    </a>
                    <div class="dropdown-menu drop-down-content">
                      <ul class="list-unstyled drop-down-pages">
                        <li class="nav-item">
                          <a
                            class="dropdown-item nav-link"
                            onClick={() => {
                              navigate("/hospital");
                            }}
                          >
                            Home
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="dropdown-item nav-link"
                            onClick={() => {
                              navigate("/login/hospital");
                            }}
                          >
                            Login
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="dropdown-item nav-link"
                            onClick={() => {
                              navigate("/hospital/dashboard");
                            }}
                          >
                            Dashboard
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              ) : role == "optical" ? (
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link dropdown-toggle dropdown-color navbar-text-color"
                      id="navbarDropdown2"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{ cursor: "pointer" }}
                    >
                      Patient
                    </a>
                    <div class="dropdown-menu drop-down-content">
                      <ul class="list-unstyled drop-down-pages">
                        <li class="nav-item">
                          <a
                            class="dropdown-item nav-link"
                            onClick={() => {
                              navigate("/patient");
                            }}
                          >
                            Home
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="dropdown-item nav-link"
                            onClick={() => {
                              navigate("/login/patient");
                            }}
                          >
                            Login
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link dropdown-toggle dropdown-color navbar-text-color"
                      id="navbarDropdown2"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{ cursor: "pointer" }}
                    >
                      Optical
                    </a>
                    <div class="dropdown-menu drop-down-content">
                      <ul class="list-unstyled drop-down-pages">
                        <li class="nav-item">
                          <a
                            class="dropdown-item nav-link"
                            onClick={() => {
                              navigate("/optical");
                            }}
                          >
                            Home
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="dropdown-item nav-link"
                            onClick={() => {
                              navigate("/login/optical");
                            }}
                          >
                            Login
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="dropdown-item nav-link"
                            onClick={() => {
                              navigate("/optical/dashboard");
                            }}
                          >
                            Dashboard
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link dropdown-toggle dropdown-color navbar-text-color"
                      id="navbarDropdown2"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{ cursor: "pointer" }}
                    >
                      Hospital
                    </a>
                    <div class="dropdown-menu drop-down-content">
                      <ul class="list-unstyled drop-down-pages">
                        <li class="nav-item">
                          <a
                            class="dropdown-item nav-link"
                            onClick={() => {
                              navigate("/hospital");
                            }}
                          >
                            Home
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="dropdown-item nav-link"
                            onClick={() => {
                              navigate("/login/hospital");
                            }}
                          >
                            Login
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="dropdown-item nav-link"
                            onClick={() => {
                              navigate("/hospital/dashboard");
                            }}
                          >
                            Dashboard
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              ) : null}
              <div class="last_list">
                <a class="search" href="#search">
                  <i class="search-box fa-solid fa-magnifying-glass"></i>
                </a>
                <a
                  onClick={() => {
                    navigate("/contact");
                  }}
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
  );
};

export default Header;
