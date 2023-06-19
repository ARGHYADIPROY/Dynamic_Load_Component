import React from "react";
import "./AboutUs.css";
import image from '../../src/images/about_us.jpeg';

const AboutUs = () => {
  return (
    <section id="aboutus" class="py-5">
      <div class="container">
        <div class="row gy-lg-5 align-items-center">
          <div class="col-lg-6 order-lg-1 text-center text-lg-start">
            <div class="title pt-3 pb-5">
              <h2 class="position-relative d-inline-block ms-4">About Us</h2>
            </div>
            <p class="lead text-muted">
              At StyleHub, we are passionate about providing you with a seamless
              online shopping experience. As a trusted destination for all your
              needs, we strive to deliver exceptional products and outstanding
              service to our valued customers.
            </p>
            <p>
              Our journey began with a simple vision: to create an e-commerce
              platform that offers a curated selection of products that meets
              the highest standards of quality and craftsmanship. With years of
              experience in the industry, we have carefully curated an extensive
              collection that caters to diverse tastes and preferences.
            </p>
          </div>
          <div class="col-lg-6 order-lg-0">
            <img src={image} alt="about" class="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
