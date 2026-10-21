import React from 'react';
import { faImage, faPaperclip, faCloudDownloadAlt, faBroadcastTower, faMobileAlt, faEnvelope, faFileArchive } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import SoftwareCard, { StatusPill } from '../components/software-card';
import HeadComponent from '../components/HeadComponent';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguageContext } from '../context/LanguageContext';
import { staticTranslations } from '../utils/staticTranslations';

const HomePage = () => {
    const { t } = useTranslation('home');
    const { language } = useLanguageContext();
    const prefix = language === 'en' ? '/en' : '';

    const status = (key: 'active' | 'stable' | 'archived') => ({
        status: key,
        status_label: t(`softwareStatus.${key}.label`),
        status_hint: t(`softwareStatus.${key}.hint`)
    });

    // Daily Crack non è qui: ha il suo blocco in evidenza. Ordine: Attivi, Stabili, Archiviati
    const softwareList = [
        {
            icon: faCloudDownloadAlt,
            title: t('softwareList.forensicImapDownloader.title'),
            description: t('softwareList.forensicImapDownloader.description'),
            link: `${prefix}/forensic-imap-downloader`,
            ...status('active')
        },
        {
            icon: faBroadcastTower,
            title: t('softwareList.cellMapDesigner.title'),
            description: t('softwareList.cellMapDesigner.description'),
            link: `${prefix}/cell-map-designer`,
            ...status('active')
        },
        {
            icon: faMobileAlt,
            title: t('softwareList.twrpToUfed.title'),
            description: t('softwareList.twrpToUfed.description'),
            link: `${prefix}/twrp-to-ufed`,
            ...status('stable')
        },
        {
            icon: faEnvelope,
            title: t('softwareList.mailxaminerHtmlReport.title'),
            description: t('softwareList.mailxaminerHtmlReport.description'),
            link: `${prefix}/mailxaminer-html-report`,
            ...status('stable')
        },
        {
            icon: faFileArchive,
            title: t('softwareList.bulkUnArchiver.title'),
            description: t('softwareList.bulkUnArchiver.description'),
            link: undefined,
            ...status('stable')
        },
        {
            icon: faImage,
            title: t('softwareList.metadataExtractor.title'),
            description: t('softwareList.metadataExtractor.description'),
            link: undefined,
            ...status('stable')
        },
        {
            icon: faPaperclip,
            title: t('softwareList.bulkEmlAttachment.title'),
            description: t('softwareList.bulkEmlAttachment.description'),
            link: undefined,
            ...status('stable')
        },
        {
            icon: faInstagram,
            title: t('softwareList.instagramTakeoutParser.title'),
            description: t('softwareList.instagramTakeoutParser.description'),
            link: `${prefix}/instagram-takeout-parser`,
            ...status('archived')
        },
        {
            icon: faWhatsapp,
            title: t('softwareList.whatsappExportReport.title'),
            description: t('softwareList.whatsappExportReport.description'),
            link: undefined,
            ...status('archived')
        }
    ];

    // Solo il dato sulle ore di docenza ha un dettaglio (tooltip)
    const stats = [{ key: 'devices' }, { key: 'years' }, { key: 'teaching', hint: true }];

    return (
        <div>
            <HeadComponent
                title={t('seo.title')}
                description={t('seo.description')}
                url={language === 'en' ? 'https://alexcortinovis.tech/en/' : 'https://alexcortinovis.tech/'}
                image="/og_image.png"
            />
            <main className='main-section' style={{ maxWidth: 1080, margin: '0 auto', padding: '1rem 0' }}>
                <section className="hero">
                    <h1>{t('hero.title')}</h1>
                    <p>
                        {t('hero.leadBefore')}
                        <a href="http://michelevitiello.it/" target="_blank" rel="noopener noreferrer">{t('hero.studioName')}</a>
                        {t('hero.leadAfter')}
                    </p>
                    <div className="hero-actions">
                        <a className="button" href={`${prefix}/about`}>{t('hero.ctaAbout')}</a>
                        <a className="button button-outline" href="#software">{t('hero.ctaSoftware')}</a>
                    </div>
                </section>

                <section className="stats">
                    {stats.map(({ key, hint }) => (
                        <div className="stat" key={key} title={hint ? t(`stats.${key}.hint`) : undefined}>
                            <span className="stat-value">{t(`stats.${key}.value`)}</span>
                            <span className="stat-label">{t(`stats.${key}.label`)}</span>
                        </div>
                    ))}
                </section>

                <section className="featured">
                    <div className="featured-body">
                        <div className="featured-pills">
                            <span className="status-pill status-featured">{t('featured.badge')}</span>
                            <StatusPill status="active" label={t('softwareStatus.active.label')} hint={t('softwareStatus.active.hint')} />
                        </div>
                        <h2>{t('softwareList.dailyCrack.title')}</h2>
                        <p className="featured-subtitle">{t('featured.subtitle')}</p>
                        <p>{t('featured.description')}</p>
                        <div className="featured-actions">
                            <a className="button" href="https://dailycrack.app" target="_blank" rel="noopener noreferrer">{t('featured.play')}</a>
                            <a href={`${prefix}/daily-crack`}>{t('featured.details')}</a>
                        </div>
                    </div>
                    <a className="featured-media" href={`${prefix}/daily-crack`}>
                        <img src="/images/Daily-Crack/featured.webp" alt={t('featured.imageAlt')} width={640} height={512} loading="lazy" />
                    </a>
                </section>

                <section id="software">
                    <h2>{t('softwareTitle')}</h2>
                    <div className="software-grid">
                        {softwareList.map((sw, idx) => (
                            <SoftwareCard key={idx} {...sw} />
                        ))}
                    </div>
                    <p className="section-more">
                        <a href="https://github.com/walker93" target="_blank" rel="noopener noreferrer">{t('allRepos')}</a>
                    </p>
                </section>

                <section>
                    <h2>{t('contactTitle')}</h2>
                    <p style={{ textAlign: 'center' }}>
                        {t('contactBefore')}
                        <a href="https://t.me/AlexCortinovis" target="_blank" rel="noopener noreferrer">Telegram</a>
                        {t('contactAfter')}
                    </p>
                </section>
            </main>
        </div>
    );
};

export const getStaticProps = staticTranslations('it', ['home']);

export default HomePage;
