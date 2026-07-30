import Icon from '@/components/ui/Icon';

import styles from './Rating.module.scss';

import iconStar from '@/assets/icons/icon-star.svg';

function Rating({ value, max = 5, light = false, className = '' }) {
  const classNames = [styles.rating, light ? styles.light : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} aria-label={`Rating ${value} out of ${max}`}>
      <span className={styles.value}>{value}</span>
      <span className={styles.stars}>
        {Array.from({ length: max }, (_, index) => (
          <Icon key={index} src={iconStar} size={14} />
        ))}
      </span>
    </div>
  );
}

export default Rating;
