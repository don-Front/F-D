import styles from './Icon.module.scss';

function Icon({ src, alt = '', size = 24, className = '' }) {
  const classNames = [styles.icon, className].filter(Boolean).join(' ');

  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={classNames}
      aria-hidden={alt ? undefined : true}
    />
  );
}

export default Icon;
