import { FiGift, FiWatch, FiHeadphones, FiCreditCard } from "react-icons/fi";
import styles from "./WinnerSlider.module.css";

const ICONS = { iphone: <FiGift />, watch: <FiWatch />, airpods: <FiHeadphones />, giftcard: <FiCreditCard /> };

export default function WinnerSlider({ items }) {
  // Duplicate the list so the CSS marquee loop is seamless
  const loopItems = [...items, ...items];

  return (
    <div className={styles.wrapper} aria-label="Recent winners">
      <div className={styles.track}>
        {loopItems.map((item, idx) => (
          <div key={`${item.id}-${idx}`} className={styles.chip}>
            <span className={styles.icon}>{ICONS[item.prize]}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
