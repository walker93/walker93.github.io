import '@n8n/chat/style.css';
import dynamic from 'next/dynamic';

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
      const n8nChat = createChat({
        webhookUrl: 'https://lattepanda.my.to:88/webhook/46718653-b37f-4202-adbb-68bd563a0614/chat',
        defaultLanguage: "en",
        initialMessages: [
          'Ciao 👋',
          'Sono l\'assistente AI di Alex. Come posso aiutarti?'
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