import './Experience.scss';
import Newpaper from '../assets/newspaper.jpg';

function Experience() {
  return (
    <section className="experience">
      <h2 className="header">
        More than 10 Years of <br />
        Professional Experience
      </h2>
      <p className="eyebrow">Mastering the Craft</p>
      <img src={Newpaper} alt="Newspaper" />
    </section>
  );
}

export default Experience;
