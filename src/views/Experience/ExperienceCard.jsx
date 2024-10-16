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
    <div className="expCardDiv p-4 border-1 border-gray-300 rounded-md  z-0  hover:shadow-sky-300 hover:transition-all   hover:shadow-lg  hover:duration-200  h-auto opacity-90 max-w-md ">
      {content.position ? (
        <p className=" text-2xl mb-4">
          <span className="text-slate-500 text-center">{content.position}</span>
        </p>
      ) : null}
      <div className="grid grid-cols-5 gap-y-3">
        <div className="col-span-2 theme2font text-sm text-right mr-3">
          Organization:{" "}
        </div>
        <div className="col-span-3 theme4font text-sm text-left ml-3">
          {content.organization}
        </div>
        <div className="col-span-2 theme2font text-sm text-right mr-3">
          Period:{" "}
        </div>
        <div className="col-span-3 theme4font text-sm text-left ml-3">
          {content.period}
        </div>{" "}
        <div className="col-span-2 theme2font text-sm text-right mr-3">
          Location:{" "}
        </div>
        <div className="col-span-3 theme4font text-sm text-left ml-3">
          {content.location}
        </div>{" "}
        <div className="col-span-2 theme2font text-sm text-right mr-3">
          Description:{" "}
        </div>
        <div className="col-span-3 theme4font text-sm text-left ml-3">
          <div className="border-1 border-gray-700  overflow-y-scroll max-h-40 px-3 ">
            <ul className="">
              {des &&
                des.map((item, index) => (
                  <li key={index} className=" grid grid-cols-7 my-3">
                    <span className="col-span-1 text-slate-400 text-sm">
                      {index + 1}.
                    </span>
                    <span className="col-span-6 theme4font text-sm ">
                      {" "}
                      {item}
                    </span>
                  </li>
                ))}
            </ul>
          </div>
          <span className="text-gray-500 text-xs text-center">
            Scroll down for more
          </span>
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
