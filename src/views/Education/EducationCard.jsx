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
        id="eduCardDiv"
        className="eduCardDiv p-3 my-2 border-1 rounded-lg z-0 max-w-md  hover:shadow-lg hover:shadow-sky-300 transition-all hover:duration-200 h-auto opacity-90 ease-in-out bg-black"
      >
        {/* <img className="eduCardImg" alt={content.institution} /> */}

        <div className=" text-xl mb-7 ">
          {content.institution ? (
            <span className="text-slate-200 text-center font-bold">
              {" "}
              {content.institution}
            </span>
          ) : null}

          <p className="card-text"></p>
        </div>
        {content.title && (
          <div className="z-0 text-xl  theme4font font-bold text-center my-1 ">
            {content.title}
          </div>
        )}

        <div className=" border-gray-700 ">
          <ul className="bg-black list-group list-group-flush z-0  border-1 m-2 py-6 px-2 gap-3  max-h-52 flex eduCardDetail overflow-y-auto">
            {content.ranking ? (
              <li className=" z-0   grid-cols-6 gap-3 contentRow">
                <span className=" col-span-2 text-sm text-slate-400 text-right eduCardSubTitle">
                  Ranking:
                  <br />
                </span>
                <span className="theme4font col-span-4 text-sm  eduCardSubContent">
                  {content.ranking}
                </span>
              </li>
            ) : null}

            {content.education_level ? (
              <li className=" z-0  contentRow grid-cols-6 gap-3">
                <span className="col-span-2 text-sm  text-slate-400 text-right eduCardSubTitle">
                  Edu level:{" "}
                </span>
                <span className="theme4font col-span-4 text-sm eduCardSubContent">
                  {content.education_level}
                </span>
              </li>
            ) : null}

            {content.major ? (
              <li className=" z-0  contentRow grid-cols-6 gap-3">
                <span className="col-span-2 text-sm  text-slate-400 text-right eduCardSubTitle">
                  Major:{" "}
                </span>
                <span className="theme4font col-span-4 text-sm eduCardSubContent">
                  {content.major}
                </span>
              </li>
            ) : null}

            <li className=" z-0  contentRow grid-cols-6 gap-3">
              <span className="col-span-2 text-sm  text-slate-400 text-right eduCardSubTitle">
                Location:{" "}
              </span>
              <span className="theme4font col-span-4 text-sm eduCardSubContent">
                {content.location}
              </span>
            </li>

            <li className=" z-0  contentRow grid-cols-6 gap-3">
              <span className="col-span-2 text-sm  text-slate-400 text-right eduCardSubTitle">
                Year:{" "}
              </span>
              <span className="theme4font col-span-4 text-sm eduCardSubContent">
                {content.year}
              </span>
            </li>

            {content.honor ? (
              <li className=" z-0  contentRow grid-cols-6 gap-3">
                <span className="col-span-2 text-sm  text-slate-400 text-right eduCardSubTitle">
                  Honor:{" "}
                </span>
                <span className="theme4font col-span-4 text-sm eduCardSubContent">
                  {content.honor}
                </span>
              </li>
            ) : null}

            {content.acheivement ? (
              <li className=" z-0  contentRow grid-cols-6 gap-3">
                <span className="col-span-2 text-sm  text-slate-400  eduCardSubTitle">
                  Award:{" "}
                </span>
                <span className="theme4font col-span-2 text-sm eduCardSubContent">
                  {content.acheivement}
                </span>
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

        <div className=" flex flex-wrap z-0 mt-3 justify-center ">
          <Link
            target="_blank"
            to={content.website}
            className="mt-2 bg-black p-2 cursor-pointer text-white border-1 hover:text-black hover:shadow-xl hover:bg-gray-600  hover:transition-all hover:duration-200 "
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
