import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export const TabSec = ({ tabs }) => {
  const defaultTabs = [
    { eventKey: "Values", title: "Values", heading: "Values", content: "We operate with Honesty, Integrity, Transparency, and Compassion." },
    { eventKey: "Vission", title: "Vission", heading: "Vission", content: "We envision large-scale energy operations for commercial, residential, and utilities paving the way to excess renewable energy to fuel us." },
    { eventKey: "Mission", title: "Mission", heading: "Our Mission", content: "Our mission is to provide as much renewable energy as possible with the highest technology at the lowest price possible in efforts to bring down energy prices across the United States." }
  ];
  
  const data = tabs || defaultTabs;
  const [key, setKey] = useState(data.find(t => t.eventKey === "Mission")?.eventKey || data[0]?.eventKey);

  return (
    <>
      <section className="TabSec">
        <div className="container">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            {data.map((tab) => (
              <Tab eventKey={tab.eventKey} title={tab.title} key={tab.eventKey}>
                <div className="box-innertab">
                  <h2 className="text-white text-2xl">{tab.heading}</h2>
                  <div style={{ color: "white" }}>{tab.content}</div>
                </div>
              </Tab>
            ))}
          </Tabs>
        </div>
      </section>
    </>
  );
};
