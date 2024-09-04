/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from "./Experience.module.css";
function ExperienceCard({ content }) {
  const desArray = content.description;
  localStorage.setItem("desArray", desArray);

  const [des, setDes] = useState([content.description]);

  return (
    <div className="p-4 m-3 border-2 rounded-lg bg-white z-0 max-w-sm   hover:shadow-sky-300 hover:transition-all   hover:shadow-xl  hover:duration-300 min-h-100 h-100 opacity-90">
      {content.position ? (
        <p className="font-bold text-2xl mb-7">
          <span className={styles.label}>{content.position}</span>
        </p>
      ) : null}
      <div className="grid grid-cols-5 gap-y-2">
        <div className="col-span-2 theme1font">Organization:</div>
        <div className="col-span-3">{content.organization}</div>
        <div className="col-span-2 theme1font">Period:</div>
        <div className="col-span-3">{content.period}</div>{" "}
        <div className="col-span-2 theme1font">Location:</div>
        <div className="col-span-3">{content.location}</div>{" "}
        {desArray ? (
          <div>
            <div className="col-span-2 theme1font">Description:</div>
            <div className="col-span-3">
              <ul>
                {desArray &&
                  desArray.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ExperienceCard;

//  <div className="grid grid-cols-2">
//    {content.organization ? (
//      <p>
//        <span className={styles.label}>Organization:</span>{" "}
//        {content.organization}
//      </p>
//    ) : null}
//    {content.period ? (
//      <p>
//        <span className={styles.label}>Period:</span> {content.period}
//      </p>
//    ) : null}
//    {content.location ? (
//      <p>
//        <span className={styles.label}>Location:</span> {content.location}
//      </p>
//    ) : null}
//    {content.description ? (
//      <p>
//        <span className={styles.label}>Description:</span>
//        <br />
//        {content.description}
//      </p>
//    ) : null}
//  </div>;
