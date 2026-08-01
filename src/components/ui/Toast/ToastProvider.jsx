import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';

import styles from './Toast.module.scss';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);
  const timerRef = useRef(null);

  const hideToast = useCallback(() => {
    setToast(null);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const showToast = useCallback(
    ({ title, message, duration = 5200 }) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      setToast({ title, message });
      timerRef.current = setTimeout(() => {
        setToast(null);
        timerRef.current = null;
      }, duration);
    },
    [],
  );

  const value = useMemo(
    () => ({ showToast, hideToast }),
    [showToast, hideToast],
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      {toast ? (
        <div className={styles.host} role="status" aria-live="polite">
          <div className={styles.toast}>
            <div className={styles.accent} aria-hidden="true" />
            <div className={styles.content}>
              <p className={styles.title}>{toast.title}</p>
              <p className={styles.message}>{toast.message}</p>
            </div>
            <button
              type="button"
              className={styles.close}
              onClick={hideToast}
              aria-label="Close notification"
            >
              ×
            </button>
          </div>
        </div>
      ) : null}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
}
