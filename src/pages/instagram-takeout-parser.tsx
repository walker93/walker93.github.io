import LightboxGallery from '../components/LightboxGallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import HeadComponent from '../components/HeadComponent';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguageContext } from '../context/LanguageContext';

const InstagramTakeoutParser = () => {
    const { t, language, isLoading } = useTranslation('instagram-takeout-parser');
    const { language: contextLanguage } = useLanguageContext();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const slides = [
        { src: '/images/Instagram-Takeout-Parser/Home.jpg', title: t('gallery.slide1.title', 'Instagram Takeout Parser Homepage'), description: t('gallery.slide1.description', '') },
        { src: '/images/Instagram-Takeout-Parser/convo.jpg', title: t('gallery.slide2.title', 'Direct Conversations View'), description: t('gallery.slide2.description', 'Instagram Direct conversations display with support for stories, shares and message likes') },
        { src: '/images/Instagram-Takeout-Parser/Post-Foto.jpg', title: t('gallery.slide3.title', 'Image Posts Display'), description: t('gallery.slide3.description', '') },
        { src: '/images/Instagram-Takeout-Parser/UI.jpg', title: t('gallery.slide4.title', 'Instagram Takeout Parser UI'), description: t('gallery.slide4.description', '') },
        { src: '/images/Instagram-Takeout-Parser/Storie.jpg', title: t('gallery.slide5.title', 'Instagram Stories Display'), description: t('gallery.slide5.description', '') },
    ];

    const pageUrl = language === 'en' 
        ? 'https://alexcortinovis.tech/en/instagram-takeout-parser'
        : 'https://alexcortinovis.tech/instagram-takeout-parser';

    return (
        <main className='main-section' style={{ maxWidth: 1080, margin: '0 auto' }}>
            <HeadComponent
                title={`${t('title', 'Instagram Takeout Parser')} - Alex Cortinovis`}
                description={t('description', 'Generates an HTML report of an Instagram Takeout downloaded locally, allowing easy consultation of data.')}
                url={pageUrl}
                image={slides[0].src} />
            <div style={{ padding: '1rem 2rem' }}>
                <h1>{t('title', 'Instagram Takeout Parser')}</h1>
                <p>
                    {t('content.intro', 'The application allows you to generate an HTML report of an Instagram Takeout downloaded locally.')}<br />
                    {t('content.takeout', 'The Takeout is normally downloaded in a Zip file containing various multimedia files and JSON format files with all account information.')}<br />
                    {t('content.problem', 'However, downloaded files are not immediately accessible, and some knowledge of the language is needed for their interpretation.')}<br />
                    {t('content.solution', 'This application extracts information from JSON files and inserts it into an HTML report structured in tables, which allows for easy consultation from your favorite browser.')}<br />
                </p>
                <div style={{ margin: '2rem 0', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                    <a className="button" href="https://github.com/walker93/Instagram-Takeout-Parser" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} style={{ marginRight: 8 }} />{t('sourceCode', 'View source code on GitHub')}
                    </a>
                </div>
                <LightboxGallery slides={slides} />
            </div>
        </main>
    );
};

export default InstagramTakeoutParser;
