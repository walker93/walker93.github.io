import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SoftwareCard = ({ icon, title, description, link, status_label, status_hint }) => (
  link ? (
    <a className="software-card" href={link} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div >
        <div style={{ height: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5em' }}>
          <FontAwesomeIcon icon={icon} style={{ fontSize: '2.2rem', width: '2.2rem', height: '2.2rem' }} />
        </div>
        <h3>{title}</h3>
        <span title={status_hint} style={{ fontSize: '0.9rem', color: '#666' }}>
          {status_label}
        </span>
        <p>{description}</p>

      </div>
    </a>
  ) : (
    <div className="software-card">
      <div style={{ height: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5em' }}>
        <FontAwesomeIcon icon={icon} style={{ fontSize: '2.2rem', width: '2.2rem', height: '2.2rem' }} />
      </div>
      <h3>{title}</h3>
      <span title={status_hint} style={{ fontSize: '0.9rem', color: '#666' }}>
        {status_label}
      </span>
      <p>{description}</p>

    </div>
  )
);

export default SoftwareCard;