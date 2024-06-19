import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation";
import Home from "./components/Home"; // Adjust import path as necessary
import Gallery from "./components/gallery"; // Adjust import path as necessary
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Contact } from "./components/contact";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home data={landingPageData} />} />
        <Route
          path="/gallery"
          element={<Gallery data={landingPageData.Gallery} />}
        />
      </Routes>
      <Contact />
    </Router>
  );
};

export default App;
