import { useState } from 'react';
import './Accordion.scss';

export function Accordion({ project, index }) {
  const { bullets } = project;
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const toggle = () => setIsPanelOpen((prev) => !prev);
  return (
    <li>
      <h3 onClick={toggle}>
        {project?.company[0]?.text}
        {isPanelOpen ? (
          <i className="fa fa-sort-desc close" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-sort-desc" aria-hidden="true"></i>
        )}
      </h3>
      <ul className={isPanelOpen ? 'expanded' : ''}>
        {bullets.map((bullet, num) => (
          <li key={`accordion-${index}-bullet-${num}`}>{bullet?.text}</li>
        ))}
      </ul>
    </li>
  );
}

export default Accordion;
