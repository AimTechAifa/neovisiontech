import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Projects from "./pages/Projects.jsx";
import Technologies from "./pages/Technologies";
import Contact from "./pages/Contact.jsx";
import Layout from "./components/Layout.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

      </Routes>
    </>
  );
};

export default App;
