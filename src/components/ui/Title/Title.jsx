import styles from './Title.module.scss';

function Title({ children, as: Tag = 'h2', className = '', ...props }) {
  const classNames = [styles.title, className].filter(Boolean).join(' ');

  return (
    <Tag className={classNames} {...props}>
      {children}
    </Tag>
  );
}

export default Title;
