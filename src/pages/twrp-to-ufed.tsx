import React, { useState } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const images = [
    '/images/TWRP-to-UFED/prompt command.jpg',
    '/images/TWRP-to-UFED/comando in esecuzione.jpg',
    '/images/TWRP-to-UFED/comando terminato.jpg',
    '/images/TWRP-to-UFED/Struttura finale.jpg',
    '/images/TWRP-to-UFED/Struttura finale2.jpg',
    '/images/TWRP-to-UFED/twrp originale.jpg',
];

const TwrpToUfed = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    return (
        <main style={{ maxWidth: 1080, margin: '0 auto' }}>
            <div style={{ padding: '1rem 2rem' }}>
                <h1>TWRP to UFED</h1>
                <p>
                    L’applicazione è in grado di convertire un Nandroid Backup generato con la nota custom recovery <a href="https://twrp.me/" target="_blank" rel="noopener noreferrer">TWRP</a> in formato importabile nella suite Cellebrite UFED Physical Analyzer.<br />
                    Questo strumento torna utile quando non è possibile eseguire l’acquisizione fisica di un dispositivo mobile Android, ma è però possibile installare od eseguire la custom recovery ed effettuare il backup su SD o supporto OTG esterno.<br />
                    L’esecuzione è molto semplice, sprovvisto di un’interfaccia grafica, è sufficiente indicare la cartella contenente il backup durante l’esecuzione da Prompt o Powershell.<br />
                </p>
                <div style={{ margin: '2rem 0', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                    <a className="button" href="https://github.com/walker93/TWRP-to-UFED" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} style={{ marginRight: 8 }} />Vedi codice sorgente su GitHub
                    </a>
                </div>
                <div style={{ margin: '2rem 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {images.map((src, idx) => (
                            <img
                                key={src}
                                src={src}
                                alt={`Screenshot TWRP to UFED ${idx + 1}`}
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

export default TwrpToUfed;
