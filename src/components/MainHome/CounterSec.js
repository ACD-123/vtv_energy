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
          <div className="row g-4">
  <div className="col-lg-3 col-md-6">
    <div className="counterCard">
      <div className="counterNumber">
        <CountUp isCounting={startCounting} end={650} duration={3.2} />+
      </div>
      <div className="counterLine"></div>
      <h5>Capacity Deployed</h5>
    </div>
  </div>

  <div className="col-lg-3 col-md-6">
    <div className="counterCard">
      <div className="counterNumber">
        <CountUp isCounting={startCounting} end={18} duration={3.2} />+
      </div>
      <div className="counterLine"></div>
      <h5>Utility Partnerships</h5>
    </div>
  </div>

  <div className="col-lg-3 col-md-6">
    <div className="counterCard">
      <div className="counterNumber">
        <CountUp isCounting={startCounting} end={42} duration={3.2} />+
      </div>
      <div className="counterLine"></div>
      <h5>Infrastructure Assets</h5>
    </div>
  </div>

  <div className="col-lg-3 col-md-6">
    <div className="counterCard">
      <div className="counterNumber">
        <CountUp isCounting={startCounting} end={12} duration={3.2} />
      </div>
      <div className="counterLine"></div>
      <h5>Countries Worldwide</h5>
    </div>
  </div>
</div>
        </div>
      </section>
    </>
  );
};
