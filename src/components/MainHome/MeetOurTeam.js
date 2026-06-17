import React from 'react'
import hassanImg from "../assets/images/hassan.png";
import hamedImg from "../assets/images/Hamed.png";
export const MeetOurTeam = () => {
  return (
    <>
      <section className="aboutVtv">
  <div className="container engineeringServicesmain">
    <div
      className="serviceEn"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <h2>Meet Our Team</h2>
      <p
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "20px",
          marginBottom: "40px",
        }}
      >
        For inquiries, have our sales engineers call you. Kindly fill out the
        following form
      </p>
    </div>

    <div className="row justify-content-center teamRow">

  <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
    <div className="teamMember">
      <img src={hassanImg} alt="Hassan Saleh" className="teamCircleImg" />

      <h4>Hassan Saleh</h4>
      <p>Sales Engineer</p>
    </div>
  </div>

  <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
    <div className="teamMember">
      <img src={hamedImg} alt="Bahaa Hamed" className="teamCircleImg" />

      <h4>Bahaa Hamed</h4>
      <p>Sales Engineer</p>
    </div>
  </div>

    </div>
  </div>
</section>
    </>
  )
}
