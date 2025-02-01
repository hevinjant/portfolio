import GitHubIcon from "@mui/icons-material/GitHub";
import { myProjects } from "../data/data.ts";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <div className="projects">
      <div className="project-list">
        {myProjects.map((project: any, key: any) => {
          return (
            <ProjectItem
              key={key}
              name={project.name}
              description={project.description}
              url={project.url}
            />
          );
        })}
      </div>
    </div>
  );
}

type ProjectItemProps = {
  name: string;
  description: string;
  url: string;
};

function ProjectItem({ name, description, url }: ProjectItemProps) {
  return (
    <div className="project-item">
      <p className="project-title">{name}</p>
      <p className="project-description">{description}</p>
      <p className="github-icon"></p>
      <a href={url} target="_blank">
        <GitHubIcon /> Visit GitHub
      </a>
    </div>
  );
}
