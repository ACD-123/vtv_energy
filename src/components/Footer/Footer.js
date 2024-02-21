import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, far } from '@fortawesome/free-regular-svg-icons'
import { faL, fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Footer = () => {
  return (
    <>
    <section className="footerSection">
        <div className='container'>
        <div className='forborderFooter full-withradius'>
        <div className='row'>
                <div className='col-lg-3'>
                    <div className='footerLogo'>
                        <img width='200px' src={require('../assets/logo/logo.png')} alt='logo' />
                        <p>Our paper is sourced from FSC-certified mills. We plant enough trees to more than double our paper usage.</p>
                    </div>
                </div>
                <div className='col-lg-3'>
                    <div className='footerMenu'>
                        <ul>
                            <li><a href='#'>useful lINKS</a></li>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>Projects</a></li>
                            <li><a href='#'>Solar Energy</a></li>
                        </ul>
                    </div>
                </div>
                <div className='col-lg-3'>
                    <div className='footerMenu'>
                        <ul>
                            <li><a href='#'>explore more</a></li>
                            <li><a href='#'>About Us</a></li>
                            <li><a href='#'>Contact</a></li>
                            <li><a href='#'>FAQs</a></li>
                        </ul>
                    </div>
                </div>
                <div className='col-lg-3'>
                    <div className='dert'>
                    <div className='footerContact'>
                        <h2>Contact</h2>
                        {/* <p>Address: 1234 Street Name, City Name, United States</p>
                        <p>Phone: +123 456 7890</p> */}
                        <p style={{display:'flex',gap:'5px',alignItems:'center',marginBottom:'0px'}}>
                        <img src={require('../assets/images/email.png')} />
                            <a href='mailto:mubashirodho@gmail.com' style={{color:'white'}}> 
                            support@vtvenergy.com
                            </a>
                        </p>
                    </div>
                    <div className='socialIcon'>
                        <a href='#'><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                        <a href='#'><FontAwesomeIcon className='icon' icon={faInstagram} /></a>
                        <a href='#'><FontAwesomeIcon className='icon' icon={faTwitter} /></a>

                    </div>
                    </div>
                </div>
            </div>
           </div>
           {/* <div class="full-withradius border">Gradient border with border radius</div> */}

        </div>
    </section>
    </>
  )
}
