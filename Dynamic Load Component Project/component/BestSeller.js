import React from "react";
import "./BestSeller.css";
import image1 from "../../src/images/headSet.jpeg";
import image2 from "../../src/images/ipad.jpeg";
import image3 from "../../src/images/download1.jpeg";
import BestAdd from "./BestAdd";

const BestSeller = () => {
  return (
    <section class="white-section" id="bs">
      <h1 class="BestSellers padd">Best Sellers</h1>
      <div class="container-fluid">
        <div class="row">
          <div class="bss-box col-lg-4">
            <img class="bs" src={image3} alt="phone" />
            <p class="text-capitalize my-1">Motorola Edge 40</p>
            <span class="fw-bold">$ 800</span>
          </div>

          <div class="bss-box col-lg-4">
            <img class="bsss" src={image1} alt="Headphones" />
            <p class="text-capitalize my-1">Boat Headphones</p>
            <span class="fw-bold">$ 80</span>
          </div>
          <div class="bss-box col-lg-4">
            <img class="bsss" src={image2} alt="Ipad" />
            <p class="text-capitalize my-1">Ipad</p>
            <span class="fw-bold">$ 200</span>
          </div>
        </div>
      </div><BestAdd/>
    </section>
  );
};

export default BestSeller;