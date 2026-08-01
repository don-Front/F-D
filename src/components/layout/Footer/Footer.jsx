import { FOOTER_COLUMNS } from '@/constants/navigation';

import Container from '@/components/layout/Container';
import Icon from '@/components/ui/Icon';
import Logo from '@/components/ui/Logo';

import styles from './Footer.module.scss';

import iconEmail from '@/assets/icons/icon-email.svg';
import iconFacebook from '@/assets/icons/icon-facebook.svg';
import iconInstagram from '@/assets/icons/icon-instagram.svg';
import iconTwitter from '@/assets/icons/icon-twitter.svg';

const SOCIAL_ICONS = [
  { id: 'facebook', src: iconFacebook, label: 'Facebook' },
  { id: 'instagram', src: iconInstagram, label: 'Instagram' },
  { id: 'email', src: iconEmail, label: 'Email' },
  { id: 'twitter', src: iconTwitter, label: 'Twitter' },
];

function Footer() {
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

          {FOOTER_COLUMNS.map((column) => (
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

        <p className={styles.copy}>© F&D {new Date().getFullYear()} — All rights reserved</p>
      </Container>
    </footer>
  );
}

export default Footer;
