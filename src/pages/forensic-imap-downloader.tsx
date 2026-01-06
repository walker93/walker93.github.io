import LightboxGallery from '../components/LightboxGallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import HeadComponent from '../components/HeadComponent';
const slides = [
    { src: '/images/Forensic-IMAP-Downloader/1.JPG', title: 'Forensic IMAP Downloader', description: '' },
    { src: '/images/Forensic-IMAP-Downloader/2.JPG', title: 'Dopo aver inserito i parametri ed effettuato il collegamento', description: '' },
    { src: '/images/Forensic-IMAP-Downloader/3.JPG', title: 'Finestra di inserimento dei filtri', description: "I pulsanti in alto permettono l'inserimento della query di ricerca in modo semplice e semi-automatico, non è richiesta alcuna competenza specifica per utilizzare questa funzione." },
    { src: '/images/Forensic-IMAP-Downloader/4.JPG', title: 'Finestra principale dopo aver impostato dei filtri', description: '' },
    { src: '/images/Forensic-IMAP-Downloader/5.JPG', title: 'Interfaccia durante il download', description: '' },
    { src: '/images/Forensic-IMAP-Downloader/6.JPG', title: 'Finestra che chiede come comportarsi dopo l\'annullamento del download', description: '' },
    { src: '/images/Forensic-IMAP-Downloader/7.JPG', title: 'Finestra con alcuni download annullati', description: '' },
    { src: '/images/Forensic-IMAP-Downloader/8.JPG', title: 'Report generato dal programma', description: 'Il report mostra tutti i passaggi del programma con l\'HASH calcolato al termine' },
];

const ForensicImapDownloader = () => {

    return (
        <main className='main-section' style={{ maxWidth: 1080, margin: '0 auto' }}>
            <HeadComponent
                title="Forensic IMAP Downloader - Alex Cortinovis"
                description="Forensic IMAP Downloader è un programma che permette il download di e-mail da server IMAP in modo forense."
                url="https://alexcortinovis.tech/forensic-imap-downloader"
                image={slides[0].src}
            />
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
                <LightboxGallery slides={slides} />
            </div>
        </main>
    );
};

export default ForensicImapDownloader;
