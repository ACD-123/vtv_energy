import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Hero } from '../components/WhyVTV/Hero';
import { WhyVtvEnergy } from '../components/WhyVTV/WhyVtvEnergy';
import { AboutVtv } from '../components/WhyVTV/AboutVtv';
import { TabSec } from '../components/WhyVTV/TabSec';
import { MeetOurTeam } from '../components/MainHome/MeetOurTeam';
import { Inquiries } from '../components/ContactSupport/Inquiries';

export const CommercialInfrastructure = () => {
  const navigate = useNavigate();

  const handleInquiryRedirect = (subject) => {
    navigate('/contact-us', { state: { subject } });
  };

  const tabsData = [
    { eventKey: "Microgrids", title: "Industrial Microgrids", heading: "Industrial Microgrids", content: "Complete self-healing electrical architecture capable of islanding from the main transmission grid during load shedding or failures." },
    { eventKey: "BESS", title: "BESS Integration", heading: "BESS Integration", content: "Peak shaving BESS systems designed to discharge during peak demand hours, protecting facilities from high demand surcharges and price spikes." },
    { eventKey: "Substations", title: "Grid Substations", heading: "Grid Substations", content: "Custom substation building, engineering, and maintenance for private high-voltage distribution systems, ensuring maximum safety." }
  ];

  return (
    <>
      <Hero bgClass="hero-leftCommercial" />
      <WhyVtvEnergy 
        title="Commercial Infrastructure"
        description={
          <>
            <h3 className="mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: '300', color: '#B0B0B0' }}>
              High-Capacity Microgrids & BESS Integrations
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#D0D0D0' }}>
              At VTV Energy, we deploy localized, high-reliability commercial infrastructure. For energy-intensive industries, commercial manufacturing, data centers, and industrial ports, standard grids do not offer the stability, safety, and price flexibility required.
            </p>
            <Button 
              className="mt-3 px-4 py-2 btn-premium" 
              onClick={() => handleInquiryRedirect('Industrial Feasibility Study')}
            >
              Request Industrial Feasibility Study
            </Button>
          </>
        }
        image={require('../components/assets/images/commercial_infra.png')}
      />
      <AboutVtv 
        title="Self-Sustaining Power"
        description="We design and construct self-sustaining industrial microgrids combining high-output battery systems, peaking gas backup engines, and advanced automated switchgear."
        image={require('../components/assets/images/foundation.png')} 
      />
      <TabSec tabs={tabsData} />
      <MeetOurTeam />
      <Inquiries />
    </>
  );
};
