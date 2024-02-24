import React, { useEffect, useState } from "react";
import { CountUp } from "use-count-up";

export const CounterSec = () => {
  const [startCounting, setStartCounting] = useState(false);

  // Use useEffect to start counting when the component mounts
  useEffect(() => {
    const handleScroll = () => {
      const counterSection = document.querySelector(".counter");
      const counterSectionTop = counterSection.getBoundingClientRect().top;

      // If the counter section is in the viewport, start counting
      if (counterSectionTop < window.innerHeight) {
        setStartCounting(true);
        // Remove the scroll event listener to avoid unnecessary calculations
        window.removeEventListener("scroll", handleScroll);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <>
      <section className="counter">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="icofont-simple-smile"></i>
                <span data-toggle="counter-up">
                <CountUp  isCounting={startCounting} end={372} duration={3.2} />
                </span>
                <hr className="hrborder" />
                <p>Satisfied Clients</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="icofont-document-folder"></i>
                <span data-toggle="counter-up"><CountUp  isCounting={startCounting} end={13} duration={3.2} /></span>
                <hr className="hrborder" />
                <p>Manufacturing Partners</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="icofont-live-support"></i>
                <span data-toggle="counter-up"><CountUp  isCounting={startCounting} end={57} duration={3.2} /></span>
                <hr className="hrborder" />
                <p>Participated Projects</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="icofont-users-alt-5"></i>
                <span data-toggle="counter-up"><CountUp  isCounting={startCounting} end={5} duration={3.2} /></span>
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
