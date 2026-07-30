import Container from '@/components/layout/Container';
import Section from '@/components/ui/Section';

import styles from './Partners.module.scss';

import { PARTNERS } from '@/data/partners';

function Partners() {
  return (
    <Section className={styles.partners} aria-label="Supported by">
      <Container>
        <p className={styles.label}>Support by :</p>
        <ul className={styles.list}>
          {PARTNERS.map((partner) => (
            <li key={partner.id}>
              <img src={partner.src} alt={partner.name} className={styles.logo} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export default Partners;
