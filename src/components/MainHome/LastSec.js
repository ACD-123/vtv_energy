import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const LastSec = () => {
  const settings = {
    // dots: true,
    NavigationPreloadManager: false,
    infinite: true,
    Navigator: false,
    navigator: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <section className="last-sec">
        <div className="container">
          <h2>@VTVENERGY</h2>
        </div>
        <div className="container-fluid">
        <Slider {...settings}>
          <div className='last-sec-img'>
            <img src={require('../assets/images/slider1.png')} alt='insta1' />
          </div>
          <div className='last-sec-img'>
            <img src={require('../assets/images/slider2.png')} alt='insta2' />
          </div>
          <div className='last-sec-img'>
            <img src={require('../assets/images/slider3.png')} alt='insta3' />
          </div>
          <div className='last-sec-img'>
            <img src={require('../assets/images/slider4.png')} alt='insta4' />
          </div>
        </Slider>
          </div>
      </section>
    </>
  );
}
