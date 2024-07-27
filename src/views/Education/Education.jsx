import EducationCard from "./EducationCard.jsx";
import styles from "./Education.module.css";
import education from "../../assets/education.js";
import axios from "axios";
import { useEffect, useState } from "react";

function Education() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const eduData = await axios.get([
      "https://mypagebackend-n0m8.onrender.com/api/education",
    ]);

    setEducation((prev) => eduData.data);
    setEducation((education) => education.sort((a, b) => b.sort - a.sort));
  }

  return (
    <>
      <div className="">
        <h1 className="font-bold text-3xl my-4 text-center"> Education </h1>

        <div className=" flex flex-wrap m-10 justify-center">
          {education.map((edu, index) => (
            <div key={index}>
              <EducationCard content={edu} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Education;
