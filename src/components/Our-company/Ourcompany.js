import React from "react";
import About1 from "../images/About/about1.png";
import Icon1 from "../images/About/icons/icons1.png"
import Icon2 from "../images/About/icons/icons2.png"
import AboutBG from "../images/About/about-backgrund.jpg";

const Ourcompany = () => {
  return (
    <>
      <section id="our_company_section" style={{ backgroundImage: AboutBG }}>
        <div id="wrpper_details">
          <div id="wrpper_para">
            <h3>Our Company</h3>

            <h2>Our Company</h2>
                        <p>
              Valiant Corporation is a Service Provider to deliver the necessary
              consumer goods for the comfortable city life in prompt and
              appropriate way with reasonable price. Set customer satisfaction
              as 1st priority in our company business, Valiant Corporation makes
              much of building up the supply chain for our clients above all by
              prompt, appropriate and reasonable way. To realize our business
              strategy, experts with professional knowledge have designed the
              total logistics solution by making full use of advanced and
              improving method.
            </p>
            <div className="icons">
           
            <figure><img src={Icon1} /></figure>
            <h2 className="icons_height">Brand Strategy</h2>

            <figure><img src={Icon2}  /></figure>
            <h2 className="icons_height">Expert Team</h2>

            </div>

          </div>
          <img src={About1} alt="vision" />
        </div>
      </section>
    </>
  );
};

export default Ourcompany;
