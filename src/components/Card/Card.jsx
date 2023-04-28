import './Card.css';
import { Link } from 'react-router-dom';

function Card({ id, cover, title }) {
  return (
    <>
      <Link to={`logements/${id}`}>
        <figure className="card-container">
          <img className="card-img" src={cover} alt={title} />
          <figcaption className="card-legend">{title}</figcaption>
          <div className="gradient-effect"></div>
        </figure>
      </Link>
    </>
  );
}

export default Card;
