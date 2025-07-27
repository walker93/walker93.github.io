import React, { useState } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const images = [
    '/images/MailXaminer/Strut-orig-2.jpg',
    '/images/MailXaminer/layout filtered.jpg',
    '/images/MailXaminer/layout.jpg',
    '/images/MailXaminer/UI.jpg',
];

const MailXaminerHtmlReport = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    return (
        <main style={{ maxWidth: 1080, margin: '0 auto' }}>
            <div style={{ padding: '1rem 2rem' }}>
                <h1>MailXaminer HTML Report</h1>
                <p>
                    L’applicazione, partendo da un report HTML generato dal software forense <a href="https://www.mailxaminer.com/" target="_blank" rel="noopener noreferrer">MailXaminer</a>, permette di generare un file HTML Indice.<br />
                    Questo file consente di visualizzare in una pagina web, suddivisa in 3 sezioni, tutte le e-mail del report generato.<br />
                    Sulla sinistra le sottocartelle, sulla destra in alto l’elenco di email che la cartella selezionata contiene, ed in basso l’e-mail selezionata.<br />
                    In aggiunta è possibile applicare dei filtri all’elenco di e-mail.<br />
                    
                </p>
                <div style={{ margin: '2rem 0', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                    <a className="button" href="https://github.com/walker93/Mailxaminer-HTML-Report-Index" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} style={{ marginRight: 8 }} />Vedi codice sorgente su GitHub
                    </a>
                </div>
                <div style={{ margin: '2rem 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {images.map((src, idx) => (
                            <img
                                key={src}
                                src={src}
                                alt={`Screenshot MailXaminer HTML Report ${idx + 1}`}
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

export default MailXaminerHtmlReport;
