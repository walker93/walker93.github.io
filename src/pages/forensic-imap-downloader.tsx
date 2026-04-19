import LightboxGallery from '../components/LightboxGallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import HeadComponent from '../components/HeadComponent';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguageContext } from '../context/LanguageContext';

const ForensicImapDownloader = () => {
    const { t } = useTranslation('forensic-imap-downloader');
    const { language } = useLanguageContext();

    const slides = [
        { src: '/images/Forensic-IMAP-Downloader/1.JPG', title: t('gallery.slide1.title'), description: t('gallery.slide1.description') },
        { src: '/images/Forensic-IMAP-Downloader/2.JPG', title: t('gallery.slide2.title'), description: t('gallery.slide2.description') },
        { src: '/images/Forensic-IMAP-Downloader/3.JPG', title: t('gallery.slide3.title'), description: t('gallery.slide3.description') },
        { src: '/images/Forensic-IMAP-Downloader/4.JPG', title: t('gallery.slide4.title'), description: t('gallery.slide4.description') },
        { src: '/images/Forensic-IMAP-Downloader/5.JPG', title: t('gallery.slide5.title'), description: t('gallery.slide5.description') },
        { src: '/images/Forensic-IMAP-Downloader/6.JPG', title: t('gallery.slide6.title'), description: t('gallery.slide6.description') },
        { src: '/images/Forensic-IMAP-Downloader/7.JPG', title: t('gallery.slide7.title'), description: t('gallery.slide7.description') },
        { src: '/images/Forensic-IMAP-Downloader/8.JPG', title: t('gallery.slide8.title'), description: t('gallery.slide8.description') },
    ];

    const seoData = language === 'en' ? {
        title: 'Forensic IMAP Downloader - Alex Cortinovis',
        description: 'Forensic IMAP Downloader is a program that allows downloading emails from IMAP servers in forensic mode.',
        url: 'https://alexcortinovis.tech/en/forensic-imap-downloader'
    } : {
        title: 'Forensic IMAP Downloader - Alex Cortinovis',
        description: 'Forensic IMAP Downloader è un programma che permette il download di e-mail da server IMAP in modo forense.',
        url: 'https://alexcortinovis.tech/forensic-imap-downloader'
    };

    return (
        <main className='main-section' style={{ maxWidth: 1080, margin: '0 auto' }}>
            <HeadComponent
                title={seoData.title}
                description={seoData.description}
                url={seoData.url}
                image={slides[0].src}
            />
            <div style={{ padding: '1rem 2rem' }}>
                <h1>{t('title')}</h1>
                <p>
                    {t('description')}<br />
                    {t('details')}<br />
                </p>
                <div style={{ margin: '2rem 0', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                    <a className="button" href="https://github.com/walker93/Forensic-Imap-Downloader" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} style={{ marginRight: 8 }} />{t('sourceCode')}
                    </a>
                </div>
                <LightboxGallery slides={slides} />
            </div>
        </main>
    );
};

export default ForensicImapDownloader;
