import ServiceCard from '@/components/common/ServiceCard';
import Container from '@/components/layout/Container';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';

import styles from './Services.module.scss';

import { SERVICES } from '@/data/services';

function Services() {
  return (
    <Section id="services" className={styles.services} aria-labelledby="services-title">
      <Container>
        <SectionHeading
          eyebrow="- Our Services -"
          title="Our serve just for you"
        />
        <div className={styles.grid}>
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Services;
