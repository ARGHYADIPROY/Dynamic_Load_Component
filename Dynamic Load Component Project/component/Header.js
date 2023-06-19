import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header
      id="header"
      class="vh-100 carousel slide"
      data-bs-ride="carousel"
      style={{ paddingTop: "104px" }}
    >
      <div class="container h-100 d-flex align-items-center carousel-inner">
        <div class="text-center carousel-item active">
          <h2 class="text-capitalize text-white">best collection</h2>
          <h1 class="text-uppercase py-2 fw-bold text-white">new arrivals</h1>
          <a href="/" class="btn mt-3 text-uppercase">
            shop now
          </a>
        </div>
        <div class="text-center carousel-item">
          <h2 class="text-capitalize text-white">best price & offer</h2>
          <h1 class="text-uppercase py-2 fw-bold text-white">new season</h1>
          <a href="/" class="btn mt-3 text-uppercase">
            buy now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
