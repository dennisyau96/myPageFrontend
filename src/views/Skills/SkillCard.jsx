import styles from "./Skill.module.css";
import { useState } from "react";
function SkillCard({ content }) {
  const [remark, setRemark] = useState(content.remark);
  let remarkString = "";
  return (
    <div className={styles.skillCardDiv}>
      {content.skill ? (
        <p>
          <span className={styles.label}>Skill: </span>
          {content.skill}
        </p>
      ) : null}
      {content.since ? (
        <p>
          <span className={styles.label}>Since: </span>
          {content.since}
        </p>
      ) : null}
      {content.remark ? (
        <p>
          <span className={styles.label}>Remark: </span>
          <br />
          {content.remark}
        </p>
      ) : null}
    </div>
  );
}
export default SkillCard;
