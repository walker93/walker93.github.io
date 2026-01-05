import '@n8n/chat/style.css';
import dynamic from 'next/dynamic';

const N8nChatComponent = dynamic(
  async () => {
    const { createChat } = await import('@n8n/chat');
    
    const N8nChat = () => {
      const n8nChat = createChat({
        webhookUrl: 'https://lattepanda.my.to:88/webhook/46718653-b37f-4202-adbb-68bd563a0614/chat',
        defaultLanguage: "en",
        initialMessages: [
          'Ciao 👋',
          'Sono Alex. Come posso aiutarti?'
        ],
        i18n: {
          en: {
            title: 'Ciao 👋',
            subtitle: "Scrivi in chat. Risponderò alle tue domande",
            footer: '',
            getStarted: 'Nuova conversazione',
            inputPlaceholder: 'Scrivi la tua domanda...',
            closeButtonTooltip: 'Chiudi chat'
          },
        },
        metadata: {
          currentPage: typeof window !== 'undefined' ? window.location.href : '',
          pageTitle: typeof document !== 'undefined' ? document.title : ''
        }
      });
      return null;
    };
    
    return N8nChat;
  },
  { ssr: false }
);

export default N8nChatComponent;