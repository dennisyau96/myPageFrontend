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

  // const PrimaySchool = {
  //   name: "Po Leung Kuk Horizon East Primary School",
  //   year: "2003-2009",
  //   achievement: "Primary 1 - Primary 6",
  //   img: "",
  // };

  // const SecondarySchool = {
  //   name: "Po Leung Kuk Centenery Li Shiu Chung Memorial College ",
  //   year: "2009-2015",
  //   achievement: "Secondary 1 - Secondary 6",
  //   img: "",
  // };

  // const University = {
  //   name: "The Chinese University of Hong Kong",
  //   year: "2015-2019",
  //   achievement: "Bachelor of Sciences(Biology)",
  //   img: "",
  // };

  // const PDDICT = {
  //   name: "Douglas College",
  //   year: "2023-2024",
  //   achievement: "Post-Degree Diploma of Information, Communication Technology",
  // };
  // const primary = education[0];
  // const secondary = education[1];
  // const university = education[2];
  // const pdd = education[3];

  return (
    <>
      <h1 className="font-bold text-3xl my-4"> Education </h1>

      <div className=" flex flex-wrap m-10 ">
        {education.map((edu, index) => (
          <div key={index}>
            <EducationCard content={edu} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Education;
