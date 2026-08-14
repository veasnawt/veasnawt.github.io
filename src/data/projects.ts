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
    description: "A web-based desktop operating system environment featuring a window manager, virtual file system, customizable shell terminal, and built-in utility apps.",
    longDescription: "Engineered with TypeScript, canvas rendering, and a stateful virtual process manager to replicate desktop ergonomics directly within the browser.",
    tags: ["TypeScript", "Next.js", "Virtual FS", "Windowing", "CSS Modules"],
    githubUrl: "https://github.com/veasnawt/veasna-os",
    demoUrl: "https://veasnawt.github.io/veasna-os",
    featured: true,
    metrics: "Full desktop multitasking",
  },
  {
    id: "loom-rpg",
    title: "Loom RPG & Engine",
    category: "games",
    description: "Modular 2D RPG engine and fantasy interactive game built from scratch with custom physics, tilemap rendering, dialogue systems, and quest state machines.",
    longDescription: "Features an entity-component-system (ECS) architecture, tilemap collisions, audio synthesizer integration, and high-framerate canvas loop.",
    tags: ["TypeScript", "Canvas 2D", "ECS Architecture", "Game Loop", "Audio API"],
    githubUrl: "https://github.com/veasnawt/loom-engine",
    demoUrl: "https://veasnawt.github.io/loom-rpg",
    featured: true,
    metrics: "60 FPS rendering pipeline",
  },
  {
    id: "vboard",
    title: "VBoard",
    category: "web",
    description: "Infinite collaborative canvas for visual ideation, flowcharts, real-time sketching, and system diagramming with state persistence and export capabilities.",
    longDescription: "Built with smooth vector geometry math, customizable stroke engines, infinite zooming, and zero-latency local caching.",
    tags: ["Next.js", "TypeScript", "HTML5 Canvas", "Vector Math", "IndexedDB"],
    githubUrl: "https://github.com/veasnawt/VBoard",
    demoUrl: "https://veasnawt.github.io/VBoard",
    featured: true,
    metrics: "Infinite canvas & vector shapes",
  },
  {
    id: "nextgen-academy",
    title: "NextGen Academy",
    category: "web",
    description: "Full-scale modern interactive learning platform with student progress tracking, live code challenges, dynamic lesson plans, and analytics dashboard.",
    longDescription: "Features accessible lesson navigation, interactive quizzes, progress analytics, and responsive study tools.",
    tags: ["Next.js", "React", "TypeScript", "REST APIs", "Modern UI"],
    githubUrl: "https://github.com/veasnawt/nextgen-academy",
    demoUrl: "https://veasnawt.github.io/nextgen-academy",
    featured: false,
    metrics: "Interactive courseware engine",
  },
  {
    id: "rixie",
    title: "Rixie Utility Suite",
    category: "tools",
    description: "Suite of lightweight developer utilities, formatters, and reactive automation helpers designed for rapid developer workflows.",
    longDescription: "Optimized for sub-millisecond execution times and intuitive CLI-inspired keyboard shortcuts.",
    tags: ["TypeScript", "Node.js", "Tooling", "Algorithms"],
    githubUrl: "https://github.com/veasnawt/rixie",
    demoUrl: "https://veasnawt.github.io/rixie",
    featured: false,
    metrics: "Zero external dependencies",
  },
];
