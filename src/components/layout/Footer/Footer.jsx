import Container from '@/components/layout/Container';
import Icon from '@/components/ui/Icon';
import Logo from '@/components/ui/Logo';

import styles from './Footer.module.scss';

import iconEmail from '@/assets/icons/icon-email.svg';
import iconFacebook from '@/assets/icons/icon-facebook.svg';
import iconInstagram from '@/assets/icons/icon-instagram.svg';
import iconTwitter from '@/assets/icons/icon-twitter.svg';
import { useI18n } from '@/i18n/I18nProvider';

const SOCIAL_ICONS = [
  { id: 'facebook', src: iconFacebook, label: 'Facebook' },
  { id: 'instagram', src: iconInstagram, label: 'Instagram' },
  { id: 'email', src: iconEmail, label: 'Email' },
  { id: 'twitter', src: iconTwitter, label: 'Twitter' },
];

function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  const columns = [
    {
      title: t('footer.product'),
      links: [
        { label: t('footer.support'), href: '#contact' },
        { label: t('footer.guide'), href: '#services' },
      ],
    },
    {
      title: t('footer.terms'),
      links: [
        { label: t('footer.tos'), href: '#' },
        { label: t('footer.privacy'), href: '#' },
      ],
    },
    {
      title: t('footer.company'),
      links: [
        { label: t('nav.home'), href: '#home' },
        { label: t('footer.about'), href: '#services' },
        { label: t('footer.contactUs'), href: '#contact' },
      ],
    },
    {
      title: t('footer.contact'),
      links: [
        { label: '(+62) 893 9123 92190', href: 'tel:+62893912392190' },
        { label: 'hello@fd-delivery.com', href: 'mailto:hello@fd-delivery.com' },
      ],
    },
    {
      title: t('footer.delivery'),
      links: [
        { label: t('footer.cityExpress'), href: '#menu' },
        { label: t('footer.neighborhood'), href: '#services' },
      ],
    },
  ];

  return (
    <footer id="contact" className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo className={styles.logo} />
            <ul className={styles.socials}>
              {SOCIAL_ICONS.map((item) => (
                <li key={item.id}>
                  <a href="#" aria-label={item.label} className={styles.social}>
                    <Icon src={item.src} size={18} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {columns.map((column) => (
            <div key={column.title} className={styles.column}>
              <h3 className={styles.columnTitle}>{column.title}</h3>
              <ul className={styles.links}>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className={styles.copy}>{t('footer.copy', { year })}</p>
      </Container>
    </footer>
  );
}

export default Footer;
