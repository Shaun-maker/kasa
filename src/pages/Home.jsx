import Banner from '../components/Banner/Banner';
import Cart from '../components/Card/Card';
import './Home.css';

function Home() {
  return (
    <main>
      <Banner />
      <div className="gallery-cards-container">
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
      </div>
    </main>
  );
}

export default Home;
