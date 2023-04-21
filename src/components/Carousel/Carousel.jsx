import './Carousel.css';
import { useState } from 'react';
import chevronLeft from '../../assets/icons/chevron-left-solid.svg';
import chevronRight from '../../assets/icons/chevron-right-solid.svg';
import hash from '../../assets/js/hash';

function Carousel({ pictures, title }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const swapCarousel = (event) => {
    const offset = event.target.dataset.carouselButton === 'next' ? 1 : -1;
    let newIndex = activeIndex + offset;
    if (newIndex < 0) newIndex = pictures.length - 1;
    if (newIndex >= pictures.length) newIndex = 0;
    setActiveIndex(newIndex);
  };
  console.log('activeIndex is : ' + activeIndex);
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
          <figure
            data-active={index === activeIndex ? true : false}
            key={hash(picture)}
            className="slide"
          >
            <img className="pictures" src={picture} alt={title} />
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Carousel;
