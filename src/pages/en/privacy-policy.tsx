import { staticTranslations } from '../../utils/staticTranslations';
import PrivacyPolicy from '../privacy-policy';

export default PrivacyPolicy;

export const getStaticProps = staticTranslations('en', ['privacy-policy']);
