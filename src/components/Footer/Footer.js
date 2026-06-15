import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const Footer = () => {
  return (
    <>
      <section className="footerSection" style={{ background: '#0B0B0B', borderTop: '1px solid #4A4A4A', padding: '60px 0 20px' }}>
        <div className='container'>
          <div className='forborderFooter full-withradius' style={{ background: '#0B0B0B' }}>
            <div className='row'>
              <div className='col-lg-3 mb-4 mb-lg-0'>
                <div className='footerLogo'>
                  <span style={{ 
                    fontFamily: "'Bebas Neue', 'Inter', sans-serif", 
                    fontSize: '2.5rem', 
                    color: '#FFFFFF', 
                    letterSpacing: '2px',
                    fontWeight: 'bold'
                  }}>
                    VTV <span style={{ color: '#00E5FF' }}>ENERGY</span>
                  </span>
                  <p style={{ color: '#B0B0B0', marginTop: '10px' }}>VTV Energy: Powering the Macro Grid.</p>
                </div>
              </div>
              <div className='col-lg-3 mb-4 mb-lg-0'>
                <div className='footerMenu'>
                  <h4 className='cont' style={{ fontFamily: "'Bebas Neue', 'Inter', sans-serif", color: '#00E5FF' }}>Useful Links</h4>
                  <ul style={{ padding: 0 }}>
                    <li><a href='/' style={{ color: '#FFFFFF', textDecoration: 'none' }}>Home</a></li>
                    <li><a href='/solutions' style={{ color: '#FFFFFF', textDecoration: 'none' }}>Solutions Portfolio</a></li>
                    <li><a href='/commercial-infrastructure' style={{ color: '#FFFFFF', textDecoration: 'none' }}>Commercial Infrastructure</a></li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-3 mb-4 mb-lg-0'>
                <div className='footerMenu'>
                  <h4 className='cont' style={{ fontFamily: "'Bebas Neue', 'Inter', sans-serif", color: '#00E5FF' }}>Corporate</h4>
                  <ul style={{ padding: 0 }}>
                    <li><a href='/Why-VTV' style={{ color: '#FFFFFF', textDecoration: 'none' }}>Why VTV</a></li>
                    <li><a href='/foundation' style={{ color: '#FFFFFF', textDecoration: 'none' }}>Energy To All Foundation</a></li>
                    <li><a href='/investor-relations' style={{ color: '#FFFFFF', textDecoration: 'none' }}>Investor Relations</a></li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='dert'>
                  <div className='footerContact footerMenu'>
                    <ul style={{ padding: '0px' }}>
                      <h4 className='cont' style={{ fontFamily: "'Bebas Neue', 'Inter', sans-serif", color: '#00E5FF' }}>Contact</h4>
                    </ul>
                    <p style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '15px' }}>
                      <img src={require('../assets/images/email.png')} alt="email icon" />
                      <a href='mailto:info@vtvenergy.com' style={{ color: 'white', textDecoration: 'none' }}> 
                        info@vtvenergy.com
                      </a>
                    </p>
                  </div>
                  <div className='socialIcon' style={{ display: 'flex', gap: '15px' }}>
                    <a href='#' style={{ color: '#00E5FF' }}><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                    <a href='https://www.instagram.com/vtvenergy/' target="_blank" rel="noreferrer" style={{ color: '#00E5FF' }}><FontAwesomeIcon className='icon' icon={faInstagram} /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
