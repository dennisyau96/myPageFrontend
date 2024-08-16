import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import thumbnail from "../../assets/project/doggo.png";

export default function ProjectCard({ project }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="card w-80 h-auto p-2 m-4 border-2 rounded-xl hover:  hover:transition-all hover:duration-300 ease-in-out hover:bg-slate-200 hover:shadow-2xl hover:bg-slate-100">
        {project.thumbnail && (
          <img
            src={project.thumbnail}
            className="card-img-top rounded-xl "
            alt="Project Snapshot"
          />
        )}

        <div className="card-body text-center">
          <h5 className="card-title font-bold text-xl mb-2 text-center">
            {project.name}
          </h5>
          <h5 className="card-subtitle mb-4 theme2font text-center italic">
            {project.type}
          </h5>
          <p className="card-text text-left mx-3">
            I participated in this project as {project.role}.
          </p>
          <hr className="my-2" />
          <p className="mt-2 card-text text-left mx-3">
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
            className=" mt-3  btn cursor-pointer font-bold text-white theme1 hover:shadow-xl hover:bg-gray-700 hover:text-white hover:transition-all hover:duration-300"
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
