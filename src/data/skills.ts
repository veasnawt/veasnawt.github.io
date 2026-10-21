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
    title: "Kernel & Systems",
    skills: [
      { name: "Freestanding C & x86 Assembly", level: "Kernel", description: "Boot code, CPU interrupts, page tables, and low-level system primitives." },
      { name: "Memory & Process Isolation", level: "VOS", description: "ELF user programs, system calls, protected memory, scheduling, and IPC." },
      { name: "Read-only Storage & ext2", level: "Research", description: "Virtio block access, caching, and filesystem reads in the VOS kernel." },
      { name: "QEMU & Regression Testing", level: "Testing", description: "Automated emulator-based checks for boot, isolation, and failure paths." },
    ],
  },
  {
    title: "Web & Mobile Products",
    skills: [
      { name: "React, Next.js & TypeScript", level: "Web", description: "Interactive applications, component architecture, and static-site delivery." },
      { name: "Android & Kotlin", level: "Mobile", description: "Native Android development and Khmer input method software." },
      { name: "Editing & Media Pipelines", level: "Video", description: "Timeline interactions, keyframes, preview behavior, and FFmpeg workflows." },
      { name: "Location-based Experiences", level: "Maps", description: "Geo-tagged content discovery and map-centered social applications." },
    ],
  },
  {
    title: "Engineering & Delivery",
    skills: [
      { name: "APIs & Backend Services", level: "Backend", description: "Application APIs, integration work, and service-oriented architecture." },
      { name: "Git & GitHub Actions", level: "DevOps", description: "Version control, automated builds, and CI/CD pipelines." },
      { name: "Open-source UI Libraries", level: "Tooling", description: "Typed components, reusable SVG assets, and developer documentation." },
    ],
  },
];
