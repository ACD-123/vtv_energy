import React from 'react'

export const Hero = () => {
  return (
    <>
    <section className="hero">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 hero-left">
            <div className='herofirst'>
              <h1 className='text-white'>Commercial Solar</h1>
              <p className='text-white px-6'>
              No limit, our dedicated teams cover projects in megawatt and gigawatt sizes.
              </p>
              {/* <button className="btn btn-primary">Get A Quote</button> */}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 hero-right">
          <div className='herofirst'>
              <h1 className='text-white'>Residential Solar</h1>
              <p className='text-white px-6'>
              Install time takes up to five business days from approval. Any state, any city, anywhere across the United States
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
