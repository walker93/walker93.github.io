import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';

type Translations = {
  [key: string]: any;
};

// Traduzioni caricate a build time da getStaticProps, indicizzate per namespace (vedi _app.tsx)
export const PageTranslationsContext = createContext<{ [namespace: string]: Translations } | undefined>(undefined);

let translationCache: { [key: string]: Translations } = {};

export const useTranslation = (namespace: string = 'common', initialTranslations?: Translations) => {
  const router = useRouter();
  const pageTranslations = useContext(PageTranslationsContext);
  const [fetchedTranslations, setFetchedTranslations] = useState<Translations | null>(null);

  // Estrae la lingua dalla URL (pathname è disponibile anche durante la build statica)
  const language: 'it' | 'en' = router.pathname.startsWith('/en') ? 'en' : 'it';

  const preloaded = initialTranslations || pageTranslations?.[namespace];
  const translations = preloaded || fetchedTranslations || {};
  const isLoading = !preloaded && !fetchedTranslations;

  useEffect(() => {
    // Le traduzioni sono già nell'HTML statico: niente fetch
    if (preloaded) return;

    const cacheKey = `${language}-${namespace}`;

    // Se è già in cache, usalo
    if (translationCache[cacheKey]) {
      setFetchedTranslations(translationCache[cacheKey]);
      return;
    }

    // Carica il file JSON
    const loadTranslations = async () => {
      try {
        const response = await fetch(`/locales/${language}/${namespace}.json`);
        if (!response.ok) {
          throw new Error(`Failed to load translations for ${language}/${namespace}`);
        }
        const data = await response.json();
        translationCache[cacheKey] = data;
        setFetchedTranslations(data);
      } catch (error) {
        console.warn(`Could not load translations for ${language}/${namespace}, falling back to Italian`);
        // Fallback all'italiano
        try {
          const fallbackResponse = await fetch(`/locales/it/${namespace}.json`);
          if (fallbackResponse.ok) {
            const fallbackData = await fallbackResponse.json();
            translationCache[cacheKey] = fallbackData;
            setFetchedTranslations(fallbackData);
          }
        } catch (fallbackError) {
          console.error(`Failed to load Italian fallback for ${namespace}`, fallbackError);
        }
      }
    };

    loadTranslations();
  }, [language, namespace, preloaded]);

  return {
    t: (key: string, fallback: string = ''): string => {
      const keys = key.split('.');
      let value: any = translations;

      for (const k of keys) {
        value = value?.[k];
      }

      return value || fallback || key;
    },
    language,
    isLoading,
    translations
  };
};
