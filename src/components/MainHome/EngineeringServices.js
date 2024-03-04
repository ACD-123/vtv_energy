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
        VTV Energy offers the latest renewable energy technologies, from solar energy,wind energy to green hydrogen energy through our global partnerships. <br/>
<br/>

At VTV Energy, we believe in humanity and trust the people who make the most conscious decisions when selecting the provider that best represents them.
        </p>
    </div>
    <div className='row mt-4'>
        <div className='col-lg-6'>
            <div className='card'>
                <div className='card-body cole1'>
                    <h3>Solar Energy Services</h3>
                    <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                    </p>
                </div>
                
            </div>
        </div>
        <div className='col-lg-6'>
            <div className='card'>
                <div className='card-body cole2'>
                    <h3>Net-zero Carbon Foot Print</h3>
                    {/* <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                    </p> */}
                </div>
                
            </div>
        </div>
    </div>
    </div>
   </section>
    </>
  )
}
