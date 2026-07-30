import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Section from '@/components/ui/Section';

import styles from './Hero.module.scss';

import iconPlay from '@/assets/icons/icon-play.svg';
import iconStar from '@/assets/icons/icon-star.svg';
import { HERO } from '@/data/hero';

function Hero() {
  return (
    <Section id="home" className={styles.hero} aria-labelledby="hero-title">
      <Container className={styles.grid}>
        <div className={styles.content}>
          <h1 id="hero-title" className={styles.title}>
            {HERO.titleLines.map((line) => (
              <span key={line} className={styles.titleLine}>
                {line}
              </span>
            ))}
          </h1>

          <p className={styles.description}>{HERO.description}</p>

          <div className={styles.cta}>
            <Button variant="primary">{HERO.primaryCta}</Button>
            <button type="button" className={styles.videoButton}>
              <Icon src={iconPlay} size={40} />
              <span>{HERO.secondaryCta}</span>
            </button>
          </div>

          <div className={styles.reviews}>
            <div className={styles.avatars} aria-hidden="true">
              {HERO.reviewAvatars.map((src, index) => (
                <img key={src} src={src} alt="" className={styles.avatar} style={{ zIndex: 3 - index }} />
              ))}
            </div>
            <div>
              <p className={styles.reviewLabel}>{HERO.reviewLabel}</p>
              <p className={styles.reviewMeta}>
                <Icon src={iconStar} size={14} />
                <span>
                  {HERO.rating} ({HERO.reviewsCount})
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <img src={HERO.visual} alt="Happy customer with dessert" className={styles.image} />
        </div>
      </Container>
    </Section>
  );
}

export default Hero;
