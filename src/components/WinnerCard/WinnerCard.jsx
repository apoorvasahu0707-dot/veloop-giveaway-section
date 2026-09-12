import { FiClock } from "react-icons/fi";
import styles from "./WinnerCard.module.css";

/**
 * Shown inside the "Winners" tab while a giveaway is still ACTIVE.
 * Never shows fake winners for a live giveaway.
 */
export default function WinnerCard({ giveawayName = "Current Giveaway" }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrap}><FiClock /></div>
      <h4 className={styles.title}>{giveawayName}</h4>
      <span className={styles.status}>Status: LIVE</span>
      <p className={styles.text}>
        Giveaway is still live. Winners will be announced after the giveaway ends.
      </p>
    </div>
  );
}
