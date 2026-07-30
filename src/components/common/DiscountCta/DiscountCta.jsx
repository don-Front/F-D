import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';

import styles from './DiscountCta.module.scss';

import ctaImage from '@/assets/images/cta/cta-girl-donuts.png';

function DiscountCta() {
  return (
    <Section className={styles.section} aria-labelledby="discount-title">
      <Container>
        <div className={styles.banner}>
          <img src={ctaImage} alt="" className={styles.image} />
          <div className={styles.content}>
            <h2 id="discount-title" className={styles.title}>
              Get more discount if you order from us
            </h2>
            <p className={styles.text}>
              Join with us then you must have get a discount and get promo from us
              to you , enjoy and happy to order.
            </p>
            <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
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
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default DiscountCta;
