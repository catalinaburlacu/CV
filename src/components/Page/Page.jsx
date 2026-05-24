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
    activities,
  } = cvData;

  return (
    <div className={styles.page}>
      <Header personal={personal} />
      <Sidebar
        skills={skills}
        languages={languages}
        qualities={qualities}
        hobbies={hobbies}
      />
      <Main
        summary={summary}
        education={education}
        competencies={competencies}
        activities={activities}
      />
    </div>
  );
}
