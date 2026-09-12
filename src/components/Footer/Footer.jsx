import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="veloop-container">
        <p>© {new Date().getFullYear()} VELoop Rewards. All giveaway data on this page is for demonstration purposes.</p>
      </div>
    </footer>
  );
}
