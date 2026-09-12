import { FiUsers, FiClock, FiAward } from "react-icons/fi";
import Countdown from "../Countdown/Countdown";
import styles from "./PrizeCard.module.css";
import iphoneImg from "../../assets/prizes/iphone.webp";
import watchImg from "../../assets/prizes/watch.webp";
import airpodsImg from "../../assets/prizes/airpods.webp";
import giftcardImg from "../../assets/prizes/giftcard.webp";
import ticketImg from "../../assets/prizes/giveaway-ticket.webp";

const IMAGES = {
  iphone: iphoneImg,
  watch: watchImg,
  airpods: airpodsImg,
  giftcard: giftcardImg,
  trophy: ticketImg,
};

export default function PrizeCard({ giveaway, userBalances, isLoggedIn, hasJoined, onJoin, onNotify, onEnded }) {
  const { position, name, description, image, participants, entryFee, winnerCount, status } = giveaway;
  const balance = userBalances[entryFee.currency] ?? 0;
  const hasEnough = balance >= entryFee.amount;

  let ctaLabel = `Join for ${entryFee.amount} ${entryFee.currency}`;
  let ctaDisabled = false;
  let onClick = onJoin;

  if (status === "upcoming") {
    ctaLabel = "Notify Me";
    onClick = onNotify;
  } else if (status === "ended") {
    ctaLabel = "View Winners";
  } else if (!isLoggedIn) {
    ctaLabel = "Login to Participate";
  } else if (hasJoined) {
    ctaLabel = "You're Participating ✓";
    ctaDisabled = true;
  } else if (!hasEnough) {
    ctaLabel = "Insufficient Balance";
    ctaDisabled = true;
  }

  return (
    <div className={styles.card}>
      <div className={styles.imageArea}>
        <span className={styles.position}>{position}</span>
        <img className={styles.productImg} src={IMAGES[image]} alt={name} />
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.desc}>{description}</p>

        <div className={styles.metaRow}>
          <span className={styles.metaItem}><FiUsers /> {participants}</span>
          <span className={styles.metaItem}><FiAward /> {winnerCount} Winner{winnerCount > 1 ? "s" : ""}</span>
        </div>

        {status === "active" && (
          <div className={styles.timeRow}>
            <FiClock />
            <Countdown targetTs={giveaway.endsAt} compact onComplete={onEnded} />
          </div>
        )}
        {status === "upcoming" && (
          <div className={styles.timeRow}>
            <FiClock /> <Countdown targetTs={giveaway.startsAt} compact />
          </div>
        )}

        <div className={styles.feeBox}>
          <div className={styles.feeLabelRow}>
            <span>Entry Fee</span>
            <span className={styles.feeAmount}>{entryFee.amount} {entryFee.currency}</span>
          </div>
          {status === "active" && isLoggedIn && (
            <div className={`${styles.balanceNote} ${hasEnough ? styles.ok : styles.low}`}>
              {hasEnough
                ? `✓ You have enough ${entryFee.currency} (Balance: ${balance})`
                : `⚠ Insufficient ${entryFee.currency} — you need ${entryFee.amount - balance} more (Balance: ${balance})`}
            </div>
          )}
        </div>

        <button
          className={`veloop-btn ${status === "ended" ? "veloop-btn-outline" : "veloop-btn-primary"} ${styles.cta}`}
          disabled={ctaDisabled}
          onClick={onClick}
        >
          {ctaLabel}
        </button>
      </div>
    </div>
  );
}
