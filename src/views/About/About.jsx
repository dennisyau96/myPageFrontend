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
      <div
        className="content-center Xcenter text-center aboutPageDiv"
        id="aboutPageDiv"
      >
        <h1
          className="font-bold text-3xl my-4  Xcenter text-center inline-block theme4font pageTitle aboutPageTitle"
          id="aboutPageTitle"
        >
          About me
        </h1>
        <div
          className=" theme4font text-justify  block aboutParaDiv"
          id="aboutParaDiv"
        >
          <div className=" Xcenter inline-block aboutPara1" id="aboutPara1">
            I am Dennis Yau, a{" "}
            <span className="text-sky-300">Full Stack Web Developer</span> and{" "}
            <span className="text-sky-300">Software Developer</span>. I have
            started my IT journey since Sep 2023. Exploring the new coding
            technology is my daily routine. My main focus is{" "}
            <span className="text-sky-300">{currentFocus}</span>. Currently, I
            am also learning{" "}
            <span className="text-sky-300">{currentLearning}</span>.
          </div>
          <span
            className=" text-center Xcenter inline-block theme4font my-10 aboutPara2"
            id="aboutPara2"
          >
            I am more than happy to receive your email for any jobs or
            collaborations.
          </span>
          <span className="block justify-center text-center aboutBtn">
            <EmailButton />
          </span>
        </div>
      </div>
    </>
  );
}
export default About;
