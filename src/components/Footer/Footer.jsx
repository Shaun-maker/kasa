import logoWhite from '../../assets/images/logo-kasa-white.svg';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <figure className="footer-logo">
        <img src={logoWhite} alt="Logo Kasa" />
      </figure>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
