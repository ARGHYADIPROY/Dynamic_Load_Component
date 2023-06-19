import React from "react";
import Nav from "./component/Nav";
import Header from "./component/Header";
import Logic from "./component/Logic";
import Collection from "./component/Collection";
import BestSeller from "./component/BestSeller";
import Offer from "./component/Offer";
import LatestArrivals from "./component/LatestArrivals";
import AboutUs from "./component/AboutUs";
import Footer from "./component/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <Logic />
      <Collection />
      <BestSeller />
      <Offer />
      <LatestArrivals />
      <AboutUs />
      <Footer />
    </>
  );
};

export default App;