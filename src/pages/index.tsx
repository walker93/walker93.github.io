import React from 'react';
import { faImage, faPaperclip, faCloudDownloadAlt, faBroadcastTower, faMobileAlt, faEnvelope, faFileArchive } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import SoftwareCard from '../components/software-card';

const softwareList = [
    {
        icon: faCloudDownloadAlt,
        title: 'Forensic IMAP Downloader',
        description: 'Scarica e-mail da server IMAP in modalità forense.',
        link: '/forensic-imap-downloader'
    },
    {
        icon: faBroadcastTower,
        title: 'Cell Map Designer',
        description: 'Rappresenta su mappa celle telefoniche e punti di interesse.',
        link: '/cell-map-designer'
    },
    {
        icon: faMobileAlt,
        title: 'TWRP to UFED',
        description: 'Converte backup TWRP in formato UFED Physical Analyzer.',
        link: '/twrp-to-ufed'
    },
    {
        icon: faEnvelope,
        title: 'MailXaminer HTML Report',
        description: 'Genera una pagina index per visualizzare mail esportate in HTML.',
        link: '/mailxaminer-html-report'
    },
    {
        icon: faInstagram,
        title: 'Instagram Takeout Parser',
        description: 'Report HTML di tutti i contenuti Instagram.',
        link: '/instagram-takeout-parser'
    },
    {
        icon: faWhatsapp,
        title: 'Whatsapp Export Report',
        description: 'Genera report HTML per ogni chat Whatsapp.',
        link: undefined
    },
    {
        icon: faFileArchive,
        title: 'Bulk UnArchiver',
        description: 'Estrae ricorsivamente archivi mantenendo la struttura.',
        link: undefined
    },
    {
        icon: faImage,
        title: 'Metadata Extractor',
        description: 'Esporta tutti i metadati da immagini in un report.',
        link: undefined
    },
    {
        icon: faPaperclip,
        title: 'Bulk EML Attachment',
        description: 'Esporta massivamente allegati da mail.',
        link: undefined
    }
];


const HomePage = () => {
    return (
        <div>
            <main style={{ maxWidth: 1080, margin: '0 auto', padding: '1rem 0' }}>
                <section style={{ marginBottom: '2rem' }}>
                    <p>
                        Benvenuto sul mio sito, sono laureato in Sicurezza dei sistemi e delle reti informatiche.<br />
                        Da 9 anni lavoro presso lo <a href="http://michelevitiello.it/" target="_blank" rel="noopener noreferrer">Studio di Ingegneria Informatica Forense</a> del Dott. Ing. Michele Vitiello a Brescia, dove svolgo la mansione di Digital Forensics and Data Recovery Expert.<br />
                        In questo sito puoi visionare e scaricare alcuni dei tool che ho sviluppato completamente nella filosofia Open Source.
                    </p>
                </section>
                <section style={{ marginBottom: '2rem' }}>
                    <h2>Software sviluppati</h2>
                    <div className="software-grid">
                        {softwareList.map((sw, idx) => (
                            <SoftwareCard key={idx} {...sw} />
                        ))}
                    </div>
                </section>
                <section>
                    <h2>Contatto</h2>
                    <p>
                        Se hai dubbi, vuoi conoscermi meglio o necessiti di contattarmi per qualsiasi altra ragione, puoi farlo tramite <a href="https://t.me/AlexCortinovis" target="_blank" rel="noopener noreferrer">Telegram</a>.
                    </p>
                </section>
            </main>
        </div>
    );
};

export default HomePage;