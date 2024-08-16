/* eslint-disable react/prop-types */
import styles from "./Skill.module.css";
import { useEffect, useState } from "react";

function SkillCard({ content, remarks }) {
  const [remarksUS, setRemarks] = useState(remarks);

  // useEffect(() => {
  //   setRemarksUS(remarks);
  // }, []);

  return (
    <div
      className={
        "bg-slate-200 hover:bg-white w-96 rounded-xl p-10 border-2    hover:transition-all hover:duration-300 hover:shadow-2xl hover:shadow-gray-300"
      }
    >
      {content.skill ? (
        <p>
          <span className={styles.label}>Skill: </span>
          {content.skill}
        </p>
      ) : null}

      {remarksUS ? (
        <div>
          <span className={styles.label}>Remark: </span>
          {remarksUS.map((point, i) => (
            <li key={i}>
              {i}. {point}
            </li>
          ))}
        </div>
      ) : null}
    </div>
  );
}
export default SkillCard;
