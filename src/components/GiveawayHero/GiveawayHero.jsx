import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { HiSparkles, HiGift } from "react-icons/hi2";
import Countdown from "../Countdown/Countdown";
import giftboxLeft from "../../assets/prizes/giftbox-gold.webp";
import giftboxRight from "../../assets/prizes/giftbox-hero.webp";
import styles from "./GiveawayHero.module.css";

export default function GiveawayHero({ endsAt, onJoinClick }) {
  return (
    <section className={styles.hero}>
      <div className={styles.sparkleField} aria-hidden="true">
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} className={styles.sparkle} style={{ "--i": i }} />
        ))}
      </div>

      <div className={`veloop-container ${styles.inner}`}>
        <motion.img
          src={giftboxLeft}
          alt=""
          className={styles.giftLeft}
          initial={{ opacity: 0, x: -20, rotate: -8 }}
          animate={{ opacity: 1, x: 0, rotate: -6 }}
          transition={{ duration: 0.6 }}
        />

        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.eyebrow}>
            <HiGift /> Exclusive Giveaways
          </span>
          <h1 className={styles.heading}>
            Giveaway <span className={styles.accent}>Section</span>
          </h1>
          <p className={styles.sub}>
            Join exciting giveaways, complete simple tasks and win amazing
            rewards from VELoop Rewards.
          </p>
          <p className={styles.tagline}><HiSparkles /> More participation, more chances to win! <HiSparkles /></p>

          <div className={styles.ctaRow}>
            <button className={styles.enterBtn} onClick={onJoinClick}>
              Enter Giveaway <FiArrowRight />
            </button>
            <div className={styles.countdownWrap}>
              <span className={styles.endsLabel}>Ends in</span>
              <Countdown targetTs={endsAt} />
            </div>
          </div>
        </motion.div>

        <motion.img
          src={giftboxRight}
          alt=""
          className={styles.giftRight}
          initial={{ opacity: 0, x: 20, rotate: 8 }}
          animate={{ opacity: 1, x: 0, rotate: 6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        />
      </div>
    </section>
  );
}
