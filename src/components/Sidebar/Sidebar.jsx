import styles from './Sidebar.module.css';

export default function Sidebar({ skills, languages, qualities, hobbies }) {
  return (
    <aside className={styles.sidebar}>
      {/* Limbaje de programare */}
      <div className={styles.section}>
        <div className={styles['section-title']}>Limbaje de programare</div>
        {skills.map((skill, idx) => (
          <div key={idx} className={styles['skill-item']}>
            <div className={styles['skill-label']}>
              <span>{skill.name}</span>
              <span>{skill.level}/10</span>
            </div>
            <div className={styles['skill-bar']}>
              <div
                className={styles['skill-fill']}
                style={{ width: `${skill.level * 10}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Limbi cunoscute */}
      <div className={styles.section}>
        <div className={styles['section-title']}>Limbi cunoscute</div>
        {languages.map((lang, idx) => (
          <div key={idx} className={styles['lang-item']}>
            <div className={styles['lang-label']}>
              <span>{lang.name}</span>
              <span className={styles['lang-level']}>{lang.level}</span>
            </div>
            <div className={styles['skill-bar']}>
              <div
                className={styles['skill-fill']}
                style={{ width: `${lang.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Calități */}
      <div className={styles.section}>
        <div className={styles['section-title']}>Calități personale</div>
        <div className={styles.qualities}>
          {qualities.map((quality, idx) => (
            <span key={idx} className={styles.quality}>
              {quality}
            </span>
          ))}
        </div>
      </div>

      {/* Hobby-uri */}
      <div className={styles.section}>
        <div className={styles['section-title']}>Hobby-uri & interese</div>
        <div className={styles.chips}>
          {hobbies.map((hobby, idx) => (
            <span key={idx} className={styles.chip}>
              {hobby}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
