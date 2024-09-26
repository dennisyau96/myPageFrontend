/* eslint-disable react/prop-types */
import styles from "./Education.module.css";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EducationCard({ content, index }) {
  const navigate = useNavigate();

  function toggleCert(i) {
    const certImgElement = document.getElementById("certImg" + i);
    var certimgClass = certImgElement.classList;
    if (certimgClass.contains("hidden")) {
      certimgClass.remove("hidden");
    } else {
      certimgClass.add("hidden");
    }
  }
  return (
    <>
      <div className="eduCardDiv p-4 m-4 border-2 rounded-lg  z-0 max-w-lg min-w-84 hover:shadow-xl hover:shadow-sky-300 transition-all hover:duration-200 h-auto opacity-90 ease-in-out">
        {/* <img className="eduCardImg" alt={content.institution} /> */}

        <div className="font-bold text-2xl mb-7 ">
          {content.institution ? (
            <span className={styles.label}> {content.institution}</span>
          ) : null}

          <p className="card-text"></p>
        </div>

        <div className="">
          <ul className="list-group list-group-flush z-0 flex flex-wrap bg-black border-1 border-gray-500 p-3 gap-2">
            {content.title && (
              <li className=" z-0 font-semibold text-xl bg-black ">
                <span className="theme2font">{content.title}</span>
              </li>
            )}

            {content.ranking ? (
              <li className=" z-0 bg-black grid grid-cols-2">
                <span className={styles.label}>
                  Times World Higher Education Ranking:
                  <br />
                </span>
                <span className="theme4font">{content.ranking}</span>
              </li>
            ) : null}

            {content.education_level ? (
              <li className=" z-0 bg-black grid grid-cols-2">
                <span className={styles.label}>Education level: </span>
                <span className="theme4font">{content.education_level}</span>
              </li>
            ) : null}

            {content.major ? (
              <li className=" z-0 bg-black grid grid-cols-2">
                <span className={styles.label}>Major: </span>
                <span className="theme4font">{content.major}</span>
              </li>
            ) : null}

            <li className=" z-0 bg-black grid grid-cols-2">
              <span className={styles.label}>Location: </span>
              <span className="theme4font">{content.location}</span>
            </li>

            <li className=" z-0 bg-black grid grid-cols-2">
              <span className={styles.label}>Year: </span>
              <span className="theme4font">{content.year}</span>
            </li>

            {content.honor ? (
              <li className=" z-0 bg-black grid grid-cols-2">
                <span className={styles.label}>Honor: </span>
                <span className="theme4font">{content.honor}</span>
              </li>
            ) : null}

            {content.acheivement ? (
              <li className=" z-0 bg-black grid grid-cols-2">
                <span className={styles.label}>Acheivement: </span>
                <span className="theme4font">{content.acheivement}</span>
              </li>
            ) : null}
          </ul>
        </div>

        {/* {content.cert ? (
          <div>
            <img
              src={content.cert}
              id={"certImg" + { index }}
              className="w-full hidden"
            />
          </div>
        ) : null} */}

        <div className=" flex flex-wrap z-0 mt-3 ">
          <Link
            target="_blank"
            to={content.website}
            className="p-2 cursor-pointer text-white  bg-gray-700  hover:shadow-xl hover:bg-gray-800 hover:text-white mt-2 hover:transition-all hover:duration-200 "
            onClick={() => {
              const ctr = confirm("You will be redirected to another website");
              if (!ctr) {
                navigate(0);
              }
            }}
          >
            Website
          </Link>
        </div>
      </div>
    </>
  );
}

export default EducationCard;
