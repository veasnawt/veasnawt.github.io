"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`} aria-label="Main Navigation">
        <Link href="#top" className={styles.logo} id="nav-logo" onClick={closeMenu}>
          <span className={styles.logoSymbol}>&gt;_</span>
          <span className={styles.logoText}>veasnawt</span>
        </Link>

        {/* Desktop Links */}
        <div className={styles.navGroup}>
          <ul className={styles.navLinks}>
            <li>
              <Link href="#about" className={styles.navLink} id="nav-about">
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" className={styles.navLink} id="nav-projects">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#skills" className={styles.navLink} id="nav-skills">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#terminal" className={styles.navLink} id="nav-terminal">
                Terminal
              </Link>
            </li>
            <li>
              <Link href="#contact" className={styles.navLink} id="nav-contact">
                Contact
              </Link>
            </li>
          </ul>

          <div className={styles.navActions}>
            <a
              href="https://github.com/veasnawt"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubLink}
              id="nav-github-link"
              aria-label="GitHub Profile"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>

            <ThemeToggle />

            {/* Mobile menu toggle */}
            <button
              id="mobile-menu-toggle"
              type="button"
              className={styles.menuBtn}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu} id="mobile-menu-dropdown">
          <ul className={styles.mobileNavLinks}>
            <li>
              <Link href="#about" className={styles.mobileNavLink} onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" className={styles.mobileNavLink} onClick={closeMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="#skills" className={styles.mobileNavLink} onClick={closeMenu}>
                Skills
              </Link>
            </li>
            <li>
              <Link href="#terminal" className={styles.mobileNavLink} onClick={closeMenu}>
                Terminal
              </Link>
            </li>
            <li>
              <Link href="#contact" className={styles.mobileNavLink} onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
