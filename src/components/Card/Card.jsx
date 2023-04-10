import './Card.css';

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
