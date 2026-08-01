import { useInView } from '@/hooks/useInView';

import Reveal from '@/components/common/Reveal';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';

import styles from './DiscountCta.module.scss';

import ctaImage from '@/assets/images/cta/cta-girl-donuts.png';
import { useI18n } from '@/i18n/I18nProvider';

function DiscountCta() {
  const { ref, isInView } = useInView({ threshold: 0.25 });
  const { t } = useI18n();

  return (
    <Section className={styles.section} aria-labelledby="discount-title">
      <Container>
        <div
          ref={ref}
          className={styles.banner}
          data-assembled={isInView || undefined}
        >
          <div className={styles.visual}>
            <span className={[styles.spark, styles.sparkA].join(' ')} />
            <span className={[styles.spark, styles.sparkB].join(' ')} />
            <span className={[styles.spark, styles.sparkC].join(' ')} />
            <img src={ctaImage} alt="" className={styles.image} />
          </div>

          <Reveal variant="left" delay={160} className={styles.content}>
            <h2 id="discount-title" className={styles.title}>
              {t('cta.title')}
            </h2>
            <p className={styles.text}>{t('cta.text')}</p>
            <form
              className={styles.form}
              onSubmit={(event) => event.preventDefault()}
            >
              <label className={styles.srOnly} htmlFor="email">
                {t('cta.emailLabel')}
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder={t('cta.placeholder')}
                className={styles.input}
                required
              />
              <Button type="submit" variant="dark" className={styles.submit}>
                {t('cta.button')}
              </Button>
            </form>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default DiscountCta;
