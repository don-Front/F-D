import Rating from '@/components/ui/Rating';

import styles from './FoodCard.module.scss';

function FoodCard({ name, price, rating, image, featured = false }) {
  return (
    <article className={[styles.card, featured ? styles.featured : ''].filter(Boolean).join(' ')}>
      <img src={image} alt={name} className={styles.image} />
      <span className={styles.price}>{price}</span>
      <div className={styles.meta}>
        <h3 className={styles.name}>{name}</h3>
        <Rating value={rating} light />
      </div>
    </article>
  );
}

export default FoodCard;
