import Banner from '../components/Banner/Banner';
import topBannerImg from '../assets/images/about-top-banner.jpg';
import Collapse from '../components/collapse/collapse';

function About() {
  return (
    <main>
      <Banner topBannerImg={topBannerImg} />
      <Collapse collapseMargin="my-32" />
    </main>
  );
}

export default About;
