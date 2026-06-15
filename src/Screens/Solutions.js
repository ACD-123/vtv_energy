import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav, Button } from 'react-bootstrap';

export const Solutions = () => {
  const [activeKey, setActiveKey] = useState('nuclear');

  return (
    <div style={{ background: '#0B0B0B', minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px', color: 'white' }}>
      <Container>
        <div className="text-center mb-5">
          <h1 style={{ fontFamily: "'Bebas Neue', 'Inter', sans-serif", fontSize: '4.5rem', color: '#00E5FF' }}>
            Infrastructure Solutions
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.2rem', color: '#B0B0B0', maxWidth: '700px', margin: '0 auto' }}>
            VTV Energy deploys cutting-edge high-capacity assets designed to stabilize national energy grids, foster heavy industry growth, and drive global transition.
          </p>
        </div>

        <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
          <Row className="justify-content-center mb-5">
            <Col lg={8} md={10} className="text-center">
              <Nav className="nav-pills justify-content-center" style={{ gap: '15px' }}>
                <Nav.Item>
                  <Nav.Link 
                    eventKey="nuclear" 
                    className="px-4 py-3"
                    style={{
                      background: activeKey === 'nuclear' ? '#00E5FF' : '#1a1a1a',
                      color: activeKey === 'nuclear' ? '#0B0B0B' : '#white',
                      fontWeight: 'bold',
                      border: '1px solid #4A4A4A',
                      borderRadius: '4px',
                      fontFamily: "'Bebas Neue', 'Inter', sans-serif",
                      fontSize: '1.5rem',
                      letterSpacing: '1px',
                      cursor: 'pointer'
                    }}
                  >
                    Nuclear SMR
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link 
                    eventKey="gas" 
                    className="px-4 py-3"
                    style={{
                      background: activeKey === 'gas' ? '#00E5FF' : '#1a1a1a',
                      color: activeKey === 'gas' ? '#0B0B0B' : '#white',
                      fontWeight: 'bold',
                      border: '1px solid #4A4A4A',
                      borderRadius: '4px',
                      fontFamily: "'Bebas Neue', 'Inter', sans-serif",
                      fontSize: '1.5rem',
                      letterSpacing: '1px',
                      cursor: 'pointer'
                    }}
                  >
                    Natural Gas Peakers
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link 
                    eventKey="bess" 
                    className="px-4 py-3"
                    style={{
                      background: activeKey === 'bess' ? '#00E5FF' : '#1a1a1a',
                      color: activeKey === 'bess' ? '#0B0B0B' : '#white',
                      fontWeight: 'bold',
                      border: '1px solid #4A4A4A',
                      borderRadius: '4px',
                      fontFamily: "'Bebas Neue', 'Inter', sans-serif",
                      fontSize: '1.5rem',
                      letterSpacing: '1px',
                      cursor: 'pointer'
                    }}
                  >
                    Battery Storage (BESS)
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>

          <Tab.Content style={{ marginTop: '40px' }}>
            <Tab.Pane eventKey="nuclear">
              <Row className="align-items-center">
                <Col lg={6} className="mb-4 mb-lg-0">
                  <img 
                    src={require('../components/assets/images/nuclear_smr.png')} 
                    alt="Nuclear SMR" 
                    style={{ width: '100%', borderRadius: '8px', border: '1px solid #4A4A4A', boxShadow: '0px 0px 20px rgba(0, 229, 255, 0.15)' }} 
                  />
                </Col>
                <Col lg={6}>
                  <h2 style={{ fontFamily: "'Bebas Neue', 'Inter', sans-serif", fontSize: '3rem', color: '#00E5FF' }}>
                    Generation-IV Small Modular Reactors (SMRs)
                  </h2>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#D0D0D0' }}>
                    SMR technology represents the future of safe, reliable, and zero-carbon baseload energy. Our Gen-IV modular nuclear designs allow rapid factory construction and rapid field assembly, avoiding the cost overruns of traditional large-scale nuclear builds.
                  </p>
                  <ul style={{ color: '#B0B0B0', paddingLeft: '20px', lineHeight: '2' }}>
                    <li><strong>Carbon-Free Baseload Power:</strong> Constant zero-emission generation to support macro grids.</li>
                    <li><strong>Passive Safe Cooling Systems:</strong> Physics-driven shutdown cycles requiring no human intervention or grid electricity.</li>
                    <li><strong>Modular Deployment:</strong> Scalable site setups that can expand from 77MWe to 924MWe.</li>
                    <li><strong>High Thermodynamic Efficiency:</strong> Tailored for integration with heavy industrial manufacturing.</li>
                  </ul>
                  <Button className="mt-4 px-4 py-2" style={{ background: '#00E5FF', border: 'none', color: '#0B0B0B', fontWeight: 'bold' }}>
                    Download SMR Technical Specs
                  </Button>
                </Col>
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="gas">
              <Row className="align-items-center">
                <Col lg={6} className="mb-4 mb-lg-0">
                  <img 
                    src={require('../components/assets/images/natural_gas.png')} 
                    alt="Natural Gas Turbine" 
                    style={{ width: '100%', borderRadius: '8px', border: '1px solid #4A4A4A', boxShadow: '0px 0px 20px rgba(0, 229, 255, 0.15)' }} 
                  />
                </Col>
                <Col lg={6}>
                  <h2 style={{ fontFamily: "'Bebas Neue', 'Inter', sans-serif", fontSize: '3rem', color: '#00E5FF' }}>
                    High-Efficiency Combined Cycle Gas Turbines
                  </h2>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#D0D0D0' }}>
                    Combined Cycle Gas Turbines (CCGT) and Peaking Plants provide high-speed grid stabilization when renewables drop. Operating at the highest thermal efficiency, our natural gas assets provide load following and peak power backup.
                  </p>
                  <ul style={{ color: '#B0B0B0', paddingLeft: '20px', lineHeight: '2' }}>
                    <li><strong>Fast Start Peaker Capacity:</strong> Synchronize with the grid in under 10 minutes.</li>
                    <li><strong>High Conversion Efficiency:</strong> Combines gas and steam cycles for maximum output per fuel unit.</li>
                    <li><strong>Low-Emission Modern Turbines:</strong> Low-NOx combustion chambers prepared for future clean hydrogen blends.</li>
                    <li><strong>Grid Stabilization:</strong> Real-time frequency response to balance renewable energy volatility.</li>
                  </ul>
                  <Button className="mt-4 px-4 py-2" style={{ background: '#00E5FF', border: 'none', color: '#0B0B0B', fontWeight: 'bold' }}>
                    Explore Turbine Operations
                  </Button>
                </Col>
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="bess">
              <Row className="align-items-center">
                <Col lg={6} className="mb-4 mb-lg-0">
                  <img 
                    src={require('../components/assets/images/bess.png')} 
                    alt="Battery Energy Storage System" 
                    style={{ width: '100%', borderRadius: '8px', border: '1px solid #4A4A4A', boxShadow: '0px 0px 20px rgba(0, 229, 255, 0.15)' }} 
                  />
                </Col>
                <Col lg={6}>
                  <h2 style={{ fontFamily: "'Bebas Neue', 'Inter', sans-serif", fontSize: '3rem', color: '#00E5FF' }}>
                    Utility-Scale Battery Energy Storage Systems (BESS)
                  </h2>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#D0D0D0' }}>
                    BESS is critical for time-shifting and grid frequency stabilization. VTV Energy deploys containers filled with advanced lithium-iron-phosphate (LFP) batteries designed to support regional transmission networks and industrial microgrids.
                  </p>
                  <ul style={{ color: '#B0B0B0', paddingLeft: '20px', lineHeight: '2' }}>
                    <li><strong>Frequency Regulation:</strong> Instant millisecond response to control voltage fluctuations.</li>
                    <li><strong>Energy Shifting:</strong> Charging during periods of low demand and discharging during peak prices.</li>
                    <li><strong>Industrial Megapacks:</strong> Secure, fire-suppressed thermal cooling modular storage.</li>
                    <li><strong>Virtual Power Plants (VPP):</strong> Intelligent software dispatch orchestration.</li>
                  </ul>
                  <Button className="mt-4 px-4 py-2" style={{ background: '#00E5FF', border: 'none', color: '#0B0B0B', fontWeight: 'bold' }}>
                    Inquire for BESS Pricing
                  </Button>
                </Col>
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
};
