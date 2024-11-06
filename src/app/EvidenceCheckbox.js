import styles from "./evidenceCheckbox.module.css";

export default function EvidenceCheckbox({ name, valueIn = name, val, func }) {
  return (
    <li className={styles.evidenceCheckbox} onClick={func}>
      <div id={valueIn} name={valueIn}>
        {val ? "\u2611" : "\u2610"} {name}
      </div>
    </li>
  );
}
