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
      <div className="eduCardDiv p-3 my-2 border-1 rounded-lg z-0 max-w-md  hover:shadow-lg hover:shadow-sky-300 transition-all hover:duration-200 h-auto opacity-90 ease-in-out bg-black">
        {/* <img className="eduCardImg" alt={content.institution} /> */}

        <div className=" text-xl mb-7 ">
          {content.institution ? (
            <span className="text-slate-400 text-center">
              {" "}
              {content.institution}
            </span>
          ) : null}

          <p className="card-text"></p>
        </div>
        {content.title && (
          <div className="z-0 text-md  theme2font text-center my-1">
            {content.title}
          </div>
        )}

        <div className=" border-gray-700">
          <ul className="list-group list-group-flush z-0  border-1 m-2 py-6 px-2 gap-3 overflow-y-scroll max-h-52 flex eduCardDetail ">
            {content.ranking ? (
              <li className=" z-0  grid grid-cols-6 gap-3">
                <span className="flex col-span-2 text-sm text-slate-400 text-right">
                  Times Edu Ranking:
                  <br />
                </span>
                <span className="theme4font col-span-4 text-sm text-left">
                  {content.ranking}
                </span>
              </li>
            ) : null}

            {content.education_level ? (
              <li className=" z-0  grid grid-cols-6 gap-3">
                <span className="col-span-2 text-sm  text-slate-400 text-right">
                  Edu level:{" "}
                </span>
                <span className="theme4font col-span-4 text-sm text-left">
                  {content.education_level}
                </span>
              </li>
            ) : null}

            {content.major ? (
              <li className=" z-0  grid grid-cols-6 gap-3">
                <span className="col-span-2 text-sm  text-slate-400 text-right">
                  Major:{" "}
                </span>
                <span className="theme4font col-span-4 text-sm text-left">
                  {content.major}
                </span>
              </li>
            ) : null}

            <li className=" z-0  grid grid-cols-6 gap-3">
              <span className="col-span-2 text-sm  text-slate-400 text-right">
                Location:{" "}
              </span>
              <span className="theme4font col-span-4 text-sm text-left">
                {content.location}
              </span>
            </li>

            <li className=" z-0  grid grid-cols-6 gap-3">
              <span className="col-span-2 text-sm  text-slate-400 text-right">
                Year:{" "}
              </span>
              <span className="theme4font col-span-4 text-sm text-left">
                {content.year}
              </span>
            </li>

            {content.honor ? (
              <li className=" z-0  grid grid-cols-6 gap-3">
                <span className="col-span-2 text-sm  text-slate-400 text-right">
                  Honor:{" "}
                </span>
                <span className="theme4font col-span-4 text-sm text-left">
                  {content.honor}
                </span>
              </li>
            ) : null}

            {content.acheivement ? (
              <li className=" z-0  grid grid-cols-6 gap-3">
                <span className="col-span-2 text-sm  text-slate-400 text-right">
                  Acheivement:{" "}
                </span>
                <span className="theme4font col-span-2 text-sm text-left">
                  {content.acheivement}
                </span>
              </li>
            ) : null}
          </ul>
        </div>
        <div className="text-gray-400 text-xs text-center justify-center py-1">
          Scroll for more
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

        <div className=" flex flex-wrap z-0 mt-3 justify-center">
          <Link
            target="_blank"
            to={content.website}
            className="mt-2 p-2 cursor-pointer text-white border-1 hover:text-black hover:shadow-xl hover:bg-gray-600  hover:transition-all hover:duration-200 "
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
