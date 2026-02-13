import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectShowcase.css";

function ProjectShowcase({ projects }) {
  return (
    <section className="project-showcase">
      <h2>My Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectShowcase;
