import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export const LastSec = () => {
  return (
    <>
    <section className="last-sec">
    <div className="container">
        <h2>
        @VTVENERGY 
        </h2>
        </div>
        <div className='container-fluid'>
        <Swiper
          breakpoints={{
            576: {
              width: 576,
              slidesPerView: 5,
            },
            768: {
              width: 768,
              slidesPerView: 3,
            },
          }}
          loop={true}
          modules={[ Pagination, Autoplay]} // Here's the change
          spaceBetween={0}
          slidesPerView={1}
        //   navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: false }}
          autoplay={{ delay: 6500, disableOnInteraction: false }}
        >
            <SwiperSlide className="bg-color1">
              <div >
               
                    <img
                      className="img-fluid"
                      style={{height:'100%',objectFit:'cover',width:'100%'}}
                      src={require("../assets/images/slider1.png")}
                      alt=""
                    />
               
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-color2">
              <div >
               
                    <img
                      className="img-fluid"
                      style={{height:'100%',objectFit:'cover',width:'100%'}}
                      src={require("../assets/images/slider2.png")}
                      alt=""
                    />
               
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-color3">
              <div>
                
                    <img
                      className="img-fluid"
                      style={{height:'100%',objectFit:'cover',width:'100%'}}
                      src={require("../assets/images/slider3.png")}
                      alt=""
                    />
                  </div>
                  
                
            </SwiperSlide>
            <SwiperSlide className="bg-color2">
              <div >
               
                    <img
                      className="img-fluid"
                      style={{height:'100%',objectFit:'cover',width:'100%'}}
                      src={require("../assets/images/slider4.png")}
                      alt=""
                    />
               
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-color3">
              <div>
                
                    <img
                      className="img-fluid"
                      style={{height:'100%',objectFit:'cover',width:'100%'}}
                      src={require("../assets/images/slider5.png")}
                      alt=""
                    />
                  </div>
                  
                
            </SwiperSlide>
          </Swiper>
        </div>
    </section>
    </>
  )
}
