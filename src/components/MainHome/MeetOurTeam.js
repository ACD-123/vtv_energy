import { faCodepen, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const MeetOurTeam = () => {
  return (
    <>
    <section className="aboutVtv">
        <div className="container engineeringServicesmain">
          <div className="serviceEn" style={{display:'flex',justifyContent:'center',flexDirection:'column',textAlign:'center',alignItems:'center'}}>
            <h2 style={{ textAlign: "center" }}>Meet Our Team</h2>
            <p style={{ textAlign: "center", color: "white", fontSize: "20px" }}>
            For inquiries, have our sales engineers call you. Kindly fill out the following form
            </p>
          </div>
          <div class="container">
  <div class="row">
  <div className='col-lg-3'>
  <div class="carddff card0">
    <div class="borderSEC">
      <h2>Hassan Saleh</h2>
      {/* <div class="icons">
       <FontAwesomeIcon icon={faCodepen} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
      </div> */}
    </div>
  </div>
  </div>
  <div className='col-lg-3'>
  <div class="carddff card1">
    <div class="borderSEC">
      <h2>Bahaa Hamed</h2>
      {/* <div class="icons">
       <FontAwesomeIcon icon={faCodepen} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
      </div> */}
    </div>
  </div>
  </div>
    {/* <div className='col-lg-3'>
  <div class="carddff card2">
    <div class="borderSEC">
      <h2>Patrick Stewart</h2>
      <div class="icons">
       <FontAwesomeIcon icon={faCodepen} />
         <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
      </div>
    </div>
  </div>
  </div>
    <div className='col-lg-3'>
  <div class="carddff card2">
    <div class="borderSEC">
      <h2>Patrick Stewart</h2>
      <div class="icons">
       <FontAwesomeIcon icon={faCodepen} />
         <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
      </div>
    </div>
  </div>
  </div> */}
    </div>
</div>
        </div>
      </section>
    </>
  )
}
