import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { translations } from '@/i18n/translations';

const I18nContext = createContext(null);
const STORAGE_KEY = 'fd-locale';

function getByPath(object, path) {
  return path.split('.').reduce((acc, key) => acc?.[key], object);
}

export function I18nProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === 'ru' || saved === 'en' ? saved : 'en';
  });

  const setLocale = useCallback((next) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const t = useCallback(
    (path, vars = {}) => {
      const value = getByPath(translations[locale], path);
      if (typeof value !== 'string') {
        return path;
      }

      return Object.entries(vars).reduce(
        (text, [key, val]) => text.replaceAll(`{${key}}`, String(val)),
        value,
      );
    },
    [locale],
  );

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      dict: translations[locale],
    }),
    [locale, setLocale, t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}
