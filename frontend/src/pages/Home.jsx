import BestSeller from '../components/BestSeller';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import NewsletterBox from '../components/NewsletterBox';
import Policy from '../components/Policy';

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <Policy />
      <NewsletterBox />
    </div>
  );
};

export default Home;
