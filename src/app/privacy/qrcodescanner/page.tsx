import type { Metadata } from "next";
import Link from "next/link";
import styles from "./privacy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy — QR Code & Barcode Scanner",
  description: "Privacy policy and data handling information for QR Code & Barcode Scanner by Veasna.",
};

export default function QrScannerPrivacyPolicy() {
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
          <strong>QR Code &amp; Barcode Scanner</strong> (Package ID: <code>com.veasnawt.qrcodescanner</code>)
        </p>
        <p className={styles.updated}>Last updated: October 5, 2026</p>

        <section className={styles.section}>
          <h2>1. Overview</h2>
          <p>
            Your privacy is a fundamental priority. <strong>QR Code &amp; Barcode Scanner</strong> is designed to perform fast, on-device barcode and QR code recognition without requiring account creation, scan uploads, or background tracking.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Permissions and Device Features</h2>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Permission / Feature</th>
                  <th>Purpose</th>
                  <th>Data Handling &amp; Storage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Camera</strong></td>
                  <td>Decoding QR codes and barcodes in real-time after explicit user permission.</td>
                  <td>Processed entirely on-device in volatile memory. Camera frames are never recorded, saved, or transmitted to any server.</td>
                </tr>
                <tr>
                  <td><strong>Gallery / Photo Picker</strong></td>
                  <td>Decoding a barcode from an image selected by the user.</td>
                  <td>Uses Android&apos;s system photo picker. Only the user-selected image is accessed temporarily to decode the code. No broad photo library access is requested.</td>
                </tr>
                <tr>
                  <td><strong>Clipboard</strong></td>
                  <td>Copying decoded text or generated content when the user taps &ldquo;Copy&rdquo;.</td>
                  <td>Stored locally in the Android system clipboard according to OS clipboard rules.</td>
                </tr>
                <tr>
                  <td><strong>External Intents</strong></td>
                  <td>Opening web links, email drafts, dialer, SMS, or Wi-Fi settings upon user tap.</td>
                  <td>Explicit user action only. No link or URL is opened automatically without review.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.section}>
          <h2>3. Data Storage and Retention</h2>
          <ul>
            <li>
              <strong>Scan History:</strong> Decoded results are saved locally on your device in app-private storage (AsyncStorage) for your convenience, capped at the most recent 200 items. History is never synced to external servers or cloud accounts. You can delete individual scans or clear history at any time in the app.
            </li>
            <li>
              <strong>QR Code Generation:</strong> Generated QR codes are produced on-device. Saved images are exported only to the user-selected folder via Android&apos;s system file picker.
            </li>
            <li>
              <strong>App Preferences:</strong> Display theme preference (system, light, or dark) is stored locally on the device.
            </li>
            <li>
              <strong>Uninstalling:</strong> Uninstalling the application deletes all app-private local storage, including scan history and preferences.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Third-Party Advertising and Consent (Google AdMob)</h2>
          <p>
            This app uses <strong>Google AdMob</strong> (Google Mobile Ads SDK) to display banner advertisements on non-scanning screens (History and Create screens only). No ads are shown on the active camera viewfinder or scan result screens.
          </p>
          <p>
            We use Google&apos;s <strong>User Messaging Platform (UMP)</strong> SDK to gather consent in applicable jurisdictions (including the European Economic Area, the UK, and Switzerland) and comply with privacy regulations.
          </p>
          <p>
            Depending on your consent choices and jurisdiction, Google Mobile Ads may collect and process:
          </p>
          <ul>
            <li>IP address (for general location/country determination)</li>
            <li>Advertising identifiers (e.g., Android Advertising ID)</li>
            <li>App performance and diagnostic metrics (crash logs, ad interaction data)</li>
          </ul>
          <p>
            Scan content and history are <strong>never</strong> shared with or sent to advertising providers. You can manage or revoke your consent preferences at any time in the app&apos;s <strong>Settings &rarr; Privacy Options</strong>.
          </p>
          <p>
            For more information on how Google processes data, please visit{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Google&apos;s Privacy &amp; Terms
            </a>
            .
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Children&apos;s Privacy</h2>
          <p>
            This application is not directed toward children under 13 years of age, and we do not knowingly collect personal information from children.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Changes to this Privacy Policy</h2>
          <p>
            We may update our Privacy Policy periodically. Any changes will be posted on this page with an updated revision date.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Contact Information</h2>
          <p>
            If you have any questions or feedback regarding this Privacy Policy or the app, please contact:
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
