import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>© 2025 Game Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
