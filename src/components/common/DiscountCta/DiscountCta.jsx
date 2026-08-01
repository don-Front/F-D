import { useInView } from '@/hooks/useInView';

import Reveal from '@/components/common/Reveal';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';

import styles from './DiscountCta.module.scss';

import ctaImage from '@/assets/images/cta/cta-girl-donuts.png';

function DiscountCta() {
  const { ref, isInView } = useInView({ threshold: 0.25 });

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
              Get more discount if you order from us
            </h2>
            <p className={styles.text}>
              Join our newsletter for exclusive promos, seasonal deals, and early
              access to new menu drops.
            </p>
            <form
              className={styles.form}
              onSubmit={(event) => event.preventDefault()}
            >
              <label className={styles.srOnly} htmlFor="email">
                Your Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email Address"
                className={styles.input}
                required
              />
              <Button type="submit" variant="dark" className={styles.submit}>
                Get
              </Button>
            </form>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default DiscountCta;
