import { useCallback, useMemo, useState } from 'react';

import FoodCard from '@/components/common/FoodCard';
import Reveal from '@/components/common/Reveal';
import SliderControls from '@/components/common/SliderControls';
import Container from '@/components/layout/Container';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';

import styles from './TrendingFood.module.scss';

import { TRENDING_FOOD } from '@/data/menu';
import { useI18n } from '@/i18n/I18nProvider';

function getCircularOffset(index, active, total) {
  let offset = index - active;

  if (offset > total / 2) {
    offset -= total;
  } else if (offset < -total / 2) {
    offset += total;
  }

  return offset;
}

function TrendingFood() {
  const { t } = useI18n();
  const [active, setActive] = useState(2);
  const total = TRENDING_FOOD.length;

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % total);
  }, [total]);

  const handleSelect = useCallback((index) => {
    setActive(index);
  }, []);

  const slides = useMemo(
    () =>
      TRENDING_FOOD.map((item, index) => {
        const offset = getCircularOffset(index, active, total);
        const abs = Math.abs(offset);
        const isActive = offset === 0;

        return {
          item,
          index,
          offset,
          isActive,
          style: {
            '--offset': offset,
            '--abs': abs,
            zIndex: isActive ? 20 : 10 - abs,
          },
        };
      }),
    [active, total],
  );

  return (
    <Section
      id="menu"
      className={styles.section}
      aria-labelledby="trending-title"
    >
      <Container>
        <Reveal variant="up">
          <SectionHeading
            eyebrow={t('trending.eyebrow')}
            title={t('trending.title')}
          />
        </Reveal>
      </Container>

      <Reveal variant="scale" delay={120}>
        <div className={styles.stage} aria-live="polite">
          {slides.map(({ item, index, offset, isActive, style }) => (
            <button
              key={item.id}
              type="button"
              className={[
                styles.slide,
                isActive ? styles.active : '',
                offset < 0 ? styles.left : '',
                offset > 0 ? styles.right : '',
              ]
                .filter(Boolean)
                .join(' ')}
              style={style}
              onClick={() => handleSelect(index)}
              aria-label={`${t(`menu.${item.id}`)}, ${item.price}`}
              aria-current={isActive ? 'true' : undefined}
              tabIndex={isActive ? 0 : -1}
            >
              <FoodCard
                {...item}
                name={t(`menu.${item.id}`)}
                featured={isActive}
              />
            </button>
          ))}
        </div>
      </Reveal>

      <Reveal variant="fade" delay={180}>
        <SliderControls
          total={total}
          active={active}
          onPrev={handlePrev}
          onNext={handleNext}
          onSelect={handleSelect}
        />
      </Reveal>
    </Section>
  );
}

export default TrendingFood;
