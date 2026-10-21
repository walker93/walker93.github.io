import HomePage from '../index';
import { staticTranslations } from '../../utils/staticTranslations';

export default HomePage;

export const getStaticProps = staticTranslations('en', ['home']);
