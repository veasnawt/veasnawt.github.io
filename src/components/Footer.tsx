import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.brandRow}>
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              <span className={styles.logoSymbol}>&gt;_</span>
              <span>veasnawt</span>
            </div>
            <p className={styles.tagline}>
              Engineering systems, 2D game loops, web applications, and modular developer tools.
            </p>
          </div>

          <div className={styles.linksGroup}>
            <div className={styles.navGroup}>
              <div className={styles.groupTitle}>Navigation</div>
              <ul className={styles.linkList}>
                <li>
                  <Link href="#about">About</Link>
                </li>
                <li>
                  <Link href="#projects">Projects</Link>
                </li>
                <li>
                  <Link href="#skills">Skills</Link>
                </li>
                <li>
                  <Link href="#terminal">Terminal</Link>
                </li>
              </ul>
            </div>

            <div className={styles.navGroup}>
              <div className={styles.groupTitle}>Connect</div>
              <ul className={styles.linkList}>
                <li>
                  <a href="https://github.com/veasnawt" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
                <li>
                  <Link href="#contact">Contact Form</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Veasna (@veasnawt). Hosted statically on GitHub Pages.
          </p>
          <div className={styles.hostBadge}>
            <span className={styles.hostDot}></span>
            <span>veasnawt.github.io</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
