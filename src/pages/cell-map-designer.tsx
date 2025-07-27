
import React, { useState } from 'react';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const images = [
    '/images/Cell-Map-Designer/1.PNG',
    '/images/Cell-Map-Designer/2.PNG',
];

const CellMapDesigner = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    return (
        <main style={{ maxWidth: 1080, margin: '0 auto' }}>
            <div style={{ padding: '1rem 2rem' }}>
                <h1>Cell Map Designer</h1>
                <p>
                Cell Map Designer è uno strumento online che permette la rappresentazione grafica di celle telefoniche e relative aree di copertura unitamente a punti di interesse.<br />
                Permette di inserire, modificare ed eliminare celle telefoniche la cui posizione è nota. Dispone di uno strumento righello per misurare le distanze.<br />
                Lo strumento consente l’importazione di più celle telefoniche tramite il caricamento di file CSV, e l’importazione ed esportazione di celle e punti di interesse tramite file GeoJSON.<br />
                Supporta l’export anche di file KML e l’importazione di overlay KMZ per la compatibilità con Google Earth.<br />
                Puoi personalizzare le icone dei punti di interesse (PoI) grazie alla libreria TomSelect e gestire le icone direttamente dalla sidebar, che ora è ridimensionabile.<br />
                È possibile mostrare/nascondere celle e overlay, gestire più overlay contemporaneamente e visualizzare una tabella PoI con calcolo automatico delle aree poligonali.<br />
                Il layout è completamente responsive e sono state aggiunte numerose icone e un logo personalizzato.<br />
                Tra i miglioramenti recenti: importazione multipla di overlay, fix per la tabella PoI, ottimizzazione della gestione immagini, e pulsanti migliorati.<br />
                Il progetto è in continua evoluzione: consulta il <a href="https://github.com/walker93/CellMap/blob/main/CHANGELOG.md" target="_blank" rel="noopener noreferrer">changelog</a> per tutte le novità.
                </p>
                <div style={{ margin: '2rem 0', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                    <a className="button" href="https://alexcortinovis.tech/cellmapdesigner/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faPlay} style={{ marginRight: 8 }} />Provalo ora
                    </a>
                    <a className="button" href="https://github.com/walker93/CellMap" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '1rem' }}>
                        <FontAwesomeIcon icon={faGithub} style={{ marginRight: 8 }} />Vedi codice sorgente su GitHub
                    </a>
                </div>
                <div style={{ margin: '2rem 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        {images.map((src, idx) => (
                            <img
                                key={src}
                                src={src}
                                alt={`Screenshot Cell Map Designer ${idx + 1}`}
                                style={{ width: 320, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: 'pointer' }}
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

export default CellMapDesigner;
