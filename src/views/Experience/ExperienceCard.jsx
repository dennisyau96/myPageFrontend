/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Experience.module.css";
import { baseURL } from "../../constant/constant";
function ExperienceCard({ content }) {
  const [des, setDes] = useState(content.description);

  // useEffect(() => {
  //   getData();
  // }, []);

  // async function getData() {
  //   try {
  //     const desData = await axios.get([`${baseURL}/experiences`]);
  //     if (desData.data.description) {
  //       setDes([...desData.data.description]);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  return (
    <div className="expCardDiv p-4 m-4 border-2 border-white rounded-md  z-0 max-w-md   hover:shadow-sky-300 hover:transition-all   hover:shadow-xl  hover:duration-200  h-auto opacity-90">
      {content.position ? (
        <p className="font-bold text-2xl mb-7">
          <span className={styles.label}>{content.position}</span>
        </p>
      ) : null}
      <div className="grid grid-cols-5 gap-y-3">
        <div className="col-span-2 theme2font">Organization: </div>
        <div className="col-span-3 theme4font">{content.organization}</div>
        <div className="col-span-2 theme2font">Period: </div>
        <div className="col-span-3 theme4font">{content.period}</div>{" "}
        <div className="col-span-2 theme2font">Location: </div>
        <div className="col-span-3 theme4font">{content.location}</div>{" "}
        <div className="col-span-2 theme2font">Description: </div>
        <div className="col-span-3 theme4font">
          <div className="border-1 border-gray-400">
            <ul className="p-3">
              {des &&
                des.map((item, index) => (
                  <li key={index} className="mb-2 grid grid-cols-7">
                    <span className="col-span-1">{index + 1}.</span>
                    <span className="col-span-6"> {item}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
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
