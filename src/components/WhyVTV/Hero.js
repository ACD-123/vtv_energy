import React from "react";

export const Hero = ({ bgClass = "hero-leftWhyVTV" }) => {
  return (
    <>
      <section className="hero">
        <div className="container-fluid">
          <div className="row">
            <div className={`col-lg-12 col-md-12 col-sm-12 ${bgClass}`}>
              {/* <div className="herofirst">
                <h2 className="WindText">
                  providing top tier engineering services
                </h2>
                <p className="text-white px-6">
                  VTV Energy offers the latest renewable energy technologies,
                  from solar energy, wind energy to green <br />
                  hydrogen energy through our global partnerships.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
