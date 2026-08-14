"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import styles from "./InteractiveTerminal.module.css";

interface TerminalLine {
  id: string;
  type: "input" | "output" | "error" | "system";
  text: string;
}

export default function InteractiveTerminal() {
  const [inputVal, setInputVal] = useState("");
  const idCounter = useRef(2);
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      id: "line-1",
      type: "system",
      text: "Veasna Interactive Shell v1.0.0 (x86_64-veasnawt-web)",
    },
    {
      id: "line-2",
      type: "output",
      text: "Type 'help' or click quick command buttons below to interact.",
    },
  ]);
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Only scroll the internal terminal container, never the browser window
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const nextId = (tag: string) => {
    idCounter.current += 1;
    return `term-${tag}-${idCounter.current}`;
  };

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    const lower = trimmed.toLowerCase();

    if (lower === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    const inputLine: TerminalLine = {
      id: nextId("in"),
      type: "input",
      text: trimmed,
    };

    let outputLine: TerminalLine;

    if (lower === "help") {
      outputLine = {
        id: nextId("out"),
        type: "output",
        text: `Available commands:
  • whoami      - Display developer identity and focus
  • projects    - List all active engineered projects
  • skills      - Show technical specialties & tools
  • contact     - Output contact and GitHub links
  • date        - Print current session timestamp
  • clear       - Reset the terminal screen`,
      };
    } else if (lower === "whoami") {
      outputLine = {
        id: nextId("out"),
        type: "output",
        text: "Veasna (@veasnawt) - Software Engineer & Systems Developer creating web environments, interactive engines, and modular tools.",
      };
    } else if (lower === "projects") {
      outputLine = {
        id: nextId("out"),
        type: "output",
        text: `Active Projects:
  1. Veasna OS    -> Web-based desktop OS & universe for creators
  2. Loom Engine  -> Web 2D game engine & visual studio for Loom
  3. Loom         -> Declarative language for programming worlds
  4. VBoard       -> Khmer transliteration keyboard for Android
  5. Rixie        -> Intelligent AI assistant inside Veasna OS
  6. VStudio      -> Fast short-form creative video editor
  7. VIcons       -> Minimalist SVG icon library for React (130+ icons)
  8. codelover    -> Aesthetic dark theme for Visual Studio Code`,
      };
    } else if (lower === "skills") {
      outputLine = {
        id: nextId("out"),
        type: "output",
        text: "Core Stack: TypeScript, Next.js, React, Node.js, Canvas 2D/WebGL, CSS Modules, Git & CI/CD.",
      };
    } else if (lower === "contact") {
      outputLine = {
        id: nextId("out"),
        type: "output",
        text: "GitHub: https://github.com/veasnawt\nWebsite: https://veasnawt.github.io\nStatus: Open for collaborations and discussions.",
      };
    } else if (lower === "date") {
      outputLine = {
        id: nextId("out"),
        type: "output",
        text: "Active session running in client browser environment.",
      };
    } else {
      outputLine = {
        id: nextId("err"),
        type: "error",
        text: `Command not found: "${trimmed}". Type 'help' for a list of commands.`,
      };
    }

    setHistory((prev) => [...prev, inputLine, outputLine]);
    setInputVal("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand(inputVal);
    }
  };

  const executeQuick = (cmd: string) => {
    handleCommand(cmd);
    inputRef.current?.focus({ preventScroll: true });
  };

  return (
    <section className="section" id="terminal">
      <div className="container">
        <div className="section-header">
          <div className="badge" style={{ marginBottom: "0.75rem" }}>
            Interactive Console
          </div>
          <h2 className="section-title">Developer Terminal</h2>
          <p className="section-subtitle">
            Execute interactive shell commands to query system metadata, projects, and architecture notes.
          </p>
        </div>

        <div className={styles.terminalWindow}>
          <div className={styles.terminalBar}>
            <div className={styles.windowControls}>
              <span className={`${styles.dot} ${styles.dotRed}`}></span>
              <span className={`${styles.dot} ${styles.dotYellow}`}></span>
              <span className={`${styles.dot} ${styles.dotGreen}`}></span>
            </div>
            <span className={styles.terminalTitle}>veasna@github.io: ~</span>
            <div className={styles.emptySpacer}></div>
          </div>

          <div
            ref={terminalBodyRef}
            className={styles.terminalBody}
            onClick={() => inputRef.current?.focus({ preventScroll: true })}
          >
            {history.map((line) => (
              <div key={line.id} className={`${styles.line} ${styles[line.type]}`}>
                {line.type === "input" ? (
                  <span className={styles.promptPrefix}>veasna@github:~$ </span>
                ) : null}
                <span className={styles.lineContent}>{line.text}</span>
              </div>
            ))}

            <div className={styles.inputRow}>
              <span className={styles.promptPrefix}>veasna@github:~$ </span>
              <input
                ref={inputRef}
                id="terminal-input"
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                className={styles.terminalInput}
                autoComplete="off"
                spellCheck="false"
                aria-label="Terminal input"
              />
            </div>
          </div>

          {/* Quick command buttons */}
          <div className={styles.quickCommands}>
            <span className={styles.quickLabel}>Quick actions:</span>
            {["help", "whoami", "projects", "skills", "contact", "clear"].map(
              (cmd) => (
                <button
                  key={cmd}
                  type="button"
                  onClick={() => executeQuick(cmd)}
                  className={styles.quickBtn}
                  id={`terminal-btn-${cmd}`}
                >
                  {cmd}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
