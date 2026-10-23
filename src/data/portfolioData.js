export const personalInfo = {
  name: 'Ale Sathwik Netha',
  handle: 'sathwikale2412',
  title: 'Full Stack Engineer & Security Builder',
  tagline: 'Architecting resilient full-stack web applications, zero-knowledge security systems, and AI-powered operational tools.',
  location: 'Hyderabad, Telangana, India',
  email: 'sathwikale31@gmail.com',
  phone: '+91 9000848123',
  github: 'https://github.com/sathwikale2412',
  status: 'Available for full-time engineering roles & collaborations',
  bio: `I am a software engineer with a deep passion for building high-reliability web applications, hardened database architectures, and secure client-server systems. 
  From real-time automotive fleet maintenance systems to end-to-end encrypted vaults and cognitive simulation engines, I build software that balances intuitive UX with rigorous security principles like Row Level Security (RLS), CSP enforcement, and fail-closed design.`,
  stats: [
    { value: '8+', label: 'Shipped Applications' },
    { value: '100%', label: 'RLS Security Hardening' },
    { value: '6+', label: 'Production Cloud Deploys' },
    { value: 'Zero', label: 'Third-Party Dependency Leaks' },
  ],
};

export const projects = [
  {
    id: 'vsrms',
    title: 'Vehicle Service Record Management System (VSRMS)',
    subtitle: 'Automotive maintenance ledger & AI diagnostic fleet assistant',
    category: 'Cloud & AI',
    featured: true,
    liveUrl: 'https://vehicle-service-management-pink.vercel.app',
    githubUrl: 'https://github.com/sathwikale2412/vehicle-service-management',
    description:
      'A comprehensive automotive management platform featuring predictive AI maintenance diagnostics, automated service milestone forecasting, financial expense categorization, and an interactive real-time IST clock.',
    highlights: [
      'Dual-engine AI diagnostic assistant with local automotive expert rules + LLM fallback',
      'Dynamic user-scoped fleet tracking with individual odometer health degradation scoring',
      'SQLite & Supabase RLS database session continuation across reloads',
      'Exportable CSV financial audit reports and urgency countdown reminders',
    ],
    techStack: ['React 19', 'Python (Flask)', 'SQLite', 'Supabase RLS', 'Vite', 'Lucide Icons'],
  },
  {
    id: 'daytodayactivity',
    title: 'Day to Day Activity',
    subtitle: 'Cross-device habit scheduler & routine management suite',
    category: 'Full Stack',
    featured: true,
    liveUrl: 'https://daytodayactivity-web.vercel.app',
    githubUrl: 'https://github.com/sathwikale2412/daytodayactivity-web',
    description:
      'Converted from an Android project into a modern cloud web app with multi-device PostgreSQL synchronization via Supabase and an offline IndexedDB guest sandbox.',
    highlights: [
      'Full Supabase Auth & PostgreSQL Row Level Security policy enforcement',
      'Dual storage engine: Instant guest IndexedDB fallback + cloud persistent sync',
      'Habit analytics, streak visualization, and notification alerts',
    ],
    techStack: ['React', 'Supabase (PostgreSQL)', 'IndexedDB', 'Vite', 'Tailwind CSS'],
  },
  {
    id: 'cadat',
    title: 'CADAT — Railway Cognitive Test Platform',
    subtitle: 'High-frequency psychomotor assessment & aptitude simulator',
    category: 'Full Stack',
    featured: true,
    liveUrl: 'https://cadat-railway-psycho-test.vercel.app',
    githubUrl: 'https://github.com/sathwikale2412/cadat-railway-psycho-test',
    description:
      'A precision cognitive drill and psychomotor assessment application tailored to Indian Railways loco pilot evaluation standards with sub-millisecond reaction timing.',
    highlights: [
      'Interactive canvas-based reaction timing & spatial visualization tests',
      'Append-only Supabase RLS audit records for candidate score integrity',
      'Fail-closed offline fallback with dismissible sync health notices',
    ],
    techStack: ['React', 'HTML5 Canvas', 'Supabase Auth & RLS', 'Vite'],
  },
  {
    id: 'argo',
    title: 'ARGO — Agri Scheme Recommender',
    subtitle: 'Multi-lingual agricultural scheme matching & subsidy discovery',
    category: 'Cloud & AI',
    featured: true,
    liveUrl: 'https://argo-scheme-recomender.vercel.app',
    githubUrl: 'https://github.com/sathwikale2412/ARGO_SCHEME_RECOMENDER',
    description:
      'An intelligent eligibility discovery platform matching Indian farmers with state and central agricultural subsidies, loans, and irrigation grants based on landholding and state criteria.',
    highlights: [
      'Multi-word semantic search and ranking engine across 36+ verified schemes',
      'Python Flask API gateway with microservice health probe and database fallback',
      'Bilingual interface with responsive accessibility controls',
    ],
    techStack: ['React', 'Python (Flask)', 'PostgreSQL', 'Vercel Serverless'],
  },
  {
    id: 'studymate',
    title: 'StudyMate — On-Device PDF AI Assistant',
    subtitle: 'In-browser document QA, translation & code-to-flowchart engine',
    category: 'Cloud & AI',
    featured: true,
    liveUrl: 'https://studymate-web.vercel.app',
    githubUrl: 'https://github.com/sathwikale2412/studymate',
    description:
      'A privacy-first document intelligence platform where multi-megabyte lecture PDFs are ingested and queried entirely on-device, bypassing serverless upload size bottlenecks.',
    highlights: [
      'Client-side PDF.js vector extraction & extractive QA pipeline',
      'Serverless Python gateway for translation (Telugu/Hindi) and PyFlowchart generation',
      'Strict Content Security Policy (CSP) blocking external telemetry leaks',
    ],
    techStack: ['React 19', 'PDF.js', 'Python (Flask)', 'PyFlowchart', 'Supabase'],
  },
  {
    id: 'aegiszero',
    title: 'AegisZero — Security & Governance Gateway',
    subtitle: 'Zero-trust incident response relay & access governance portal',
    category: 'Security & Systems',
    featured: true,
    liveUrl: 'https://aegiszero-frontend.vercel.app',
    githubUrl: 'https://github.com/sathwikale2412/aegiszero-frontend',
    description:
      'A security operations console coordinating access reviews, audit logs, and automated incident response webhook dispatch to enterprise Workato endpoints.',
    highlights: [
      'Fail-closed API gateway requiring authenticated bearer tokens for webhook triggers',
      'Append-only immutable audit trail with cryptographic session signatures',
      'Strict CSRF, anti-clickjacking, and nosniff HTTP header compliance',
    ],
    techStack: ['React', 'Python', 'Workato Webhooks', 'Supabase RLS', 'Vite'],
  },
  {
    id: 'cyphercore',
    title: 'BuildSecure CypherCore',
    subtitle: 'Zero-knowledge end-to-end encrypted credential vault',
    category: 'Security & Systems',
    featured: false,
    liveUrl: 'https://buildsecure-cyphercore.vercel.app',
    githubUrl: 'https://github.com/sathwikale2412/buildsecure-cyphercore',
    description:
      'A high-security credential vault utilizing the browser Web Crypto API. Encryption keys are derived client-side via PBKDF2; servers only store encrypted ciphertext.',
    highlights: [
      'Client-side AES-GCM-256 encryption with 100,000-iteration PBKDF2 salt derivation',
      'Zero server plaintext exposure: vault keys never leave device memory',
      'Master password recovery protections and clipboard auto-clear timers',
    ],
    techStack: ['Web Crypto API', 'React', 'Supabase Vault', 'JavaScript (ES6+)'],
  },
  {
    id: 'focusshield',
    title: 'Focus Shield — Offline Android App',
    subtitle: 'Zero-permission distraction blocker & focus enforcement tool',
    category: 'Mobile',
    featured: false,
    liveUrl: null,
    githubUrl: 'https://github.com/sathwikale2412/focus-shield',
    description:
      'An offline Android application designed to enforce distraction-free focus sessions. Operates with zero INTERNET permission, eliminating any possibility of data harvesting.',
    highlights: [
      'Native Android Accessibility Service to intercept and block addictive packages',
      'Zero network permission footprint (cannot establish HTTP sockets)',
      'Lightweight local SQLite state and customized strict blocking schedules',
    ],
    techStack: ['Kotlin', 'Android SDK', 'Accessibility Service', 'SQLite'],
  },
];

