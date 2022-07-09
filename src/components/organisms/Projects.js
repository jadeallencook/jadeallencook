import { useState } from 'react';
import './Projects.scss';

function Projects(props) {
  const { projects } = props?.projects;
  const [page, setPage] = useState(0);
  const pages = Math.ceil(projects.length / 4);
  const isShown = (index) => index < page * 4 + 4 && index > page * 4 - 1;
  const handlePageChange = (num) => {
    let value = page + num;
    if (value < 0) {
      value = pages - 1;
    } else if (value >= pages) {
      value = 0;
    }
    setPage(value);
  };
  return (
    <section className="Projects">
      <h2>Web Projects</h2>
      <br />
      <ul className="projects">
        {projects.map((project, index) => {
          return (
            isShown(index) && (
              <li key={`project-${index}`}>
                <a href={project?.link?.url} target="_blank" rel="noreferrer">
                  <img src={project?.image?.url} alt="Application Icon" />
                </a>
                <span>{project?.project[0]?.text}</span>
              </li>
            )
          );
        })}
      </ul>
      <ul className="pagination">
        <li onClick={() => handlePageChange(-1)}>
          <i className="fa fa-chevron-left" aria-hidden="true"></i>
        </li>
        {[...Array(pages)].map((e, i) => (
          <li
            key={`page-${i}`}
            className={i === page ? 'active' : ''}
            onClick={() => setPage(i)}
          >
            {i + 1}
          </li>
        ))}
        <li onClick={() => handlePageChange(1)}>
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
