import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return (
        <header style={{ maxWidth: 1080, margin: '0 auto', padding: '1rem 0 0 0', width: '100%' }}>
            <h1 style={{ textAlign: 'center' }}>Alex Cortinovis</h1>
            <h2>Esperto in Digital Forensic e Data Recovery, Sviluppatore indipendente</h2>
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#222', padding: '1rem' }}>
                <ul
                    style={{ display: 'flex', gap: '1.5rem', alignItems: 'baseline', listStyle: 'none', margin: 0, padding: 0, color: '#fff' }}
                >
                    <li><a href="/">Home</a></li>
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
                        <span style={{ cursor: 'pointer', fontWeight: 500 }}>Software ▾</span>
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
                            <li><a href="/instagram-takeout-parser" style={{ color: '#fff', padding: '0.5em 1em', display: 'block' }}>Instagram Takeout Parser</a></li>
                            <li><a href="/mailxaminer-html-report" style={{ color: '#fff', padding: '0.5em 1em', display: 'block' }}>MailXaminer HTML Report</a></li>
                            <li><a href="/twrp-to-ufed" style={{ color: '#fff', padding: '0.5em 1em', display: 'block' }}>TWRP to UFED</a></li>
                            <li><a href="/forensic-imap-downloader" style={{ color: '#fff', padding: '0.5em 1em', display: 'block' }}>Forensic IMAP Downloader</a></li>
                            <li><a href="/cell-map-designer" style={{ color: '#fff', padding: '0.5em 1em', display: 'block' }}>Cell Map Designer</a></li>
                        </ul>
                    </li>
                </ul>
                <ul style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', listStyle: 'none', margin: 0, padding: 0 }}>
                    <li>
                        <a href="https://www.linkedin.com/in/alex-cortinovis-673590b6/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '1.7rem', color: '#fff' }} title="LinkedIn" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/walker93" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} style={{ fontSize: '1.7rem', color: '#fff' }} title="GitHub" />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;