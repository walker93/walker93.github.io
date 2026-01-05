import React, { useState, useRef } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import "yet-another-react-lightbox/plugins/captions.css";
import 'yet-another-react-lightbox/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const slides = [
    { src: '/images/TWRP-to-UFED/prompt command.jpg', title: 'Prompt con comando da inviare', description: '' },
    { src: '/images/TWRP-to-UFED/comando terminato.jpg', title: 'Comando terminato', description: '' },
    { src: '/images/TWRP-to-UFED/twrp originale.jpg', title: 'Struttura originale generata dal Backup TWRP', description: '' },
    { src: '/images/TWRP-to-UFED/Struttura finale2.jpg', title: 'Struttura delle cartelle al termine', description: 'La struttura delle cartelle a comando terminato contiene una cartella "UFED" da importare nel programma' },
];
const TwrpToUfed = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const captionsRef = React.useRef(null);
    return (
        <main className='main-section' style={{ maxWidth: 1080, margin: '0 auto' }}>
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
                        {slides.map((slide, idx) => (
                            <img
                                key={slide.src}
                                src={slide.src}
                                alt={slide.title || `Screenshot ${idx + 1}`}
                                style={{ width: 320, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: 'pointer', marginBottom: '1rem' }}
                                onClick={() => { setPhotoIndex(idx); setLightboxOpen(true); }}
                            />
                        ))}
                    </div>
                </div>
                <Lightbox
                    open={lightboxOpen}
                    close={() => setLightboxOpen(false)}
                    slides={slides}
                    index={photoIndex}
                    on={{ view: ({ index }) => setPhotoIndex(index ?? 0) }}
                    plugins={[Captions]}
                    captions={{ ref: captionsRef }}
                />
            </div>
        </main>
    );
};

export default TwrpToUfed;
