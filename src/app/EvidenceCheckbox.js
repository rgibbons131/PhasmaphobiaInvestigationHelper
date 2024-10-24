import styles from "./page.module.css";

export default function EvidenceCheckbox({ name, valueIn = name, val, func }) {
  return (
    <li className={styles.evidenceCheckbox} onClick={func}>
      <div id={valueIn} name={valueIn}>
        {name}, {val ? "text" : "empty"}
      </div>
    </li>
  );
}
