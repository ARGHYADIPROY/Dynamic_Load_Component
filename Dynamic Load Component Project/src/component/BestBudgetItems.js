import React, { useState } from "react";
import "./BestBudgetItems.css";
import image23 from "../../src/images/popup.jpeg";

const BestBudgetItems = () => {
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
              src={image23}
              alt="Advertisement"
            />
            <p className="ad-text">Special Offer!</p>
          </div>
        </div>
      )}
        <button className="latest-arrivals-button btn mt-3 text-uppercase" onClick={() => setShowBanner(true)}>
        Best Budget Items
      </button>
    </>
  );
};

export default BestBudgetItems;