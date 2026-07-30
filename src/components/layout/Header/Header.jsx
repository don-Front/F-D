import { NAV_LINKS } from '@/constants/navigation';

import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Logo from '@/components/ui/Logo';

import styles from './Header.module.scss';

import iconCart from '@/assets/icons/icon-cart.svg';
import iconSearch from '@/assets/icons/icon-search.svg';

function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Logo />

        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.list}>
            {NAV_LINKS.map((link, index) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={index === 0 ? styles.active : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <button type="button" className={styles.iconButton} aria-label="Search">
            <Icon src={iconSearch} size={22} />
          </button>
          <button type="button" className={styles.cartButton} aria-label="Cart, 5 items">
            <Icon src={iconCart} size={22} />
            <span className={styles.badge}>5</span>
          </button>
          <Button variant="outline" className={styles.register}>
            Register
          </Button>
          <Button variant="primary">Log in</Button>
        </div>
      </Container>
    </header>
  );
}

export default Header;
