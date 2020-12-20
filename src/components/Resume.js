import './Resume.scss';

function Resume(props) {
  const { experience } = props;

  function toggle(event) {
    const elem = event.target.parentNode.querySelector('ul');
    const { display } = elem.style;
    elem.style.display = display === 'block' ? 'none' : 'block';
  }

  return (
    <section className="Resume">
      <h2>{experience?.title[0]?.text}</h2>
      <br />
      <p>{experience?.subtext[0]?.text}</p>
      <br />
      <ul>
        {experience?.projects?.map((project, index) => {
          const { bullets } = project;
          return (
            <li key={`project-${index}`}>
              <h3 onClick={toggle}>
                {project?.company[0]?.text}
                <i className="fa fa-sort-desc" aria-hidden="true"></i>
              </h3>
              <ul>
                {bullets.map((bullet, num) => {
                  return (
                    <li key={`project-${index}-bullet-${num}`}>
                      {bullet?.text}
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Resume;
