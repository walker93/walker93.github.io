import HomePage from '../index';

export default HomePage;

export async function getStaticProps() {
    const path_module = require('path');
    const fs_module = require('fs');
    
    // Homepage inglese
    const language = 'en';
    
    try {
        // Carica le traduzioni build-time
        const translationsPath = path_module.join(process.cwd(), 'public', 'locales', language, 'home.json');
        const commonPath = path_module.join(process.cwd(), 'public', 'locales', language, 'common.json');
        
        const homeTranslations = JSON.parse(fs_module.readFileSync(translationsPath, 'utf-8'));
        const commonTranslations = JSON.parse(fs_module.readFileSync(commonPath, 'utf-8'));
        
        return {
            props: {
                initialTranslations: {
                    home: homeTranslations,
                    common: commonTranslations
                }
            }
        };
    } catch (error) {
        console.error('Failed to load English translations:', error);
        return {
            props: {
                initialTranslations: {
                    home: {},
                    common: {}
                }
            }
        };
    }
}
