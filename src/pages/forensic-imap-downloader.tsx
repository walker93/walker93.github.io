import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const images = [
    '/images/Forensic-IMAP-Downloader/1.JPG',
    '/images/Forensic-IMAP-Downloader/2.JPG',
    '/images/Forensic-IMAP-Downloader/3.JPG',
    '/images/Forensic-IMAP-Downloader/4.JPG',
    '/images/Forensic-IMAP-Downloader/5.JPG',
    '/images/Forensic-IMAP-Downloader/6.JPG',
    '/images/Forensic-IMAP-Downloader/7.JPG',
    '/images/Forensic-IMAP-Downloader/8.JPG',
];

const ForensicImapDownloader = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    return (
        <main style={{ maxWidth: 1080, margin: '0 auto' }}>
            <div style={{ padding: '1rem 2rem' }}>
                <h1>Forensic IMAP Downloader</h1>
                <p>
                    Forensic IMAP Downloader è un programma che permette il download di e-mail da server IMAP in modo forense.<br />
                    Permette di impostare filtri e di scaricare solamente le e-mail di interesse, supporta download simultanei e offre la possibilità di interrompere e riprendere il download.<br />
                    Al termine inserisce i file scaricati in un archivio .zip e ne calcola l’HASH SHA-1.<br />
                    Tutti i passaggi sono inoltre dettagliati all’interno di un report finale.<br />
                </p>
                <div style={{ margin: '2rem 0', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                    <a className="button" href="https://github.com/walker93/Forensic-Imap-Downloader" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} style={{ marginRight: 8 }} />Vedi codice sorgente su GitHub
                    </a>
                </div>
                <div style={{ margin: '2rem 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {images.map((src, idx) => (
                            <img
                                key={src}
                                src={src}
                                alt={`Screenshot Forensic IMAP Downloader ${idx + 1}`}
                                style={{ width: 320, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: 'pointer', marginBottom: '1rem' }}
                                onClick={() => { setPhotoIndex(idx); setLightboxOpen(true); }}
                            />
                        ))}
                    </div>
                </div>
                {lightboxOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => setLightboxOpen(false)}
                        onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                        imageTitle={`Screenshot ${photoIndex + 1}`}
                    />
                )}
            </div>
        </main>
    );
};

export default ForensicImapDownloader;
