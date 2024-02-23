import React from 'react'

export const MapInquiry = () => {
  return (
    <>
    <section className="map-inquiry">
        <div className='container'>
        <div className='row'>
            <div className="col-lg-12 col-md-6 col-sm-12">
                <div style={{display:'flex',justifyContent:'space-between',gap:'10px'}}>
                    <div>
                    <h2>For inquiries, Have our sales engineers call you</h2>
                    </div>
                    <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
                        <div className='gradientCurrentLocation'>

                        </div>
                        <h3>
                        Our Current operations
                        </h3>
                    </div>
                </div>
                <div className='map'>
                    <img src={require('../assets/images/mapCurrent.png')} alt="map" />
                </div>
            </div>
        </div>
        </div>
    </section>
    </>
  )
}
