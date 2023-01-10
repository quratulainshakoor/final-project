import React from "react";
import LogoBrand from "../images/Home/logo-brand.png";
const Footer = () => {
  return (
    <>
      <section className="">
        <footer className="text-center" style={{ background: "lightgray" }}>
          <div className="container p-4">
            <div className="row">
              <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <img src={LogoBrand} height={"46px"} />
                <div className="subsc">
                <i class="fa-solid fa-paper-plane"></i>
                  <input
                    type="search"
                    placeholder="SUBSCRIBE TO OUR NEWSLETTER"
                    id="search"
                  />
                </div>
                <div class="icons">
                  <i class="fa-brands fa-square-facebook"></i>
                  <i class="fa-brands fa-square-twitter"></i>
                  <i class="fa-brands fa-linkedin"></i>
                  <i class="fa-brands fa-square-instagram"></i>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase text-dark">Services</h5>

                <ul className="list-unstyled mb-0 text-dark">
                  <li>
                    <a href="#!" className="text-dark">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Corporate Services
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Engineering Services
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Career
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-0">Contact Info</h5>

                <ul className="list-unstyled">
                  <li>
                    <p>
                      C.17 block A kazimabad, Jinnah Avenue post office Model
                      Coloney, Karachi - Pakistan
                    </p>
                  </li>
                  <li>
                    <p>Email:info@valiant-corporation.com</p>
                  </li>
                  <li>
                    <p>Phone:+92-21-34508181</p>
                  </li>
                  <li>
                    <p>Whatsapp:+92-302-822-0047</p>
                  </li>
                  <li>
                    <p>Website: www.valiant-corporation.com</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center p-3 text-#6F76A8">
            Copyright © 2022 Valiant Corporation
            <a className="text-#029894" href="https://www.digitechinfra.com/">
              Digi tech infra
            </a>
            Privacy Policy Terms & Conditions
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
