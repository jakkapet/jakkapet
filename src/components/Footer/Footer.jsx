import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <p className={styles.kicker}>Let's work together</p>
          <h2>Jakkapet Madming-ngao</h2>
          <p className={styles.id}>Student ID 6740200412 · My Portfolio</p>
        </div>
        <a className={styles.cta} href="mailto:jakkapet@example.com">
          Contact Me
        </a>
      </div>
      <p className={styles.copy}>
        Copyright © {new Date().getFullYear()} Jakkapet Madming-ngao. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
