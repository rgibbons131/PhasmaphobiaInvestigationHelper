import styles from "./ghost.module.css";

export default function Ghost({ ghost, evidences }) {
  let className = styles.ghostCard;
  let evidence = [];
  for (let i = 0; i < ghost.evidence.length; i++) {
    evidence.push(
      <li key={i + "e" + ghost.name} className="evidence">
        {ghost.evidence[i]}
      </li>
    );
  }
  let strengths = [];
  for (let i = 0; i < ghost.strengths.length; i++) {
    strengths.push(
      <li key={i + "s" + ghost.name} className="strength">
        {ghost.strengths[i]}
      </li>
    );
  }
  for (let eName in evidences) {
    if (!ghost.evidence.includes(eName)) {
      if (evidences[eName]) {
        className = styles.hidden;
      }
    }
  }
  let weaknesses = [];
  for (let i = 0; i < ghost.weaknesses.length; i++) {
    weaknesses.push(
      <li key={i + "w" + ghost.name} className="weekness">
        {ghost.weaknesses[i]}
      </li>
    );
  }
  return (
    <li className={className}>
      <div className={styles.ghostName}>{ghost.name}</div>
      <p>Evidences</p>
      <ul className={styles.evidences}>{evidence}</ul>
      <p>Strengths</p>
      <ul className={styles.strengths}>{strengths}</ul>
      <p>Weaknesses</p>
      <ul className={styles.weaknesses}>{weaknesses}</ul>
    </li>
  );
}
