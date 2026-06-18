import React from 'react';

export const AboutVtv = ({ title, description, image }) => {
  return (
    <>
      <section className="AboutVtv" style={{ background: '#0B0B0B', padding: '60px 0' }}>
        <div className="container engineeringServicesmain">
          <div className='row'>
            <div className="serviceEn">
              <h2 style={{ fontFamily: "'Bebas Neue', 'Inter', sans-serif', sans-serif", fontSize: '3.5rem', color: '#00E5FF' }}>
                {title || "Industrial Grid Scale Infrastructure"}
              </h2>
              <div style={{ textAlign: "left", color: "white", fontSize: "20px", marginBottom: '30px' }}>
                {description || "At VTV Energy, we engineer, finance, and operate high-capacity utility energy systems and grid infrastructures to build a secure energy future."}
              </div>
            </div>
            <div className='col-lg-12'>
              <img src={image || require('../assets/images/foundation.png')} alt={title || "About VTV Energy"} style={{ width: '100%', borderRadius: '8px' }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
