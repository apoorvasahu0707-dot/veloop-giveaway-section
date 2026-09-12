import { FiZap } from "react-icons/fi";
import styles from "./Navbar.module.css";

export default function Navbar({ balances }) {
  return (
    <header className={styles.header}>
      <div className={`veloop-container ${styles.inner}`}>
        <div className={styles.logo}>
          <FiZap /> VELoop <span className={styles.rewards}>Rewards</span>
        </div>
        <nav className={styles.nav}>
          <a href="#giveaways">Giveaways</a>
          <a href="#winners">Winners</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className={styles.walletChip}>
          <span>{balances.VEs} VEs</span>
        </div>
      </div>
    </header>
  );
}
