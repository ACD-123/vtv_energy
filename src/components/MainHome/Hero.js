import React from 'react';
import videoBg from '../assets/banner/vative.mp4';

export const Hero = () => {
  return (
    <section className="hero" style={{ position: 'relative', overflow: 'hidden', height: '85vh' }}>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          zIndex: 1
        }}
      >
        <source src={videoBg} type="video/mp4" />
      </video>
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(11, 11, 11, 0.75)',
          zIndex: 2
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 3, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="row w-100">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className='herofirst' style={{ paddingTop: '80px' }}>
              <h1 className='text-white' style={{ fontSize: '4.5rem', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: "'Bebas Neue', 'Inter', sans-serif" }}>
                Powering the Macro Grid.
              </h1>
              <p className='px-6 paraBG text-white' style={{ fontSize: '1.4rem', marginTop: '20px', maxWidth: '800px', margin: '20px auto 30px', fontFamily: "'Inter', sans-serif" }}>
                VTV Energy deploys the high-capacity infrastructure required for modern civilization.
              </p>
              <button className="buttonMainHomeBanner">Explore Asset Portfolio</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
