import styles from './Page.module.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';

export default function Page({ cvData }) {
  const {
    personal,
    summary,
    education,
    skills,
    languages,
    qualities,
    hobbies,
    competencies,
    olympiads,
    experience,
    activities,
  } = cvData;

  return (
    <div className={styles.page}>
      <Header personal={personal} />
      <div className={styles.swipeViewport}>
        <section className={styles.swipePanel}>
          <Sidebar
            skills={skills}
            languages={languages}
            qualities={qualities}
            hobbies={hobbies}
          />
        </section>
        <section className={styles.swipePanel}>
          <Main
            summary={summary}
            education={education}
            competencies={competencies}
            olympiads={olympiads}
            experience={experience}
            activities={activities}
          />
        </section>
      </div>
    </div>
  );
}
