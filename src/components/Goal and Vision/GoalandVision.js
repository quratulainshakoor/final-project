import React from 'react'
import About2 from "../images/About/about2.png";
import Icon3 from "../images/About/icons/icons3.png"
import Icon4 from "../images/About/icons/icons4.png"
import AboutBG from "../images/About/about-backgrund.jpg"; 

const GoalandVision = () => {
  return (
    <>
       <section id="our_company_section" style={{ backgroundImage: AboutBG }}>
        <div id="wrpper_details">
          <img src={About2} alt="vision" />
          <div id="wrpper_para">
            <h3>Goal and Vision</h3>

            <h2>Goal and Vision</h2>
                        <p>
                        Valiant Corporation  continue making our efforts to establish the higher quality SCM aligning with customer requirements by proactively making substantial investment to upsizing of logistics facilities, construction of smart logistics with utilization of IT, employee training and as such. Moreover, we are targeting to provide the high-quality services by precisely catching the demand in market expanding year by year.


            </p>
            <div className="icons">
            <figure><img src={Icon3}  /></figure>
            <h2 className="icons_height">Fast Delivery</h2>

            <figure><img src={Icon4} /></figure>
            <h2 className="icons_height">Ongoing Report</h2>

            </div>

          </div>
        </div>
      </section>
    
    </>
  )
}

export default GoalandVision