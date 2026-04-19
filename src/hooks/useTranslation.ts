import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type Translations = {
  [key: string]: any;
};

let translationCache: { [key: string]: Translations } = {};

export const useTranslation = (namespace: string = 'common') => {
  const router = useRouter();
  const [translations, setTranslations] = useState<Translations>({});
  const [isLoading, setIsLoading] = useState(true);

  // Estrae la lingua dalla URL
  const getLanguage = (): 'it' | 'en' => {
    if (typeof window === 'undefined') return 'it';
    
    const path = router.asPath;
    if (path.startsWith('/en')) {
      return 'en';
    }
    return 'it';
  };

  const language = getLanguage();

  useEffect(() => {
    const cacheKey = `${language}-${namespace}`;

    // Se è già in cache, usalo
    if (translationCache[cacheKey]) {
      setTranslations(translationCache[cacheKey]);
      setIsLoading(false);
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
        setTranslations(data);
      } catch (error) {
        console.warn(`Could not load translations for ${language}/${namespace}, falling back to Italian`);
        // Fallback all'italiano
        try {
          const fallbackResponse = await fetch(`/locales/it/${namespace}.json`);
          if (fallbackResponse.ok) {
            const fallbackData = await fallbackResponse.json();
            translationCache[cacheKey] = fallbackData;
            setTranslations(fallbackData);
          }
        } catch (fallbackError) {
          console.error(`Failed to load Italian fallback for ${namespace}`, fallbackError);
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadTranslations();
  }, [language, namespace]);

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
