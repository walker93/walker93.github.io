import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// status: 'active' | 'stable' | 'archived', determina il colore della pill (vedi .status-pill in globals.css)
export const StatusPill = ({ status, label, hint }) => (
  <span className={`status-pill status-${status}`} title={hint}>
    {label}
  </span>
);

const SoftwareCard = ({ icon, title, description, link, status, status_label, status_hint }) => {
  const content = (
    <>
      <div style={{ height: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5em' }}>
        <FontAwesomeIcon icon={icon} style={{ fontSize: '2.2rem', width: '2.2rem', height: '2.2rem' }} />
      </div>
      <h3>{title}</h3>
      <StatusPill status={status} label={status_label} hint={status_hint} />
      <p>{description}</p>
    </>
  );

  return link ? (
    <a className="software-card" href={link} style={{ textDecoration: 'none', color: 'inherit' }}>
      {content}
    </a>
  ) : (
    <div className="software-card">
      {content}
    </div>
  );
};

export default SoftwareCard;
