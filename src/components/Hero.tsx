import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection} id="about">
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.statusBadge}>
          <span className="status-dot" aria-hidden="true"></span>
          <span>Available for open-source & engineering projects</span>
        </div>

        <h1 className={styles.heroTitle}>
          Hi, I&apos;m <span className={styles.highlight}>Veasna</span>.
          <br />
          I build high-performance web systems, games & tools.
        </h1>

        <p className={styles.heroDescription}>
          Software developer focused on TypeScript, Next.js, 2D game loops, system architectures, and interactive browser applications. Hosted live on GitHub Pages.
        </p>

        <div className={styles.heroActions}>
          <Link href="#projects" className="btn btn-primary" id="hero-cta-projects">
            <span>Explore Projects</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
          <Link href="#contact" className="btn btn-secondary" id="hero-cta-contact">
            <span>Get in Touch</span>
          </Link>
          <a
            href="https://github.com/veasnawt"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-subtle"
            id="hero-cta-github"
          >
            <span>GitHub Profile</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>

        {/* Quick metrics bar */}
        <div className={styles.metricsGrid}>
          <div className={styles.metricCard}>
            <div className={styles.metricNumber}>8+</div>
            <div className={styles.metricLabel}>Engineered Systems & Apps</div>
          </div>
          <div className={styles.metricCard}>
            <div className={styles.metricNumber}>100%</div>
            <div className={styles.metricLabel}>Type-Safe TypeScript</div>
          </div>
          <div className={styles.metricCard}>
            <div className={styles.metricNumber}>60 FPS</div>
            <div className={styles.metricLabel}>Optimized Canvas & Loop Performance</div>
          </div>
          <div className={styles.metricCard}>
            <div className={styles.metricNumber}>CI/CD</div>
            <div className={styles.metricLabel}>GitHub Pages Automated Pipelines</div>
          </div>
        </div>
      </div>
    </section>
  );
}
