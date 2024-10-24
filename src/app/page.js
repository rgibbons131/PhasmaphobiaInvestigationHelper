"use client";
import styles from "./page.module.css";
import TriStateCheckbox from "./EvidenceCheckbox";
import ghosts from "./ghosts.js";
import Ghost from "./Ghost.js";
import React from "react";
import { useState } from "react";

export default function Home() {
  // Create evidence state variables
  const [EMF5, setEMF5] = useState(false);
  const [UV, setUV] = useState(false);
  const [spiritBox, setSpiritBox] = useState(false);
  const [ghostWriting, setGhostWriting] = useState(false);
  const [freeze, setFreeze] = useState(false);
  const [dots, setDots] = useState(false);
  const [gorbs, setGorbs] = useState(false);

  const evidences = {
    EMF5: EMF5,
    UV: UV,
    spiritBox: spiritBox,
    ghostWriting: ghostWriting,
    freeze: freeze,
    dots: dots,
    gorbs: gorbs,
  };

  // Create ghost cards
  let gs = ghosts();
  let ghostList = [];
  for (let i = 0; i < gs.length; i++) {
    ghostList.push(
      <Ghost key={i + "i"} ghost={gs[i]} evidences={evidences}></Ghost>
    );
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ol>
          <TriStateCheckbox
            name="EMF Level 5"
            valueIn="EMF5"
            func={() => {
              setEMF5(!EMF5);
            }}
            val={EMF5}
          />
          <TriStateCheckbox
            name="Ultraviolet"
            valueIn="UV"
            func={() => {
              setUV(!UV);
            }}
            val={UV}
          />
          <TriStateCheckbox
            name="Spirit Box"
            valueIn="SpiritBox"
            val={spiritBox}
            func={() => {
              setSpiritBox(!spiritBox);
            }}
          />
          <TriStateCheckbox
            name="Ghost Writing"
            valueIn="GhostWriting"
            val={ghostWriting}
            func={() => {
              setGhostWriting(!ghostWriting);
            }}
          />
          <TriStateCheckbox
            name="Freezing Temperatures ( 1 &deg;C or less )"
            valueIn="freeze"
            val={freeze}
            func={() => {
              setFreeze(!freeze);
            }}
          />
          <TriStateCheckbox
            name="Dots"
            val={dots}
            func={() => {
              setDots(!dots);
            }}
          />
          <TriStateCheckbox
            name="Ghost Orbs"
            valueIn="gorbs"
            val={gorbs}
            func={() => {
              setGorbs(!gorbs);
            }}
          />
        </ol>
        <ul className="ghostList">{ghostList}</ul>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
