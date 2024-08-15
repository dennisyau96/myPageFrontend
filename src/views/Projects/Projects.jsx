import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../../constant/constant";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    loadData();
    scrollTo(0, 0);
  }, []);

  async function loadData() {
    const projectData = await axios.get(`${baseURL}/projects`);
    setProjects((prev) => projectData.data);
  }

  return (
    <>
      <h1 className="font-bold text-3xl my-4 text-center"> Projects </h1>
      <div className="flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </>
  );
}
