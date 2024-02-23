import React from 'react'

export const WhyVtvEnergy = () => {
  return (
    <>
    <section class="WhyVTVEnergy">
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <div className='EnergyLeft'>
                        <h2 class="WindText">
                        Why VTV Energy  
                        </h2>
                        <p class="text-white px-6">
                        We desire to recognize energy as a fundamental human right.  
<br/>
<br/>
We believe that people should only be paying for the transportation and extraction of energy. As of the current moment, the entire industry is monopolized and services are going from 4 to 5 times the actual price.
                        </p>
                    </div>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <div className='EnergyRight'>
                        <img src={require('../assets/images/vtvMainWhy.png')} alt="Why VTV Energy" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
