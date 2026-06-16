import React from 'react'

export const MeetOurTeam = () => {
  return (
    <>
      <section className="aboutVtv">
        <div className="container engineeringServicesmain">
          <div className="serviceEn" style={{display:'flex',justifyContent:'center',flexDirection:'column',textAlign:'center',alignItems:'center'}}>
            <h2 style={{ textAlign: "center" }}>Meet Our Team</h2>
            <p style={{ textAlign: "center", color: "white", fontSize: "20px", marginBottom: "40px" }}>
              For inquiries, have our sales engineers call you. Kindly fill out the following form
            </p>
          </div>
          <div className="row justify-content-center mt-2">
            <div className='col-lg-4 col-md-6 col-sm-8 mb-4'>
              <div className="team-card">
                <div className="team-card-img-wrapper">
                  <div className="team-card-img team-img-hassan"></div>
                </div>
                <div className="team-card-overlay"></div>
                <div className="team-card-content">
                  <span className="team-card-role">Sales Engineer</span>
                  <h3 className="team-card-name">Hassan Saleh</h3>
                  <div className="team-card-divider"></div>
                  <p className="team-card-desc">Advanced Energy Solutions Specialist</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-8 mb-4'>
              <div className="team-card">
                <div className="team-card-img-wrapper">
                  <div className="team-card-img team-img-hamed"></div>
                </div>
                <div className="team-card-overlay"></div>
                <div className="team-card-content">
                  <span className="team-card-role">Sales Engineer</span>
                  <h3 className="team-card-name">Bahaa Hamed</h3>
                  <div className="team-card-divider"></div>
                  <p className="team-card-desc">Grid-Scale Infrastructure Consultant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
