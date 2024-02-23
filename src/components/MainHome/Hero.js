import React from 'react'

export const Hero = () => {
  return (
    <>
    <section className="hero">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 hero-leftMain">
            <div className='herofirst'>
              <h1 className='text-white'>Commercial Solar</h1>
              <p className='px-6 paraBG'>
              Explore more
              </p>
              {/* <button className="btn btn-primary">Get A Quote</button> */}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 hero-rightMain">
          <div className='herofirst'>
              <h1 className='text-white'>Residential Solar</h1>
              <p className='paraBG px-6'>
              Explore more
              </p>
              {/* <button className="btn btn-primary">Get A Quote</button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
