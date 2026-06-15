import React from 'react';

export const AboutVtv = () => {
  return (
    <>
      <section className="AboutVtv" style={{ background: '#0B0B0B', padding: '60px 0' }}>
        <div className="container engineeringServicesmain">
          <div className='row'>
            <div className="serviceEn">
              <h2 style={{ fontFamily: "'Bebas Neue', 'Inter', sans-serif', sans-serif", fontSize: '3.5rem', color: '#00E5FF' }}>
                Industrial Grid Scale Infrastructure
              </h2>
              <p style={{ textAlign: "left", color: "white", fontSize: "20px", marginBottom: '30px' }}>
                At VTV Energy, we engineer, finance, and operate high-capacity utility energy systems and grid infrastructures to build a secure energy future.
              </p>
            </div>
            <div className='col-lg-12'>
              <img src={require('../assets/images/foundation.png')} alt="About VTV Energy" style={{ width: '100%', borderRadius: '8px' }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
