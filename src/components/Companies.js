import './Companies.scss';
import Google from '../assets/google.jpg';

function Companies() {
  return (
    <section className="companies">
      <h2 className="header">
        Collaboration with Tech <br />
        Industry Leaders
      </h2>
      <p className="eyebrow">Google, Facebook, Apple, and More</p>
      <img src={Google} alt="Google" />
      <a
        href="https://docs.google.com/document/d/1u_Nt4nNpvNyrSYuzycSSUmB2mbTVSvcCB64o1D4Vkxg/edit?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        Download My Resume
      </a>
    </section>
  );
}

export default Companies;
