import React from "react";
import { CountUp } from "use-count-up";

export const CounterSec = () => {
  return (
    <>
      <section className="counter">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="icofont-simple-smile"></i>
                <span data-toggle="counter-up">
                <CountUp  isCounting end={372} duration={3.2} />
                </span>
                <hr className="hrborder" />
                <p>Satisfied Clients</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="icofont-document-folder"></i>
                <span data-toggle="counter-up"><CountUp  isCounting end={13} duration={3.2} /></span>
                <hr className="hrborder" />
                <p>Manufacturing Partners</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="icofont-live-support"></i>
                <span data-toggle="counter-up"><CountUp  isCounting end={57} duration={3.2} /></span>
                <hr className="hrborder" />
                <p>Participated Projects</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="icofont-users-alt-5"></i>
                <span data-toggle="counter-up"><CountUp  isCounting end={5} duration={3.2} /></span>
                <hr className="hrborder" />
                <p>Countries worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
