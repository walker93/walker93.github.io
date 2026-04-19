import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from '../hooks/useTranslation';
import { useRouter } from 'next/router';

const Header = () => {
    const { t, language } = useTranslation('common');
    const router = useRouter();
    const [langMenuOpen, setLangMenuOpen] = useState(false);

    const italianFlag = (
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle', marginRight: '0.35rem' }}>
            <rect width="6" height="12" fill="#009246" />
            <rect x="6" width="6" height="12" fill="#FFFFFF" />
            <rect x="12" width="6" height="12" fill="#CE2B37" />
        </svg>
    );

    const usFlag = (
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle', marginRight: '0.35rem' }}>
            <rect width="18" height="12" fill="#012169" />
            <path d="M0 0L18 12M18 0L0 12" stroke="#fff" strokeWidth="2" />
            <path d="M0 0L18 12M18 0L0 12" stroke="#C8102E" strokeWidth="1.2" />
            <rect x="7" width="4" height="12" fill="#fff" />
            <rect y="4" width="18" height="4" fill="#fff" />
            <rect x="8" width="2" height="12" fill="#C8102E" />
            <rect y="5" width="18" height="2" fill="#C8102E" />
        </svg>
    );

    // Determina la lingua direttamente dal percorso per evitare problemi di sincronizzazione
    const isEnglish = router.asPath.startsWith('/en');

    const handleLanguageChange = (selectedLang: string) => {
        setLangMenuOpen(false);
        const currentPath = router.asPath;
        let newPath = currentPath;

        // Rimuovi il prefisso /en se presente
        if (currentPath.startsWith('/en')) {
            newPath = currentPath.replace(/^\/en/, '') || '/';
        }

        // Aggiungi il prefisso /en se la lingua è inglese
        if (selectedLang === 'en') {
            newPath = `/en${newPath}`;
        }

        router.push(newPath);
    };

    return (
        <header style={{ maxWidth: 1080, margin: '0 auto', padding: '1rem 0 0 0', width: '100%' }}>
            <h1 style={{ textAlign: 'center', margin: 0 }}>{t('header.title')}</h1>
            <h2 style={{ textAlign: 'center', fontWeight: 400, fontSize: '1.1rem', lineHeight: 1.5, marginBottom: '10px', color: '#757575' }}>{t('header.subtitle')}</h2>
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#222', padding: '1rem' }}>
                <ul
                    style={{ display: 'flex', gap: '1.5rem', alignItems: 'baseline', listStyle: 'none', margin: 0, padding: 0, color: '#fff' }}
                >
                    <li><a href={isEnglish ? '/en' : '/'}>{t('header.home')}</a></li>
                    <li
                        style={{ position: 'relative' }}
                        onMouseEnter={e => {
                            const submenu = e.currentTarget.querySelector('.submenu');
                            if (submenu) (submenu as HTMLElement).style.display = 'block';
                        }}
                        onMouseLeave={e => {
                            const submenu = e.currentTarget.querySelector('.submenu');
                            if (submenu) (submenu as HTMLElement).style.display = 'none';
                        }}
                    >
                        <span style={{ cursor: 'pointer', fontWeight: 500 }}>{t('header.software')} ▾</span>
                        <ul
                            className="submenu"
                            style={{
                                position: 'absolute',
                                left: 0,
                                top: '100%',
                                background: '#222',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.13)',
                                borderRadius: '8px',
                                padding: '0.5rem 0',
                                minWidth: '220px',
                                zIndex: 10,
                                display: 'none',
                                color: '#fff',
                            }}
                        >
                            <li><a href={isEnglish ? '/en/forensic-imap-downloader' : '/forensic-imap-downloader'} style={{ color: '#fff', padding: '0.5em 1em', display: 'block' }}>Forensic IMAP Downloader</a></li>
                            <li><a href={isEnglish ? '/en/cell-map-designer' : '/cell-map-designer'} style={{ color: '#fff', padding: '0.5em 1em', display: 'block' }}>Cell Map Designer</a></li>
                            <li><a href={isEnglish ? '/en/instagram-takeout-parser' : '/instagram-takeout-parser'} style={{ color: '#fff', padding: '0.5em 1em', display: 'block' }}>Instagram Takeout Parser</a></li>
                            <li><a href={isEnglish ? '/en/mailxaminer-html-report' : '/mailxaminer-html-report'} style={{ color: '#fff', padding: '0.5em 1em', display: 'block' }}>MailXaminer HTML Report</a></li>
                            <li><a href={isEnglish ? '/en/twrp-to-ufed' : '/twrp-to-ufed'} style={{ color: '#fff', padding: '0.5em 1em', display: 'block' }}>TWRP to UFED</a></li>
                        </ul>
                    </li>
                </ul>
                <ul style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', listStyle: 'none', margin: 0, padding: 0 }}>
                    
                    <li>
                        <a href="https://www.linkedin.com/in/alex-cortinovis-673590b6/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '1.7rem', color: '#fff' }} title={t('header.linkedIn')} />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/walker93" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} style={{ fontSize: '1.7rem', color: '#fff' }} title={t('header.gitHub')} />
                        </a>
                    </li>
                    
                    <li style={{ position: 'relative' }}>
                        <button
                            type="button"
                            onClick={() => setLangMenuOpen(prev => !prev)}
                            style={{
                                backgroundColor: '#222',
                                color: '#fff',
                                border: '1px solid #555',
                                borderRadius: '4px',
                                padding: '0.4rem 0.75rem',
                                cursor: 'pointer',
                                minWidth: '90px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.4rem'
                            }}
                        >
                            {isEnglish ? usFlag : italianFlag}
                            {isEnglish ? 'EN' : 'IT'}
                        </button>
                        {langMenuOpen && (
                            <ul
                                style={{
                                    position: 'absolute',
                                    right: 0,
                                    top: 'calc(100% + 0.25rem)',
                                    backgroundColor: '#222',
                                    border: '1px solid #555',
                                    borderRadius: '8px',
                                    listStyle: 'none',
                                    margin: 0,
                                    padding: '0.25rem 0',
                                    zIndex: 20,
                                    minWidth: '140px'
                                }}
                            >
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => handleLanguageChange('it')}
                                        style={{
                                            width: '100%',
                                            background: 'transparent',
                                            border: 'none',
                                            color: '#fff',
                                            textAlign: 'left',
                                            padding: '0.5rem 0.75rem',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}
                                    >
                                        {italianFlag}
                                        IT
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => handleLanguageChange('en')}
                                        style={{
                                            width: '100%',
                                            background: 'transparent',
                                            border: 'none',
                                            color: '#fff',
                                            textAlign: 'left',
                                            padding: '0.5rem 0.75rem',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}
                                    >
                                        {usFlag}
                                        EN
                                    </button>
                                </li>
                            </ul>
                        )}
                    </li>        
                </ul>
            </nav>
        </header>
    );
};

export default Header;