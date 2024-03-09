import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export const TabSec = () => {
    const [key, setKey] = useState("Mission");
  return (
    <>
    <section class="TabSec">
   <div className="container">
   <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
              >
                <Tab eventKey="Values" title="Values">
                  <div className="box-innertab">
                    <h2 className="text-white text-2xl">Values</h2>
                    <p>
                    We operate with Honesty, Integrity, Transparency, and Compassion.
                    </p>
                  </div>
                </Tab>
                <Tab eventKey="Vission" title="Vission ">
                  <div className="box-innertab">
                    <h2 className="text-white text-2xl">Vission</h2>
                    <p>
                    We envision large-scale energy operations for commercial, residential, and utilities paving the
way to excess renewable energy to fuel us.
                    </p>
                  </div>
                </Tab>
                <Tab eventKey="Mission" title="Mission">
                  <div className="box-innertab">
                  <h2 className="text-white text-2xl">Our Mission</h2>
                    <p>
                    Our mission is to provide as much renewable energy as possible with the highest technology at
the lowest price possible in efforts to bring down energy prices across the United States.
                    </p>
                  </div>
                </Tab>
              </Tabs>
   </div>
        </section>
    </>
  )
}
