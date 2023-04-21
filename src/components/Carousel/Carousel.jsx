import './Carousel.css';
import { useState } from 'react';
import chevronLeft from '../../assets/icons/chevron-left-solid.svg';
import chevronRight from '../../assets/icons/chevron-right-solid.svg';
import hash from '../../assets/js/hash';

function Carousel({ pictures, title }) {
  const [isActive, setIsActive] = useState(false);
  const buttons = document.querySelectorAll('[data-carousel-button]');

  const swapCarousel = (event) => {
    const offset = event.target.dataset.carouselButton === 'next' ? 1 : -1;
    console.log(offset);
  };
  return (
    <section className="carousel" data-carousel>
      <div>
        <button
          onClick={swapCarousel}
          data-carousel-button="prev"
          className="carousel-button prev"
        >
          <img src={chevronLeft} alt="button prev" />
        </button>
        <button
          onClick={swapCarousel}
          data-carousel-button="next"
          className="carousel-button next"
        >
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
