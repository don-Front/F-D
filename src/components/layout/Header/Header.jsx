import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Logo from '@/components/ui/Logo';

import styles from './Header.module.scss';

import iconCart from '@/assets/icons/icon-cart.svg';
import iconSearch from '@/assets/icons/icon-search.svg';
import { useI18n } from '@/i18n/I18nProvider';

const NAV_IDS = [
  { id: 'home', href: '#home' },
  { id: 'menu', href: '#menu' },
  { id: 'services', href: '#services' },
  { id: 'contact', href: '#contact' },
];

function Header({ onOpenLogin, onOpenRegister }) {
  const { t, locale, setLocale } = useI18n();

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Logo />

        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.list}>
            {NAV_IDS.map((link, index) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={index === 0 ? styles.active : undefined}
                >
                  {t(`nav.${link.id}`)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <div
            className={styles.lang}
            role="group"
            aria-label={t('header.langLabel')}
          >
            <button
              type="button"
              className={locale === 'en' ? styles.langActive : undefined}
              onClick={() => setLocale('en')}
            >
              {t('header.langEn')}
            </button>
            <button
              type="button"
              className={locale === 'ru' ? styles.langActive : undefined}
              onClick={() => setLocale('ru')}
            >
              {t('header.langRu')}
            </button>
          </div>

          <button
            type="button"
            className={styles.iconButton}
            aria-label={t('header.search')}
          >
            <Icon src={iconSearch} size={22} />
          </button>
          <button
            type="button"
            className={styles.cartButton}
            aria-label={t('header.cart')}
          >
            <Icon src={iconCart} size={22} />
            <span className={styles.badge}>5</span>
          </button>
          <Button
            variant="outline"
            className={styles.register}
            onClick={onOpenRegister}
          >
            {t('header.register')}
          </Button>
          <Button variant="primary" onClick={onOpenLogin}>
            {t('header.login')}
          </Button>
        </div>
      </Container>
    </header>
  );
}

export default Header;
