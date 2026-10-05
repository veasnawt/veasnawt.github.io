import type { Metadata } from "next";
import Link from "next/link";
import styles from "./privacy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy — Khmer Expense Tracker",
  description: "Privacy policy and offline-first data handling information for Khmer Expense Tracker (com.veasnawt.expenze) by Veasna.",
};

export default function ExpenzePrivacyPolicy() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <Link href="/" className={styles.backLink}>
            &larr; Back to veasnawt.github.io
          </Link>
          <span className={styles.appBadge}>Android App</span>
        </div>
      </header>

      <main className={`container ${styles.content}`}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.subtitle}>
          <strong>Khmer Expense Tracker</strong> (Package ID: <code>com.veasnawt.expenze</code>)
        </p>
        <p className={styles.updated}>Last updated: October 5, 2026</p>

        <section className={styles.section}>
          <h2>1. Overview &amp; Local-First Architecture</h2>
          <p>
            Your financial privacy is our highest priority. <strong>Khmer Expense Tracker</strong> is designed and engineered from the ground up as a <strong>100% offline, local-first personal finance application</strong>.
          </p>
          <ul>
            <li><strong>No Account Required:</strong> You are never required to register, sign in, or provide an email address, phone number, or credentials.</li>
            <li><strong>No Cloud Servers:</strong> We do not operate or connect to any remote database, authentication server, or backend service.</li>
            <li><strong>No Third-Party Analytics:</strong> There are no tracking, user-profiling, telemetry, or analytics SDKs embedded in the app.</li>
            <li><strong>No Advertising:</strong> The app does not display advertisements or connect to advertising networks.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>2. Data Collection and Storage</h2>
          <p>
            All data created while using Khmer Expense Tracker remains strictly on your device inside the application&apos;s private sandbox.
          </p>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Data Type</th>
                  <th>Purpose</th>
                  <th>Storage Location &amp; Transmission</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Financial Records</strong> (Expenses, Incomes, Amounts, Dates, Notes)</td>
                  <td>Core expense tracking, budget calculation, and monthly financial summaries.</td>
                  <td>Stored exclusively in your device&apos;s local SQLite database. <strong>Never transmitted off your device.</strong></td>
                </tr>
                <tr>
                  <td><strong>Categories &amp; Currency Preferences</strong></td>
                  <td>Customizing budget categories, icons, and dual-currency display (USD $ / KHR ៛).</td>
                  <td>Stored locally on-device. <strong>Never transmitted off your device.</strong></td>
                </tr>
                <tr>
                  <td><strong>Backup Files</strong> (JSON &amp; CSV Exports)</td>
                  <td>User-initiated manual data backup and spreadsheet export.</td>
                  <td>Generated in temporary app cache only upon explicit user request, then passed directly to the Android system share sheet. <strong>Never uploaded automatically.</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.section}>
          <h2>3. Device Permissions</h2>
          <p>
            Khmer Expense Tracker adheres strictly to the principle of minimal permissions:
          </p>
          <ul>
            <li><strong>No Broad Storage Access:</strong> Broad external storage permissions (<code>READ_EXTERNAL_STORAGE</code>, <code>WRITE_EXTERNAL_STORAGE</code>) are explicitly blocked. Backups and exports use Android&apos;s standard scoped file sharing.</li>
            <li><strong>No Sensitive Permissions:</strong> The app does not request or access camera, contacts, phone state, microphone, location, or biometric data.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. User Data Ownership, Deletion &amp; Control</h2>
          <p>
            Because all information is stored locally on your device, you have complete ownership and control over your records:
          </p>
          <ul>
            <li><strong>Individual Record Deletion:</strong> You can edit or delete any transaction, category, or note at any time.</li>
            <li><strong>Full Data Wipe:</strong> You can permanently delete all transactions and reset the application via <em>Settings &gt; Clear All Data</em>.</li>
            <li><strong>Uninstallation:</strong> Uninstalling the application from your Android device immediately and irreversibly deletes the local SQLite database and all associated preferences.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>5. Data Security</h2>
          <p>
            Your financial data is protected by Android&apos;s application sandboxing architecture, ensuring that no other installed apps can access Khmer Expense Tracker&apos;s internal database. We encourage users to maintain standard device security protections, such as screen locks (PIN, password, or biometrics).
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Children&apos;s Privacy</h2>
          <p>
            Khmer Expense Tracker does not collect any personal information from any user, including children under 13 years of age.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Changes to this Privacy Policy</h2>
          <p>
            If we update this Privacy Policy, the revised policy will be posted on this page with an updated revision date.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Contact Information</h2>
          <p>
            If you have any questions or feedback regarding this Privacy Policy or Khmer Expense Tracker, please contact:
          </p>
          <p>
            <strong>Developer:</strong> Veasna<br />
            <strong>Email:</strong>{" "}
            <a href="mailto:veasnawt@gmail.com" className={styles.link}>
              veasnawt@gmail.com
            </a><br />
            <strong>Website:</strong>{" "}
            <a href="https://veasnawt.github.io" className={styles.link}>
              https://veasnawt.github.io
            </a>
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={`container ${styles.footerContainer}`}>
          <p>&copy; {new Date().getFullYear()} Veasna. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
