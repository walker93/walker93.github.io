import React from 'react';

const Footer = () => (
    <footer style={{maxWidth: 1080, background: '#333', color: '#fff', textAlign: 'center', padding: '1.2rem 0', marginTop: '2rem', margin: '0 auto' }}>
        
        <a href="/privacy-policy" style={{ color: '#fff', textDecoration: 'underline', fontWeight: 500 }}>Privacy Policy</a>
        <br />
        <span style={{ fontSize: '0.95rem', opacity: 0.7 }}>
            © 2025 Alex Cortinovis
        </span>
    </footer>
);

export default Footer;
