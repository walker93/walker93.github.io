
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import N8nChatComponent from '../components/n8n-chat';
import { GoogleAnalytics } from '@next/third-parties/google';
import { useEffect } from 'react';
import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";
import { LanguageProvider, useLanguageContext } from '../context/LanguageContext';
import { useRouter } from 'next/router';

function MyAppContent({ Component, pageProps }) {
  const router = useRouter();
  const { language } = useLanguageContext();

  useEffect(() => {
    const lang = router.asPath.startsWith('/en') ? 'en' : 'it';
    CookieConsent.run({
      categories: {
        necessary: {
          enabled: true,  // this category is enabled by default
          readOnly: true  // this category cannot be disabled
        },
        analytics: {}
      },

      language: {
        default: lang,
        translations: {
          'it': '/CookieConsent/it.json',
          'en': '/CookieConsent/en.json'
        }
      },
      guiOptions: {
        consentModal: {
          layout: 'cloud inline',
          position: 'bottom center',
          flipButtons: false,
          equalWeightButtons: true
        }
      }
    });
  }, [router.asPath]);

  return (
    <>
      <Header />
      <GoogleAnalytics gaId="G-1299F55DSC" />
      <N8nChatComponent />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <MyAppContent Component={Component} pageProps={pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;