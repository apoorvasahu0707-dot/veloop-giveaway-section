import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import GiveawayHero from "../../components/GiveawayHero/GiveawayHero";
import GiveawayStats from "../../components/GiveawayStats/GiveawayStats";
import WinnerSlider from "../../components/WinnerSlider/WinnerSlider";
import FeaturedGiveaways from "../../components/FeaturedGiveaways/FeaturedGiveaways";
import HowToParticipate from "../../components/HowToParticipate/HowToParticipate";
import WinnersTabs from "../../components/WinnersTabs/WinnersTabs";
import GiveawayRules from "../../components/GiveawayRules/GiveawayRules";
import TrustSection from "../../components/TrustSection/TrustSection";
import FAQ from "../../components/FAQ/FAQ";
import PrizeClaimModal from "../../components/PrizeClaimModal/PrizeClaimModal";
import {
  CURRENT_USER,
  GIVEAWAY_STATS,
  GIVEAWAYS,
  WINNER_TICKER,
  PREVIOUS_WINNERS,
  HOW_TO_PARTICIPATE,
  GIVEAWAY_RULES,
  FAQ_ITEMS,
  CURRENT_GIVEAWAY_END,
} from "../../data/giveawayData";

export default function GiveawayPage() {
  const [giveaways, setGiveaways] = useState(GIVEAWAYS);
  const [joinedIds, setJoinedIds] = useState(CURRENT_USER.joinedGiveawayIds);
  const [balances, setBalances] = useState(CURRENT_USER.balances);
  const [modal, setModal] = useState(null); // { mode, giveaway }
  const [toast, setToast] = useState(null);

  const anyEnded = giveaways.some((g) => g.status === "ended");

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  const handleJoinClick = (giveaway) => {
    if (!CURRENT_USER.isLoggedIn) return showToast("Please login to participate.");
    setModal({ mode: "confirmEntry", giveaway });
  };

  const handleConfirmJoin = () => {
    const g = modal.giveaway;
    setBalances((prev) => ({ ...prev, [g.entryFee.currency]: prev[g.entryFee.currency] - g.entryFee.amount }));
    setJoinedIds((prev) => [...prev, g.id]);
    setModal(null);
    showToast(`You're in! Entry fee of ${g.entryFee.amount} ${g.entryFee.currency} deducted.`);
  };

  const handleNotify = (giveaway) => {
    showToast(`We'll notify you when "${giveaway.name}" goes live.`);
  };

  const handleEnded = (id) => {
    setGiveaways((prev) => prev.map((g) => (g.id === id ? { ...g, status: "ended" } : g)));
  };

  return (
    <div>
      <Navbar balances={balances} />
      <GiveawayHero
        endsAt={CURRENT_GIVEAWAY_END}
        onJoinClick={() => document.getElementById("giveaways")?.scrollIntoView({ behavior: "smooth" })}
      />
      <GiveawayStats stats={GIVEAWAY_STATS} />
      <WinnerSlider items={WINNER_TICKER} />
      <FeaturedGiveaways
        giveaways={giveaways}
        userBalances={balances}
        isLoggedIn={CURRENT_USER.isLoggedIn}
        joinedIds={joinedIds}
        onJoin={handleJoinClick}
        onNotify={handleNotify}
        onEnded={handleEnded}
      />
      <HowToParticipate steps={HOW_TO_PARTICIPATE} />
      <WinnersTabs previousWinners={PREVIOUS_WINNERS} currentGiveawayEnded={anyEnded} />
      <GiveawayRules rules={GIVEAWAY_RULES} />
      <TrustSection />
      <FAQ items={FAQ_ITEMS} />
      <Footer />

      {modal && (
        <PrizeClaimModal
          mode={modal.mode}
          giveaway={modal.giveaway}
          onClose={() => setModal(null)}
          onConfirm={handleConfirmJoin}
        />
      )}

      {toast && <div className="veloop-toast">{toast}</div>}
    </div>
  );
}
