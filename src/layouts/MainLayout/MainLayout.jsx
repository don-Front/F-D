import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import styles from './MainLayout.module.scss';

function MainLayout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
