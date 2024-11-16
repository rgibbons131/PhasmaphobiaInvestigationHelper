import styles from "./evidenceCheckbox.module.css";

export default function EvidenceCheckbox({
  name,
  valueIn = name,
  val,
  func,
  suggested,
}) {
  return (
    <li className={styles.evidenceCheckbox} onClick={func}>
      <p id={valueIn} name={valueIn}>
        {val ? "\u2611" : "\u2610"} {name}
        {suggested == valueIn ? ":  !Suggested!" : ""}
      </p>
    </li>
  );
}
