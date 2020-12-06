import { useContext } from 'react';
import './Navigation.scss';
import { AppContext } from '../AppContext';

function Navigation() {
  const [{ title }] = useContext(AppContext);
  return (
    <nav>
      <div>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div>{title || 'loading...'}</div>
      <div></div>
    </nav>
  );
}

export default Navigation;
