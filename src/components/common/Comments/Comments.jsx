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
import { COMMENT_CARDS } from '@/data/testimonials';

function Comments() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <Section className={styles.section} aria-labelledby="comments-title">
      <Container>
        <Reveal variant="up">
          <SectionHeading
            eyebrow="- What they say -"
            title="Comment for Food"
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

          <CommentCard
            {...COMMENT_CARDS[0]}
            className={[styles.layer, styles.cardLeft].join(' ')}
          />
          <CommentCard
            {...COMMENT_CARDS[1]}
            className={[styles.layer, styles.cardRight].join(' ')}
          />
        </div>
      </Container>
    </Section>
  );
}

export default Comments;
