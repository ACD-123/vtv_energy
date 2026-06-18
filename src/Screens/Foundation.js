import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Hero } from '../components/WhyVTV/Hero';
import { WhyVtvEnergy } from '../components/WhyVTV/WhyVtvEnergy';
import { AboutVtv } from '../components/WhyVTV/AboutVtv';
import { TabSec } from '../components/WhyVTV/TabSec';
import { MeetOurTeam } from '../components/MainHome/MeetOurTeam';
import { Inquiries } from '../components/ContactSupport/Inquiries';

export const Foundation = () => {
  const navigate = useNavigate();

  const handleInquiryRedirect = (subject) => {
    navigate('/contact-us', { state: { subject } });
  };

  const tabsData = [
    { 
      eventKey: "Partnership", 
      title: "Official Partnership", 
      heading: "Official Partnership", 
      content: "VTV Energy donates technical expertise, engineering design hours, and grid asset deployment resources to bring reliable energy systems to remote villages, regional hospitals, and critical water stations in developing areas worldwide." 
    },
    { 
      eventKey: "Mission", 
      title: "Foundation Mission", 
      heading: "Foundation Mission", 
      content: "We believe that economic development, education, and healthcare cannot succeed without baseline infrastructure." 
    },
    { 
      eventKey: "Impact", 
      title: "Global Impact", 
      heading: "Global Impact", 
      content: "By constructing microgrids, deploying modular storage systems, and establishing local distribution networks, we stabilize communities, power local economies, and ensure that basic electricity is not a privilege, but a stable baseline for modern growth." 
    }
  ];

  return (
    <>
      <Hero bgClass="hero-leftWind" />
      <WhyVtvEnergy 
        title="Energy To All Foundation"
        description={
          <>
            <h3 className="mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: '300', color: '#B0B0B0' }}>
              Official Infrastructure Partnership
            </h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#D0D0D0' }}>
              <strong>VTV Energy is the Official Partner for the Energy To All Foundation.</strong> We believe that economic development, education, and healthcare cannot succeed without baseline infrastructure.
            </p>
            <Button 
              className="mt-4 px-4 py-2 btn-premium" 
              onClick={() => handleInquiryRedirect('Support Foundation Projects')}
            >
              Support Foundation Projects
            </Button>
          </>
        }
        image={require('../components/assets/images/foundation.png')}
      />
      <AboutVtv 
        title="Empowering Communities"
        description="By constructing microgrids, deploying modular storage systems, and establishing local distribution networks, we stabilize communities and power local economies."
        image={require('../components/assets/images/foundation.png')}
      />
      <TabSec tabs={tabsData} />
      <MeetOurTeam />
      <Inquiries />
    </>
  );
};
