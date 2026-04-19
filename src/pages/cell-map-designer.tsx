import { useRouter } from 'next/router';
import LightboxGallery from '../components/LightboxGallery';
import HeadComponent from '../components/HeadComponent';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from '../hooks/useTranslation';

const CellMapDesigner = () => {
    const { t } = useTranslation('common');
    const router = useRouter();
    const isEnglish = router.asPath.startsWith('/en');

    const slides = [
        { src: '/images/Cell-Map-Designer/1.PNG', title: t('cellMapDesigner.gallery.slide1.title', 'Cell Map Designer'), description: t('cellMapDesigner.gallery.slide1.description', 'Example of use with applied overlay, points of interest, cell towers and distance measurement.') },
        { src: '/images/Cell-Map-Designer/2.PNG', title: t('cellMapDesigner.gallery.slide2.title', 'Cell Map Designer'), description: t('cellMapDesigner.gallery.slide2.description', 'Example of use with points of interest, cell towers and distance measurement.') }
    ];

    const pageUrl = isEnglish 
        ? 'https://alexcortinovis.tech/en/cell-map-designer'
        : 'https://alexcortinovis.tech/cell-map-designer';

    const appUrl = 'https://alexcortinovis.tech/cellmapdesigner/';

    return (

        <main className='main-section' style={{ maxWidth: 1080, margin: '0 auto' }}>
            <HeadComponent title={t('cellMapDesigner.pageTitle', 'Cell Map Designer - Alex Cortinovis')}
                description={t('cellMapDesigner.description', 'Cell Map Designer is an online tool that allows the graphic representation of cell towers and related coverage areas together with points of interest.')}
                url={pageUrl}
                image={slides[0].src}
            />
            <div style={{ padding: '1rem 2rem' }}>
                <h1>{t('cellMapDesigner.title', 'Cell Map Designer')}</h1>
                <p>
                    {t('cellMapDesigner.description', 'Cell Map Designer is an online tool that allows the graphic representation of cell towers and related coverage areas together with points of interest.')}<br />
                    {t('cellMapDesigner.paragraph1', 'It allows you to insert, modify and delete cell towers whose position is known. It has a ruler tool to measure distances.')}<br />
                    {t('cellMapDesigner.paragraph2', 'The tool allows importing multiple cell towers by uploading CSV files, and importing and exporting cells and points of interest via GeoJSON files.')}<br />
                    {t('cellMapDesigner.paragraph3', 'It also supports exporting KML files and importing KMZ overlays for compatibility with Google Earth.')}<br />
                    {t('cellMapDesigner.paragraph4', 'You can customize point of interest (PoI) icons thanks to the TomSelect library and manage icons directly from the sidebar, which is now resizable.')}<br />
                    {t('cellMapDesigner.paragraph5', 'You can show/hide cells and overlays, manage multiple overlays simultaneously and view a PoI table with automatic polygonal area calculation.')}<br />
                    {t('cellMapDesigner.paragraph6', 'The layout is fully responsive and numerous icons and a custom logo have been added.')}<br />
                    {t('cellMapDesigner.paragraph7', 'Among recent improvements: multiple overlay import, PoI table fix, image management optimization, and improved buttons.')}<br />
                    {t('cellMapDesigner.paragraph8', 'The project is constantly evolving: check the')}
                    {' '}
                    <a href="https://github.com/walker93/CellMap/blob/main/CHANGELOG.md" target="_blank" rel="noopener noreferrer">
                        {t('cellMapDesigner.changelogLink', 'changelog')}
                    </a>
                    {t('cellMapDesigner.paragraph8End', ' for all the news.')}
                </p>
                <div style={{ margin: '2rem 0', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                    <a className="button" href={appUrl} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faPlay} style={{ marginRight: 8 }} />{t('cellMapDesigner.tryNow', 'Try it now')}
                    </a>
                    <a className="button" href="https://github.com/walker93/CellMap" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '1rem' }}>
                        <FontAwesomeIcon icon={faGithub} style={{ marginRight: 8 }} />{t('cellMapDesigner.sourceCode', 'View source code on GitHub')}
                    </a>
                </div>
                <LightboxGallery slides={slides} />
            </div>
        </main>
    );
};

export default CellMapDesigner;
