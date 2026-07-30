import Icon from '@/components/ui/Icon';

import styles from './SliderControls.module.scss';

import iconArrowLeft from '@/assets/icons/icon-arrow-left.svg';
import iconArrowRight from '@/assets/icons/icon-arrow-right.svg';

function SliderControls({
  total = 5,
  active = 2,
  onPrev,
  onNext,
  className = '',
}) {
  const classNames = [styles.controls, className].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      <button type="button" className={styles.arrow} onClick={onPrev} aria-label="Previous">
        <Icon src={iconArrowLeft} size={18} />
      </button>
      <div className={styles.dots} role="tablist" aria-label="Slides">
        {Array.from({ length: total }, (_, index) => (
          <span
            key={index}
            className={[styles.dot, index === active ? styles.active : ''].filter(Boolean).join(' ')}
          />
        ))}
      </div>
      <button type="button" className={styles.arrow} onClick={onNext} aria-label="Next">
        <Icon src={iconArrowRight} size={18} />
      </button>
    </div>
  );
}

export default SliderControls;
