import LightboxGallery from '../components/LightboxGallery';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadComponent from '../components/HeadComponent';
import { useTranslation } from '../hooks/useTranslation';

const DailyCrack = () => {
    const { t, language, isLoading } = useTranslation('daily-crack');

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const slides = [
        { src: '/images/Daily-Crack/1.png', title: t('gallery.slide1.title', 'A game in progress'), description: t('gallery.slide1.description', '') },
        { src: '/images/Daily-Crack/2.png', title: t('gallery.slide2.title', 'The reveal screen'), description: t('gallery.slide2.description', '') },
        { src: '/images/Daily-Crack/3.png', title: t('gallery.slide3.title', 'The rules'), description: t('gallery.slide3.description', '') },
        { src: '/images/Daily-Crack/4.png', title: t('gallery.slide4.title', 'The numbers'), description: t('gallery.slide4.description', '') },
    ];

    const pageUrl = language === 'en'
        ? 'https://alexcortinovis.tech/en/daily-crack'
        : 'https://alexcortinovis.tech/daily-crack';

    const appUrl = 'https://dailycrack.app/';

    return (
        <main className='main-section' style={{ maxWidth: 1080, margin: '0 auto' }}>
            <HeadComponent
                title={`${t('title', 'Daily Crack')} - Alex Cortinovis`}
                description={t('description', 'Daily Crack is a free daily puzzle where you guess a real password from among the most common ones in breach data.')}
                url={pageUrl}
                image={slides[0].src} />
            <div style={{ padding: '1rem 2rem' }}>
                <h1>{t('title', 'Daily Crack')}</h1>
                <p style={{ fontStyle: 'italic', color: '#757575', marginTop: '-0.5rem' }}>{t('subtitle', 'How many of you use this password?')}</p>
                <p>
                    {t('content.intro', '')}<br />
                    {t('content.rules', '')}<br />
                    {t('content.feedback', '')}<br />
                    {t('content.reveal', '')}<br />
                    {t('content.source', '')}<br />
                    {t('content.privacy', '')}<br />
                    {t('content.share', '')}<br />
                    {t('content.pool', '')}<br />
                    {t('content.language', '')}
                </p>
                <div style={{ margin: '2rem 0', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                    <a className="button" href={appUrl} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faPlay} style={{ marginRight: 8 }} />{t('tryNow', 'Try it now')}
                    </a>
                </div>
                <LightboxGallery slides={slides} />
            </div>
        </main>
    );
};

export default DailyCrack;
