// import experience from "../../assets/experience";
import ExperienceCard from "./ExperienceCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../../constant/constant";

export default function Experience() {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    getData();
    scrollTo(0, 0);
  }, []);

  async function getData() {
    const expData = await axios.get([`${baseURL}/experiences`]);
    setExperience(expData.data);
    setExperience((experience) => experience.sort((a, b) => a.sort - b.sort));
  }

  return (
    <>
      <h1 className="font-bold text-3xl my-4 text-center"> Experience </h1>
      <div className="flex flex-wrap justify-center">
        {experience.map((exp, index) => (
          <div key={index}>
            <ExperienceCard content={exp} />
          </div>
        ))}
      </div>
    </>
  );
}
