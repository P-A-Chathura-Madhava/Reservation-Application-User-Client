import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import img1 from "../images/image-01.jpg";
import img2 from "../images/image-02.jpg";
import img3 from "../images/image-03.jpg";
import img4 from "../images/image-04.jpg";
import img5 from "../images/image-05.jpg";
import img6 from "../images/image-06.jpg";

const Gallery = () => {
  useEffect(()=>{
    Aos.init({duration: 2000});
  }, [])

  return (
    <div className='container gallery_container'>
      <div className="header_container">
        <h2>Gallery</h2>
      </div>
      <div className="upper_container">
        <div className='img_container'>
          <img data-aos="fade-right" className='gallery_image' src={img1} alt="" />
        </div>
        <div className='img_container'>
        <img data-aos="zoom-in" className='gallery_image' src={img2} alt="" />
        </div>
        <div className='img_container'>
        <img data-aos="fade-left" className='gallery_image' src={img3} alt="" />
        </div>
      </div>
      <div className="lower_container">
      <div className='img_container'>
      <img data-aos="fade-right" className='gallery_image' src={img4} alt="" />
      </div>
        <div className='img_container'>
        <img data-aos="zoom-in" className='gallery_image' src={img5} alt="" />
        </div>
        <div className='img_container'>
        <img data-aos="fade-left" className='gallery_image' src={img6} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Gallery