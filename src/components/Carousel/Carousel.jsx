import './Carousel.css';
import chevronLeft from '../../assets/icons/chevron-left-solid.svg';
import chevronRight from '../../assets/icons/chevron-right-solid.svg';
import hash from '../../assets/js/hash';

function Carousel({ pictures, title }) {
  return (
    <section className="carousel" data-carousel>
      <div>
        <button data-carousel-button="prev" className="carousel-button prev">
          <img src={chevronLeft} alt="button prev" />
        </button>
        <button data-carousel-button="next" className="carousel-button next">
          <img src={chevronRight} alt="button next" />
        </button>
        <span className="carousel-index">1/4</span>
        {pictures.map((picture, index) => (
          <figure data-index={index} key={hash(picture)} className="slide">
            <img className="pictures" src={picture} alt={title} />
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Carousel;
