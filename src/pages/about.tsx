import React from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import HeadComponent from '../components/HeadComponent';
import { useTranslation } from '../hooks/useTranslation';
import { loadTranslations, publicFileExists } from '../utils/staticTranslations';

const LINKEDIN_URL = 'https://www.linkedin.com/in/alexcortinovis';
const GITHUB_URL = 'https://github.com/walker93';
const TELEGRAM_URL = 'https://t.me/AlexCortinovis';

// Sostituisce i segnaposto {{nome}} di una stringa tradotta con elementi React (es. link)
const fill = (text: string, nodes: { [name: string]: React.ReactNode }) =>
    text.split(/\{\{(\w+)\}\}/).map((part, idx) =>
        idx % 2 === 1 ? <React.Fragment key={idx}>{nodes[part]}</React.Fragment> : part
    );

const AboutPage = ({ hasPhoto }: { hasPhoto: boolean }) => {
    const { t, language, translations } = useTranslation('about');
    const prefix = language === 'en' ? '/en' : '';
    const pageUrl = `https://alexcortinovis.tech${prefix}/about`;

    const personJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Alex Cortinovis',
        jobTitle: t('jobTitle'),
        url: pageUrl,
        ...(hasPhoto && { image: 'https://alexcortinovis.tech/alex.jpg' }),
        sameAs: [LINKEDIN_URL, GITHUB_URL]
    };

    const whatItems: { title: string; text: string }[] = translations.what?.items || [];
    const talks: { year: string; org: string; title: string; en: boolean }[] = translations.teaching?.talks || [];
    const timeline: { year: string; events: string[] }[] = translations.timeline?.items || [];
    const certifications: string[] = translations.certifications?.items || [];
    const tools: string[] = translations.tools?.items || [];

    return (
        <main className='main-section about' style={{ maxWidth: 1080, margin: '0 auto' }}>
            <HeadComponent
                title={t('seo.title')}
                description={t('seo.description')}
                url={pageUrl}
                image={hasPhoto ? '/alex.jpg' : '/og_image.png'}
            />
            <Head>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
            </Head>

            <div className="about-content">
                <h1>{t('title')}</h1>
                <div className="about-intro">
                    {hasPhoto && (
                        <picture>
                            <source srcSet="/alex.webp" type="image/webp" />
                            <img className="about-photo" src="/alex.jpg" alt={t('photoAlt')} width={160} height={160} />
                        </picture>
                    )}
                    <div>
                        <p>
                            {t('intro.p1Before')}
                            <a href="http://michelevitiello.it/" target="_blank" rel="noopener noreferrer">{t('intro.studioName')}</a>
                            {t('intro.p1After')}
                        </p>
                        <p>{t('intro.p2')}</p>
                    </div>
                </div>

                <section>
                    <h2>{t('what.title')}</h2>
                    <ul className="about-list">
                        {whatItems.map(item => (
                            <li key={item.title}>
                                <b>{item.title}</b> — {fill(item.text, {
                                    cellMapDesigner: <a href={`${prefix}/cell-map-designer`}>Cell Map Designer</a>
                                })}
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2>{t('teaching.title')}</h2>
                    <p>{t('teaching.text')}</p>
                    <h3>{t('teaching.talksTitle')}</h3>
                    <ul className="talks">
                        {talks.map(talk => (
                            <li key={talk.year + talk.title}>
                                <span className="talk-year">{talk.year}</span>
                                <span>
                                    {talk.org}, {talk.title}
                                    {talk.en && (
                                        <span className="lang-badge" title={t('teaching.enBadgeHint')}>{t('teaching.enBadge')}</span>
                                    )}
                                </span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2>{t('openSource.title')}</h2>
                    <p>
                        {fill(t('openSource.text'), {
                            repos: <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">{t('openSource.repos')}</a>
                        })}
                    </p>
                    <p><a href={`${prefix}/#software`}>{t('openSource.link')}</a></p>
                </section>

                <section>
                    <h2>{t('timeline.title')}</h2>
                    <ol className="timeline">
                        {timeline.map(entry => (
                            <li key={entry.year}>
                                <span className="timeline-year">{entry.year}</span>
                                <ul>
                                    {entry.events.map(event => <li key={event}>{event}</li>)}
                                </ul>
                            </li>
                        ))}
                    </ol>
                </section>

                <section>
                    <h2>{t('certifications.title')}</h2>
                    <ul className="about-list">
                        {certifications.map(item => <li key={item}>{item}</li>)}
                    </ul>
                </section>

                <section>
                    <h2>{t('tools.title')}</h2>
                    <ul className="tag-list">
                        {tools.map(tool => <li key={tool}>{tool}</li>)}
                    </ul>
                </section>

                <section>
                    <h2>{t('outside.title')}</h2>
                    <p>{t('outside.text')}</p>
                </section>

                <section>
                    <h2>{t('contacts.title')}</h2>
                    <ul className="contact-links">
                        <li><a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTelegram} /> Telegram</a></li>
                        <li><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></li>
                        <li><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> GitHub</a></li>
                    </ul>
                </section>
            </div>
        </main>
    );
};

export async function getStaticProps() {
    return {
        props: {
            initialTranslations: loadTranslations('it', ['about']),
            hasPhoto: publicFileExists('alex.webp') && publicFileExists('alex.jpg')
        }
    };
}

export default AboutPage;
