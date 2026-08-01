import { useCallback, useMemo } from 'react';

import { useActiveSection } from '@/hooks/useActiveSection';

import { NAV_LINKS } from '@/constants/navigation';

import { scrollToSection } from '@/utils/scroll';

import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Logo from '@/components/ui/Logo';

import styles from './Header.module.scss';

import iconCart from '@/assets/icons/icon-cart.svg';
import iconSearch from '@/assets/icons/icon-search.svg';
import { useI18n } from '@/i18n/I18nProvider';

function Header({ onOpenLogin, onOpenRegister }) {
  const { t, locale, setLocale } = useI18n();
  const sectionIds = useMemo(() => NAV_LINKS.map((link) => link.id), []);
  const activeId = useActiveSection(sectionIds);

  const handleNavClick = useCallback((event, id) => {
    event.preventDefault();
    scrollToSection(id);
    window.history.replaceState(null, '', `#${id}`);
  }, []);

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Logo />

        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.list}>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={activeId === link.id ? styles.active : undefined}
                  aria-current={activeId === link.id ? 'page' : undefined}
                  onClick={(event) => handleNavClick(event, link.id)}
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
