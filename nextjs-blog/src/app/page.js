import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ol>
          <li>
            <label>
              <input type="checkbox" id="EMF5" name="EMF5" value="EMF5" />
              EMF Level 5
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" id="UV" name="UV" value="UV" />
              Ultraviolet
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                id="SpiritBox"
                name="SpiritBox"
                value="SpiritBox"
              />
              Spirit Box
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                id="GhostWriting"
                name="GhostWriting"
                value="GhostWriting"
              />
              Ghost Writting
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" id="dots" name="dots" value="dots" />
              Dots
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" id="freeze" name="freeze" value="freeze" />
              Freezing Temperatures ( 1 &deg;C or less )
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" id="gorbs" name="gorbs" value="gorbs" />
              Ghost Orbs
            </label>
          </li>
        </ol>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
