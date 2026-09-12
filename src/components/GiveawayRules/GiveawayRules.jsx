import { FiCheckCircle } from "react-icons/fi";
import styles from "./GiveawayRules.module.css";

export default function GiveawayRules({ rules }) {
  return (
    <section className={`veloop-section ${styles.section}`}>
      <div className="veloop-container">
        <div className={styles.header}>
          <span className="veloop-eyebrow">Fair Play</span>
          <h2 className={styles.title}>Giveaway Rules</h2>
        </div>
        <ul className={styles.list}>
          {rules.map((r, i) => (
            <li key={i} className={styles.item}>
              <FiCheckCircle className={styles.icon} />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
