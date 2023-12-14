import React from 'react'
import img7 from '../images/image-07.png';
import img8 from '../images/image-08.png';
import img9 from '../images/image-09.png';
import img10 from '../images/image-10.png';
import img11 from '../images/image-11.png';

const Footer = () => {
  return (
    <div className='footer_container mt-4'>
      <div className="upper">
      <div className="upper_left">
        <p>© 2022 Sri Lanka Railways (SLR). All rights Reserved Sri Lanka Railways</p>
        <ul style={{listStyle: "none"}}>
          <li>Sri Lanka Railways</li>
          <li>Sri Lanka Railways Headquarters,</li>
          <li>Colombo 10 , Sri Lanka</li>
          <li>Telephones : +94 11 4 600 111</li>
        </ul>
      </div>
      <div className="upper_right">
        <div className="upper_right_upper">
          <div className="div_one">
            <i>Technology Partner</i>
          </div>
          <div className="div_two">
            <img className='slt_logo' src={img7} alt="" />
          </div>
          <div className="div_three">
            <img className='national_emblem' src={img8} alt="" />
          </div>
          <div className="div_four">
            <img className='railway_logo' src={img9} alt="" />
          </div>
        </div>
        <div className="upper_right_lower">
          <div className='appstore_div'>
              <img className="appstore_logo" src={img10} alt="" />
          </div>          
          <div className='google_play_div'>
            <img className='google_play_logo' src={img11} alt="" />
          </div>
        </div>
      </div>
      </div>
      <div className="lower">
        <ul style={{listStyle: "none"}}>
          <li>FAQ</li>
          <li>About Us</li>
          <li>Privacy Policy</li>
          <li>Train timetable</li>
          <li>Ticket printing locations</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer