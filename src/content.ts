export type Language = "en" | "ja";

type Project = {
  name: string;
  description: string;
  url: string;
  mark: string;
  accentClass: string;
};

type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export type Content = {
  navigation: { label: string; href: string }[];
  controls: {
    switchToLight: string;
    switchToDark: string;
    switchToEnglish: string;
    switchToJapanese: string;
  };
  intro: { title: string; description: string; portraitAlt: string };
  skills: { title: string; description: string; groups: SkillGroup[] };
  projects: { title: string; description: string; items: Project[] };
};

const projects: Omit<Project, "description">[] = [
  { name: "Atlas", url: "https://example.com", mark: "A", accentClass: "bg-violet-700" },
  { name: "MotionKit", url: "https://example.com", mark: "M", accentClass: "bg-cyan-500" },
  { name: "Signal", url: "https://example.com", mark: "S", accentClass: "bg-rose-500" },
  { name: "OrbitOS", url: "https://example.com", mark: "O", accentClass: "bg-slate-900" },
  { name: "Launchpad", url: "https://example.com", mark: "L", accentClass: "bg-blue-500" },
];

export const content: Record<Language, Content> = {
  en: {
    navigation: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
    ],
    controls: { switchToLight: "Switch to light theme", switchToDark: "Switch to dark theme", switchToEnglish: "Switch language to English", switchToJapanese: "Switch language to Japanese" },
    intro: {
      title: "Hello, I'm Dmitrii — Web Developer.",
      description: "Based in Tokyo and available for new opportunities, I build thoughtful, reliable web applications across both frontend and backend. Explore my projects and experience, or get in touch to discuss an opportunity.",
      portraitAlt: "Dmitrii",
    },
    skills: {
      title: "Technologies I use, tools I trust, and qualifications I've earned.",
      description: "I work across frontend and backend development to build fast, accessible, and reliable web experiences. Here's a focused overview of the technologies I reach for, the tools that support my workflow, and the qualifications that have shaped my professional development.",
      groups: [
        { title: "Frontend", description: "Accessible, responsive interfaces built for speed and usability:", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "TanStack Query", "Zustand", "Vite", "Vitest", "Playwright"] },
        { title: "Backend", description: "Reliable APIs and data-driven systems built for scale and clarity:", skills: ["Node.js", "NestJS", "Express", "PostgreSQL", "Prisma", "Redis", "REST", "GraphQL", "Docker"] },
        { title: "Design", description: "Product design, delivery, and measurement for stronger outcomes:", skills: ["Figma", "Adobe Photoshop", "GitHub", "CI/CD", "Vercel", "Postman", "Google Analytics"] },
        { title: "Education", description: "Education and credentials supporting continued professional growth:", skills: ["BSc Computer Science — 2026", "JLPT N1", "EIKEN Grade 1", "Google Advanced Data Analytics Professional Certificate"] },
      ],
    },
    projects: {
      title: "Projects I've built, problems I've solved, and ideas I've brought to life.",
      description: "I approach each project with a focus on thoughtful decisions, reliable implementation, and a clear purpose. Here's a selection of work that shows how I turn ideas and requirements into polished web applications across the stack.",
      items: projects.map((project, index) => ({ ...project, description: ["A collaborative workspace for turning product plans into focused delivery.", "A lightweight animation toolkit for polished, high-performance interfaces.", "A real-time dashboard for tracking activity across distributed systems.", "An internal operating system for managing complex team workflows.", "A planning tool for preparing and coordinating product releases."][index] })),
    },
  },
  ja: {
    navigation: [
      { label: "プロフィール", href: "#about" },
      { label: "スキル", href: "#skills" },
      { label: "プロジェクト", href: "#projects" },
    ],
    controls: { switchToLight: "ライトテーマに切り替え", switchToDark: "ダークテーマに切り替え", switchToEnglish: "英語に切り替え", switchToJapanese: "日本語に切り替え" },
    intro: {
      title: "はじめまして、Web 開発者の Dmitrii です。",
      description: "東京を拠点に、新しい機会を探しています。フロントエンドからバックエンドまで、使いやすく信頼性の高い Web アプリケーションを開発します。プロジェクトや経験をご覧いただくか、お気軽にご連絡ください。",
      portraitAlt: "Dmitrii のポートレート",
    },
    skills: {
      title: "活用している技術、信頼するツール、そして取得した資格。",
      description: "フロントエンドとバックエンドの両方を扱い、高速でアクセシブル、かつ信頼性の高い Web 体験を構築しています。よく使う技術、ワークフローを支えるツール、そして専門性を育んできた資格をご紹介します。",
      groups: [
        { title: "フロントエンド", description: "速度と使いやすさを重視した、アクセシブルでレスポンシブなインターフェース:", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "TanStack Query", "Zustand", "Vite", "Vitest", "Playwright"] },
        { title: "バックエンド", description: "拡張性と明快さを備えた、信頼性の高い API とデータ駆動型システム:", skills: ["Node.js", "NestJS", "Express", "PostgreSQL", "Prisma", "Redis", "REST", "GraphQL", "Docker"] },
        { title: "デザイン", description: "より良い成果を生むための、プロダクトデザイン、デリバリー、分析:", skills: ["Figma", "Adobe Photoshop", "GitHub", "CI/CD", "Vercel", "Postman", "Google Analytics"] },
        { title: "学歴・資格", description: "継続的な専門的成長を支える学歴と資格:", skills: ["コンピュータサイエンス学士 — 2026", "JLPT N1", "英検 1 級", "Google 上級データアナリティクス プロフェッショナル認定証"] },
      ],
    },
    projects: {
      title: "形にしてきたプロジェクト、解決した課題、実現してきたアイデア。",
      description: "それぞれのプロジェクトで、慎重な判断、信頼性の高い実装、明確な目的を大切にしています。アイデアや要件を、フルスタックで洗練された Web アプリケーションへと変える仕事の一部をご紹介します。",
      items: projects.map((project, index) => ({ ...project, description: ["プロダクト計画を、集中して実行できる形へ変えるコラボレーションワークスペース。", "洗練された高性能インターフェースのための、軽量なアニメーションツールキット。", "分散システム全体のアクティビティを追跡するリアルタイムダッシュボード。", "複雑なチームワークフローを管理するための、社内向けオペレーティングシステム。", "プロダクトリリースの準備と調整を支援する計画ツール。"][index] })),
    },
  },
};
