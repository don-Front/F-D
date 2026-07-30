import styles from './Logo.module.scss';

function Logo({ className = '' }) {
  const classNames = [styles.logo, className].filter(Boolean).join(' ');

  return (
    <a href="#home" className={classNames} aria-label="F&D Home">
      F&D
    </a>
  );
}

export default Logo;