export const skillCategories = [
  {
    name: 'Frontend Engineering',
    skills: ['React 19 / 18', 'JavaScript (ES6+)', 'TypeScript', 'Vite', 'HTML5 Canvas', 'Tailwind CSS', 'Responsive UI/UX', 'Component Systems'],
  },
  {
    name: 'Backend & Microservices',
    skills: ['Python 3.12 / 3.13', 'Flask', 'FastAPI', 'Node.js', 'Express', 'RESTful API Design', 'Vercel Serverless Functions'],
  },
  {
    name: 'Databases & Cloud Architecture',
    skills: ['PostgreSQL', 'Supabase (Auth, RLS, Realtime)', 'SQLite', 'IndexedDB', 'Database Migrations', 'Schema Hardening'],
  },
  {
    name: 'Security & Zero-Trust',
    skills: ['Row Level Security (RLS)', 'Web Crypto API (AES-GCM)', 'PBKDF2 Key Derivation', 'Content Security Policy (CSP)', 'Fail-Closed Design', 'Immutable Audits'],
  },
  {
    name: 'Mobile & Tooling',
    skills: ['Android Studio', 'Kotlin', 'Git & GitHub Actions', 'Vercel CLI', 'Linux Shell', 'DevOps & CI/CD'],
  },
];

export const architecturePrinciples = [
  {
    title: 'Fail-Closed Security',
    description:
      'Systems must reject unauthenticated access by default. Webhooks, sensitive relays, and mutation routes never execute anonymously.',
  },
  {
    title: 'Row Level Security (RLS) Hardening',
    description:
      'Every Postgres table enforces auth.uid() = user_id checks with append-only policies. No client can ever mutate another user’s records.',
  },
  {
    title: 'Zero-Knowledge Cryptography',
    description:
      'For sensitive credential stores, encryption and key derivation happen strictly in browser memory. Servers store only ciphertext.',
  },
  {
    title: 'Seamless Offline-First Resiliency',
    description:
      'Critical tools provide instant local caching (IndexedDB/SQLite) and automatic cloud sync so networks hiccups never disrupt users.',
  },
];
