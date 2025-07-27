import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SoftwareCard = ({ icon, title, description, link }) => (
  link ? (
    <a href={link} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="software-card">
        <FontAwesomeIcon icon={icon} style={{ fontSize: '2.2rem', marginBottom: '0.5em' }} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  ) : (
    <div className="software-card">
      <FontAwesomeIcon icon={icon} style={{ fontSize: '2.2rem', marginBottom: '0.5em' }} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
);

export default SoftwareCard;