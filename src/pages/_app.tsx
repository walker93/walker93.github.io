
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import N8nChatComponent from '../components/n8n-chat';
import { GoogleAnalytics } from '@next/third-parties/google';
import { useEffect } from 'react';
import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";



function MyApp({ Component, pageProps }) {
  useEffect(() => {
    CookieConsent.run({
      categories: {
        necessary: {
          enabled: true,  // this category is enabled by default
          readOnly: true  // this category cannot be disabled
        },
        analytics: {}
      },

      language: {
        default: 'it',
        translations: {
          'it': '/CookieConsent/it.json'
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
  }, []);
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

export default MyApp;