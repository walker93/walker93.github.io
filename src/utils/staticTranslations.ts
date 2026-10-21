import fs from 'fs';
import path from 'path';
import type { Language } from './i18n';

/**
 * Legge a build time i file di traduzione richiesti (più 'common', usato da header e footer)
 * e restituisce un getStaticProps che li passa alla pagina come initialTranslations.
 * Da usare solo nei file in src/pages: Next esclude fs dal bundle client.
 */
export const loadTranslations = (language: Language, namespaces: string[] = []) => {
    const translations: { [namespace: string]: any } = {};

    for (const namespace of ['common', ...namespaces]) {
        try {
            const filePath = path.join(process.cwd(), 'public', 'locales', language, `${namespace}.json`);
            translations[namespace] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        } catch (error) {
            console.error(`Failed to load translations for ${language}/${namespace}:`, error);
            translations[namespace] = {};
        }
    }

    return translations;
};

export const staticTranslations = (language: Language, namespaces: string[] = []) =>
    async () => ({
        props: {
            initialTranslations: loadTranslations(language, namespaces)
        }
    });

// Per elementi opzionali (es. la foto in /about): la pagina li mostra solo se il file esiste al momento della build
export const publicFileExists = (relativePath: string) =>
    fs.existsSync(path.join(process.cwd(), 'public', relativePath));
