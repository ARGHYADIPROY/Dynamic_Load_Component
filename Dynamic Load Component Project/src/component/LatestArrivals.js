import React from "react";
import "./LatestArrivals.css";
import watch from "../../src/images/download(1).jpeg";
import ps5 from "../../src/images/download(2).jpeg";
import touchpad from "../../src/images/ipadtouch.jpeg";
import ImageAdBanner from "./ImageAdBanner";

const LatestArrivals = () => {
  return (
    <section className="white-section" id="la">
      <h1 className="LatestArrivals pad">Latest Arrivals</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="bss-box col-lg-4">
            <img className="bsss" src={watch} alt="SmartWatch" />
            <p className="text-capitalize my-1">FireBolt SmartWatch</p>
            <span class = "fw-bold">$ 100</span>
          </div>

          <div className="bss-box col-lg-4">
            <img className="bsss" src={ps5} alt="ps5" />
            <p className="text-capitalize my-1">Sony Playstation5</p>
            <span class = "fw-bold">$ 250</span>
          </div>
          <div className="bss-box col-lg-4">
            <img className="bsss" src={touchpad} alt="Vivobook" />
            <p className="text-capitalize my-1">VivoBook</p>
            <span class = "fw-bold">$ 150</span>
          </div>
        </div>
      </div>
      
          <ImageAdBanner />
          </section>
  );
};

export default LatestArrivals;