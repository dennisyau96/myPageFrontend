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
        "  bg-gray-900 rounded-md  w-auto text-gray-100  content-center p-4  text-center  hover:transition-all hover:duration-300 hover:shadow-lg hover:shadow-sky-300 h-auto hover:text-white text-lg  ease-in-out transition-all duration-500"
      }
    >
      {content.skill ? (
        <p className=" ">
          {/* <span className={styles.label}>Skill: </span> */}
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
