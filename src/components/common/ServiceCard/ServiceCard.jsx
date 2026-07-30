import styles from './ServiceCard.module.scss';

function ServiceCard({ title, description, image }) {
  return (
    <article className={styles.card}>
      <img src={image} alt="" className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
}

export default ServiceCard;
