import { useInView } from '@/hooks/useInView';

import styles from './Reveal.module.scss';

const VARIANT_CLASS = {
  up: styles.up,
  fade: styles.fade,
  scale: styles.scale,
  left: styles.left,
  right: styles.right,
};

function Reveal({
  children,
  className = '',
  variant = 'up',
  delay = 0,
  as: Tag = 'div',
  ...props
}) {
  const { ref, isInView } = useInView();
  const variantClass = VARIANT_CLASS[variant] ?? VARIANT_CLASS.up;

  const classNames = [styles.reveal, variantClass, className].filter(Boolean).join(' ');

  return (
    <Tag
      ref={ref}
      className={classNames}
      data-visible={isInView || undefined}
      style={delay ? { '--reveal-delay': `${delay}ms` } : undefined}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
