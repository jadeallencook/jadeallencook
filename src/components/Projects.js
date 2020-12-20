import './Projects.scss';

function Projects(props) {
  const projects = props?.projects?.projects;
  return (
    <section className="Projects">
      <h2>Web Projects</h2>
      <br />
      <ul>
        {projects.map((project, index) => {
          return (
            <li key={`project-${index}`}>
              <a href={project?.link?.url} target="_blank" rel="noreferrer">
                <img src={project?.image?.url} alt="Application Icon" />
              </a>
              <span>{project?.project[0]?.text}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Projects;
