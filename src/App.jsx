import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./Pages/Home";
import Properties from "./Pages/Properties";
import PropertyDetails from "./Pages/PropertyDetails";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog"; // NEW

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:id" element={<PropertyDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} /> {/* NEW */}
      </Routes>
    </Router>
  );
}

export default App;