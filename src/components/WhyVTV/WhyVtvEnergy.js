import React from 'react';

export const WhyVtvEnergy = () => {
  return (
    <>
      <section className="WhyVTVEnergy" style={{ background: '#0B0B0B', padding: '60px 0' }}>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className='EnergyLeft'>
                <h2 className="WindText" style={{ fontFamily: "'Bebas Neue', 'Inter', sans-serif", fontSize: '3.5rem', color: '#00E5FF' }}>
                  Why VTV Energy
                </h2>
                <p className="text-white px-6" style={{ fontSize: '18px', lineHeight: '28px' }}>
                  Energy as the backbone of global stability.
                  <br />
                  <br />
                  We believe that modern civilization requires high-capacity, reliable, and secure power grids. By focusing on utility-scale assets, modular nuclear generation, and advanced energy storage systems, VTV Energy builds the backbone that keeps global industrial supply chains, grids, and economies stable and resilient against energy shocks.
                </p>
              </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className='EnergyRight'>
                <img src={require('../assets/images/commercial_infra.png')} alt="Why VTV Energy" style={{ width: '100%', borderRadius: '8px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
