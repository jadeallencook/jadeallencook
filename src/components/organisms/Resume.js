import './Resume.scss';
import Accordion from '../molecules/Accordion';

function Resume({ experience: { title, subtext, projects } }) {
  return (
    <section className="Resume">
      <h2>{title[0]?.text}</h2>
      <br />
      <p>{subtext[0]?.text}</p>
      <br />
      <ul>
        {projects?.map((project, index) => (
          <Accordion
            project={project}
            index={index}
            key={`accordion-${index}`}
          />
        ))}
      </ul>
    </section>
  );
}

export default Resume;
