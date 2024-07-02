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
      <h1>Skills</h1>
      <div>
        {skills.map((skill, index) => (
          <div key={index}>
            <SkillCard content={skill} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
