import Reveal from '@/components/common/Reveal';
import ServiceCard from '@/components/common/ServiceCard';
import Container from '@/components/layout/Container';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';

import styles from './Services.module.scss';

import { SERVICES } from '@/data/services';
import { useI18n } from '@/i18n/I18nProvider';

function Services() {
  const { t } = useI18n();

  return (
    <Section
      id="services"
      className={styles.services}
      aria-labelledby="services-title"
    >
      <Container>
        <Reveal variant="up">
          <SectionHeading
            eyebrow={t('services.eyebrow')}
            title={t('services.title')}
          />
        </Reveal>
        <div className={styles.grid}>
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} variant="up" delay={120 + index * 120}>
              <ServiceCard
                title={t(`services.items.${service.id}.title`)}
                description={t(`services.items.${service.id}.description`)}
                image={service.image}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Services;
