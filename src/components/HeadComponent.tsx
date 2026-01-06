import Head from 'next/head';

type Props = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
};

const HeadComponent = ({ title, description, url, image}: Props) => {

    return (
        <>
            <Head>
                <title>{title || 'Alex Cortinovis - Esperto in Digital Forensic e Data Recovery, Sviluppatore indipendente'}</title>
                <meta property='og:title' content={title || 'Alex Cortinovis - Esperto in Digital Forensic e Data Recovery, Sviluppatore indipendente'} />
                <meta property="description" content={description || "Sito ufficiale di Alex Cortinovis, esperto in Digital Forensic e Data Recovery, nonché sviluppatore indipendente di software per l'analisi forense digitale."} />
                <meta property='og:description' content={description || "Sito ufficiale di Alex Cortinovis, esperto in Digital Forensic e Data Recovery, nonché sviluppatore indipendente di software per l'analisi forense digitale."} />
                <meta property='og:url' content={url || 'https://alexcortinovis.tech/'} />
                <meta property='og:site_name' content='Alex Cortinovis' />
                <meta property='og:image' content={image || '/og-image.png'} />
                <meta property='og:type' content='website' />
                <meta property='charset' content='UTF-8' />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    );
};

export default HeadComponent;