import React, { useState } from "react";
import "./ImageAdBanner.css";
import image20 from "../../src/images/20.jpg";

const ImageAdBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  const handleBannerClose = () => {
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <div className="image-ad-banner">
          <div className="banner-content">
            <button className="close-button" onClick={handleBannerClose}>
              X
            </button>
            <img
              className="ad-image"
              src={image20}
              alt="Advertisement"
            />
            <p className="ad-text">Special Offer!</p>
          </div>
        </div>
      )}
        <div className="row">
          <div className="bss-box col-lg-4">
          <button className="latest-arrivals-button btn mt-3 text-uppercase" onClick={() => setShowBanner(true)}>
        Buy Now
      </button>
          </div>
          <div className="bss-box col-lg-4">
          <button className="latest-arrivals-button btn mt-3 text-uppercase" onClick={() => setShowBanner(true)}>
        Buy Now
      </button>
          </div>
          <div className="bss-box col-lg-4">
          <button className="latest-arrivals-button btn mt-3 text-uppercase" onClick={() => setShowBanner(true)}>
        Buy Now
      </button>
          </div>
        </div>
    </>
  );
};

export default ImageAdBanner;
