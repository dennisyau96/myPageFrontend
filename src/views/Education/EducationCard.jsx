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
        className="p-4 m-5 border-2 rounded-lg bg-slate-200 z-0 max-w-md hover:shadow-xl hover:shadow-gray-500 hover:transition-all hover:duration-300"
      >
        {/* <img className="eduCardImg" alt={content.institution} /> */}

        <div className="font-bold text-2xl mb-7">
          {content.institution ? (
            <span className={styles.label}> {content.institution}</span>
          ) : null}

          <p className="card-text"></p>
        </div>

        <ul className="list-group list-group-flush z-0 flex flex-wrap">
          {content.title && (
            <li className="list-group-item z-0 font-bold text-xl">
              <span className={styles.label}>{content.title}</span>
            </li>
          )}

          {content.ranking ? (
            <li className="list-group-item z-0">
              <span className={styles.label}>
                Times World Higher Education Ranking:
                <br />
              </span>
              <span>{content.ranking}</span>
            </li>
          ) : null}

          {content.education_level ? (
            <li className="list-group-item z-0">
              <span className={styles.label}>Education level: </span>
              <span>{content.education_level}</span>
            </li>
          ) : null}

          {content.major ? (
            <li className="list-group-item z-0">
              <span className={styles.label}>Major: </span>
              <span>{content.major}</span>
            </li>
          ) : null}

          <li className="list-group-item z-0">
            <span className={styles.label}>Location: </span>
            <span>{content.location}</span>
          </li>

          <li className="list-group-item z-0">
            <span className={styles.label}>Year: </span>
            <span>{content.year}</span>
          </li>

          {content.honor ? (
            <li className="list-group-item z-0">
              <span className={styles.label}>Honor: </span>
              <span>{content.honor}</span>
            </li>
          ) : null}

          {content.acheivement ? (
            <li className="list-group-item z-0">
              <span className={styles.label}>Acheivement: </span>
              <span>{content.acheivement}</span>
            </li>
          ) : null}
        </ul>
        {content.cert ? (
          <div>
            <img
              src={content.cert}
              id={"certImg" + { index }}
              className="w-full hidden"
            />
          </div>
        ) : null}

        <div className=" flex flex-wrap z-0 gap-3">
          <Link
            target="_blank"
            to={content.website}
            className="bg-slate-100 p-2 my-6"
            onClick={() => {
              const ctr = confirm("You will be redirected to another website");
              if (!ctr) {
                navigate(0);
              }
            }}
          >
            Webpage
          </Link>

          <button
            className=" bg-yellow-200 p-2 my-6 "
            onClick={(index) => {
              toggleCert(index);
            }}
          >
            certificate
          </button>
        </div>
      </div>
    </>
  );
}

export default EducationCard;
