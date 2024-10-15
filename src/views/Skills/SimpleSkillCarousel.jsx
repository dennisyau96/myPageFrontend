import axios from "axios";
import { baseURL } from "../../constant/constant";
import { useEffect, useState } from "react";
import SimpleSkillCard from "./SimpleSkillCard";
export default function SimpleSkillCarousel() {
  const [allSkills, setAllSkills] = useState([]);

  async function getSkills() {
    try {
      const allSkills = await axios.get(`${baseURL}/skills`);
      if (allSkills.data) {
        setAllSkills((p) => [...allSkills.data]);
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getSkills();
  });
  return (
    <>
      <div className="simpleSkillCarousel overflow-x-auto">
        {allSkills.map((item, i) => (
          <span key={i}>
            <SimpleSkillCard skill={item} />
          </span>
        ))}
      </div>
    </>
  );
}
