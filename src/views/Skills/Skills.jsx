import axios from "axios";
import { useEffect, useState } from "react";
import SkillCard from "./SkillCard";
import Loading from "../../component/Loading/Loading";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [remarks, setRemarks] = useState([]);

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
        setRemarks(skillRes.data.remark);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1 className="font-bold text-3xl my-4 text-center theme4font">Skills</h1>
      <div className="flex flex-wrap gap-10 justify-center my-10 container max-w-100">
        {loading ? <Loading /> : null}
        {skills.map((skill, index) => (
          <div key={index}>
            <SkillCard content={skill} remarks={remarks} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
