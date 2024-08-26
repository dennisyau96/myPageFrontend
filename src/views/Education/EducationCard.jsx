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
      <div
        id="eduCard"
        className="p-4 m-4 border-2 rounded-2xl bg-white z-0 max-w-lg min-w-84 hover:shadow-xl hover:shadow-sky-300 transition-all hover:duration-500 min-h-100 h-100 opacity-90 ease-in-out"
      >
        {/* <img className="eduCardImg" alt={content.institution} /> */}

        <div className="font-bold text-2xl mb-7 ">
          {content.institution ? (
            <span className={styles.label}> {content.institution}</span>
          ) : null}

          <p className="card-text"></p>
        </div>

        <div className="bg-gray-200">
          <ul className="list-group list-group-flush z-0 flex flex-wrap  ">
            {content.title && (
              <li className="list-group-item z-0 font-semibold text-xl bg-gray-400">
                <span className="text-white">{content.title}</span>
              </li>
            )}

            {content.ranking ? (
              <li className="list-group-item z-0 bg-gray-100">
                <span className={styles.label}>
                  Times World Higher Education Ranking:
                  <br />
                </span>
                <span>{content.ranking}</span>
              </li>
            ) : null}

            {content.education_level ? (
              <li className="list-group-item z-0 bg-gray-100">
                <span className={styles.label}>Education level: </span>
                <span>{content.education_level}</span>
              </li>
            ) : null}

            {content.major ? (
              <li className="list-group-item z-0 bg-gray-100">
                <span className={styles.label}>Major: </span>
                <span>{content.major}</span>
              </li>
            ) : null}

            <li className="list-group-item z-0 bg-gray-100">
              <span className={styles.label}>Location: </span>
              <span>{content.location}</span>
            </li>

            <li className="list-group-item z-0 bg-gray-100">
              <span className={styles.label}>Year: </span>
              <span>{content.year}</span>
            </li>

            {content.honor ? (
              <li className="list-group-item z-0 bg-gray-100">
                <span className={styles.label}>Honor: </span>
                <span>{content.honor}</span>
              </li>
            ) : null}

            {content.acheivement ? (
              <li className="list-group-item z-0 bg-gray-100">
                <span className={styles.label}>Acheivement: </span>
                <span>{content.acheivement}</span>
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
            className="btn cursor-pointer text-white  bg-slate-500 hover:shadow-xl hover:bg-gray-700 hover:text-white mt-2 hover:transition-all hover:duration-300"
            onClick={() => {
              const ctr = confirm("You will be redirected to another website");
              if (!ctr) {
                navigate(0);
              }
            }}
          >
            Webpage
          </Link>
        </div>
      </div>
    </>
  );
}

export default EducationCard;
