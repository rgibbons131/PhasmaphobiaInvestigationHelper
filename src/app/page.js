import Image from "next/image";
import styles from "./page.module.css";
import TriStateCheckbox from "./triStateCheckbox";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ol>
          <TriStateCheckbox name="EMF Level 5" valueIn="EMF5" />
          <TriStateCheckbox name="Ultraviolet" valueIn="UV" />
          <TriStateCheckbox name="Spirit Box" valueIn="SpiritBox" />
          <TriStateCheckbox name="Ghost Writing" valueIn="GhostWriting" />
          <TriStateCheckbox
            name="Freezing Temperatures ( 1 &deg;C or less )"
            valueIn="freeze"
          />
          <TriStateCheckbox name="Dots" />
          <TriStateCheckbox name="Ghost Orbs" valueIn="gorbs" />
        </ol>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
