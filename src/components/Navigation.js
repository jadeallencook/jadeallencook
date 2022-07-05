import { useState } from 'react';
import './Navigation.scss';
import Logo from '../assets/logo.png';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div>
        <div></div>
        <div>
          <img src={Logo} />
        </div>
        <div>
          {isOpen ? (
            <i
              className="fa fa-remove"
              aria-hidden="true"
              onClick={() => setIsOpen(false)}
            ></i>
          ) : (
            <i
              className="fa fa-bars"
              aria-hidden="true"
              onClick={() => setIsOpen(true)}
            ></i>
          )}
        </div>
      </div>
      {isOpen && (
        <ul>
          <a
            target="_blank"
            href="https://docs.google.com/document/d/1u_Nt4nNpvNyrSYuzycSSUmB2mbTVSvcCB64o1D4Vkxg/edit?usp=sharing"
          >
            <li>Download Resume</li>
          </a>
          <a target="_blank" href="https://forms.gle/FEymi3X28EGWbMHV6">
            <li>Book Interview</li>
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/playlist?list=PLkj0Wb8QyEEQs3-92fO8Jq5FmkiqPwRi1"
          >
            <li>Programming Tutorials</li>
          </a>
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
