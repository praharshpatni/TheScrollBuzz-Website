import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/portfolio" element={<Portfolio />} /> */}
    </Routes>
  );
}

export default App;