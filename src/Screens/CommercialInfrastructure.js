import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export const CommercialInfrastructure = () => {
  return (
    <div style={{ background: '#0B0B0B', minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px', color: 'white' }}>
      <Container>
        <Row className="align-items-center mb-5">
          <Col lg={6}>
            <h1 style={{ fontFamily: "'Bebas Neue', 'Inter', sans-serif", fontSize: '4.5rem', color: '#00E5FF' }}>
              Commercial Infrastructure
            </h1>
            <h3 className="mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: '300', color: '#B0B0B0' }}>
              High-Capacity Microgrids & BESS Integrations
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#D0D0D0' }}>
              At VTV Energy, we deploy localized, high-reliability commercial infrastructure. For energy-intensive industries, commercial manufacturing, data centers, and industrial ports, standard grids do not offer the stability, safety, and price flexibility required.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#D0D0D0' }}>
              We design and construct self-sustaining industrial microgrids combining high-output battery systems, peaking gas backup engines, and advanced automated switchgear.
            </p>
            <Button className="mt-3 px-4 py-2" style={{ background: '#00E5FF', border: 'none', color: '#0B0B0B', fontWeight: 'bold' }}>
              Request Industrial Feasibility Study
            </Button>
          </Col>
          <Col lg={6} className="mt-5 mt-lg-0">
            <img 
              src={require('../components/assets/images/commercial_infra.png')} 
              alt="Commercial Infrastructure Microgrid" 
              style={{ width: '100%', borderRadius: '8px', border: '1px solid #4A4A4A', boxShadow: '0px 0px 20px rgba(0, 229, 255, 0.15)' }} 
            />
          </Col>
        </Row>

        <Row className="mt-5 pt-4">
          <Col lg={4} className="mb-4">
            <Card style={{ background: '#111', border: '1px solid #4A4A4A', borderRadius: '8px', padding: '20px' }}>
              <Card.Body>
                <h3 style={{ fontFamily: "'Bebas Neue', 'Inter', sans-serif", color: '#00E5FF', fontSize: '2rem' }}>
                  Industrial Microgrids
                </h3>
                <p style={{ color: '#D0D0D0', fontSize: '15px' }}>
                  Complete self-healing electrical architecture capable of islanding from the main transmission grid during load shedding or failures.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="mb-4">
            <Card style={{ background: '#111', border: '1px solid #4A4A4A', borderRadius: '8px', padding: '20px' }}>
              <Card.Body>
                <h3 style={{ fontFamily: "'Bebas Neue', 'Inter', sans-serif", color: '#00E5FF', fontSize: '2rem' }}>
                  BESS Integration
                </h3>
                <p style={{ color: '#D0D0D0', fontSize: '15px' }}>
                  Peak shaving BESS systems designed to discharge during peak demand hours, protecting facilities from high demand surcharges and price spikes.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="mb-4">
            <Card style={{ background: '#111', border: '1px solid #4A4A4A', borderRadius: '8px', padding: '20px' }}>
              <Card.Body>
                <h3 style={{ fontFamily: "'Bebas Neue', 'Inter', sans-serif", color: '#00E5FF', fontSize: '2rem' }}>
                  Grid Substations
                </h3>
                <p style={{ color: '#D0D0D0', fontSize: '15px' }}>
                  Custom substation building, engineering, and maintenance for private high-voltage distribution systems, ensuring maximum safety.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
