import styles from './Main.module.css';

export default function Main({ summary, education, competencies, activities }) {
  return (
    <main className={styles.main}>
      {/* Profil profesional */}
      <section className={styles.section}>
        <div className={styles['section-title']}>Profil profesional</div>
        <p className={styles['summary-text']}>{summary}</p>
      </section>

      {/* Studii */}
      <section className={styles.section}>
        <div className={styles['section-title']}>Studii</div>
        {education.map((entry, idx) => (
          <div key={idx} className={styles.entry}>
            <div className={styles['entry-date']}>{entry.years}</div>
            <div className={styles['entry-title']}>{entry.title}</div>
            <div className={styles['entry-sub']}>{entry.subtitle}</div>
          </div>
        ))}
      </section>

      {/* Competențe tehnice */}
      <section className={styles.section}>
        <div className={styles['section-title']}>Competențe tehnice</div>
        <ul className={styles['bullet-list']}>
          {competencies.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Activități & proiecte */}
      <section className={styles.section}>
        <div className={styles['section-title']}>Activități & proiecte</div>
        <ul className={styles['bullet-list']}>
          {activities.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
