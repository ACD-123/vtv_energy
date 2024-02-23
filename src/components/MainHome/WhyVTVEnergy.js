import React from 'react'

export const WhyVTVEnergy = () => {
  return (
    <>
    <section className="whyVtv">
        <div className='container'>
            <div className='texter'>
            <h2>
            Why VTV Energy
            </h2>
            <p>
            We desire to recognize energy as a fundamental human right.
            </p>
            </div>
            <div class="row">
        <div className='col-lg-3'>
        <div className="service" id="consultation">
    <img
      width={160}
      src={require("../assets/images/messageColor.png")}
      alt="consultation"
    />
    <h2>Initial Consultation</h2>
    <p>
      The point of using Lorem Ipsum is that it has a more-or-less normal
      distribution of letters, as opposed to using 'Content here, content
      here', making it look like readable English.
    </p>
  </div>
        </div>
        <div className='col-lg-3'>
        <div class="service" id="assessment">
          <img width={160} src={require("../assets/images/Site.png")} alt="assessment" />
          <h2>Site Assessment</h2>
          <p>
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          </p>
        </div>
        </div>
        <div className='col-lg-3'>
        <div class="service" id="design">
        <img width={160} src={require("../assets/images/settingsColor.png")} alt="design" />
          <h2>Customized System Design</h2>
          <p>
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          </p>
        </div>
        </div>
        <div className='col-lg-3'>
        <div class="service" id="proposal">
        <img width={160} src={require("../assets/images/handColor.png")} alt="proposal" />
          <h2>Proposal & Contracting</h2>
          <p>
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          </p>
        </div>
        </div>
       
       
      </div>
      </div>
    </section>
    </>
  )
}
