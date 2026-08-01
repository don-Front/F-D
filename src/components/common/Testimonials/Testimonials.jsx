import { useCallback, useMemo, useState } from 'react';

import Reveal from '@/components/common/Reveal';
import Container from '@/components/layout/Container';
import Icon from '@/components/ui/Icon';
import Rating from '@/components/ui/Rating';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';

import styles from './Testimonials.module.scss';

import iconArrowLeft from '@/assets/icons/icon-arrow-left.svg';
import iconArrowRight from '@/assets/icons/icon-arrow-right.svg';
import { FEATURED_TESTIMONIAL_ASSETS } from '@/data/testimonials';
import { useI18n } from '@/i18n/I18nProvider';

function Testimonials() {
  const { t, dict } = useI18n();
  const [active, setActive] = useState(0);

  const items = useMemo(
    () =>
      FEATURED_TESTIMONIAL_ASSETS.map((asset) => {
        const copy = dict.testimonials.items.find((item) => item.id === asset.id);
        return {
          ...asset,
          name: copy?.name ?? asset.id,
          role: copy?.role ?? '',
          text: copy?.text ?? '',
        };
      }),
    [dict],
  );

  const total = items.length;
  const item = items[active];

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % total);
  }, [total]);

  return (
    <Section className={styles.section} aria-labelledby="about-title">
      <Container className={styles.grid}>
        <button
          type="button"
          className={[styles.navBtn, styles.prev].join(' ')}
          aria-label="Previous review"
          onClick={handlePrev}
        >
          <Icon src={iconArrowLeft} size={18} />
        </button>

        <Reveal variant="right" className={styles.mediaWrap}>
          <figure className={styles.media} key={`${item.id}-image`}>
            <img
              src={item.image}
              alt={`${item.name}`}
              className={styles.image}
            />
          </figure>
        </Reveal>

        <Reveal variant="left" delay={140} className={styles.content}>
          <SectionHeading
            eyebrow={t('testimonials.eyebrow')}
            title={t('testimonials.title')}
            align="left"
            className={styles.heading}
          />

          <div className={styles.author} key={`${item.id}-author`}>
            <img src={item.avatar} alt="" className={styles.avatar} />
            <div>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.role}>{item.role}</p>
            </div>
          </div>

          <blockquote className={styles.quote} key={`${item.id}-quote`}>
            “{item.text}”
          </blockquote>
          <Rating value={Number(item.rating).toFixed(1)} />
        </Reveal>

        <button
          type="button"
          className={[styles.navBtn, styles.next].join(' ')}
          aria-label="Next review"
          onClick={handleNext}
        >
          <Icon src={iconArrowRight} size={18} />
        </button>
      </Container>
    </Section>
  );
}

export default Testimonials;
