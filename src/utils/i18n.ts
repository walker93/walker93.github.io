export type Language = 'it' | 'en';

/**
 * Estrae la lingua dalla URL
 */
export const getLanguageFromPath = (path: string): Language => {
  if (path.startsWith('/en')) {
    return 'en';
  }
  return 'it';
};

/**
 * Genera un URL localizzato
 */
export const getLocalizedPath = (path: string, language: Language): string => {
  // Rimuovi il prefisso lingua se presente
  let cleanPath = path;
  if (cleanPath.startsWith('/en')) {
    cleanPath = cleanPath.replace(/^\/en/, '');
  }
  
  if (language === 'en') {
    return `/en${cleanPath}`;
  }
  return cleanPath;
};

/**
 * Converte il nome di una pagina in un percorso URL
 */
export const pageNameToPath = (pageName: string, language: Language): string => {
  const paths: { [key: string]: string } = {
    'home': '/',
    'daily-crack': '/daily-crack',
    'forensic-imap-downloader': '/forensic-imap-downloader',
    'cell-map-designer': '/cell-map-designer',
    'instagram-takeout-parser': '/instagram-takeout-parser',
    'mailxaminer-html-report': '/mailxaminer-html-report',
    'twrp-to-ufed': '/twrp-to-ufed',
    'privacy-policy': '/privacy-policy'
  };

  const path = paths[pageName] || '/';
  return getLocalizedPath(path, language);
};
