import { useInView } from '@/hooks/useInView';

import CommentCard from '@/components/common/CommentCard';
import Reveal from '@/components/common/Reveal';
import Container from '@/components/layout/Container';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';

import styles from './Comments.module.scss';

import commentsPizza from '@/assets/images/comments/comments-pizza.png';
import foodCake from '@/assets/images/comments/food-cake.png';
import foodPancake from '@/assets/images/comments/food-pancake.png';
import { COMMENT_CARD_ASSETS } from '@/data/testimonials';
import { useI18n } from '@/i18n/I18nProvider';

function Comments() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const { t } = useI18n();

  return (
    <Section className={styles.section} aria-labelledby="comments-title">
      <Container>
        <Reveal variant="up">
          <SectionHeading
            eyebrow={t('comments.eyebrow')}
            title={t('comments.title')}
          />
        </Reveal>

        <div
          ref={ref}
          className={styles.composition}
          data-assembled={isInView || undefined}
        >
          <img
            src={foodCake}
            alt=""
            className={[styles.layer, styles.orbit, styles.cake].join(' ')}
          />
          <img
            src={commentsPizza}
            alt="Pizza"
            className={[styles.layer, styles.center].join(' ')}
          />
          <img
            src={foodPancake}
            alt=""
            className={[styles.layer, styles.orbit, styles.pancake].join(' ')}
          />

          {COMMENT_CARD_ASSETS.map((card, index) => (
            <CommentCard
              key={card.id}
              name={t(`comments.cards.${card.id}.name`)}
              role={t(`comments.cards.${card.id}.role`)}
              text={t(`comments.cards.${card.id}.text`)}
              avatar={card.avatar}
              className={[
                styles.layer,
                index === 0 ? styles.cardLeft : styles.cardRight,
              ].join(' ')}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Comments;
