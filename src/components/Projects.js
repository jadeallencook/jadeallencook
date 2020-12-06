import './Projects.scss';
import projects from '../constants/projects.js';

function Projects() {
  return (
    <section className="Projects">
      <h2>Web Projects</h2>
      <br />
      <ul>
        {projects.map(({ name, icon, path }, index) => {
          return (
            <li key={`project-${index}`}>
              <a href={path} target="_blank" rel="noreferrer">
                <img src={icon} alt="Application Icon" />
              </a>
              <span>{name}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Projects;
