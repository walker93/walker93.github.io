import '@n8n/chat/style.css';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useLanguageContext } from '../context/LanguageContext';

let chatInitialized = false;

const N8nChatComponent = dynamic(
  async () => {
    const { createChat } = await import('@n8n/chat');
    // Aggiungere verifica online webhook prima di creare la chat, se offline non mostrare la chat
    const response = await fetch('https://lattepanda.my.to:88/webhook/46718653-b37f-4202-adbb-68bd563a0614/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ test: 'ping' })
    }).catch(() => null);
    if (!response) return null;
    
    const N8nChat = () => {
      const { language } = useLanguageContext();
      const [translations, setTranslations] = useState<any>(null);

      useEffect(() => {
        // Carica le traduzioni dal file JSON della lingua corrente
        const loadTranslations = async () => {
          try {
            const response = await fetch(`/locales/${language}/common.json`);
            const data = await response.json();
            setTranslations(data);
          } catch (error) {
            console.error('Failed to load translations:', error);
            setTranslations({ n8n: {} });
          }
        };

        loadTranslations();
      }, [language]);

      useEffect(() => {
        if (chatInitialized || !translations) return;
        
        const n8nStrings = translations.n8n;
        
        // Costruisci i18n.en con le stringhe della lingua corrente
        const i18nConfig = {
          en: {
            title: n8nStrings.title,
            subtitle: n8nStrings.subtitle,
            footer: n8nStrings.footer,
            getStarted: n8nStrings.getStarted,
            inputPlaceholder: n8nStrings.inputPlaceholder,
            closeButtonTooltip: n8nStrings.closeButtonTooltip
          }
        };

        createChat({
          webhookUrl: 'https://lattepanda.my.to:88/webhook/46718653-b37f-4202-adbb-68bd563a0614/chat',
          defaultLanguage: "en",
          initialMessages: [
            n8nStrings.title,
            language === 'en' ? "I'm Alex's AI assistant. How can I help you?" : "Sono l'assistente AI di Alex. Come posso aiutarti?"
          ],
          i18n: i18nConfig,
          metadata: {
            currentPage: typeof window !== 'undefined' ? window.location.href : '',
            pageTitle: typeof document !== 'undefined' ? document.title : ''
          }
        });
        chatInitialized = true;
      }, [language, translations]);
      
      return null;
    };
    
    return N8nChat;
  },
  { ssr: false }
);

export default N8nChatComponent;