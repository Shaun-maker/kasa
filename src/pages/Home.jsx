import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import Cart from '../components/Card/Card';
import './Home.css';

function Home() {
  const accommodationsDatas = useLoaderData();

  return (
    <main>
      <Banner />
      <div className="gallery-cards-container">
        {accommodationsDatas.map(({ id, cover, title }) => (
          <Cart key={id} cover={cover} title={title} />
        ))}
      </div>
    </main>
  );
}

export default Home;
