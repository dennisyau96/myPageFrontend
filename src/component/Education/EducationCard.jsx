import styles from "./Education.module.css";

function EducationCard({ content }) {
  return (
    <>
      <div
        id="educationCard"
        className={styles.educationCard}
        // style={{ width: "450px", margin: "10px" }}
      >
        {/* <div className="card-header" style={{ height: "100px" }}>
          Header
        </div> */}
        <img className="card-img-top"></img>
        {content.title ? (
          <p>
            <span className={styles.label}>Title:</span> {content.title}
          </p>
        ) : null}
        {content.institution ? (
          <p>
            <span className={styles.label}>Institution:</span>{" "}
            {content.institution}
          </p>
        ) : null}
        {content.ranking ? (
          <p>
            <span className={styles.label}>
              Times Higher Education Ranking:
            </span>{" "}
            {content.ranking}
          </p>
        ) : null}
        {content.education_level ? (
          <p>
            <span className={styles.label}>Education level:</span>{" "}
            {content.education_level}
          </p>
        ) : null}
        {content.major ? (
          <p>
            <span className={styles.label}>Major:</span> {content.major}
          </p>
        ) : null}
        <p>
          <span className={styles.label}>Location: </span>
          {content.location}
        </p>
        <p>
          <span className={styles.label}>Year:</span> {content.year}
        </p>
        {content.honor ? (
          <p>
            <span className={styles.label}>Honor:</span> {content.honor}
          </p>
        ) : null}
        {content.acheivement ? (
          <p>
            <span className={styles.label}>Acheivement:</span>{" "}
            {content.acheivement}
          </p>
        ) : null}
        {/* <div className="card-header">Footer</div> */}
      </div>
    </>
  );
}

export default EducationCard;
