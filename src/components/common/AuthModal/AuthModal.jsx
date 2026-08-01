import { useState } from 'react';

import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import { useToast } from '@/components/ui/Toast';

import styles from './AuthModal.module.scss';

import { useI18n } from '@/i18n/I18nProvider';

function AuthModal({ open, mode = 'login', onClose, onSwitchMode }) {
  const { t } = useI18n();
  const { showToast } = useToast();
  const isLogin = mode === 'login';
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onClose?.();
    showToast({
      title: t('toast.title'),
      message: t('toast.message'),
    });
    setForm({ name: '', email: '', password: '', confirm: '' });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={isLogin ? t('auth.loginTitle') : t('auth.registerTitle')}
      labelledBy="auth-modal-title"
    >
      <p className={styles.subtitle}>
        {isLogin ? t('auth.loginSubtitle') : t('auth.registerSubtitle')}
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        {!isLogin ? (
          <label className={styles.field}>
            <span>{t('auth.name')}</span>
            <input
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
        ) : null}

        <label className={styles.field}>
          <span>{t('auth.email')}</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>

        <label className={styles.field}>
          <span>{t('auth.password')}</span>
          <input
            name="password"
            type="password"
            autoComplete={isLogin ? 'current-password' : 'new-password'}
            value={form.password}
            onChange={handleChange}
            required
            minLength={6}
          />
        </label>

        {!isLogin ? (
          <label className={styles.field}>
            <span>{t('auth.confirm')}</span>
            <input
              name="confirm"
              type="password"
              autoComplete="new-password"
              value={form.confirm}
              onChange={handleChange}
              required
              minLength={6}
            />
          </label>
        ) : null}

        <Button type="submit" variant="primary" className={styles.submit}>
          {isLogin ? t('auth.loginSubmit') : t('auth.registerSubmit')}
        </Button>
      </form>

      <button
        type="button"
        className={styles.switch}
        onClick={() => onSwitchMode?.(isLogin ? 'register' : 'login')}
      >
        {isLogin ? t('auth.toRegister') : t('auth.toLogin')}
      </button>
    </Modal>
  );
}

export default AuthModal;
