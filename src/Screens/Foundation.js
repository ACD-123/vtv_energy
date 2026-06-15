import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export const Foundation = () => {
  return (
    <div style={{ background: '#0B0B0B', minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px', color: 'white' }}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <h1 style={{ fontFamily: "'Bebas Neue', 'Inter', sans-serif", fontSize: '4.5rem', color: '#00E5FF' }}>
              Energy To All Foundation
            </h1>
            <h3 className="mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: '300', color: '#B0B0B0' }}>
              Official Infrastructure Partnership
            </h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#D0D0D0' }}>
              <strong>VTV Energy is the Official Partner for the Energy To All Foundation.</strong> We believe that economic development, education, and healthcare cannot succeed without baseline infrastructure.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#B0B0B0' }}>
              Through this official partnership, VTV Energy donates technical expertise, engineering design hours, and grid asset deployment resources to bring reliable energy systems to remote villages, regional hospitals, and critical water stations in developing areas worldwide.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#B0B0B0' }}>
              By constructing microgrids, deploying modular storage systems, and establishing local distribution networks, we stabilize communities, power local economies, and ensure that basic electricity is not a privilege, but a stable baseline for modern growth.
            </p>
            <Button className="mt-4 px-4 py-2" style={{ background: '#00E5FF', border: 'none', color: '#0B0B0B', fontWeight: 'bold' }}>
              Support Foundation Projects
            </Button>
          </Col>
          <Col lg={6} className="mt-5 mt-lg-0 text-center">
            <img 
              src={require('../components/assets/images/foundation.png')} 
              alt="Energy To All Foundation field operations" 
              style={{ width: '100%', borderRadius: '8px', border: '1px solid #4A4A4A', boxShadow: '0px 0px 20px rgba(0, 229, 255, 0.15)' }} 
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
