import React, { useState } from 'react';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const images = [
    '/images/Instagram-Takeout-Parser/UI.jpg',
    '/images/Instagram-Takeout-Parser/Home.jpg',
    '/images/Instagram-Takeout-Parser/Post-Foto.jpg',
    '/images/Instagram-Takeout-Parser/Storie.jpg',
    '/images/Instagram-Takeout-Parser/convo.jpg',
];

const InstagramTakeoutParser = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    return (
        <main style={{ maxWidth: 1080, margin: '0 auto' }}>
            <div style={{ padding: '1rem 2rem' }}>
                <h1>Instagram Takeout Parser</h1>
                <p>
                    L’applicazione permette di generare un report in formato HTML di un Takeout Instagram scaricato localmente.<br />
                    Il Takeout è normalmente scaricato in un file Zip contenente diversi file multimediali e file in formato JSON con tutte le informazioni dell’account.<br />
                    I file scaricati però non sono immediatamente consultabili, ed è necessaria qualche conoscenza del linguaggio per la loro interpretazione.<br />
                    Questa applicazione estrapola le informazioni dai file JSON e le inserisce in un report HTML strutturato in tabelle, che ne permette una agevole consultazione dal tuo browser preferito.<br />
                </p>
                <div style={{ margin: '2rem 0', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                    <a className="button" href="https://github.com/walker93/Instagram-Takeout-Parser" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} style={{ marginRight: 8 }} />Vedi codice sorgente su GitHub
                    </a>
                </div>
                <div style={{ margin: '2rem 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {images.map((src, idx) => (
                            <img
                                key={src}
                                src={src}
                                alt={`Screenshot Instagram Takeout Parser ${idx + 1}`}
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

export default InstagramTakeoutParser;
