import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({ project }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="card w-80 p-1 m-4 border-2 rounded-xl hover:  hover:transition-all hover:duration-300 hover:bg-slate-100 hover:shadow-2xl hover:shadow-gray-300">
        <img
          src={project.thumbnail}
          className="card-img-top rounded-xl "
          alt="Project thumbnail"
        />
        <div className="card-body text-center">
          <h5 className="card-title font-bold text-xl mb-2 text-center">
            {project.name}
          </h5>
          <h5 className="card-subtitle mb-2 text-center italic">
            {project.type}
          </h5>
          <p className="card-text text-center">
            I participated in this project as {project.role}.
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
            className=" mt-3  btn cursor-pointer font-bold bg-orange-400 hover:shadow-xl hover:bg-gray-700 hover:text-white hover:transition-all hover:duration-300"
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
