import { FiAward, FiCalendar } from "react-icons/fi";
import styles from "./PreviousWinnerCard.module.css";

export default function PreviousWinnerCard({ winner }) {
  return (
    <div className={styles.card}>
      <div className={styles.badge}><FiAward /></div>
      <div className={styles.info}>
        <div className={styles.giveawayName}>{winner.giveawayName}</div>
        <div className={styles.row}>
          <span className={styles.label}>Winner:</span>
          <span className={styles.value}>{winner.winnerId}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Prize:</span>
          <span className={styles.value}>{winner.prize}</span>
        </div>
        <div className={styles.dateRow}><FiCalendar /> {winner.date}</div>
      </div>
    </div>
  );
}
