import Head from 'next/head';
import { useRouter } from 'next/router';
import { useLanguageContext } from '../context/LanguageContext';

type Props = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
};

const HeadComponent = ({ title, description, url, image}: Props) => {
    const { language } = useLanguageContext();
    const router = useRouter();

    // Genera hreflang links per SEO
    const generateAlternateLinks = () => {
        const baseUrl = 'https://alexcortinovis.tech';
        // pathname invece di window.location: così gli hreflang sono corretti anche nell'HTML statico
        const currentPath = router.pathname;
        
        // Rimuovi il prefisso /en per ottenere il percorso base
        const basePath = currentPath.replace(/^\/en/, '') || '/';
        
        return (
            <>
                <link rel="alternate" hrefLang="it" href={`${baseUrl}${basePath}`} />
                <link rel="alternate" hrefLang="en" href={`${baseUrl}/en${basePath === '/' ? '' : basePath}`} />
                <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${basePath}`} />
            </>
        );
    };

    return (
        <>
            <Head>
                <title>{title || 'Alex Cortinovis - Expert in Digital Forensic and Data Recovery, Independent Developer'}</title>
                <meta property='og:title' content={title || 'Alex Cortinovis - Expert in Digital Forensic and Data Recovery, Independent Developer'} />
                <meta name="description" content={description || "Official website of Alex Cortinovis, expert in Digital Forensic and Data Recovery, and independent developer of software for digital forensics analysis."} />
                <meta property="description" content={description || "Official website of Alex Cortinovis, expert in Digital Forensic and Data Recovery, and independent developer of software for digital forensics analysis."} />
                <meta property='og:description' content={description || "Official website of Alex Cortinovis, expert in Digital Forensic and Data Recovery, and independent developer of software for digital forensics analysis."} />
                <meta property='og:url' content={url || 'https://alexcortinovis.tech/'} />
                <meta property='og:site_name' content='Alex Cortinovis' />
                <meta property='og:image' content={image || '/og-image.png'} />
                <meta property='og:type' content='website' />
                <meta property='charset' content='UTF-8' />
                <meta name='language' content={language} />
                <link rel="icon" href="/favicon.png" />
                {generateAlternateLinks()}
            </Head>
        </>
    );
};

export default HeadComponent;