import './Card.css';
import accomodationImg from '../../assets/images/base-gradient.jpg';

function Card() {
  return (
    <figure className="card-container">
      <img className="card-img" src={accomodationImg} alt="tata" />
      <figcation className="card-legend">Titre de la location</figcation>
      <div className="gradient-effect"></div>
    </figure>
  );
}

export default Card;
