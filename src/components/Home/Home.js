
import React from 'react'
import Ourcompany from '../Our-company/Ourcompany';
import GoalandVision from '../Goal and Vision/GoalandVision';

const Home = () => {
  return (
  <>
   

   <div className="main-header">

        
     <section id="hero" className="d-flex align-items-center">
    <div className="container" data-aos="zoom-out" data-aos-delay="100">
      <h2 className='hero-text'>THE VALIANT CORPORATION</h2>
      <h1 className='hero-para'>we provide the industry<br/> with advanced solutions</h1>
      <div className="d-flex">
        <button className="hero-btn">Get Started Now</button> 
      </div>
    </div>
  </section>

      <Ourcompany/>
      <GoalandVision/>
    
     </div>



  </>
  )
}

export default Home
