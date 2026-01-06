import LightboxGallery from '../components/LightboxGallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import HeadComponent from '../components/HeadComponent';

const slides = [
    { src: '/images/Instagram-Takeout-Parser/Home.jpg', title: 'Homepage del report Instagram', description: '' },
    { src: '/images/Instagram-Takeout-Parser/convo.jpg', title: 'Vista conversazioni Direct', description: 'Visualizzazione delle conversazioni Direct di Instagram con supporto a storie, condivisioni e like ai messaggi' },
    { src: '/images/Instagram-Takeout-Parser/Post-Foto.jpg', title: 'Visualizzazione dei post di tipo immagine pubblicati', description: '' },
    { src: '/images/Instagram-Takeout-Parser/UI.jpg', title: 'UI Instagram Takeout Parser', description: '' },
    { src: '/images/Instagram-Takeout-Parser/Storie.jpg', title: 'Visualizzazione Storie Instagram', description: '' },
];
const InstagramTakeoutParser = () => {
    return (
        <main className='main-section' style={{ maxWidth: 1080, margin: '0 auto' }}>
            <HeadComponent
                title="Instagram Takeout Parser - Alex Cortinovis"
                description="Genera un report HTML di un Takeout Instagram scaricato localmente, permettendo una facile consultazione dei dati."
                url="https://alexcortinovis.tech/instagram-takeout-parser"
                image={slides[0].src} />
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
                <LightboxGallery slides={slides} />
            </div>
        </main>
    );
};

export default InstagramTakeoutParser;
