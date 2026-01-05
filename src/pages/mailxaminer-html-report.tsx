import LightboxGallery from '../components/LightboxGallery';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const slides = [
    { src: '/images/MailXaminer/UI.jpg', title: 'Interfaccia Grafica MailXaminer HTML Report', description: 'Il programma mostra la struttura delle cartelle prima di generare il report' },
    { src: '/images/MailXaminer/Strut-orig-2.jpg', title: 'Struttura originaria', description: 'Struttura cartelle generata da MailXaminer, il programma riconoscerà la struttura e genererà i dovuti collegamenti' },
    { src: '/images/MailXaminer/layout.jpg', title: 'Interfaccia del report', description: 'Interfaccia grafica del report, a sinistra la selezione delle cartelle. In alto delle mail, in basso la mail selezionata.' },
    { src: '/images/MailXaminer/layout filtered.jpg', title: 'Interfaccia report con filtri', description: '' },
];
const MailXaminerHtmlReport = () => {

    return (
        <main className='main-section' style={{ maxWidth: 1080, margin: '0 auto' }}>
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
                <LightboxGallery slides={slides} />
            </div>
        </main>
    );
};

export default MailXaminerHtmlReport;
