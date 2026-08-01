import Reveal from '@/components/common/Reveal';
import Container from '@/components/layout/Container';
import Section from '@/components/ui/Section';

import styles from './Partners.module.scss';

import { PARTNERS } from '@/data/partners';
import { useI18n } from '@/i18n/I18nProvider';

function Partners() {
  const { t } = useI18n();

  return (
    <Section className={styles.partners} aria-label={t('partners.label')}>
      <Container>
        <Reveal variant="fade">
          <p className={styles.label}>{t('partners.label')}</p>
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
