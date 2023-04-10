import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import Cart from '../components/Card/Card';
import topBannerImg from '../assets/images/home-top-banner.jpg';
import './Home.css';

function Home() {
  const accommodationsDatas = useLoaderData();

  return (
    <main>
      <Banner
        topBannerImg={topBannerImg}
        message="Chez vous, partout et ailleurs"
      />
      <div className="gallery-cards-container">
        {accommodationsDatas.map(({ id, cover, title }) => (
          <Cart key={id} cover={cover} title={title} />
        ))}
      </div>
    </main>
  );
}

export default Home;
