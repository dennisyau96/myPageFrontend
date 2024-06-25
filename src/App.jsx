// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";

//import component and page
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Education from "./component/Education/Education";
import Experience from "./component/Experience/Experience";
import Gallery from "./component/Gallery/Gallery";
import Projects from "./component/Projects/Projects";
import Skills from "./component/Skills/Skills";
import ErrorPage from "./component/ErrorPage/ErrorPage";
import Certificate from "./component/Certificate/Certificate";
import About from "./component/About/About";

function App() {
  return (
    <>
      <Toaster position="bottom-center" duration="5000" />
      <Header z-index="10" />
      <div className="mainContent container">
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
    </>
  );
}

export default App;
