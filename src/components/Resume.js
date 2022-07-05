import { useState } from 'react';
import './Resume.scss';

function Resume(props) {
  const { experience } = props;
  const { projects } = experience;
  const [isPanelOpen, setIsPanelOpen] = useState(projects.map(() => false));

  const toggle = (index) =>
    setIsPanelOpen((prev) => {
      const value = [...prev];
      value[index] = !value[index];
      return value;
    });

  return (
    <section className="Resume">
      <h2>{experience?.title[0]?.text}</h2>
      <br />
      <p>{experience?.subtext[0]?.text}</p>
      <br />
      <ul>
        {projects?.map((project, index) => {
          const { bullets } = project;
          return (
            <li key={`project-${index}`}>
              <h3 onClick={() => toggle(index)}>
                {project?.company[0]?.text}
                {isPanelOpen[index] ? (
                  <i className="fa fa-sort-desc close" aria-hidden="true"></i>
                ) : (
                  <i className="fa fa-sort-desc" aria-hidden="true"></i>
                )}
              </h3>
              {isPanelOpen[index] && (
                <ul>
                  {bullets.map((bullet, num) => {
                    return (
                      <li key={`project-${index}-bullet-${num}`}>
                        {bullet?.text}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Resume;
