import './Card.css';
import accomodationImg from '../../assets/images/base-gradient.jpg';

function Card({ cover, title }) {
  return (
    <figure className="card-container">
      <img className="card-img" src={cover} alt="tata" />
      <figcaption className="card-legend">{title}</figcaption>
      <div className="gradient-effect"></div>
    </figure>
  );
}

export default Card;
