import { FiUserPlus, FiCheckSquare, FiStar, FiAward } from "react-icons/fi";
import styles from "./HowToParticipate.module.css";

const ICONS = [<FiUserPlus />, <FiCheckSquare />, <FiStar />, <FiAward />];

export default function HowToParticipate({ steps }) {
  return (
    <section className={`veloop-section ${styles.section}`}>
      <div className="veloop-container">
        <div className={styles.header}>
          <span className="veloop-eyebrow">Simple Process</span>
          <h2 className={styles.title}>How to Participate?</h2>
        </div>

        <div className={styles.timeline}>
          {steps.map((s, i) => (
            <div key={s.step} className={styles.stepWrap}>
              <div className={styles.stepCard}>
                <div className={styles.iconCircle}>{ICONS[i]}</div>
                <span className={styles.stepNum}>{s.step}</span>
                <h4 className={styles.stepTitle}>{s.title}</h4>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
              {i < steps.length - 1 && <div className={styles.connector} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
