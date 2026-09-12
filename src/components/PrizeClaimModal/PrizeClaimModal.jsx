import { useState } from "react";
import { FiX, FiCheckCircle } from "react-icons/fi";
import styles from "./PrizeClaimModal.module.css";

/**
 * Two modes:
 *  - mode="confirmEntry": confirms the entry-fee deduction before joining a giveaway.
 *  - mode="claimPrize": winner-specific claim/details form (shipping/contact info).
 */
export default function PrizeClaimModal({ mode, giveaway, onClose, onConfirm }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" });
  const [submitted, setSubmitted] = useState(false);

  if (!giveaway) return null;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onConfirm?.();
    }, 900);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}><FiX /></button>

        {mode === "confirmEntry" && !submitted && (
          <>
            <h3 className={styles.title}>Confirm Your Entry</h3>
            <p className={styles.desc}>You're about to join this giveaway.</p>
            <div className={styles.summaryBox}>
              <div className={styles.summaryRow}><span>Giveaway</span><span>{giveaway.name}</span></div>
              <div className={styles.summaryRow}><span>Entry Fee</span><span>{giveaway.entryFee.amount} {giveaway.entryFee.currency}</span></div>
              <div className={styles.summaryRow}><span>Winners</span><span>{giveaway.winnerCount}</span></div>
            </div>
            <p className={styles.note}>This amount will be deducted from your {giveaway.entryFee.currency} balance. Entries are non-refundable once the giveaway starts.</p>
            <button className="veloop-btn veloop-btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={() => { setSubmitted(true); setTimeout(() => onConfirm?.(), 700); }}>
              Confirm — Pay {giveaway.entryFee.amount} {giveaway.entryFee.currency}
            </button>
          </>
        )}

        {mode === "claimPrize" && !submitted && (
          <>
            <h3 className={styles.title}>🎉 Claim Your Prize</h3>
            <p className={styles.desc}>Congratulations! Please confirm your details to claim <strong>{giveaway.name}</strong>.</p>
            <form onSubmit={handleSubmit} className={styles.form}>
              <label>Full Name
                <input required name="name" value={form.name} onChange={handleChange} placeholder="As per ID" />
              </label>
              <label>Email
                <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
              </label>
              <label>Phone
                <input required name="phone" value={form.phone} onChange={handleChange} placeholder="+91 " />
              </label>
              <label>Shipping Address
                <textarea required name="address" value={form.address} onChange={handleChange} rows={3} placeholder="Full address for prize delivery" />
              </label>
              <div className={styles.deadline}>Claim Deadline: within 7 days of winner announcement</div>
              <button type="submit" className="veloop-btn veloop-btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Submit Claim
              </button>
            </form>
          </>
        )}

        {submitted && (
          <div className={styles.successBox}>
            <FiCheckCircle className={styles.successIcon} />
            <h3 className={styles.title}>
              {mode === "claimPrize" ? "Claim Submitted!" : "You're In!"}
            </h3>
            <p className={styles.desc}>
              {mode === "claimPrize"
                ? "Our team will verify your details and contact you shortly."
                : "Good luck — winners are announced once the countdown ends."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
