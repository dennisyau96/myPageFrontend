import EducationCard from "./EducationCard.jsx";
import styles from "./Education.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../../constant/constant.js";
import Loading from "../../component/Loading/Loading.jsx";

function Education() {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
    scrollTo(0, 0);
  }, []);

  async function getData() {
    try {
      const eduData = await axios.get([`${baseURL}/educations`]);
      if (eduData.data) {
        setLoading(false);
      }
      setEducation(eduData.data);
      setEducation((education) => education.sort((a, b) => b.sort - a.sort));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="eduPageDiv" id="eduPageDiv">
        <h1 className="font-bold text-3xl my-4 text-center h-full theme4font pageTitle">
          Education
        </h1>

        <div className=" flex flex-wrap justify-center text-center Xcenter gap-8 my-10 p-10 eduDiv ">
          {education.map((edu, index) => (
            <div key={index} id="eduDiv" className="eduDiv">
              <EducationCard content={edu} />
            </div>
          ))}
          {loading ? <Loading /> : null}
        </div>
      </div>
    </>
  );
}

export default Education;
