import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export const AboutVtv = () => {
  const [activeTab, setActiveTab] = useState("contact");

  const tabs = ["home", "profile", "contact"];
  const images = [
    "Vision.png",
    "Values.png",
    "mission.png"
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderImage = () => {
    const currentIndex = tabs.indexOf(activeTab);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
  
    return (
      <div className="col-lg-8">
        <div className="image-container">
          <div className="image-prev">
            <img src={require(`../assets/images/${images[prevIndex]}`)} alt={`Image ${prevIndex}`} />
          </div>
          <div className="image-active">
            <img src={require(`../assets/images/${images[currentIndex]}`)} alt={`Image ${currentIndex}`} />
          </div>
          <div className="image-next">
            <img src={require(`../assets/images/${images[nextIndex]}`)} alt={`Image ${nextIndex}`} />
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
            <h2>About VTV ENERGY</h2>
            <p style={{ textAlign: "left", color: "white", fontSize: "20px" }}>
              At VTV Energy, we believe in humanity and trust the people who
              make the most conscious decisions when selecting the provider that
              best represents them.
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
                    <h2 className="text-white text-2xl">Values</h2>
                  </div>
                </Tab>
                <Tab eventKey="profile" title="Vision">
                  <div className="box-innertab">
                    <h2 className="text-white text-2xl">Vision</h2>
                  </div>
                </Tab>
                <Tab eventKey="contact" title="Mission">
                  <div className="box-innertab">
                    <h2 className="text-white text-2xl">Our Mission</h2>
                    <p>
                      Our mission is to demonopolize the energy industry
                      starting in the United States
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
