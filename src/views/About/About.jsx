import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
// import { about } from "../../assets/data/about";
import { title, currentFocus, currentLearning } from "../../assets/data/about";
import EmailButton from "../../component/EmailButton/EmailButton";
function About() {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <h1 className="font-bold text-3xl my-4 text-center theme4font">
          About me
        </h1>
        <span className="theme2font text-justify container block max-w-screen-sm">
          <span>
            I am Dennis Yau. I am a{" "}
            <span className="text-sky-300">Full Stack Web Developmer</span> and{" "}
            <span className="text-sky-300">Software Developmer</span>. I am
            continuously learning on various coding skills such as advanced{" "}
            <span className="text-sky-300">{currentLearning}</span>. I am
            currently focused on{" "}
            <span className="text-sky-300">{currentFocus}</span>.
          </span>
          <span className="block text-center my-10">
            I am more than happy to receive your email for any job or
            collaboration.
          </span>
          <span>
            <EmailButton />
          </span>
        </span>
      </div>
    </>
  );
}
export default About;
