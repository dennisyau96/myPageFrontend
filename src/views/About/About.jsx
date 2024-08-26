import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

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
      </div>
    </>
  );
}
export default About;
