import './Carousel.css';
import chevronLeft from '../../assets/icons/chevron-left-solid.svg';
import chevronRight from '../../assets/icons/chevron-right-solid.svg';

function Carousel({ pictures, title }) {
  // hash function is to have unique key id for each images of carousel, based
  // on their names
  function hash(str) {
    let hash = 0;
    if (str.length === 0) {
      return hash;
    }
    for (let i = 0; i < str.length; i++) {
      let char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
  }

  return (
    <section className="carousel">
      <div>
        <button className="carousel-button prev">
          <img src={chevronLeft} alt="button prev" />
        </button>
        <button className="carousel-button next">
          <img src={chevronRight} alt="button next" />
        </button>
        <span className="carousel-index">1/4</span>
        {pictures.map((picture, index) => (
          <figure key={hash(picture)} className="slide">
            <img className="pictures" src={picture} alt={title} />
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Carousel;
