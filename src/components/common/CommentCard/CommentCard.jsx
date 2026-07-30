import styles from './CommentCard.module.scss';

function CommentCard({ name, role, text, avatar, className = '' }) {
  const classNames = [styles.card, className].filter(Boolean).join(' ');

  return (
    <article className={classNames}>
      <div className={styles.head}>
        <img src={avatar} alt="" className={styles.avatar} />
        <div>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.role}>{role}</p>
        </div>
      </div>
      <p className={styles.text}>“{text}”</p>
    </article>
  );
}

export default CommentCard;
