"use client";
import styles from "./page.module.css";
import TriStateCheckbox from "./EvidenceCheckbox";
import ghosts from "./ghosts.js";
import Ghost from "./Ghost.js";
import DisplayPage from "./DisplayPage";
import React from "react";
import Maps from "./Maps.js";
import { useState } from "react";
import EvidencePage from "./Evidencepage";

export default function Home() {
  // Create Home page states
  const [EvidenceTab, setEvidenceTab] = useState(true);

  return (
    <div className={EvidenceTab ? styles.page : styles.page_map}>
      <div className={styles.selectorContainer}>
        <h2
          className={styles.selector}
          onClick={() => {
            setEvidenceTab(true);
            console.log(EvidenceTab);
          }}
        >
          {EvidenceTab ? "\u2611" : "\u2610"} Evidence Page
        </h2>
        <h2
          className={styles.selector}
          onClick={() => {
            setEvidenceTab(false);
          }}
        >
          {!EvidenceTab ? "\u2611" : "\u2610"} Maps Page
        </h2>
      </div>
      <DisplayPage EvidenceTab={EvidenceTab}></DisplayPage>
    </div>
  );
}
