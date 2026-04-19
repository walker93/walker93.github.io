import HeadComponent from "../components/HeadComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguageContext } from '../context/LanguageContext';

const PrivacyPolicy = () => {
    const { t, language, isLoading } = useTranslation('privacy-policy');
    const { language: contextLanguage } = useLanguageContext();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const pageUrl = language === 'en' 
        ? 'https://alexcortinovis.tech/en/privacy-policy'
        : 'https://alexcortinovis.tech/privacy-policy';

    const title = t('title', 'Privacy Policy');

    return (
        <main className='main-section' style={{ maxWidth: 1080, margin: '0 auto' }}>
            <HeadComponent
                title={`${title} - Alex Cortinovis`}
                description={t('introduction', 'Website privacy notice for alexcortinovis.tech')}
                url={pageUrl}
                image="/og_image.png"
            />
            <div style={{ padding: '1rem 2rem' }}>
                <h1>{title}</h1>
                <section>
                    <h2>1. {t('section1', 'Introduction')}</h2>
                    <p>
                        {t('introduction', 'The website')} <a href="https://alexcortinovis.tech">alexcortinovis.tech</a> {t('introduction', 'uses cookies and similar technologies to ensure proper functioning and improve user experience. On this page you will find detailed information on the use of cookies and personal data management.')}
                    </p>
                </section>
                <section>
                    <h2>2. {t('section2', 'What are cookies?')}</h2>
                    <p>
                        {t('cookieDefinition', 'Cookies are small text files that are saved by your browser on your device when you visit a website. They serve to store preferences, sessions and other information useful for navigation.')}
                    </p>
                </section>
                <section>
                    <h2>3. {t('cookieTypes', 'Types of cookies used')}</h2>
                    <ul>
                        <li><b>{t('technicalCookie', 'Technical/necessary cookies')}</b>: {t('technicalCookieDesc', 'essential for the website to function, such as session management and navigation preferences.')}</li>
                        <li><b>{t('preferenceCookie', 'Preference cookies')}</b>: {t('preferenceCookieDesc', 'store user choices (e.g. language, theme) to improve experience.')}</li>
                    </ul>
                    <p>{t('cookieInfo', 'The website does not use profiling, marketing or tracking cookies and does not integrate third-party services that collect data for advertising or statistical purposes.')}</p>
                </section>
                <section>
                    <h2>4. {t('actualCookies', 'Cookies actually used')}</h2>
                    <ul>
                        <li><b>{t('sessionToken', 'next-auth.session-token')}</b> ({t('technical', 'technical')}): {t('sessionTokenDesc', 'manages user session, if present.')}</li>
                        <li><b>{t('i18nextCookie', 'next-i18next')}</b> ({t('preference', 'preference')}): {t('i18nextCookieDesc', 'stores the selected language, if present.')}</li>
                        <li><b>{t('consentCookie', 'cookie-consent')}</b> ({t('preference', 'preference')}): {t('consentCookieDesc', 'stores the user\'s choice regarding cookie acceptance.')}</li>
                    </ul>
                    <p>{t('cookiesEssential', 'These cookies are essential for the website to function and do not collect personal data for profiling purposes.')}</p>
                </section>
                <section>
                    <h2>5. {t('consentManagement', 'Consent management')}</h2>
                    <p>
                        {t('consentInfo', 'On first access a banner is displayed to manage cookie consent. You can change your preferences at any time through your browser settings.')}
                    </p>
                </section>
                <section>
                    <h2>6. {t('userRights', 'User rights')}</h2>
                    <ul>
                        <li>{t('accessRight', 'Right of access, rectification and deletion of personal data.')}</li>
                        <li>{t('oppositionRight', 'Right to object to processing.')}</li>
                        <li>{t('consentRevocation', 'Right to revoke consent.')}</li>
                    </ul>
                    <p>{t('exerciseRights', 'To exercise your rights you can contact the data controller at the contact details indicated below.')}</p>
                </section>
                <section>
                    <h2>7. {t('contactDetails', 'Contact details')}</h2>
                    <p>
                        <b>{t('dataController', 'Data controller')}</b>: Alex Cortinovis<br />
                        <b>{t('address', 'Address')}</b>: Via Calverola, 13 Pradalunga (BG), {t('italy', 'Italy')}<br />
                        <b>{t('email', 'Email')}</b>: info@alexcortinovis.tech
                    </p>
                </section>
                <section>
                    <p>{t('updatedAt', 'This privacy notice was last updated on July 27, 2025.')}</p>
                    <a className="button" style={{ marginLeft: '1rem' }}>
                        <FontAwesomeIcon icon={faCookieBite} style={{ marginRight: 8 }} />{t('showPreferences', 'Show cookie preferences')}
                    </a>
                </section>
            </div>
        </main>
    );
};

export default PrivacyPolicy;
