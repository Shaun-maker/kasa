import bannerImg from '../../assets/images/top-banner.jpg';
import './Banner.css';

function Banner() {
  return (
    <figure className="top-banner">
      <img
        className="top-banner-img"
        src={bannerImg}
        alt="Magnifique paysage forestier"
      />
      <figcaption className="top-banner-legend">
        Chez vous, partout et ailleurs
      </figcaption>
    </figure>
  );
}

export default Banner;
