import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import Cart from '../components/Card/Card';
import topBannerImg from '../assets/images/home-top-banner.jpg';
import './Home.css';

function Home() {
  const propertiesDatas = useLoaderData();

  return (
    <>
      <Banner
        topBannerImg={topBannerImg}
        message="Chez vous, partout et ailleurs"
      />
      <div className="gallery-cards-container">
        {propertiesDatas.map(({ id, cover, title }) => (
          <Cart key={id} id={id} cover={cover} title={title} />
        ))}
      </div>
    </>
  );
}

export default Home;
