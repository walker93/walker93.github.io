
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import N8nChatComponent from '../components/n8n-chat';
import { GoogleAnalytics } from '@next/third-parties/google';

function MyApp({ Component, pageProps }) {
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