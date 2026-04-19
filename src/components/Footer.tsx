import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguageContext } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useTranslation('common');
    const { language } = useLanguageContext();

    return (
        <footer style={{maxWidth: 1080, background: '#333', color: '#fff', textAlign: 'center', padding: '1.2rem 0', marginTop: '2rem', margin: '0 auto' }}>
            
            <a href={language === 'en' ? '/en/privacy-policy' : '/privacy-policy'} style={{ color: '#fff', textDecoration: 'underline', fontWeight: 500 }}>{t('footer.privacyPolicy')}</a>
            <br />
            <span style={{ fontSize: '0.95rem', opacity: 0.7 }}>
                {t('footer.copyright')}
            </span>
        </footer>
    );
};

export default Footer;
