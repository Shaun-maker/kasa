import chevronDown from '../../assets/icons/chevron-down-white.svg';
import chevronUp from '../../assets/icons/chevron-up-white.svg';
import './collapse.css';

// see if it is possible to update className with props, for margin in main container
function Collapse() {
  return (
    <div className="collapse-container">
      <div className="collapse-banner">
        <p className="collapse-title">Fiabilité</p>
        <figure className="collapse-container-img">
          <img className="collapse-img" src={chevronUp} alt="" />
        </figure>
      </div>
      <p className="collapse-content">
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme.
      </p>
    </div>
  );
}

export default Collapse;
