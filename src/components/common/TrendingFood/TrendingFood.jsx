import { useState } from 'react';

import FoodCard from '@/components/common/FoodCard';
import Reveal from '@/components/common/Reveal';
import SliderControls from '@/components/common/SliderControls';
import Container from '@/components/layout/Container';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';

import styles from './TrendingFood.module.scss';

import { TRENDING_FOOD } from '@/data/menu';

function TrendingFood() {
  const [active, setActive] = useState(2);
  const total = TRENDING_FOOD.length;

  const handlePrev = () => setActive((prev) => (prev - 1 + total) % total);
  const handleNext = () => setActive((prev) => (prev + 1) % total);

  return (
    <Section
      id="menu"
      className={styles.section}
      aria-labelledby="trending-title"
    >
      <Container>
        <Reveal variant="up">
          <SectionHeading eyebrow="- Popular Delivery -" title="Trending food" />
        </Reveal>
      </Container>

      <Reveal variant="scale" delay={120}>
        <div className={styles.trackWrap}>
          <div className={styles.track}>
            {TRENDING_FOOD.map((item, index) => (
              <FoodCard
                key={item.id}
                {...item}
                featured={index === active}
              />
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal variant="fade" delay={220}>
        <SliderControls
          total={total}
          active={active}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </Reveal>
    </Section>
  );
}

export default TrendingFood;
