import PrizeCard from "../PrizeCard/PrizeCard";
import styles from "./FeaturedGiveaways.module.css";

export default function FeaturedGiveaways({ giveaways, userBalances, isLoggedIn, joinedIds, onJoin, onNotify, onEnded }) {
  return (
    <section className={`veloop-section ${styles.section}`} id="giveaways">
      <div className="veloop-container">
        <div className={styles.header}>
          <span className="veloop-eyebrow">Live &amp; Upcoming</span>
          <h2 className={styles.title}>Featured Giveaways</h2>
          <p className={styles.subtitle}>Pick a reward, meet the entry requirement, and join before time runs out.</p>
        </div>

        <div className={styles.grid}>
          {giveaways.map((g) => (
            <PrizeCard
              key={g.id}
              giveaway={g}
              userBalances={userBalances}
              isLoggedIn={isLoggedIn}
              hasJoined={joinedIds.includes(g.id)}
              onJoin={() => onJoin(g)}
              onNotify={() => onNotify(g)}
              onEnded={() => onEnded(g.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
