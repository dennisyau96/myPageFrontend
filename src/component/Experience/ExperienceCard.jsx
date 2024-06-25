import styles from "./Experience.module.css";
function ExperienceCard({ content }) {
  return (
    <div className={styles.expCardDiv}>
      {content.position ? (
        <p>
          <span className={styles.label}>Position:</span> {content.position}
        </p>
      ) : null}
      {content.organization ? (
        <p>
          <span className={styles.label}>Organization:</span>{" "}
          {content.organization}
        </p>
      ) : null}
      {content.period ? (
        <p>
          <span className={styles.label}>Period:</span> {content.period}
        </p>
      ) : null}
      {content.location ? (
        <p>
          <span className={styles.label}>Location:</span> {content.location}
        </p>
      ) : null}
      {content.description ? (
        <p>
          <span className={styles.label}>Description:</span>
          <br />
          {content.description}
        </p>
      ) : null}
    </div>
  );
}

export default ExperienceCard;
