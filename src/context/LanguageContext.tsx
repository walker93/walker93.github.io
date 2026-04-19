import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import type { Language } from '../utils/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();
  const [language, setLanguageState] = useState<Language>('it');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const path = router.asPath;
    const lang: Language = path.startsWith('/en') ? 'en' : 'it';
    setLanguageState(lang);
    setIsLoading(false);

    if (lang !== 'en') {
      const browserLocale = typeof navigator !== 'undefined' ? navigator.language : 'en';
      const browserLanguage = browserLocale?.split('-')[0]?.toLowerCase();

      if (browserLanguage !== 'it' && path !== '/en') {
        router.replace('/en');
      }
    }
  }, [router.isReady, router.asPath]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
};
