// import experience from "../../assets/experience";
import ExperienceCard from "./ExperienceCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../../constant/constant";
import Loading from "../../component/Loading/Loading";

export default function Experience() {
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
    scrollTo(0, 0);
  }, []);

  async function getData() {
    try {
      const expData = await axios.get([`${baseURL}/experiences`]);
      if (expData.data) {
        setLoading(false);
      }
      setExperience(expData.data);
      setExperience((experience) => experience.sort((a, b) => a.sort - b.sort));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1 className="font-bold text-3xl my-4 text-center theme4font pageTitle">
        {" "}
        Experience{" "}
      </h1>
      <div
        className="flex flex-wrap justify-center text-center Xcenter gap-8 my-10 p-10 "
        id="expDiv"
      >
        {loading ? <Loading /> : null}
        {experience.map((exp, index) => (
          <div key={index}>
            <ExperienceCard content={exp} />
          </div>
        ))}
      </div>
    </>
  );
}
