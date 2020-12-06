import './Resume.scss';

function Resume() {
  function toggle(event) {
    const elem = event.target.parentNode.querySelector('ul');
    const { display } = elem.style;
    elem.style.display = display === 'block' ? 'none' : 'block';
  }
  return (
    <section className="Resume">
      <h2>Work Experience</h2>
      <br />
      <p>
        Before my relocation to Houston, TX, I was working as a software
        engineer in the Bay Area and completing contracts with Facebook &
        Google. I have over 10-years of experience using web-based technologies
        with a focus on JavaScript and React.
      </p>
      <br />
      <ul>
        <li>
          <h3 onClick={toggle}>
            K2 Partnering @ Facebook
            <i className="fa fa-sort-desc" aria-hidden="true"></i>
          </h3>
          <ul>
            <li>Led the development of the hierarchy management feature.</li>
            <li>
              Wrote docs detailing component and application architecture.
            </li>
            <li>
              Developed a React prototype that works with backend response.
            </li>
            <li>Created custom hooks to consolidate state management logic.</li>
            <li>Expanded my PHP knowledge by beginning to learn HACK code.</li>
          </ul>
        </li>
        <li>
          <h3 onClick={toggle}>
            Techworkers @ Google
            <i className="fa fa-sort-desc" aria-hidden="true"></i>
          </h3>
          <ul>
            <li>Conducted technical front-end software engineer interviews.</li>
            <li>
              Produced design docs and proposals for feature implementations.
            </li>
            <li>
              Developed data labeling Angular components for the Cloud Platform.
            </li>
            <li>
              Wrote unit/integration tests and followed TDD best practices.
            </li>
            <li>
              Utilized RESTful HTTP APIs, RxJS Observables, and protocol
              buffers.
            </li>
            <li>
              Configured mods for feature toggling and completed code reviews.
            </li>
          </ul>
        </li>
        <li>
          <h3 onClick={toggle}>
            Deseret News
            <i className="fa fa-sort-desc" aria-hidden="true"></i>
          </h3>
          <ul>
            <li>Converted UI/UX mocks into InVision prototypes.</li>
            <li>Developed React apps embedded into articles with OEmbed.</li>
            <li>Built a platform to configure and deploy reusable embeds.</li>
            <li>Created Angular dashboards for data entry clerks.</li>
            <li>
              Automated employee workflow by developing Chrome Extensions.
            </li>
          </ul>
        </li>
        <li>
          <h3 onClick={toggle}>
            WaveOrtho
            <i className="fa fa-sort-desc" aria-hidden="true"></i>
          </h3>
          <ul>
            <li>Formulated JavaScript applications embedded into FileMaker.</li>
            <li>Assisted the company in adopting Slack and GitHub.</li>
            <li>Redesigned consumer-facing website and sales funnel.</li>
            <li>Led the development of a payment portal using Stipe’s API.</li>
          </ul>
        </li>
      </ul>
    </section>
  );
}

export default Resume;
