import React from 'react'

export const Ordinary = () => {
  return (
    <>
     <section className="secondSection">
        <div className="container">
            <div className='row align-items-center'>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <div className='secondSectionLeft'>
                        <img src={require("../assets/images/ordinary.png")} alt='residential solar panel installation' />
                    </div>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <div className='secondSectionRight'>
                        <h2 className='text-white'>Why We’re Ordinary</h2>
                        <p className='text-white'>
                        At Vative Solutions, we redefine 'ordinary' by infusing it with innovation and dedication. Our relentless pursuit of excellence sets us apart in the solar energy industry. With a passion for sustainability and a drive for perfection, we transform ordinary solutions into extraordinary outcomes.
                            </p>
                            <p className='mt-3'>
                            Backed by expertise and integrity, we consistently exceed expectations, making every project exceptional. Join us in embracing the extraordinary journey towards a brighter, greener future.
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
