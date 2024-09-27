/* eslint-disable react/prop-types */
import styles from "./Skill.module.css";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function SkillCard({ content, remarks }) {
  // const [remarksUS, setRemarks] = useState(remarks);
  const [skillExpanded, setSkillExpanded] = useState(false);
  const [remarksList, setRemarks] = useState();
  // useEffect(() => {
  //   setRemarksUS(remarks);
  // }, []);
  function toggleDisplay() {
    if (content.remark) {
      if (skillExpanded) {
        setSkillExpanded(false);
      } else {
        setSkillExpanded(true);
      }
    } else {
      toast("No detail.");
    }
  }

  return (
    <div
      className="bg-gray-900 rounded-md cursor-pointer w-auto text-gray-100  content-center px-4 py-2  text-center  hover:transition-all hover:duration-300 hover:shadow-lg hover:shadow-sky-300 h-auto hover:text-white text-lg  ease-in-out transition-all duration-500  "
      onClick={() => {
        toggleDisplay();
      }}
    >
      {content.skill ? (
        <p className="m-2 transition-all duration-200 ease-in-out">
          {/* <span className={styles.label}>Skill: </span> */}
          {content.skill}
        </p>
      ) : null}

      {skillExpanded && content.remark ? (
        <span>
          <ul className="transition-all duration-200 ease-in-out text-left overflow-scroll max-h-24 py-1 px-1">
            {content.remark.map((item, index) => (
              <li
                className="text-xs mb-1 theme4font grid grid-cols-5 transition-all duration-200 ease-in-out
            "
                key={index}
              >
                <span className="col-span-1 transition-all duration-200 ease-in-out">
                  {index + 1}.{" "}
                </span>
                <span className="col-span-4 transition-all duration-200 ease-in-out">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <span className="text-gray-500 text-xs">Please scroll down</span>
        </span>
      ) : null}
    </div>
  );
}
export default SkillCard;
