import React, { useEffect } from 'react';
import Aos from 'aos';

const OurServices = () => {

  useEffect(()=>{
    Aos.init({duration: 2000});
  },[])

  return (
    <div id='ourservices' className='container'>
      <div className="our_services_header_container">
        <h2 className='text-center'>Our Services</h2>
      </div>
      <div className="our_services_upper">
        <div data-aos="flip-left" className="service_container">
          <p className='fs-5'>Colombo Fort - Beliatta</p>
          <p className='fs-6'>Intercity & Express trains</p>
          <p>Available class types : 1st ,2nd and 3rd</p>
        </div>
        <div data-aos="zoom-in" className="service_container">
          <p className='fs-5'>Colombo Fort - Badulla</p>
          <p className='fs-6'>Intercity & Express trains</p>
          <p>Available class types : 1st ,2nd, 3rd and observations saloon</p>
        </div>
        <div data-aos="flip-right" className="service_container">
          <p className='fs-5'>Colombo Fort - Talaimannar</p>
          <p className='fs-6'>Night mail train</p>
          <p>Available class types : 2nd class</p>
        </div>
      </div>
      <div className="our_services_middle">
      <div data-aos="flip-left" className="service_container">
          <p className='fs-5'>Colombo Fort - Jaffna</p>
          <p className='fs-6'>Intercity, Express & Night mail trains</p>
          <p>Available class types : 1st ,2nd and 3rd</p>
        </div>
        <div data-aos="zoom-in" className="service_container">
          <p className='fs-5'>Colombo Fort - Trincomalee</p>
          <p className='fs-6'>Night mail train</p>
          <p>Available class types : 2nd and 3rd</p>
        </div>
        <div data-aos="flip-right" className="service_container">
          <p className='fs-5'>Kandy - Badulla</p>
          <p className='fs-6'>Slow train</p>
          <p>Available class types : Observations saloon</p>
        </div>
      </div>
      <div className="our_services_lower">
      <div data-aos="zoom-in" className="service_container">
          <p className='fs-5'>Colombo Fort - Kandy</p>
          <p className='fs-6'>Intercity & Express trains</p>
          <p>Available class types : 1st ,2nd, 3rd and observations saloon</p>
        </div>
        <div data-aos="zoom-in" className="service_container">
          <p className='fs-5'>Colombo Fort - Batticaloa</p>
          <p className='fs-6'>Intercity, Express & Night mail trains</p>
          <p>Available class types : 1st, 2nd and 3rd</p>
        </div>
        <div className="service_container" style={{display:"none"}}>
          {/* <p className='fs-5'>Colombo Fort - Beliatta</p>
          <p className='fs-6'>Intercity & Express trains</p>
          <p>Available class types : 1st ,2nd and 3rd</p> */}
        </div>
      </div>
    </div>
  )
}

export default OurServices