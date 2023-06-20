import HeaderVideo from '../assets/header.gif';
import './Header.scss';

function Header() {
  return (
    <header>
      <h1 className="header">
        Software Engineer
        <br />& Digital Creator
      </h1>
      <p className="eyebrow">San Francisco Bay Area</p>
      <img src={HeaderVideo} alt="Header" className="header-video" />
    </header>
  );
}

export default Header;
