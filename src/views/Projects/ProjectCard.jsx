import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import thumbnail from "../../assets/project/doggo.png";
export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  async function loadThumbnail() {
    const photoData = "";
  }

  return (
    <>
      <div className=" card bg-black w-80 h-auto border-1 border-gray-400 m-4  rounded-md hover:  hover:transition-all hover:duration-200 ease-in-out  hover:shadow-lg hover:shadow-sky-400  ">
        {project.thumbnail && (
          <img
            src={project.thumbnail}
            className="card-img-top  bg-gray-950 text-white"
            alt={project.name}
          />
        )}
        <div className="card-body text-center">
          <h5 className="card-title font-bold text-xl mb-2 text-center theme3font">
            {project.name}
          </h5>
          <h5 className="card-subtitle mb-4 theme2font text-center italic">
            {project.type}
          </h5>
          <p className="card-text text-left mx-3 theme3font">
            I participated in this project as {project.role}.
          </p>
          <hr className="my-2" />
          <p className="mt-2 card-text text-left mx-3 theme3font">
            {project.remark && project.remark}
          </p>

          <button
            onClick={() => {
              const ctr = confirm(
                "You will be redirected to the project website"
              );
              if (!ctr) {
                navigate(0);
              }
            }}
            className=" my-3 p-2 cursor-pointer text-white border-1 hover:text-black hover:shadow-lg hover:bg-gray-600  hover:transition-all hover:duration-200"
          >
            <Link to={project.website} target="_blank">
              Visit
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
