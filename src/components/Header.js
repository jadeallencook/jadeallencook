import HeaderVideo from '../assets/header.mp4';
import './Header.scss';

function Header() {
  return (
    <header>
      <h1 className="header">
        Software Engineer
        <br />& Digital Creator
      </h1>
      <p className="eyebrow">San Francisco Bay Area</p>
      <video src={HeaderVideo} autoPlay loop muted></video>
    </header>
  );
}

export default Header;
