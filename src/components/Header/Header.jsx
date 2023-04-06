import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-kasa.svg';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <figure>
        <img src={logo} alt="Logo Kasa" />
      </figure>
      <ul className="nav">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="a-propos">A propos</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
