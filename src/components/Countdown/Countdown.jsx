import { useEffect, useState } from "react";
import styles from "./Countdown.module.css";

function getTimeParts(targetTs) {
  const diff = Math.max(0, targetTs - Date.now());
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s, done: diff <= 0 };
}

/**
 * Live countdown timer.
 * Calls onComplete() exactly once when it reaches zero, so parent
 * components can flip ACTIVE -> ENDED automatically.
 */
export default function Countdown({ targetTs, onComplete, compact = false }) {
  const [time, setTime] = useState(() => getTimeParts(targetTs));

  useEffect(() => {
    const id = setInterval(() => {
      setTime((prev) => {
        const next = getTimeParts(targetTs);
        if (next.done && !prev.done && onComplete) onComplete();
        return next;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [targetTs, onComplete]);

  if (time.done) {
    return <span className={styles.ended}>Giveaway Ended</span>;
  }

  const units = [
    { label: "d", value: time.d },
    { label: "h", value: time.h },
    { label: "m", value: time.m },
    { label: "s", value: time.s },
  ];

  return (
    <div className={`${styles.countdown} ${compact ? styles.compact : ""}`}>
      {units.map((u, i) => (
        <span key={u.label} className={styles.unit}>
          <span className={styles.value}>{String(u.value).padStart(2, "0")}</span>
          <span className={styles.label}>{u.label}</span>
          {i < units.length - 1 && <span className={styles.sep}>:</span>}
        </span>
      ))}
    </div>
  );
}
