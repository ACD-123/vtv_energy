import React, { useState } from 'react'
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export const FeatureProjects = () => {
    const [activeTab, setActiveTab] = useState("Commercial Projects");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderImage = () => {
    switch (activeTab) {
      case "Commercial Projects":
        return (
            <Swiper
            // install Swiper modules
            breakpoints={{
              576: {
                width: 576,
                slidesPerView: 3,
              },
              768: {
                width: 300,
                slidesPerView: 1,
              },
            }}
            loop={true}
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            navigation = {true}
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
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
        );
      case "Residential Projects":
        return (
            <Swiper
            // install Swiper modules
            breakpoints={{
              576: {
                width: 576,
                slidesPerView: 3,
              },
              768: {
                width: 300,
                slidesPerView: 1,
              },
            }}
            loop={true}
            onRealIndexChange={(swiper) => console.log(swiper.realIndex)}
            modules={[Navigation, Pagination]}
            navigation = {true}
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
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
        );
      default:
        return null;
    }
  };
  return (
    <>
    <section className="featureProjects">
    <div className='container'>
    <h2>Featured Projects</h2>
    <div className='row'>
        <div className='col-lg-2'>
    <Tabs
                id="controlled-tab-example"
                activeKey={activeTab}
                onSelect={handleTabChange}
                className="mb-3"
              >
                <Tab eventKey="Commercial Projects" title="Commercial Projects">
                  
                </Tab>
                <Tab eventKey="Residential Projects" title="Residential Projects">
                  
                </Tab>
              
              </Tabs>
              </div>
                <div className='col-lg-10'>
                {renderImage()}
                    </div>
    </div>
    </div>
    </section>
    </>
  )
}
