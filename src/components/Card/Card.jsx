import './Card.css';
import accomodationImg from '../../assets/images/base-gradient.jpg';

function Card() {
  return (
    <figure className="card-container">
      <img className="card-img" src={accomodationImg} alt="tata" />
      <figcaption className="card-legend">Titre de la location</figcaption>
      <div className="gradient-effect"></div>
    </figure>
  );
}

export default Card;
