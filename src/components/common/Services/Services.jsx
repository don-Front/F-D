import Reveal from '@/components/common/Reveal';
import ServiceCard from '@/components/common/ServiceCard';
import Container from '@/components/layout/Container';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';

import styles from './Services.module.scss';

import { SERVICES } from '@/data/services';

function Services() {
  return (
    <Section
      id="services"
      className={styles.services}
      aria-labelledby="services-title"
    >
      <Container>
        <Reveal variant="up">
          <SectionHeading
            eyebrow="- Our Services -"
            title="Our serve just for you"
          />
        </Reveal>
        <div className={styles.grid}>
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} variant="up" delay={120 + index * 120}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Services;
