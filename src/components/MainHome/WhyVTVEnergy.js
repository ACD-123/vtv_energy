import React from 'react';

export const WhyVTVEnergy = () => {
  return (
    <>
      <section className="whyVtv" style={{ background: '#0B0B0B', padding: '60px 0' }}>
        <div className='container'>
          <div className='texter text-center mb-5'>
            <h2 style={{ fontFamily: "'Bebas Neue', 'Inter', sans-serif", fontSize: '3.5rem', color: '#00E5FF' }}>
              Why VTV Energy
            </h2>
            <p style={{ color: 'white', fontSize: '20px', maxWidth: '800px', margin: '0 auto' }}>
              Energy as the backbone of global stability.
            </p>
          </div>
          <div className="row">
            <div className='col-lg-3 col-md-6 mb-4'>
              <div className="service" id="consultation">
                <img
                  width={120}
                  src={require("../assets/images/messageColor.png")}
                  alt="feasibility"
                  style={{ marginBottom: '20px' }}
                />
                <h4 style={{ fontFamily: "'Bebas Neue', 'Inter', sans-serif", color: '#00E5FF' }}>Feasibility Analysis</h4>
                <p style={{ color: '#E0E0E0', fontSize: '14px' }}>
                  Detailed economic modeling, environmental impact assessments, and macro grid interconnection studies to ensure asset viability.
                </p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 mb-4'>
              <div className="service" id="assessment">
                <img 
                  width={120} 
                  src={require("../assets/images/Site.png")} 
                  alt="engineering" 
                  style={{ marginBottom: '20px' }}
                />
                <h4 style={{ fontFamily: "'Bebas Neue', 'Inter', sans-serif", color: '#00E5FF' }}>Site Engineering</h4>
                <p style={{ color: '#E0E0E0', fontSize: '14px' }}>
                  Geotechnical, thermal, and mechanical engineering assessments optimized for large-scale nuclear, natural gas, and battery placements.
                </p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 mb-4'>
              <div className="service" id="design">
                <img 
                  width={120} 
                  src={require("../assets/images/settingsColor.png")} 
                  alt="design" 
                  style={{ marginBottom: '20px' }}
                />
                <h4 style={{ fontFamily: "'Bebas Neue', 'Inter', sans-serif", color: '#00E5FF' }}>Custom Infrastructure</h4>
                <p style={{ color: '#E0E0E0', fontSize: '14px' }}>
                  Tailored integration of modular Gen-IV reactors, high-efficiency turbines, and desert BESS container storage grids.
                </p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 mb-4'>
              <div className="service" id="proposal">
                <img 
                  width={120} 
                  src={require("../assets/images/handColor.png")} 
                  alt="financing" 
                  style={{ marginBottom: '20px' }}
                />
                <h4 style={{ fontFamily: "'Bebas Neue', 'Inter', sans-serif", color: '#00E5FF' }}>PPA & Project Finance</h4>
                <p style={{ color: '#E0E0E0', fontSize: '14px' }}>
                  Structured Power Purchase Agreements (PPAs), project equity underwriting, and debt placement for utility-scale developments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
