import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Hero } from '../components/WhyVTV/Hero';
import { WhyVtvEnergy } from '../components/WhyVTV/WhyVtvEnergy';
import { AboutVtv } from '../components/WhyVTV/AboutVtv';
import { TabSec } from '../components/WhyVTV/TabSec';
import { MeetOurTeam } from '../components/MainHome/MeetOurTeam';
import { Inquiries } from '../components/ContactSupport/Inquiries';

export const InvestorRelations = () => {
  const navigate = useNavigate();

  const handleInquiryRedirect = (subject) => {
    navigate('/contact-us', { state: { subject } });
  };

  const tabsData = [
    { 
      eventKey: "Financing", 
      title: "Utility-Scale Financing", 
      heading: "Utility-Scale Financing", 
      content: <>
        <p>We partner with global infrastructure funds, investment banks, and institutional lenders to underwrite large-scale energy assets. Our project portfolios offer stable, long-term capital appreciation with high ESG compliance.</p>
        <Button variant="outline-info" className="mt-3 btn-premium-outline" onClick={() => handleInquiryRedirect('Financial Reports')}>Financial Reports</Button>
      </> 
    },
    { 
      eventKey: "PPA", 
      title: "PPA Structures", 
      heading: "PPA Structures", 
      content: <>
        <p>Our projects are backed by 15-to-25 year Power Purchase Agreements (PPAs) with investment-grade utilities, municipality grids, and industrial off-takers. This guarantees predictable revenues and solid downside protection.</p>
        <Button variant="outline-info" className="mt-3 btn-premium-outline" onClick={() => handleInquiryRedirect('PPA Portfolio Details')}>PPA Portfolio Details</Button>
      </> 
    },
    { 
      eventKey: "ProjectFinancing", 
      title: "Project Financing", 
      heading: "Project Financing", 
      content: <>
        <p>VTV Energy leverages structured finance, non-recourse project debt, and tax equity structures to optimize capital efficiency. We maintain a high credit rating and solid capital adequacy ratios.</p>
        <Button variant="outline-info" className="mt-3 btn-premium-outline" onClick={() => handleInquiryRedirect('Capital Allocation Strategy')}>Capital Allocation Strategy</Button>
      </> 
    }
  ];

  return (
    <>
      <Hero bgClass="hero-leftContact" />
      <WhyVtvEnergy 
        title="Investor Relations"
        description={
          <>
            <p style={{ fontSize: '1.2rem', color: '#B0B0B0' }}>
              VTV Energy builds, owns, and operates high-yield energy infrastructure assets with long-term contracted cash flows and institutional backing.
            </p>
          </>
        }
        image={require('../components/assets/images/commercial_infra.png')}
      />
      <AboutVtv 
        title="Stable Returns & ESG Compliance"
        description="We partner with global infrastructure funds, investment banks, and institutional lenders to underwrite large-scale energy assets."
        image={require('../components/assets/images/foundation.png')}
      />
      <TabSec tabs={tabsData} />
      <MeetOurTeam />
      <Inquiries />
    </>
  );
};
