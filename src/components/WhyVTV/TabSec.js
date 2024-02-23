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
                  </div>
                </Tab>
                <Tab eventKey="Vission" title="Vission ">
                  <div className="box-innertab">
                    <h2 className="text-white text-2xl">Vission</h2>
                  </div>
                </Tab>
                <Tab eventKey="Mission" title="Mission">
                  <div className="box-innertab">
                    <h2 className="text-white text-2xl">Our mission is to demonopolize the energy industry<br/> starting in the United States</h2>
                  </div>
                </Tab>
              </Tabs>
   </div>
        </section>
    </>
  )
}
