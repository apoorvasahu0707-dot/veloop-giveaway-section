import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import styles from "./FAQ.module.css";

export default function FAQ({ items }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className={`veloop-section ${styles.section}`}>
      <div className="veloop-container">
        <div className={styles.header}>
          <span className="veloop-eyebrow">Have Questions?</span>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
        </div>

        <div className={styles.accordion}>
          {items.map((item, i) => (
            <div key={i} className={styles.item}>
              <button
                className={styles.question}
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
              >
                {item.q}
                <FiChevronDown className={`${styles.chevron} ${openIdx === i ? styles.open : ""}`} />
              </button>
              {openIdx === i && <p className={styles.answer}>{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
