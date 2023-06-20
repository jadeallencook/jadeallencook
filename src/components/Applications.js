import './Applications.scss';
import Dental from '../assets/applications/dental.png';
import Gdoc from '../assets/applications/gdoc.png';
import Pxart from '../assets/applications/pxart.png';
import PerfectLanding from '../assets/applications/perfect-landing.png';
import Newsroom from '../assets/applications/newsroom.png';
import Yogifm from '../assets/applications/yogifm.png';
import Dinr from '../assets/applications/dinr.png';
import Communalists from '../assets/applications/communalists.png';
import Fedbook from '../assets/applications/fedbook.png';

function Applications() {
  return (
    <section className="applications">
      <h2 className="header">
        Extensive Portfolio of <br />
        Freelance Projects
      </h2>
      <p className="eyebrow">Bringing Ideas to Life</p>
      <img src={Communalists} alt="Dental" />
      <img src={Fedbook} alt="Dental" />
      <img src={Dental} alt="Dental" />
      <img src={Gdoc} alt="Dental" />
      <img src={Pxart} alt="Dental" />
      <img src={PerfectLanding} alt="Dental" />
      <img src={Newsroom} alt="Dental" />
      <img src={Yogifm} alt="Dental" />
      <img src={Dinr} alt="Dental" />
    </section>
  );
}

export default Applications;
