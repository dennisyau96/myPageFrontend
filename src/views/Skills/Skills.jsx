import axios from "axios";
import { useEffect, useState } from "react";
import SkillCard from "./SkillCard";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const skillRes = await axios.get([
      "https://mypagebackend-n0m8.onrender.com/api/skills",
      // "https://mypagebackend-eg0j.onrender.com/api/skills",
    ]);
    setSkills(skillRes.data);
  }

  return (
    <>
      <h1 className="font-bold text-3xl my-4 text-center">Skills</h1>
      <div className="flex flex-wrap gap-10 justify-center">
        {skills.map((skill, index) => (
          <div key={index}>
            <SkillCard content={skill} remarks={skill.remark} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
