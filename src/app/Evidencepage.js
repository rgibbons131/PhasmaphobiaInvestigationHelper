import styles from "./page.module.css";
import TriStateCheckbox from "./EvidenceCheckbox";
import ghosts from "./ghosts.js";
import Ghost from "./Ghost.js";
import { useState } from "react";

function suggestedEvidence(evidences, ghostList, lastEvidence) {
  for (let ghost in ghostList) {
    var valid = true;
    for (let eName in evidences) {
      if (!ghostList[ghost].evidence.includes(eName)) {
        if (lastEvidence != eName) {
          if (evidences[eName].bool) {
            valid = false;
          }
        } else {
          if (!evidences[eName].bool) {
            valid = false;
          }
        }
      }
    }
    if (valid) {
      for (let evidence in ghostList[ghost].evidence) {
        evidences[ghostList[ghost].evidence[evidence]].value += 1;
      }
    }
  }
  var max = { name: "", value: 0 };
  for (let e in evidences) {
    console.log(e);
    console.log(evidences[e]);
    if (
      (evidences[e].value > max.value &&
        !evidences[e].bool &&
        lastEvidence != e) ||
      (evidences[e].value > max.value && evidences[e].bool && lastEvidence == e)
    ) {
      max.name = e;
      max.value = evidences[e].value;
      console.log(e);
      console.log(evidences[e].value);
    }
  }
  return max.name;
}

export default function EvidencePage() {
  // Create evidence state variables
  const [EMF5, setEMF5] = useState(false);
  const [UV, setUV] = useState(false);
  const [spiritBox, setSpiritBox] = useState(false);
  const [ghostWriting, setGhostWriting] = useState(false);
  const [freeze, setFreeze] = useState(false);
  const [dots, setDots] = useState(false);
  const [gorbs, setGorbs] = useState(false);
  const [suggested, setSuggested] = useState("gorbs");

  const evidences = {
    EMF5: { bool: EMF5, value: 0 },
    UV: { bool: UV, value: 0 },
    spiritBox: { bool: spiritBox, value: 0 },
    ghostWriting: { bool: ghostWriting, value: 0 },
    freeze: { bool: freeze, value: 0 },
    dots: { bool: dots, value: 0 },
    gorbs: { bool: gorbs, value: 0 },
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
        <ol className={styles.evidenceList}>
          <TriStateCheckbox
            name="EMF Level 5"
            valueIn="EMF5"
            func={() => {
              setEMF5(!EMF5);
              setSuggested(suggestedEvidence(evidences, gs, "EMF5"));
            }}
            val={EMF5}
            suggested={suggested}
          />
          <TriStateCheckbox
            name="Ultraviolet"
            valueIn="UV"
            func={() => {
              setUV(!UV);
              setSuggested(suggestedEvidence(evidences, gs, "UV"));
            }}
            val={UV}
            suggested={suggested}
          />
          <TriStateCheckbox
            name="Spirit Box"
            valueIn="SpiritBox"
            val={spiritBox}
            func={() => {
              setSpiritBox(!spiritBox);
              setSuggested(suggestedEvidence(evidences, gs, "SpiritBox"));
            }}
            suggested={suggested}
          />
          <TriStateCheckbox
            name="Ghost Writing"
            valueIn="GhostWriting"
            val={ghostWriting}
            func={() => {
              setGhostWriting(!ghostWriting);
              setSuggested(suggestedEvidence(evidences, gs, "GhostWriting"));
            }}
            suggested={suggested}
          />
          <TriStateCheckbox
            name="Freezing Temperatures ( 1 &deg;C or less )"
            valueIn="freeze"
            val={freeze}
            func={() => {
              setFreeze(!freeze);
              setSuggested(suggestedEvidence(evidences, gs, "freeze"));
            }}
            suggested={suggested}
          />
          <TriStateCheckbox
            name="Dots"
            val={dots}
            func={() => {
              setDots(!dots);
              setSuggested(suggestedEvidence(evidences, gs, "Dots"));
            }}
            suggested={suggested}
          />
          <TriStateCheckbox
            name="Ghost Orbs"
            valueIn="gorbs"
            val={gorbs}
            func={() => {
              setGorbs(!gorbs);
              setSuggested(suggestedEvidence(evidences, gs, "gorbs"));
            }}
            suggested={suggested}
          />
        </ol>
        <ul className={styles.ghostList}>{ghostList}</ul>
      </main>
    </div>
  );
}
