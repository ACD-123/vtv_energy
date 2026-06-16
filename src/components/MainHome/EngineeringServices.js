import React from 'react';
import { useNavigate } from 'react-router-dom';

export const EngineeringServices = () => {
  const navigate = useNavigate();

  const handleInquiry = (subject) => {
    navigate('/contact-us', { state: { subject } });
  };

  return (
    <>
      <section className="engineeringServices" style={{ background: '#0B0B0B', padding: '60px 0' }}>
        <div className='container'>
          <div className='serviceEn'>
            <h2 style={{ fontFamily: "'Bebas Neue', 'Inter', sans-serif", fontSize: '3.5rem', color: '#00E5FF' }}>
              Providing top tier engineering services
            </h2>
            <p style={{ textAlign: 'center', color: 'white', fontSize: '20px' }}>
              At VTV Energy, we deploy advanced engineering expertise to construct reliable, high-capacity utility assets and industrial microgrids.
            </p>
          </div>
          <div className='row mt-4'>
            <div className='col-lg-6 mb-4'>
              <div 
                className='card' 
                style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
                onClick={() => handleInquiry('Utility Scale Development')}
              >
                <div className='card-body cole1' style={{ borderRadius: '8px', border: '1px solid #4A4A4A' }}>
                  <h3 style={{ fontFamily: "'Bebas Neue', 'Inter', sans-serif", fontSize: '2.5rem', color: '#FFFFFF' }}>
                    Inquire Utility Scale Development
                  </h3>
                </div>
              </div>
            </div>
            <div className='col-lg-6 mb-4'>
              <div 
                className='card' 
                style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
                onClick={() => handleInquiry('Microgrid / BESS Integration')}
              >
                <div className='card-body cole2' style={{ borderRadius: '8px', border: '1px solid #4A4A4A' }}>
                  <h3 style={{ fontFamily: "'Bebas Neue', 'Inter', sans-serif", fontSize: '2.5rem', color: '#FFFFFF' }}>
                    Request Microgrid / BESS Integration
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
