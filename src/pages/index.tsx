import React from 'react';
import { faImage, faPaperclip, faCloudDownloadAlt, faBroadcastTower, faMobileAlt, faEnvelope, faFileArchive } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import SoftwareCard from '../components/software-card';
import HeadComponent from '../components/HeadComponent';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguageContext } from '../context/LanguageContext';

const HomePage = ({ initialTranslations }: any) => {
    const { t } = useTranslation('home', initialTranslations?.home);
    const { language } = useLanguageContext();

    const softwareList = [
        {
            icon: faCloudDownloadAlt,
            title: t('softwareList.forensicImapDownloader.title'),
            description: t('softwareList.forensicImapDownloader.description'),
            link: language === 'en' ? '/en/forensic-imap-downloader' : '/forensic-imap-downloader'
        },
        {
            icon: faBroadcastTower,
            title: t('softwareList.cellMapDesigner.title'),
            description: t('softwareList.cellMapDesigner.description'),
            link: language === 'en' ? '/en/cell-map-designer' : '/cell-map-designer'
        },
        {
            icon: faMobileAlt,
            title: t('softwareList.twrpToUfed.title'),
            description: t('softwareList.twrpToUfed.description'),
            link: language === 'en' ? '/en/twrp-to-ufed' : '/twrp-to-ufed'
        },
        {
            icon: faEnvelope,
            title: t('softwareList.mailxaminerHtmlReport.title'),
            description: t('softwareList.mailxaminerHtmlReport.description'),
            link: language === 'en' ? '/en/mailxaminer-html-report' : '/mailxaminer-html-report'
        },
        {
            icon: faInstagram,
            title: t('softwareList.instagramTakeoutParser.title'),
            description: t('softwareList.instagramTakeoutParser.description'),
            link: language === 'en' ? '/en/instagram-takeout-parser' : '/instagram-takeout-parser'
        },
        {
            icon: faWhatsapp,
            title: t('softwareList.whatsappExportReport.title'),
            description: t('softwareList.whatsappExportReport.description'),
            link: undefined
        },
        {
            icon: faFileArchive,
            title: t('softwareList.bulkUnArchiver.title'),
            description: t('softwareList.bulkUnArchiver.description'),
            link: undefined
        },
        {
            icon: faImage,
            title: t('softwareList.metadataExtractor.title'),
            description: t('softwareList.metadataExtractor.description'),
            link: undefined
        },
        {
            icon: faPaperclip,
            title: t('softwareList.bulkEmlAttachment.title'),
            description: t('softwareList.bulkEmlAttachment.description'),
            link: undefined
        }
    ];

    const seoData = language === 'en' ? {
        title: 'Alex Cortinovis - Expert in Digital Forensic and Data Recovery, Independent Developer',
        description: 'Official website of Alex Cortinovis, expert in Digital Forensic and Data Recovery, and independent developer of software for digital forensics analysis.',
        url: 'https://alexcortinovis.tech/en/',
    } : {
        title: 'Alex Cortinovis - Esperto in Digital Forensic e Data Recovery, Sviluppatore indipendente',
        description: 'Sito ufficiale di Alex Cortinovis, esperto in Digital Forensic e Data Recovery, nonché sviluppatore indipendente di software per l\'analisi forense digitale.',
        url: 'https://alexcortinovis.tech/',
    };

    return (
        <div>
            <HeadComponent 
                title={seoData.title}
                description={seoData.description}
                url={seoData.url}
                image="/og_image.png" 
            />
            <main className='main-section' style={{ maxWidth: 1080, margin: '0 auto', padding: '1rem 0' }}>
                <section style={{ marginBottom: '2rem' }}>
                    <p>
                        {t('experience')
                            .replace('{{forenseStudio}}', `<a href="http://michelevitiello.it/" target="_blank" rel="noopener noreferrer">Studio di Ingegneria Informatica Forense</a>`)
                            .replace('{{role}}', `<i>${t('roleTitle')}</i>`) && (
                            <>
                                {t('intro')}<br />
                                {language === 'en' ? 'For 10 years I have been working at the ' : 'Da 10 anni lavoro presso lo '}
                                <a href="http://michelevitiello.it/" target="_blank" rel="noopener noreferrer">
                                    {language === 'en' ? 'Forensic Engineering Studio' : 'Studio di Ingegneria Informatica Forense'}
                                </a>
                                {language === 'en' ? ' of Dr. Ing. Michele Vitiello in Brescia, where I perform the role of ' : ' del Dott. Ing. Michele Vitiello a Brescia, dove svolgo la mansione di '}
                                <i>{t('roleTitle')}</i>.
                                <br />
                                {t('disclaimer')}
                            </>
                        )}
                    </p>
                </section>
                <section style={{ marginBottom: '2rem' }}>
                    <h2>{t('softwareTitle')}</h2>
                    <div className="software-grid">
                        {softwareList.map((sw, idx) => (
                            <SoftwareCard key={idx} {...sw} />
                        ))}
                    </div>
                </section>
                <section>
                    <h2>{t('contactTitle')}</h2>
                    <p>
                        {language === 'en' ? 'If you have any questions, want to know me better or need to contact me for any other reason, you can do so via ' : 'Se hai dubbi, vuoi conoscermi meglio o necessiti di contattarmi per qualsiasi altra ragione, puoi farlo tramite '}
                        <a href="https://t.me/AlexCortinovis" target="_blank" rel="noopener noreferrer">Telegram</a>.
                    </p>
                </section>
            </main>
        </div>
    );
};

export async function getStaticProps(context: any) {
    const path_module = require('path');
    const fs_module = require('fs');
    
    // Homepage italiana (lingua di default)
    const language = 'it';
    
    try {
        // Carica le traduzioni build-time
        const translationsPath = path_module.join(process.cwd(), 'public', 'locales', language, 'home.json');
        const commonPath = path_module.join(process.cwd(), 'public', 'locales', language, 'common.json');
        
        const homeTranslations = JSON.parse(fs_module.readFileSync(translationsPath, 'utf-8'));
        const commonTranslations = JSON.parse(fs_module.readFileSync(commonPath, 'utf-8'));
        
        return {
            props: {
                initialTranslations: {
                    home: homeTranslations,
                    common: commonTranslations
                }
            }
        };
    } catch (error) {
        console.error('Failed to load translations:', error);
        return {
            props: {
                initialTranslations: {
                    home: {},
                    common: {}
                }
            }
        };
    }
}

export default HomePage;