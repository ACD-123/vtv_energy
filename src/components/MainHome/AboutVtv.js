import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export const AboutVtv = () => {
  const [activeTab, setActiveTab] = useState("contact");

  const tabs = ["home", "profile", "contact"];
  const images = [
    "nuclear_smr.png",
    "bess.png",
    "commercial_infra.png"
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderImage = () => {
    const currentIndex = tabs.indexOf(activeTab);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
  
    return (
      <div className="col-lg-10">
        <div className="image-container">
          <div className="image-prev">
            <img src={require(`../assets/images/${images[prevIndex]}`)} alt={`Image ${prevIndex}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="image-active">
            <img src={require(`../assets/images/${images[currentIndex]}`)} alt={`Image ${currentIndex}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="image-next">
            <img src={require(`../assets/images/${images[nextIndex]}`)} alt={`Image ${nextIndex}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    );
  };
  

  return (
    <>
      <section className="aboutVtv">
        <div className="container engineeringServicesmain">
          <div className="serviceEn">
            <h2>VTV Energy has evolved.</h2>
            <p style={{ textAlign: "center", color: "white", fontSize: "22px", marginBottom: "40px" }}>
              We have transitioned from residential solar to become a primary developer of utility-scale energy assets.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              {renderImage()}
            </div>
            <div className="col-lg-6">
              <Tabs
                id="controlled-tab-example"
                activeKey={activeTab}
                onSelect={handleTabChange}
                className="mb-3"
              >
                <Tab eventKey="home" title="Values">
                  <div className="box-innertab">
                    <h2 className="text-white ">Core Values</h2>
                    <p style={{ fontSize: "22px"}}>
                      We operate with absolute integrity, transparency, and a relentless focus on safety, technical precision, and environmental stewardship.
                    </p>
                  </div>
                </Tab>
                <Tab eventKey="profile" title="Vision">
                  <div className="box-innertab">
                    <h2 className="text-white ">Vision</h2>
                    <p style={{ fontSize: "22px"}}>
                      We envision grid-scale infrastructure, SMR modular nuclear reactors, and high-capacity battery systems providing carbon-free baseload energy to power modern civilization.
                    </p>
                  </div>
                </Tab>
                <Tab eventKey="contact" title="Mission">
                  <div className="box-innertab">
                    <h2 className="text-white ">Our Mission</h2>
                    <p style={{ fontSize: "22px"}}>
                      Our mission is to deploy and manage high-capacity macro grid infrastructure, ensuring energy independence, cost efficiency, and global stability.
                    </p>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
