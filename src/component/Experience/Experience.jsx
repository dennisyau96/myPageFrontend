// import experience from "../../assets/experience";
import ExperienceCard from "./ExperienceCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Experience() {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const expData = await axios.get([
      "http://localhost:3000/api/experience",
      // "https://mypagebackend-eg0j.onrender.com/api/experience",
    ]);
    setExperience(expData.data);
  }

  return (
    <>
      <h1> Experience </h1>
      <div>
        {experience.map((exp, index) => (
          <div key={index}>
            <ExperienceCard content={exp} />
          </div>
        ))}
      </div>
    </>
  );
}
