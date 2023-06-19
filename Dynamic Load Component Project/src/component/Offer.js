import React from "react";
import "./Offer.css";

const Offer = () => {
  return (
    <section id="offers" class="py-5">
      <div class="container">
        <div class="row d-flex align-items-center justify-content-center text-center justify-content-lg-start text-lg-start">
          <div class="offers-content">
            <span class="text-white">Discount Up To 50%</span>
            <h2 class="mt-2 mb-4 text-white">Grand Sale Offer!</h2>
            <a href="/" class="btn">
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;