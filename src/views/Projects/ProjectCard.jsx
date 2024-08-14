import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <>
      <div className="card" style="width: 18rem;">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{project.name}</h5>
          <h5 className="card-subtitle">{project.type}</h5>
          <p className="card-text">
            I participated in this project as {project.role}.
          </p>
          <Link to={project.website} className="btn bg-orange=100">
            Visit
          </Link>
        </div>
      </div>
    </>
  );
}
