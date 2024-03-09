import React from 'react'

export const AboutVtv = () => {
  return (
    <>
    <section class="AboutVtv">
    <div className="container engineeringServicesmain">
          <div className='row'>
          <div className="serviceEn">
            <h2>About VTV ENERGY</h2>
            <p style={{ textAlign: "left", color: "white", fontSize: "20px" }}>
            At VTV Energy, we offer the highest quality solar installations at the best pricing in the market
guaranteed.
            </p>
          </div>
            <div className='col-lg-12'>
                <img src={require('../assets/images/about.png')} alt="About VTV Energy" />
            </div>
          </div>
        </div>
    </section>
    </>
  )
}
