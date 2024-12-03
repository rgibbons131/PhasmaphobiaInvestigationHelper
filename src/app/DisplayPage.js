"use client";
import React from "react";
import Maps from "./Maps.js";
import styles from "./maps.module.css";
import EvidencePage from "./Evidencepage";
import { useState } from "react";

export default function DisplayPage({EvidenceTab}) {
  console.log("Display Page");
  console.log(EvidenceTab);
  return (
    <div>
      <EvidencePage display={EvidenceTab}></EvidencePage>
      <Maps display={!EvidenceTab}></Maps>
    </div>
  );
}
