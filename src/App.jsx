// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./AppAnimation.css";
import "./AppMedia.css";

import { Toaster } from "react-hot-toast";

//import component and page
import Header from "./component/Header/Header";
import Home from "./views/Home/Home";
import Education from "./views/Education/Education";
import Experience from "./views/Experience/Experience";
import Gallery from "./views/Gallery/Gallery";
import Projects from "./views/Projects/Projects";
import Skills from "./views/Skills/Skills";
import ErrorPage from "./views/ErrorPage/ErrorPage";
import Certificate from "./views/Certificate/Certificate";
import About from "./views/About/About";
import axios from "axios";
import Maintenance from "./views/ErrorPage/Maintenance";
import Footer from "./component/Footer/Footer";
axios.defaults.auth = true;

export default function App() {
  return (
    <div className=" max-w-screen transition-all">
      <Toaster position="bottom-center" duration="5000" />

      <Header z-index="10" />
      <div className="mainContent relative min-h-screen mb-20 max-w-screen">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certificates" element={<Certificate />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
