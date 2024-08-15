import axios from "axios";
import { useEffect, useState } from "react";
import SkillCard from "./SkillCard";
import Loading from "../../component/Loading/Loading";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const skillRes = await axios.get([
        "https://mypagebackend-n0m8.onrender.com/api/skills",
      ]);
      if (skillRes.data) {
        setLoading(false);
        setSkills(skillRes.data);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1 className="font-bold text-3xl my-4 text-center">Skills</h1>
      <div className="flex flex-wrap gap-10 justify-center">
        {loading ? <Loading /> : null}
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
