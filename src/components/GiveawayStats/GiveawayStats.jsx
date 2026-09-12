import { FiGift, FiUsers, FiAward, FiClock } from "react-icons/fi";
import styles from "./GiveawayStats.module.css";

export default function GiveawayStats({ stats }) {
  const cards = [
    { icon: <FiGift />, value: stats.totalGiveaways, label: stats.totalGiveawaysLabel, sub: "Total Giveaways" },
    { icon: <FiUsers />, value: stats.totalParticipants, label: stats.totalParticipantsLabel, sub: "Total Participants" },
    { icon: <FiAward />, value: stats.prizesWon, label: stats.prizesWonLabel, sub: "Prizes Won" },
    { icon: <FiClock />, value: "Live", label: "Countdown", sub: "Giveaway Ends In" },
  ];

  return (
    <section className={`veloop-section ${styles.section}`}>
      <div className="veloop-container">
        <div className={styles.grid}>
          {cards.map((c) => (
            <div key={c.sub} className={styles.card}>
              <div className={styles.iconWrap}>{c.icon}</div>
              <div className={styles.value}>{c.value}</div>
              <div className={styles.label}>{c.label}</div>
              <div className={styles.sub}>{c.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
