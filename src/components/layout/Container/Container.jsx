import styles from './Container.module.scss';

function Container({ children, className = '' }) {
  const classNames = [styles.container, className].filter(Boolean).join(' ');

  return <div className={classNames}>{children}</div>;
}

export default Container;
