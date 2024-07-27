/* eslint-disable react/prop-types */
import styles from "./Skill.module.css";
import { useEffect, useState } from "react";
function SkillCard({ content, remark }) {
  const [remarks, setRemarks] = useState([]);

  // useEffect(() => {
  //   setRemarks((prev) => remark);
  // }, []);

  return (
    <div className={"bg-slate-100 w-96 rounded-xl p-10"}>
      {content.skill ? (
        <p>
          <span className={styles.label}>Skill: </span>
          {content.skill}
        </p>
      ) : null}

      {remarks ? (
        <div>
          <span className={styles.label}>Remark: </span>

          {remarks.map((point, i) => (
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
