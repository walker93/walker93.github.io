
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import N8nChatComponent from '../components/n8n-chat';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <N8nChatComponent />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;