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
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
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
  1. Veasna OS    -> Web-based desktop operating system simulator
  2. Loom RPG     -> 2D Canvas RPG engine with custom physics loop
  3. VBoard       -> Real-time visual collaboration & diagram canvas
  4. NextGen      -> Interactive online academy and lesson system
  5. Rixie        -> Modular CLI & developer utility suite`,
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
      handleCommand(inputVal);
    }
  };

  const executeQuick = (cmd: string) => {
    handleCommand(cmd);
    inputRef.current?.focus();
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
            className={styles.terminalBody}
            onClick={() => inputRef.current?.focus()}
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
            <div ref={terminalEndRef} />
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
