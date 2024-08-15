import EducationCard from "./EducationCard.jsx";
import styles from "./Education.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../../constant/constant.js";

function Education() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    loadData();
    scrollTo(0, 0);
  }, []);

  async function loadData() {
    const eduData = await axios.get([`${baseURL}/educations`]);

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
