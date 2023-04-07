import Banner from '../components/Banner/Banner';
import Cart from '../components/Card/Card';
import './Home.css';

function Home() {
  return (
    <>
      <Banner />
      <div className="gallery-cards-container">
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
      </div>
    </>
  );
}

export default Home;
