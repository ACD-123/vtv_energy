import React from 'react'

export const SecondSection = () => {
  return (
    <>
    <section className="secondSection">
        <div className="container">
            <div className='row align-items-center'>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <div className='secondSectionLeft'>
                        <img src={require("../assets/images/vtvSolarenergy.png")} alt='residential solar panel installation' />
                    </div>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <div className='secondSectionRight'>
                        <h2 className='text-white'>VTV Energy</h2>
                        <p className='text-white'>
                        VTV Energy is Connecticut's #1 choice for residential and commercial solar installations. VTV Solar is a family-owned business, based in Hamden, Connecticut. VTV Solar operates in all 50 states and US territories. What we offer: VTV Energy offers the latest technologies for residential and commercial solar installations.
                            </p>
                        <button className='btnSecondSec'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
