import { SectionHeader } from "../SectionHeader/SectionHeader";
import "./ProjectSection.scss";
import data from "../../data/projects.json"
import { ProjectArticle } from "./components/ProjectArticle";

export const ProjectSection = () => {

  return (
    <section className="project_section">
      <SectionHeader title={"FEATURED PROJECTS"} />
      {
        data.projects.map((project, index) => (
          <ProjectArticle key={project.id} data={project} isEven={index % 2 === 0}/>
        ))
      }
    </section>
  );
};
