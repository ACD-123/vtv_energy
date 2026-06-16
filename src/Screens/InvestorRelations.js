import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const InvestorRelations = () => {
  const navigate = useNavigate();

  const handleInquiryRedirect = (subject) => {
    navigate('/contact-us', { state: { subject } });
  };

  return (
    <div style={{ background: '#0B0B0B', minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px', color: 'white' }}>
      <Container>
        <div className="mb-5 text-center fade-in-up">
          <h1 style={{ fontFamily: "'Bebas Neue', 'Inter', sans-serif", fontSize: '4.5rem', color: '#00E5FF' }}>
            Investor Relations
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.2rem', color: '#B0B0B0', maxWidth: '800px', margin: '0 auto' }}>
            VTV Energy builds, owns, and operates high-yield energy infrastructure assets with long-term contracted cash flows and institutional backing.
          </p>
        </div>

        <Row className="align-items-stretch mt-5">
          <Col lg={4} className="mb-4">
            <Card style={{ background: '#111', border: '1px solid #4A4A4A', borderRadius: '8px', padding: '20px', height: '100%' }}>
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <h3 style={{ fontFamily: "'Bebas Neue', 'Inter', sans-serif", color: '#00E5FF', fontSize: '2.2rem' }}>
                    Utility-Scale Financing
                  </h3>
                  <p style={{ color: '#D0D0D0', fontSize: '15px', lineHeight: '1.6' }}>
                    We partner with global infrastructure funds, investment banks, and institutional lenders to underwrite large-scale energy assets. Our project portfolios offer stable, long-term capital appreciation with high ESG compliance.
                  </p>
                </div>
                <Button 
                  variant="outline-info" 
                  className="mt-3 w-100" 
                  style={{ borderColor: '#00E5FF', color: '#ffffff' }}
                  onClick={() => handleInquiryRedirect('Financial Reports')}
                >
                  Financial Reports
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="mb-4">
            <Card style={{ background: '#111', border: '1px solid #4A4A4A', borderRadius: '8px', padding: '20px', height: '100%' }}>
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <h3 style={{ fontFamily: "'Bebas Neue', 'Inter', sans-serif", color: '#00E5FF', fontSize: '2.2rem' }}>
                    PPA Structures
                  </h3>
                  <p style={{ color: '#D0D0D0', fontSize: '15px', lineHeight: '1.6' }}>
                    Our projects are backed by 15-to-25 year Power Purchase Agreements (PPAs) with investment-grade utilities, municipality grids, and industrial off-takers. This guarantees predictable revenues and solid downside protection.
                  </p>
                </div>
                <Button 
                  variant="outline-info" 
                  className="mt-3 w-100" 
                  style={{ borderColor: '#00E5FF', color: '#ffffff' }}
                  onClick={() => handleInquiryRedirect('PPA Portfolio Details')}
                >
                  PPA Portfolio Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="mb-4">
            <Card style={{ background: '#111', border: '1px solid #4A4A4A', borderRadius: '8px', padding: '20px', height: '100%' }}>
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <h3 style={{ fontFamily: "'Bebas Neue', 'Inter', sans-serif", color: '#00E5FF', fontSize: '2.2rem' }}>
                    Project Financing
                  </h3>
                  <p style={{ color: '#D0D0D0', fontSize: '15px', lineHeight: '1.6' }}>
                    VTV Energy leverages structured finance, non-recourse project debt, and tax equity structures to optimize capital efficiency. We maintain a high credit rating and solid capital adequacy ratios.
                  </p>
                </div>
                <Button 
                  variant="outline-info" 
                  className="mt-3 w-100" 
                  style={{ borderColor: '#00E5FF', color: '#ffffff' }}
                  onClick={() => handleInquiryRedirect('Capital Allocation Strategy')}
                >
                  Capital Allocation Strategy
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
