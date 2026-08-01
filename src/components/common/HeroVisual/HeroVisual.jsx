import { useInView } from '@/hooks/useInView';

import styles from './HeroVisual.module.scss';

function HeroVisual({ visual }) {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className={styles.stage}
      data-assembled={isInView || undefined}
      aria-hidden="true"
    >
      <div className={[styles.layer, styles.arch].join(' ')} />
      <div className={[styles.layer, styles.dot, styles.dotTop].join(' ')} />
      <div className={[styles.layer, styles.dot, styles.dotRight].join(' ')} />

      <img
        src={visual.woman}
        alt=""
        className={[styles.layer, styles.woman].join(' ')}
      />

      <div className={[styles.layer, styles.pill, styles.courier].join(' ')}>
        <img src={visual.courierBadge} alt="" />
      </div>

      <div className={[styles.layer, styles.card, styles.reviews].join(' ')}>
        <img src={visual.foodBadge} alt="" className={styles.reviewsThumb} />
        <div>
          <span className={styles.muted}>Reviews</span>
          <strong>{visual.reviewsCount}</strong>
        </div>
      </div>

      <span className={[styles.layer, styles.lunch].join(' ')}>LUNCH TIME</span>

      <img
        src={visual.clockBadge}
        alt=""
        className={[styles.layer, styles.clock].join(' ')}
      />

      <div className={[styles.layer, styles.card, styles.quote].join(' ')}>
        <img src={visual.userBadge} alt="" className={styles.quoteAvatar} />
        <p>“{visual.quote}”</p>
      </div>
    </div>
  );
}

export default HeroVisual;
