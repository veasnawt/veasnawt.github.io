export interface Project {
  id: string;
  title: string;
  category: "systems" | "apps" | "tools";
  status: string;
  description: string;
  longDescription?: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  demoLabel?: string;
  featured?: boolean;
}

// A selected showcase, not a directory of every experiment.
export const projects: Project[] = [
  {
    id: "vos",
    title: "VOS",
    category: "systems",
    status: "Pre-alpha kernel research",
    description: "A from-scratch x86-64 operating-system kernel with memory isolation, user programs, system calls, and read-only filesystem access. Tested in QEMU, not yet a usable desktop OS.",
    longDescription: "Built primarily in freestanding C and x86 assembly. Work includes a protected higher-half kernel, ELF user programs, scheduler, IPC, read-only block storage, ext2 access, and emulator-based regression tests. This is independent from the Veasna OS desktop prototype.",
    tags: ["x86-64", "C", "Assembly", "Kernel", "QEMU"],
    githubUrl: "https://github.com/veasnawt/vos",
    featured: true,
  },
  {
    id: "pinly",
    title: "Pinly",
    category: "apps",
    status: "Published Android app",
    description: "A location-based social app where people can leave photos, videos, and messages at real places, then discover pins on a map or through their camera.",
    longDescription: "Pinly explores social discovery through physical places. Its Android release combines geographic pins, social content, and camera-based discovery.",
    tags: ["Location", "Social", "Maps", "Camera", "Android"],
    demoUrl: "https://play.google.com/store/apps/details?id=com.veasnawt.pinly",
    demoLabel: "Google Play",
    featured: true,
  },
  {
    id: "vcut",
    title: "VCut",
    category: "apps",
    status: "Public beta",
    description: "A video editor with multi-track timeline editing, keyframe animation, text tools, effects, and export workflows, available as a public beta.",
    longDescription: "VCut focuses on hands-on creative control for short-form video, including timeline workflows, animations, compositing, and support for Khmer typography.",
    tags: ["Video Editing", "Next.js", "Timeline", "FFmpeg", "Web"],
    demoUrl: "https://vcut.io/",
    demoLabel: "Visit VCut",
    featured: true,
  },
  {
    id: "vboard",
    title: "VBoard",
    category: "apps",
    status: "Published Android keyboard",
    description: "An Android keyboard that helps people type Khmer using Latin phonetics and shortcuts, converting input into Khmer script.",
    longDescription: "Built as a native Android input method with a shortcut dictionary and phonetic conversion engine. Designed around everyday Khmer-language typing.",
    tags: ["Kotlin", "Android", "IME", "Khmer", "Transliteration"],
    demoUrl: "https://play.google.com/store/apps/details?id=com.veasnawt.vboard",
    demoLabel: "Google Play",
  },
  {
    id: "vicons",
    title: "VIcons",
    category: "tools",
    status: "Open-source React package",
    description: "A reusable React icon library with 145+ consistent SVG icons, TypeScript support, and a shared 24×24 design grid.",
    longDescription: "A tree-shakeable library of scalable UI icons published as @veasnawt/vicons, with public documentation and an icon browser.",
    tags: ["React", "TypeScript", "SVG", "npm", "Open Source"],
    githubUrl: "https://github.com/veasnawt/vicons",
    demoUrl: "https://veasnawt.com/vicons/",
    demoLabel: "Explore Icons",
  },
  {
    id: "veasna-os",
    title: "Veasna OS Universe",
    category: "systems",
    status: "Creative desktop prototype",
    description: "An experimental desktop-style creative workspace with windows, files, and integrated studios. Built for the web and Electron, separate from the VOS kernel.",
    longDescription: "A standalone web/Electron project with a desktop shell and creative tools. It is not a desktop interface running on VOS, and is not presented as a general-purpose operating system.",
    tags: ["Next.js", "TypeScript", "Electron", "Desktop UI", "Prototype"],
    githubUrl: "https://github.com/veasnawt/veasna-os",
  },
];
