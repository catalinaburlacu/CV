import styles from './Header.module.css';

// Simple SVG icons
const EmailIcon = () => (
  <svg viewBox="0 0 16 16">
    <path d="M2 3h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm6 5.5 5-3.5H3l5 3.5z" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 16 16">
    <path d="M8 1a5 5 0 0 0-5 5c0 3.5 5 9 5 9s5-5.5 5-9a5 5 0 0 0-5-5zm0 6.5A1.5 1.5 0 1 1 8 4a1.5 1.5 0 0 1 0 3.5z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 16 16">
    <path d="M3 2a1 1 0 0 1 1-1h1.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-.293.707L5.5 4l.5 1h2l.5-1-.707-.793A1 1 0 0 1 7.5 2.5V2a1 1 0 0 1 1-1H10a1 1 0 0 1 1 1v2a7 7 0 0 1-7 7H2a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h.5l1-.207V7l-1-.5H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h1z" />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 16 16">
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M5.5 8c0-2 .8-3.8 2-5M8 1.5c1.2 1.2 2.5 3.5 2.5 6.5s-1.3 5.3-2.5 6.5M1.5 8h13" />
  </svg>
);

export default function Header({ personal }) {
  return (
    <header className={styles.header}>
      <div className={styles['header-left']}>
        <div className={styles.name}>
          {personal.name}
          <span className={styles['name-surname']}>{personal.surname}</span>
        </div>
        <div className={styles['name-divider']}></div>
      </div>

      <div className={styles['header-right']}>
        <div className={styles.contacts}>
          <div className={styles['contact-item']}>
            <div className={styles['contact-icon']}>
              <EmailIcon />
            </div>
            <a href={`mailto:${personal.email}`}>{personal.email}</a>
          </div>

          <div className={styles['contact-item']}>
            <div className={styles['contact-icon']}>
              <LocationIcon />
            </div>
            {personal.location} &nbsp;·&nbsp; originară din {personal.origin}
          </div>

          <div className={styles['contact-item']}>
            <div className={styles['contact-icon']}>
              <PhoneIcon />
            </div>
            {personal.phone}
          </div>

          <div className={styles['contact-item']}>
            <div className={styles['contact-icon']}>
              <GlobeIcon />
            </div>
            <a href={personal.github} target="_blank" rel="noopener noreferrer">
              github.com/catalinaburlacu
            </a>
            &nbsp;·&nbsp;
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
