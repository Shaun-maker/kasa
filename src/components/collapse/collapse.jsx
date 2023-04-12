import { useState } from 'react';
import chevronDown from '../../assets/icons/chevron-down-white.svg';
import chevronUp from '../../assets/icons/chevron-up-white.svg';
import './collapse.css';

function Collapse({ collapseMargin }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`collapse-container ${collapseMargin}`}>
      <div
        className="collapse-banner"
        onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
      >
        <p className="collapse-title">Fiabilité</p>
        <figure className="collapse-container-img">
          <img
            className="collapse-img"
            src={isOpen ? chevronUp : chevronDown}
            alt=""
          />
        </figure>
      </div>
      <p className={`collapse-content ${isOpen ? 'open' : 'closed'}`}>
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme.
      </p>
    </div>
  );
}

export default Collapse;
