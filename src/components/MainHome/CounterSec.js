import React, { useEffect, useState } from "react";
import { CountUp } from "use-count-up";

export const CounterSec = () => {
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const counterSection = document.querySelector(".counter");
      if (counterSection) {
        const counterSectionTop = counterSection.getBoundingClientRect().top;
        if (counterSectionTop < window.innerHeight) {
          setStartCounting(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="counter" style={{ background: '#0B0B0B', padding: '60px 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-6 mt-5 mt-lg-0">
              <div className="count-box text-center">
                <span data-toggle="counter-up" style={{ color: '#00E5FF' }}>
                  <CountUp isCounting={startCounting} end={650} duration={3.2} />
                </span>
                <span style={{ fontSize: '2rem', color: '#00E5FF', fontWeight: 'bold' }}></span>
                <hr className="hrborder" />
                <p style={{ textTransform: 'uppercase', fontSize: '14px', letterSpacing: '1px' }}>Capacity Deployed</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6 mt-5 mt-lg-0">
              <div className="count-box text-center">
                <span data-toggle="counter-up" style={{ color: '#00E5FF' }}>
                  <CountUp isCounting={startCounting} end={18} duration={3.2} />
                </span>
                <hr className="hrborder" />
                <p style={{ textTransform: 'uppercase', fontSize: '14px', letterSpacing: '1px' }}>Utility Partnerships</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6 mt-5 mt-lg-0">
              <div className="count-box text-center">
                <span data-toggle="counter-up" style={{ color: '#00E5FF' }}>
                  <CountUp isCounting={startCounting} end={42} duration={3.2} />
                </span>
                <hr className="hrborder" />
                <p style={{ textTransform: 'uppercase', fontSize: '14px', letterSpacing: '1px' }}>Infrastructure Assets</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6 mt-5 mt-lg-0">
              <div className="count-box text-center">
                <span data-toggle="counter-up" style={{ color: '#00E5FF' }}>
                  <CountUp isCounting={startCounting} end={12} duration={3.2} />
                </span>
                <hr className="hrborder" />
                <p style={{ textTransform: 'uppercase', fontSize: '14px', letterSpacing: '1px' }}>Countries Worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
