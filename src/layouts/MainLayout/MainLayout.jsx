import { useState } from 'react';

import AuthModal from '@/components/common/AuthModal';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import styles from './MainLayout.module.scss';

function MainLayout({ children }) {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  const openAuth = (mode) => {
    setAuthMode(mode);
    setAuthOpen(true);
  };

  return (
    <div className={styles.layout}>
      <Header
        onOpenLogin={() => openAuth('login')}
        onOpenRegister={() => openAuth('register')}
      />
      <main className={styles.main}>{children}</main>
      <Footer />
      <AuthModal
        open={authOpen}
        mode={authMode}
        onClose={() => setAuthOpen(false)}
        onSwitchMode={setAuthMode}
      />
    </div>
  );
}

export default MainLayout;
