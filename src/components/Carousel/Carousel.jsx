import './Carousel.css';

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
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
  }

  return (
    <div className="carousel">
      {pictures.map((picture, index) => (
        <figure key={hash(picture)} className="pictures-container">
          <img className="pictures" src={picture} alt={title} />
        </figure>
      ))}
    </div>
  );
}

export default Carousel;
