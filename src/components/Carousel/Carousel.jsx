import './Carousel.css';

function Carousel({ pictures, title }) {
  return (
    <div>
      <figure className="pictures-container">
        <img className="pictures" src={pictures[0]} alt={title} />
      </figure>
    </div>
  );
}

export default Carousel;
