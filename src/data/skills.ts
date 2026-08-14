export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: string;
    description: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend & Architecture",
    skills: [
      { name: "TypeScript", level: "Advanced", description: "Type systems, generics, strict AST validation" },
      { name: "Next.js & React", level: "Advanced", description: "App Router, SSR, SSG static exports, React Server Components" },
      { name: "Vanilla CSS & Modern Layouts", level: "Expert", description: "CSS variables, Grid, Flexbox, subgrid, micro-animations" },
      { name: "Canvas 2D & WebGL", level: "Proficient", description: "High-framerate rendering loops, custom engines, physics math" },
    ],
  },
  {
    title: "Backend & Systems",
    skills: [
      { name: "Node.js & Runtime APIs", level: "Advanced", description: "Asynchronous I/O, streams, worker threads, CLI tooling" },
      { name: "REST & GraphQL", level: "Proficient", description: "API design, schema validation, rate-limiting, error handling" },
      { name: "State & Data Persistence", level: "Advanced", description: "IndexedDB, LocalStorage, state machines, reactive stores" },
      { name: "System Design", level: "Proficient", description: "Modular component architecture, event-driven patterns" },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub Actions", level: "Advanced", description: "CI/CD pipelines, automated Pages deployments, release tags" },
      { name: "Performance & SEO", level: "Advanced", description: "Core Web Vitals, bundle tree-shaking, accessibility (a11y)" },
      { name: "Vite & Bundlers", level: "Proficient", description: "ESBuild, rollup configs, asset pipelines" },
    ],
  },
];
