import HeroVisual from '@/components/common/HeroVisual';
import Reveal from '@/components/common/Reveal';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Section from '@/components/ui/Section';

import styles from './Hero.module.scss';

import iconPlay from '@/assets/icons/icon-play.svg';
import iconStar from '@/assets/icons/icon-star.svg';
import { HERO_ASSETS } from '@/data/hero';
import { useI18n } from '@/i18n/I18nProvider';

function Hero() {
  const { t, dict } = useI18n();
  const titleLines = dict.hero.titleLines;
  const visual = {
    ...HERO_ASSETS.visual,
    quote: t('hero.quote'),
  };

  return (
    <Section id="home" className={styles.hero} aria-labelledby="hero-title">
      <Container className={styles.grid}>
        <div className={styles.content}>
          <Reveal variant="up">
            <h1 id="hero-title" className={styles.title}>
              {titleLines.map((line) => (
                <span key={line} className={styles.titleLine}>
                  {line}
                </span>
              ))}
            </h1>
          </Reveal>

          <Reveal variant="up" delay={100}>
            <p className={styles.description}>{t('hero.description')}</p>
          </Reveal>

          <Reveal variant="up" delay={180}>
            <div className={styles.cta}>
              <Button variant="primary">{t('hero.primaryCta')}</Button>
              <button type="button" className={styles.videoButton}>
                <Icon src={iconPlay} size={40} />
                <span>{t('hero.secondaryCta')}</span>
              </button>
            </div>
          </Reveal>

          <Reveal variant="up" delay={260}>
            <div className={styles.reviews}>
              <div className={styles.avatars} aria-hidden="true">
                {HERO_ASSETS.reviewAvatars.map((src, index) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className={styles.avatar}
                    style={{ zIndex: 3 - index }}
                  />
                ))}
              </div>
              <div>
                <p className={styles.reviewLabel}>{t('hero.reviewLabel')}</p>
                <p className={styles.reviewMeta}>
                  <Icon src={iconStar} size={14} />
                  <span>
                    {HERO_ASSETS.rating} ({t('hero.reviewsCount')})
                  </span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal variant="scale" delay={120} className={styles.visual}>
          <HeroVisual visual={visual} />
        </Reveal>
      </Container>
    </Section>
  );
}

export default Hero;
