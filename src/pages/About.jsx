import Banner from '../components/Banner/Banner';
import topBannerImg from '../assets/images/about-top-banner.jpg';
import Collapse from '../components/collapse/collapse';

function About() {
  return (
    <main>
      <Banner topBannerImg={topBannerImg} />
      <Collapse />
    </main>
  );
}

export default About;
