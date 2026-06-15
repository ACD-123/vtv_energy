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
                width: 576,
                slidesPerView: 2,
              },
              768: {
                width: 768,
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
            <SwiperSlide className="bg-color1">
              <div>
                <img
                  className="img-fluid"
                  style={{ height: '400px', objectFit: 'cover', width: '100%' }}
                  src={require("../assets/images/nuclear_smr.png")}
                  alt="Nuclear SMR"
                />
                <h4 className="text-white mt-3 px-2">Gen-IV SMR Station</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-color2">
              <div>
                <img
                  className="img-fluid"
                  style={{ height: '400px', objectFit: 'cover', width: '100%' }}
                  src={require("../assets/images/natural_gas.png")}
                  alt="Natural Gas Turbine"
                />
                <h4 className="text-white mt-3 px-2">Combined Cycle Peaker Plant</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-color3">
              <div>
                <img
                  className="img-fluid"
                  style={{ height: '400px', objectFit: 'cover', width: '100%' }}
                  src={require("../assets/images/bess.png")}
                  alt="BESS Storage Containers"
                />
                <h4 className="text-white mt-3 px-2">100MW Battery Energy Storage System (BESS)</h4>
              </div>
            </SwiperSlide>
          </Swiper>
        );
      case "Microgrid Projects":
        return (
          <Swiper
            breakpoints={{
              576: {
                width: 576,
                slidesPerView: 2,
              },
              768: {
                width: 768,
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
            <SwiperSlide className="bg-color1">
              <div>
                <img
                  className="img-fluid"
                  style={{ height: '400px', objectFit: 'cover', width: '100%' }}
                  src={require("../assets/images/commercial_infra.png")}
                  alt="Industrial Microgrid"
                />
                <h4 className="text-white mt-3 px-2">Industrial Manufacturing Microgrid</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-color2">
              <div>
                <img
                  className="img-fluid"
                  style={{ height: '400px', objectFit: 'cover', width: '100%' }}
                  src={require("../assets/images/bess.png")}
                  alt="BESS integration"
                />
                <h4 className="text-white mt-3 px-2">Substation Storage Integration</h4>
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
          <h2 style={{ fontFamily: "'Bebas Neue', 'Inter', sans-serif", fontSize: '3.5rem', color: '#00E5FF', marginBottom: '40px' }}>
            Featured Assets & Projects
          </h2>
          <div className='row'>
            <div className='col-lg-3'>
              <Tabs
                id="controlled-tab-example"
                activeKey={activeTab}
                onSelect={handleTabChange}
                className="mb-4 flex-column custom-project-tabs"
                style={{ borderRight: '1px solid #4A4A4A' }}
              >
                <Tab eventKey="Utility Assets" title="Utility Scale Assets" />
                <Tab eventKey="Microgrid Projects" title="Microgrids & BESS" />
              </Tabs>
            </div>
            <div className='col-lg-9'>
              {renderImage()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
