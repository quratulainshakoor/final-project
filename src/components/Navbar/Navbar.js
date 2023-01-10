import React from "react";
import { NavLink } from "react-router-dom";
import LogoBrand from "../images/Home/logo-brand.png";
import Phone from "../images/Home/phone.png";

const NavBar = () => {
  return (
    <>
     <div className="main-header">

      <header>
        <div class="header-1">
          <div class="col-md-3 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
            <a href="#!" class="md-2">
              <img src={LogoBrand} height={"46px"} />
            </a>
          </div>

          <form action="" className="col-md-2">
            <div>
              <i class="fas fa-search"></i>
              <input type="search" placeholder="search here" id="search" />
            </div>
          </form>

          <div className="col-md-4 d-flex">
            <img src={Phone} alt="phone" />
            <div class="icons">
              <i class="fa-brands fa-square-facebook"></i>
              <i class="fa-brands fa-square-twitter"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-square-instagram"></i>
            </div>
          </div>
        </div>

        <div className="navbar">
          <nav className="navbar navbar-expand-lg  ">
            <div className="container-fluid">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-45 mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="/businessactivities"
                    >
                      BusinessActivities
                    </NavLink>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Services
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Service 1
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Service 2
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Service 3
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="/career"
                    >
                      Career
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <button class="btns" data-mdb-ripple-color="dark" type="button">
            <i class="fas fa-pencil"></i>Get A Free Quote
          </button>
        </div>
      </header>
      </div>
    </>
  );
};

export default NavBar;
