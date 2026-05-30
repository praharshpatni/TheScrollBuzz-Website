import { Routes, Route } from "react-router-dom";

import "./analytics";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
// import Portfolio from "./components/Portfolio/Portfolio";

// import DigitalMarketing from "../pages/Services/DigitalMarketing";
// import SocialMediaManagement from "../pages/Services/SocialMediaManagement";
// import WebDevelopment from "../pages/Services/WebDevelopment";
// import GraphicDesign from "../pages/Services/GraphicDesign";
// import VideoEditing from "../pages/Services/VideoEditing";
import DetailedAbout from "./components/About/DetailedAbout"
import DetailedServices from "./components/Services/DetailedServices"
import DetailedPortfolio from "./components/Portfolio/DetailedPortfolio"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<DetailedAbout />} />
      <Route path="/services" element={<DetailedServices />} />
      <Route path="/portfolio" element={<DetailedPortfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;