import React from 'react'

export const EngineeringServices = () => {
  return (
    <>
   <section className="engineeringServices">

    <div className='container'>
    <div className='serviceEn'>
        <h2>
        Providing top tier engineering services
        </h2>
        <p style={{textAlign:'left',color:'white',fontSize:'20px'}}>
        At VTV, we ensure the highest quality products and services to make going green a smoother experience
for you.
        </p>
    </div>
    <div className='row mt-4'>
        <div className='col-lg-6'>
            <div className='card'>
            <a href='#Contactus'>
                <div className='card-body cole1'>
                    <h3>Purchase A Solar System</h3>
                    {/* <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                    </p> */}
                </div>
            </a>
            </div>
        </div>
        <div className='col-lg-6'>
            <div className='card'>
                <a href='#Contactus'>
                <div className='card-body cole2'>
                    <h3>Request A Multi-Energy Solution</h3>
                    {/* <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                    </p> */}
                </div>
                </a>
            </div>
        </div>
    </div>
    </div>
   </section>
    </>
  )
}
