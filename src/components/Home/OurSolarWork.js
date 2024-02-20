import React from 'react'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export const OurSolarWork = () => {
  return (
    <>
    <section className="oursolarwork">
        <div className="container-fluid">
            <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 oursolarwork-left">
                <div className='oursolarworkfirst'>
                <h2 className='text-white'>OUR SOLAR WORK</h2>
                <p className='text-white px-6'>
                VTV Energy is <span className='text-black'>Connecticut's #1 choice</span> for residential and commercial solar installations. VTV Solar is a family-owned business, based in Hamden, Connecticut. VTV Solar operates in all 50 states and US territories.
                </p>
                <button className="btnwork">Learn More</button>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 oursolarwork-right">
            <div className='oursolarworkfirst'>
            <Swiper
      // install Swiper modules
      breakpoints={{
        576: {
          width: 576,
          slidesPerView: 2,
        },
        768: {
          width: 430,
          slidesPerView: 1,
        },
      }}
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      navigation = {true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide className="bg-color1">
        <div >
         
              <img
                className="img-fluid"
                style={{height:'100%',objectFit:'cover',width:'100%'}}
                src={require("../assets/images/systemDesign.png")}
                alt=""
              />
         
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-color2">
        <div >
         
              <img
                className="img-fluid"
                style={{height:'100%',objectFit:'cover',width:'100%'}}
                src={require("../assets/images/second.png")}
                alt=""
              />
         
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-color3">
        <div>
          
              <img
                className="img-fluid"
                style={{height:'100%',objectFit:'cover',width:'100%'}}
                src={require("../assets/images/systemDesign.png")}
                alt=""
              />
            </div>
            
          
      </SwiperSlide>
    </Swiper>
                </div>
            </div>
           
            </div>
        </div>
    </section>
    </>
  )
}
