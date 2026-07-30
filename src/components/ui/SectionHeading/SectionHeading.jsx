import styles from './SectionHeading.module.scss';

function SectionHeading({ eyebrow, title, align = 'center', className = '' }) {
  const classNames = [styles.heading, styles[align], className]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={classNames}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2 className={styles.title}>{title}</h2>
    </header>
  );
}

export default SectionHeading;
