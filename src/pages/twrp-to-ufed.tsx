import LightboxGallery from '../components/LightboxGallery';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadComponent from '../components/HeadComponent';

const slides = [
    { src: '/images/TWRP-to-UFED/prompt command.jpg', title: 'Prompt con comando da inviare', description: '' },
    { src: '/images/TWRP-to-UFED/comando terminato.jpg', title: 'Comando terminato', description: '' },
    { src: '/images/TWRP-to-UFED/twrp originale.jpg', title: 'Struttura originale generata dal Backup TWRP', description: '' },
    { src: '/images/TWRP-to-UFED/Struttura finale2.jpg', title: 'Struttura delle cartelle al termine', description: 'La struttura delle cartelle a comando terminato contiene una cartella "UFED" da importare nel programma' },
];
const TwrpToUfed = () => {
    return (
        <main className='main-section' style={{ maxWidth: 1080, margin: '0 auto' }}>
            <HeadComponent
                title="TWRP to UFED - Alex Cortinovis"
                description="L’applicazione è in grado di convertire un Nandroid Backup generato con la nota custom recovery TWRP in formato importabile nella suite Cellebrite UFED Physical Analyzer."
                url="https://alexcortinovis.tech/twrp-to-ufed"
                image={slides[0].src}
            />
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
                <LightboxGallery slides={slides} />
            </div>
        </main>
    );
};

export default TwrpToUfed;
