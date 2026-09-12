import { FiShield, FiEye, FiLock } from "react-icons/fi";
import styles from "./TrustSection.module.css";

const POINTS = [
  { icon: <FiShield />, title: "Verified Winners", desc: "Every winner is drawn from a verified pool of entries once a giveaway ends." },
  { icon: <FiEye />, title: "Transparent Process", desc: "Live giveaways never show fake or early winners — status is always accurate." },
  { icon: <FiLock />, title: "Secure Entries", desc: "Entry fees are deducted only from your own in-platform balance, never real money." },
];

export default function TrustSection() {
  return (
    <section className={`veloop-section ${styles.section}`}>
      <div className="veloop-container">
        <div className={styles.grid}>
          {POINTS.map((p) => (
            <div key={p.title} className={styles.card}>
              <div className={styles.iconWrap}>{p.icon}</div>
              <h4 className={styles.title}>{p.title}</h4>
              <p className={styles.desc}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
