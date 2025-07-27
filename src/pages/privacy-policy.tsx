import React from 'react';

const PrivacyPolicy = () => (
    <main style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ padding: '1rem 2rem' }}>
            <h1>Privacy Policy</h1>
            <section>
                <h2>1. Introduzione</h2>
                <p>
                    Il sito web <a href="https://alexcortinovis.tech">alexcortinovis.tech</a> utilizza cookie e tecnologie simili per garantire il corretto funzionamento e migliorare l’esperienza utente. In questa pagina trovi informazioni dettagliate sull’uso dei cookie e sulla gestione dei dati personali.
                </p>
            </section>
            <section>
                <h2>2. Cosa sono i cookie?</h2>
                <p>
                    I cookie sono piccoli file di testo che vengono salvati dal browser sul tuo dispositivo quando visiti un sito web. Servono a memorizzare preferenze, sessioni e altre informazioni utili per la navigazione.
                </p>
            </section>
            <section>
                <h2>3. Tipologie di cookie utilizzati</h2>
                <ul>
                    <li><b>Cookie tecnici/necessari:</b> indispensabili per il funzionamento del sito, come la gestione della sessione e delle preferenze di navigazione.</li>
                    <li><b>Cookie di preferenza:</b> memorizzano le scelte dell’utente (es. lingua, tema) per migliorare l’esperienza.</li>
                </ul>
                <p>Il sito <b>non utilizza cookie di profilazione, marketing o tracciamento</b> e non integra servizi di terze parti che raccolgono dati a fini pubblicitari o statistici.</p>
            </section>
            <section>
                <h2>4. Cookie effettivamente utilizzati</h2>
                <ul>
                    <li><b>next-auth.session-token</b> (tecnico): gestisce la sessione utente, se presente.</li>
                    <li><b>next-i18next</b> (preferenza): memorizza la lingua selezionata, se presente.</li>
                    <li><b>cookie-consent</b> (preferenza): memorizza la scelta dell’utente riguardo l’accettazione dei cookie.</li>
                </ul>
                <p>Questi cookie sono essenziali per il funzionamento del sito e non raccolgono dati personali a fini di profilazione.</p>
            </section>
            <section>
                <h2>5. Gestione del consenso</h2>
                <p>
                    Al primo accesso viene mostrato un banner per la gestione del consenso ai cookie. Puoi modificare le tue preferenze in qualsiasi momento tramite le impostazioni del browser.
                </p>
            </section>
            <section>
                <h2>6. Diritti dell’utente</h2>
                <ul>
                    <li>Diritto di accesso, rettifica e cancellazione dei dati personali.</li>
                    <li>Diritto di opposizione al trattamento.</li>
                    <li>Diritto di revoca del consenso.</li>
                </ul>
                <p>Per esercitare i tuoi diritti puoi contattare il titolare del trattamento ai recapiti indicati sotto.</p>
            </section>
            <section>
                <h2>7. Dettagli di contatto</h2>
                <p>
                    <b>Titolare del trattamento:</b> Alex Cortinovis<br />
                    <b>Indirizzo:</b> Via Calverola, 13 Pradalunga (BG), Italia<br />
                    <b>Email:</b> info@alexcortinovis.tech
                </p>
            </section>
            <section>
                <p>Questa informativa è aggiornata al 27 luglio 2025.</p>
            </section>
        </div>
    </main>
);

export default PrivacyPolicy;
