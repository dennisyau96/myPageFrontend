import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../../constant/constant";
import ProjectCard from "./ProjectCard";
import Loading from "../../component/Loading/Loading";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    loadData();
    scrollTo(0, 0);
  }, []);

  async function loadData() {
    try {
      const projectData = await axios.get(`${baseURL}/projects`);
      if (projectData.data) {
        setProjects((prev) => projectData.data);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="projectPageDiv">
        <h1 className="font-bold text-3xl my-4  theme4font pageTitle text-center Xcenter">
          {" "}
          Projects{" "}
        </h1>
        <div className="flex flex-wrap justify-center text-center Xcenter gap-8 my-10 p-10 projectDiv">
          {loading ? <Loading /> : null}
          {projects.map((project, index) => (
            <div key={index} id="projectDiv" className="projectDiv">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
