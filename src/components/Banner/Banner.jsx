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
    </figure>
  );
}

export default Banner;
