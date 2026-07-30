import CommentCard from '@/components/common/CommentCard';
import SliderControls from '@/components/common/SliderControls';
import Container from '@/components/layout/Container';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';

import styles from './Comments.module.scss';

import commentsPizza from '@/assets/images/comments/comments-pizza.png';
import foodCake from '@/assets/images/comments/food-cake.png';
import foodPancake from '@/assets/images/comments/food-pancake.png';
import { COMMENT_CARDS } from '@/data/testimonials';

function Comments() {
  return (
    <Section className={styles.section} aria-labelledby="comments-title">
      <Container>
        <SliderControls total={6} active={2} />
        <SectionHeading eyebrow="- What they are say -" title="Comment for Food" />

        <div className={styles.composition}>
          <img src={foodCake} alt="" className={[styles.orbit, styles.cake].join(' ')} />
          <img src={commentsPizza} alt="Pizza" className={styles.center} />
          <img src={foodPancake} alt="" className={[styles.orbit, styles.pancake].join(' ')} />

          <CommentCard {...COMMENT_CARDS[0]} className={styles.cardLeft} />
          <CommentCard {...COMMENT_CARDS[1]} className={styles.cardRight} />
        </div>
      </Container>
    </Section>
  );
}

export default Comments;
