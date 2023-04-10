import './Banner.css';

function Banner({ topBannerImg, message }) {
  return (
    <div className="top-banner">
      <figure className="top-banner-container-img">
        <img
          className="top-banner-img"
          src={topBannerImg}
          alt="Magnifique paysage de montagne et forêt"
        />
      </figure>
      <figcaption className="top-banner-legend">{message}</figcaption>
    </div>
  );
}

export default Banner;
