"use client";
import styles from "./page.module.css";
import TriStateCheckbox from "./EvidenceCheckbox";
import ghosts from "./ghosts.js";
import Ghost from "./Ghost.js";
import React from "react";
import { useState } from "react";
import EvidencePage from "./Evidencepage";

export default function Home() {
  // Create Home page states
  const [EvidenceTab, setEvidenceTab] = useState(true);
  const [MapTab, setMapTab] = useState(false);

  return <EvidencePage></EvidencePage>;
}
