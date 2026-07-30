import styles from './Section.module.scss';

function Section({ children, className = '', ...props }) {
  const classNames = [styles.section, className].filter(Boolean).join(' ');

  return (
    <section className={classNames} {...props}>
      {children}
    </section>
  );
}

export default Section;
