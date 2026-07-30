import Comments from '@/components/common/Comments';
import DiscountCta from '@/components/common/DiscountCta';
import Hero from '@/components/common/Hero';
import Partners from '@/components/common/Partners';
import Services from '@/components/common/Services';
import Testimonials from '@/components/common/Testimonials';
import TrendingFood from '@/components/common/TrendingFood';

function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <Services />
      <TrendingFood />
      <Comments />
      <Testimonials />
      <DiscountCta />
    </>
  );
}

export default Home;
