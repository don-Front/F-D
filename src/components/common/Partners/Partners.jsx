import Reveal from '@/components/common/Reveal';
import Container from '@/components/layout/Container';
import Section from '@/components/ui/Section';

import styles from './Partners.module.scss';

import { PARTNERS } from '@/data/partners';

function Partners() {
  return (
    <Section className={styles.partners} aria-label="Supported by">
      <Container>
        <Reveal variant="fade">
          <p className={styles.label}>Support by :</p>
        </Reveal>
        <ul className={styles.list}>
          {PARTNERS.map((partner, index) => (
            <Reveal
              key={partner.id}
              as="li"
              variant="up"
              delay={80 + index * 70}
            >
              <img
                src={partner.src}
                alt={partner.name}
                className={styles.logo}
              />
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export default Partners;
