import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="badge" style={{ marginBottom: "0.75rem" }}>Get in Touch</div>
          <h2 className="section-title">Let's Build Something Useful</h2>
          <p className="section-subtitle">
            Interested in collaborating on software, systems research, or open source? Reach out through an actual contact channel.
          </p>
        </div>
        <div className={styles.contactGrid}>
          <div className={"card " + styles.infoCard}>
            <h3 className={styles.infoCardTitle}>Find Me on GitHub</h3>
            <p className={styles.infoCardText}>
              Explore my public work and see how the projects are built. GitHub is the best place to start.
            </p>
            <div className={styles.channelsList}>
              <a className={styles.channelItem} href="https://github.com/veasnawt" target="_blank" rel="noopener noreferrer" id="contact-github">
                <span className={styles.channelIcon} aria-hidden="true">↗</span>
                <span>
                  <span className={styles.channelLabel}>GitHub Profile</span>
                  <span className={styles.channelValue}>github.com/veasnawt</span>
                </span>
              </a>
            </div>
          </div>
          <div className={"card " + styles.formCard}>
            <h3 className={styles.infoCardTitle}>Have a question or a project idea?</h3>
            <p className={styles.infoCardText}>
              Open a GitHub issue on this portfolio repository for website feedback or a public collaboration inquiry. For project-specific reports, use the relevant repository.
            </p>
            <a
              className="btn btn-primary"
              href="https://github.com/veasnawt/veasnawt.github.io/issues/new"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-new-issue"
            >
              Open GitHub Issue
            </a>
            <p style={{ marginTop: "1rem", fontSize: "0.8125rem" }}>
              GitHub issues are public. Please do not share private information there.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
