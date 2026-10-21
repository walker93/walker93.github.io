import AboutPage from '../about';
import { loadTranslations, publicFileExists } from '../../utils/staticTranslations';

export default AboutPage;

export async function getStaticProps() {
    return {
        props: {
            initialTranslations: loadTranslations('en', ['about']),
            hasPhoto: publicFileExists('alex.webp') && publicFileExists('alex.jpg')
        }
    };
}
