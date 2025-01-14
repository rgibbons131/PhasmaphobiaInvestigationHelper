import styles from "./ghost.module.css";
import React, { use } from "react";
import { useState } from "react";

export default function Ghost({ ghost, evidences }) {
  console.log(ghost.name);
  let className = styles.ghostCard;
  let evidence = [];
  const [evidenceOn, setEvidenceOn] = useState(false);
  function toggleEvidence() {
    setEvidenceOn(!evidenceOn);
  }
  for (let i = 0; i < ghost.evidence.length; i++) {
    evidence.push(
      <li key={i + "e" + ghost.name} className="evidence">
        {ghost.evidence[i]}
      </li>
    );
  }
  let strengths = [];
  const [strengthsOn, setStrengthsOn] = useState(false);
  function toggleStrengths() {
    setStrengthsOn(!strengthsOn);
  }
  for (let i = 0; i < ghost.strengths.length; i++) {
    strengths.push(
      <li key={i + "s" + ghost.name} className="strength">
        {ghost.strengths[i]}
      </li>
    );
  }
  for (let eName in evidences) {
    if (!ghost.evidence.includes(eName)) {
      if (evidences[eName].bool) {
        className = styles.hidden;
      }
    }
  }
  let weaknesses = [];
  const [weaknessesOn, setWeaknessesOn] = useState(false);
  function toggleWeaknesses() {
    setWeaknessesOn(!weaknessesOn);
  }
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
      <p
        className={evidenceOn ? styles.ghostHeaderOn : styles.ghostHeaderOff}
        onClick={toggleEvidence}
      >
        Evidences
      </p>
      <ul
        className={evidenceOn ? styles.evidence : styles.hidden}
        //className={styles.evidence}
      >
        {evidence}
      </ul>
      <p
        className={strengthsOn ? styles.ghostHeaderOn : styles.ghostHeaderOff}
        onClick={toggleStrengths}
      >
        Strengths
      </p>
      <ul
        className={strengthsOn ? styles.strengths : styles.hidden}
        //className={styles.strengths}
      >
        {strengths}
      </ul>
      <p
        className={weaknessesOn ? styles.ghostHeaderOn : styles.ghostHeaderOff}
        onClick={toggleWeaknesses}
      >
        Weaknesses
      </p>
      <ul
        className={weaknessesOn ? styles.weaknesses : styles.hidden}
        //className={styles.weaknesses}
      >
        {weaknesses}
      </ul>
    </li>
  );
}
