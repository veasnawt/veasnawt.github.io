export interface Project {
  id: string;
  title: string;
  category: "systems" | "games" | "web" | "tools";
  description: string;
  longDescription?: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
  metrics?: string;
}

export const projects: Project[] = [
  {
    id: "veasna-os",
    title: "Veasna OS",
    category: "systems",
    description: "A web-based desktop operating system environment and universe for creators, featuring a window manager, virtual file system, customizable shell terminal, and built-in creative studios.",
    longDescription: "Engineered with TypeScript, canvas rendering, and a stateful virtual process manager to replicate desktop ergonomics directly within the browser.",
    tags: ["TypeScript", "Next.js", "Virtual FS", "Windowing", "OS"],
    githubUrl: "https://github.com/veasnawt/veasna-os",
    demoUrl: "https://veasnawt.github.io/veasna-os",
    featured: true,
    metrics: "Full desktop multitasking",
  },
  {
    id: "loom-engine",
    title: "Loom Engine",
    category: "games",
    description: "A web-based 2D game engine and studio for creating games with the Loom programming language, featuring a visual viewport, hierarchy panel, tilemap editor, sprite studio, and live entity inspector.",
    longDescription: "Powered by React, TypeScript, and Vite with a custom 2D canvas rendering loop, real-time code synchronization, state persistence, and modular game preset support.",
    tags: ["TypeScript", "React", "Game Engine", "Canvas 2D", "Vite"],
    githubUrl: "https://github.com/veasnawt/loom-engine",
    demoUrl: "https://veasnawt.github.io/loom-engine",
    featured: true,
    metrics: "60 FPS rendering pipeline",
  },
  {
    id: "loom",
    title: "Loom",
    category: "systems",
    description: "A declarative domain-specific programming language designed for defining interactive worlds, entities, relations, reactive rules, and temporal state.",
    longDescription: "Built from scratch with a custom lexer, AST parser, temporal event loop, rule evaluation engine, and CLI runner for deterministic simulation.",
    tags: ["Compiler", "AST", "Interpreter", "JavaScript", "DSL"],
    githubUrl: "https://github.com/veasnawt/Loom",
    featured: true,
    metrics: "Declarative world simulation",
  },
  {
    id: "vboard",
    title: "VBoard",
    category: "tools",
    description: "A modern Khmer transliteration keyboard (IME) for Android that converts Latin phonetic shortcuts into Khmer script in real time as you type.",
    longDescription: "Engineered with a two-layer conversion pipeline (instant exact dictionary lookup with a phonetic rule-based fallback engine), zero telemetry, lightweight APK footprint, and privacy-first architecture.",
    tags: ["Android", "Kotlin", "IME", "Khmer", "Transliteration"],
    githubUrl: "https://github.com/veasnawt/vboard",
    demoUrl: "https://play.google.com/store/apps/details?id=com.veasnawt.vboard",
    featured: true,
    metrics: "Real-time IME transliteration",
  },
  {
    id: "rixie",
    title: "Rixie",
    category: "systems",
    description: "An autonomous AI assistant integrated inside Veasna OS, equipped with long-term SQLite persistent memory, multi-provider LLM intelligence, and domain tool execution.",
    longDescription: "Designed as a persistent companion that remembers context across sessions, reasons, and executes studio actions across creative tools in Veasna OS.",
    tags: ["AI Assistant", "TypeScript", "LLMs", "SQLite", "Veasna OS"],
    githubUrl: "https://github.com/veasnawt/rixie",
    featured: false,
    metrics: "Persistent SQLite memory",
  },
  {
    id: "vstudio",
    title: "VStudio",
    category: "tools",
    description: "A fast, focused video editor for short-form creative work, serving as the creation stage for BP Studio and integrated into Veasna OS.",
    longDescription: "Features non-destructive multi-track timeline editing, real-time preview transformations (position, scale, rotation, crop), and automated FFmpeg export pipeline.",
    tags: ["TypeScript", "Video Editor", "FFmpeg", "Timeline", "Node.js"],
    githubUrl: "https://github.com/veasnawt/vstudio",
    featured: false,
    metrics: "Non-destructive timeline",
  },
  {
    id: "vicons",
    title: "VIcons",
    category: "web",
    description: "A premium minimalist SVG icon library for React, featuring 130+ pixel-perfect outline icons crafted on a consistent 24×24 grid.",
    longDescription: "Designed for modern React web applications with tree-shaking, full TypeScript support, zero runtime overhead, and published on npm as @veasnawt/vicons.",
    tags: ["React", "TypeScript", "SVG Icons", "NPM Package", "UI Library"],
    githubUrl: "https://github.com/veasnawt/vicons",
    demoUrl: "https://veasnawt.github.io/vicons",
    featured: false,
    metrics: "130+ minimalist icons",
  },
  {
    id: "codelover",
    title: "codelover",
    category: "tools",
    description: "A clean, aesthetic, and modern dark VS Code theme designed with carefully tuned syntax highlighting for code lovers.",
    longDescription: "Published on the Visual Studio Code Marketplace with balanced contrast, readable scopes, and refined palette harmony.",
    tags: ["VS Code", "Theme", "Aesthetics", "Developer Tools", "Syntax Highlighting"],
    githubUrl: "https://github.com/veasnawt/codelover",
    demoUrl: "https://marketplace.visualstudio.com/items?itemName=veasnawt.codelover",
    featured: false,
    metrics: "VS Code Marketplace theme",
  },
];
