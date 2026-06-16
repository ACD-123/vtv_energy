import React, { useState } from 'react';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const FeatureProjects = () => {
  const [activeTab, setActiveTab] = useState("Utility Assets");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderImage = () => {
    switch (activeTab) {
      case "Utility Assets":
        return (
          <Swiper
            breakpoints={{
              576: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
          >
            <SwiperSlide className="bg-color1" style={{ background: 'transparent' }}>
              <div style={{ 
                borderRadius: '12px', 
                overflow: 'hidden', 
                background: '#121212', 
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ overflow: 'hidden', borderRadius: '12px 12px 0 0' }}>
                  <img
                    className="img-fluid animate-hover"
                    style={{ height: '400px', objectFit: 'cover', width: '100%', transition: 'all 0.5s ease', borderRadius: '12px 12px 0 0' }}
                    src={require("../assets/images/nuclear_smr.png")}
                    alt="Nuclear SMR"
                  />
                </div>
                <div style={{ padding: '20px', textAlign: 'center' }}>
                  <h4 className="text-white m-0" style={{ fontSize: '1.4rem', fontWeight: '600' }}>Gen-IV SMR Station</h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-color2" style={{ background: 'transparent' }}>
              <div style={{ 
                borderRadius: '12px', 
                overflow: 'hidden', 
                background: '#121212', 
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ overflow: 'hidden', borderRadius: '12px 12px 0 0' }}>
                  <img
                    className="img-fluid animate-hover"
                    style={{ height: '400px', objectFit: 'cover', width: '100%', transition: 'all 0.5s ease', borderRadius: '12px 12px 0 0' }}
                    src={require("../assets/images/natural_gas.png")}
                    alt="Natural Gas Turbine"
                  />
                </div>
                <div style={{ padding: '20px', textAlign: 'center' }}>
                  <h4 className="text-white m-0" style={{ fontSize: '1.4rem', fontWeight: '600' }}>Combined Cycle Peaker Plant</h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-color3" style={{ background: 'transparent' }}>
              <div style={{ 
                borderRadius: '12px', 
                overflow: 'hidden', 
                background: '#121212', 
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ overflow: 'hidden', borderRadius: '12px 12px 0 0' }}>
                  <img
                    className="img-fluid animate-hover"
                    style={{ height: '400px', objectFit: 'cover', width: '100%', transition: 'all 0.5s ease', borderRadius: '12px 12px 0 0' }}
                    src={require("../assets/images/bess.png")}
                    alt="BESS Storage Containers"
                  />
                </div>
                <div style={{ padding: '20px', textAlign: 'center' }}>
                  <h4 className="text-white m-0" style={{ fontSize: '1.4rem', fontWeight: '600' }}>100MW Battery Energy Storage System (BESS)</h4>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        );
      case "Microgrid Projects":
        return (
          <Swiper
            breakpoints={{
              576: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
          >
            <SwiperSlide className="bg-color1" style={{ background: 'transparent' }}>
              <div style={{ 
                borderRadius: '12px', 
                overflow: 'hidden', 
                background: '#121212', 
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ overflow: 'hidden', borderRadius: '12px 12px 0 0' }}>
                  <img
                    className="img-fluid animate-hover"
                    style={{ height: '400px', objectFit: 'cover', width: '100%', transition: 'all 0.5s ease', borderRadius: '12px 12px 0 0' }}
                    src={require("../assets/images/commercial_infra.png")}
                    alt="Industrial Microgrid"
                  />
                </div>
                <div style={{ padding: '20px', textAlign: 'center' }}>
                  <h4 className="text-white m-0" style={{ fontSize: '1.4rem', fontWeight: '600' }}>Industrial Manufacturing Microgrid</h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-color2" style={{ background: 'transparent' }}>
              <div style={{ 
                borderRadius: '12px', 
                overflow: 'hidden', 
                background: '#121212', 
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ overflow: 'hidden', borderRadius: '12px 12px 0 0' }}>
                  <img
                    className="img-fluid animate-hover"
                    style={{ height: '400px', objectFit: 'cover', width: '100%', transition: 'all 0.5s ease', borderRadius: '12px 12px 0 0' }}
                    src={require("../assets/images/bess.png")}
                    alt="BESS integration"
                  />
                </div>
                <div style={{ padding: '20px', textAlign: 'center' }}>
                  <h4 className="text-white m-0" style={{ fontSize: '1.4rem', fontWeight: '600' }}>Substation Storage Integration</h4>
                </div>
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
      <section className="featureProjects" style={{ padding: '60px 0', background: '#0B0B0B' }}>
        <div className='container'>
          <h2 style={{ fontFamily: "'Bebas Neue', 'Inter', sans-serif", fontSize: '3.5rem', color: '#00E5FF', marginBottom: '40px', textAlign: 'center' }}>
            Featured Assets & Projects
          </h2>
          <div className="d-flex justify-content-center">
            <Tabs
              id="controlled-tab-example"
              activeKey={activeTab}
              onSelect={handleTabChange}
              className="mb-5 custom-project-tabs border-0"
            >
              <Tab eventKey="Utility Assets" title="Utility Scale Assets" />
              <Tab eventKey="Microgrid Projects" title="Microgrids & BESS" />
            </Tabs>
          </div>
          <div className='row'>
            <div className='col-12'>
              {renderImage()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
