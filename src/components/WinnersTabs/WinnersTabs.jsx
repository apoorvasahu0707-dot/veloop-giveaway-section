import { useState } from "react";
import WinnerCard from "../WinnerCard/WinnerCard";
import PreviousWinnerCard from "../PreviousWinnerCard/PreviousWinnerCard";
import styles from "./WinnersTabs.module.css";

export default function WinnersTabs({ previousWinners, currentGiveawayEnded }) {
  const [tab, setTab] = useState("current");

  return (
    <section className={`veloop-section ${styles.section}`} id="winners">
      <div className="veloop-container">
        <div className={styles.header}>
          <span className="veloop-eyebrow">Transparency</span>
          <h2 className={styles.title}>Winners</h2>
        </div>

        <div className={styles.tabBar}>
          <button
            className={`${styles.tab} ${tab === "current" ? styles.active : ""}`}
            onClick={() => setTab("current")}
          >
            Current Giveaway
          </button>
          <button
            className={`${styles.tab} ${tab === "previous" ? styles.active : ""}`}
            onClick={() => setTab("previous")}
          >
            Previous Winners
          </button>
        </div>

        {tab === "current" && (
          <div className={styles.currentPanel}>
            {currentGiveawayEnded ? (
              <p className={styles.endedNote}>Check the Previous Winners tab for the full results.</p>
            ) : (
              <WinnerCard />
            )}
          </div>
        )}

        {tab === "previous" && (
          <div className={styles.prevGrid}>
            {previousWinners.map((w) => (
              <PreviousWinnerCard key={w.id} winner={w} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
