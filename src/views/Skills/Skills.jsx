import axios from "axios";
import { useEffect, useState } from "react";
import SkillCard from "./SkillCard";
import Loading from "../../component/Loading/Loading";
import { useNavigate, Link } from "react-router-dom";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [remarks, setRemarks] = useState([]);

  useEffect(() => {
    loadData();
  }, []);
  const navigate = useNavigate();

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
    <div className="text-center justify-center justify-items-center justify-content-center transition-all duration-200 ease-in-out">
      <h1 className="font-bold text-3xl my-4 text-center theme4font pageTitle">
        Skills
      </h1>
      <span className=" skillPagePara text-center justify-center justify-items-center max-w-50 text-slate-600  text-sm flex-wrap inline">
        I am passionate in learning various kind of skills using{" "}
      </span>
      <a
        className="text-gray-400 underline cursor-pointer transition-all duration-200 animation-pulse inline"
        target="_blank"
        href="https://learning.linkedin.com/cx/get-started?src=go-pa&trk=sem-ga_campid.20913255557_asid.161076147087_crid.686759883542_kw.linkedin%20learning_d.c_tid.kwd-296672886869_n.g_mt.b_geo.9001499&mcid=7148407339128156199&cid=&gad_source=1&gbraid=0AAAAADQDH5QIRJdehAsW_-QA1icSpuSGj&gclid=Cj0KCQjwjNS3BhChARIsAOxBM6o5Hl9feXRtqyfsDYgwgFVOcwjN1s9Nq8-n2D4t8AwyjsCbilsmQ-QaAqWHEALw_wcB&gclsrc=aw.ds"
        onClick={() => {
          if (!confirm("You will be directed to an external website.")) {
            navigate(0);
          }
        }}
      >
        LinkedIn Learning.
      </a>
      {loading ? (
        <Loading />
      ) : (
        <div
          className="skillsDiv flex flex-wrap gap-4 justify-center my-10 container  border-1  p-10 w-3/5 transition-all duration-200 ease-in-out"
          id="skillsDiv"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="transition-all duration-200 ease-in-out "
            >
              <SkillCard content={skill} remarks={remarks} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Skills;
