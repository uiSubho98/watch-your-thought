import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/WYT LOGO.png"

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="container-fluid container navbar-full">
        <Link class="navbar-brand" href="#">
         <img className="img-fluid logo" src={Logo} alt="" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" href="#">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" href="#">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" href="#">
                Our Objective
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" href="#">
                Expert
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" href="#">
                Services
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" href="#">
                Blog
              </Link>
            </li>
          </ul>
          <div>
            <button className="contact-btn">Contact Us</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
