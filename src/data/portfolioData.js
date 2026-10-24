export const personalInfo = {
  name: 'Ale Sathwik',
  handle: 'sathwikale2412',
  title: 'Full Stack Software Engineer & Systems Builder',
  tagline: 'Architecting high-resiliency web platforms, zero-knowledge cryptographic vaults, predictive AI diagnostics, and fail-closed cloud systems.',
  location: 'Hyderabad, Telangana, India',
  email: 'sathwikale31@gmail.com',
  phone: '+91 9000848332',
  github: 'https://github.com/sathwikale2412',
  linkedin: 'https://www.linkedin.com/in/ale-sathwik-41640336a',
  status: 'Available for high-impact software engineering roles & research projects',
  bio: `I am a software engineer focused on architecting resilient, production-grade applications that unify intuitive human interfaces with uncompromising system security. 
My engineering foundations span full-stack web platforms, client-side zero-knowledge encryption, predictive AI automotive diagnostics, real-time cognitive evaluation engines, and offline-first mobile utilities. 
I engineer systems according to strict fail-closed security paradigms, comprehensive Row Level Security (RLS), and zero-leak Content Security Policies (CSP).`,
  stats: [
    { value: '8+', label: 'Shipped Systems', detail: 'Production Cloud & Mobile Deploys' },
    { value: '8.25', label: 'B.Tech CGPA', detail: 'CSE @ Vignana Bharathi Inst. of Tech' },
    { value: '100%', label: 'Fail-Closed Security', detail: 'Cryptographic RLS & CSP Enforcement' },
    { value: 'Zero', label: 'Plaintext Exposure', detail: 'Client-Derived WebCrypto Vaults' },
  ],
};

export const educationHistory = [
  {
    institution: 'Vignana Bharathi Institute of Technology (VBIT)',
    degree: 'Bachelor of Technology (B.Tech)',
    department: 'Computer Science and Engineering',
    period: '2024 – 2028 (Expected)',
    status: 'In Progress',
    gradeType: 'CGPA',
    grade: '8.25 / 10.0',
    highlightBadge: 'Current CGPA: 8.25',
    summary:
      'Pursuing comprehensive undergraduate training in core computer science, focusing on algorithmic problem solving, secure database architectures, cloud distributed systems, and modern full-stack development.',
    coreSubjects: [
      'Data Structures & Algorithms (DSA)',
      'Object-Oriented Programming (Java / Python / C++)',
      'Database Management Systems (SQL & Relational Modeling)',
      'Computer Organization & Operating Systems',
      'Software Engineering Principles & System Design',
    ],
    technicalHighlights: [
      'Engineered and deployed 8 full-stack production systems alongside academic curriculum',
      'Specialized in serverless cloud deployments, RLS access control, and client-side encryption algorithms',
      'Built interactive psychomotor simulators and automotive AI diagnostic platforms',
    ],
    technologies: ['C++', 'Python', 'Java', 'SQL', 'PostgreSQL', 'Data Structures', 'Linux'],
  },
  {
    institution: 'Sri Chaitanya Junior College',
    degree: 'Senior Secondary / Intermediate (10+2)',
    department: 'Mathematics, Physics & Chemistry (MPC)',
    period: '2022 – 2024',
    status: 'Completed with High Distinction',
    gradeType: 'Aggregate Score',
    grade: '92.8%',
    highlightBadge: 'Score: 92.8%',
    summary:
      'Rigorous preparation in analytical mathematics, physical mechanics, and quantitative problem solving, providing the mathematical bedrock for cryptography, graph algorithms, and systems engineering.',
    coreSubjects: [
      'Calculus (Differential & Integral)',
      'Coordinate Geometry, Vectors & Linear Algebra',
      'Classical Mechanics, Electromagnetism & Thermodynamics',
      'Physical & Inorganic Chemistry',
    ],
    technicalHighlights: [
      'Mastered advanced mathematical logic, permutations, and probability theory',
      'Consistently ranked in the top academic percentiles across competitive regional testing',
    ],
    technologies: ['Advanced Mathematics', 'Analytical Reasoning', 'Quantitative Modeling'],
  },
  {
    institution: 'Sri Chaitanya School',
    degree: 'Secondary School Certificate (SSC / 10th Class)',
    department: 'General Science & Mathematics',
    period: 'Completed 2022',
    status: 'Completed with Exemplary Academic Honors',
    gradeType: 'CGPA',
    grade: '9.3 / 10.0',
    highlightBadge: 'CGPA: 9.3',
    summary:
      'Formative education emphasizing fundamental sciences, mathematics, communication proficiency, and introductory computational logic.',
    coreSubjects: ['Mathematics', 'Physical Science', 'Biological Science', 'English & Languages', 'Social Studies'],
    technicalHighlights: [
      'Achieved distinction of 9.3 CGPA in board examinations',
      'Active participation in science exhibitions, mathematics quizzes, and logical reasoning olympiads',
    ],
    technologies: ['Foundational Mathematics', 'Scientific Method', 'Algorithmic Thinking'],
  },
];

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
    systemArchitecture:
      'Full-stack client-server architecture with React 19 frontend and lightweight Python Flask backend. Employs dual database persistence (local SQLite for offline agility + Supabase PostgreSQL for cloud sync) with session-isolated user data tables and strict vehicle ID binding.',
    securityDetails:
      'Session token authentication, hashed credential verification, parameter-bound SQL queries preventing SQL injection, and Content Security Policy preventing unauthorized cross-origin data exfiltration.',
    highlights: [
      'Dual-engine AI diagnostic assistant with local automotive expert rules + LLM fallback',
      'Dynamic user-scoped fleet tracking with individual odometer health degradation scoring',
      'SQLite & Supabase RLS database session continuation across reloads',
      'Exportable CSV financial audit reports and urgency countdown reminders',
    ],
    techStack: [
      { name: 'React 19', role: 'Reactive modern UI framework' },
      { name: 'Python (Flask)', role: 'RESTful API service & diagnostic endpoint' },
      { name: 'SQLite 3', role: 'Local isolated relational data storage' },
      { name: 'Supabase RLS', role: 'Cloud PostgreSQL with Row Level Security' },
      { name: 'Vite', role: 'Next-gen zero-bundle frontend build tool' },
      { name: 'Lucide Icons', role: 'Lightweight vector iconography' },
    ],
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
    systemArchitecture:
      'Progressive cloud architecture offering zero-friction guest usage via in-browser IndexedDB storage, paired with an instant one-click cloud sync upgrade path powered by Supabase Auth and PostgreSQL Row Level Security.',
    securityDetails:
      'Database-level RLS policies guarantee auth.uid() = user_id on all insert/update/delete operations. Anonymous guest data remains strictly in local sandboxed storage.',
    highlights: [
      'Full Supabase Auth & PostgreSQL Row Level Security policy enforcement',
      'Dual storage engine: Instant guest IndexedDB fallback + cloud persistent sync',
      'Habit analytics, streak visualization, and notification alerts',
      'Zero-latency optimistic UI updates with background synchronization queue',
    ],
    techStack: [
      { name: 'React', role: 'Single page application frontend' },
      { name: 'Supabase (PostgreSQL)', role: 'Cloud persistence & real-time sync' },
      { name: 'IndexedDB (idb)', role: 'Client-side offline data engine' },
      { name: 'Vite', role: 'Development server & asset bundler' },
      { name: 'Tailwind CSS', role: 'Utility-first modern styling' },
    ],
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
    systemArchitecture:
      'Hardware-accelerated HTML5 Canvas rendering loop synchronized with high-precision performance.now() timestamps. Evaluation metrics are buffered locally and synchronized to Supabase via immutable audit streams.',
    securityDetails:
      'Anti-cheat canvas state monitoring, append-only score history with immutable database triggers, and fail-closed offline fallback preventing tampering with assessment results.',
    highlights: [
      'Interactive canvas-based reaction timing & spatial visualization tests',
      'Append-only Supabase RLS audit records for candidate score integrity',
      'Fail-closed offline fallback with dismissible sync health notices',
      'Sub-millisecond input capture minimizing browser rendering latency',
    ],
    techStack: [
      { name: 'React', role: 'Modular test orchestration & scorecards' },
      { name: 'HTML5 Canvas', role: 'High-frame-rate psychomotor simulation' },
      { name: 'Supabase Auth & RLS', role: 'Tamper-resistant candidate score records' },
      { name: 'Vite', role: 'Asset packaging and build system' },
    ],
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
    systemArchitecture:
      'Multi-tier recommendation engine integrating a Python Flask microservice backend with fuzzy keyword search, land-matrix filtering algorithms, and a multi-lingual mobile-responsive React client.',
    securityDetails:
      'CORS whitelist lockdown, sanitized search parameter parsing preventing query injection, and stateless serverless architecture hosted on Vercel.',
    highlights: [
      'Multi-word semantic search and ranking engine across 36+ verified schemes',
      'Python Flask API gateway with microservice health probe and database fallback',
      'Bilingual interface with responsive accessibility controls',
      'Zero-storage farmer privacy model (no personally identifiable inputs stored)',
    ],
    techStack: [
      { name: 'React', role: 'Localized farmer-friendly interface' },
      { name: 'Python (Flask)', role: 'Recommendation & subsidy matching engine' },
      { name: 'PostgreSQL', role: 'Curated agricultural scheme database' },
      { name: 'Vercel Serverless', role: 'Edge API hosting & global distribution' },
    ],
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
    systemArchitecture:
      'Hybrid on-device processing: PDF text layer extraction, vectorization, and keyword index creation execute in browser memory via Web Workers, while heavy translation and PyFlowchart generation stream via Python microservices.',
    securityDetails:
      'Zero document upload to external third-party cloud servers. Multi-page PDFs never leave the student device memory. Enforces strict Content Security Policy against telemetry.',
    highlights: [
      'Client-side PDF.js vector extraction & extractive QA pipeline',
      'Serverless Python gateway for translation (Telugu/Hindi) and PyFlowchart generation',
      'Strict Content Security Policy (CSP) blocking external telemetry leaks',
      'Offline document persistence within browser IndexedDB cache',
    ],
    techStack: [
      { name: 'React 19', role: 'Document inspector & interactive reader' },
      { name: 'PDF.js', role: 'In-browser PDF parsing & text layer extraction' },
      { name: 'Python (Flask)', role: 'PyFlowchart syntax graph generator' },
      { name: 'Web Workers', role: 'Non-blocking multi-threaded document indexing' },
      { name: 'Supabase', role: 'Saved annotation & profile sync' },
    ],
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
    systemArchitecture:
      'Zero-trust proxy gateway mediating administrative operations. Dispatches cryptographically signed payloads to enterprise webhook receptors while generating immutable audit records in Postgres.',
    securityDetails:
      'Fail-closed API gateway requiring authenticated bearer tokens. Strict CSRF tokens, anti-clickjacking frame guards, Subresource Integrity (SRI), and nosniff HTTP header compliance.',
    highlights: [
      'Fail-closed API gateway requiring authenticated bearer tokens for webhook triggers',
      'Append-only immutable audit trail with cryptographic session signatures',
      'Strict CSRF, anti-clickjacking, and nosniff HTTP header compliance',
      'Automated Workato incident response trigger orchestration',
    ],
    techStack: [
      { name: 'React', role: 'Security operations cockpit' },
      { name: 'Python Gateway', role: 'Bearer token verification & webhook relay' },
      { name: 'Workato Webhooks', role: 'Automated enterprise incident orchestration' },
      { name: 'Supabase RLS', role: 'Cryptographically signed audit trail' },
      { name: 'Vite', role: 'Hardened asset pipeline' },
    ],
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
    systemArchitecture:
      'Pure client-side cryptographic isolation model: master passphrase input never transmits over network. PBKDF2 derives a 256-bit AES-GCM key with random salts, encrypting records before dispatching ciphertext blobs to Supabase.',
    securityDetails:
      'Client-side AES-GCM-256 encryption with 100,000-iteration PBKDF2 salt derivation. Zero plaintext exposure in transit or at rest. Master password recovery protections and clipboard auto-clear timers.',
    highlights: [
      'Client-side AES-GCM-256 encryption with 100,000-iteration PBKDF2 salt derivation',
      'Zero server plaintext exposure: vault keys never leave device memory',
      'Master password recovery protections and clipboard auto-clear timers',
      'Cryptographic tamper detection with GCM authentication tags',
    ],
    techStack: [
      { name: 'Web Crypto API', role: 'SubtleCrypto native browser encryption' },
      { name: 'React', role: 'Vault UI & memory-safe state lifecycle' },
      { name: 'Supabase Vault', role: 'Encrypted ciphertext storage' },
      { name: 'JavaScript (ES6+)', role: 'Cryptographic buffer transformations' },
    ],
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
    systemArchitecture:
      'Native Android application leveraging the Android Accessibility Service API to detect and suppress foreground distraction packages in real-time. Manages local rule enforcement entirely on-device.',
    securityDetails:
      'Manifest contains ZERO network permissions (`android.permission.INTERNET` is omitted). Impossible for any behavioral or user data to leave the device hardware.',
    highlights: [
      'Native Android Accessibility Service to intercept and block addictive packages',
      'Zero network permission footprint (cannot establish HTTP sockets)',
      'Lightweight local SQLite state and customized strict blocking schedules',
      'Battery-optimized background watchdog service',
    ],
    techStack: [
      { name: 'Kotlin', role: 'Modern expressive Android runtime' },
      { name: 'Android SDK (API 34)', role: 'Core system frameworks' },
      { name: 'Accessibility Service', role: 'System-level foreground window interceptor' },
      { name: 'SQLite Room', role: 'Local rules and timer persistence' },
    ],
  },
];

export const skillCategories = [
  {
    name: 'Frontend Engineering',
    color: '#00f59b',
    skills: [
      { name: 'React 19 / 18', level: 'Expert', desc: 'Virtual DOM, custom hooks, Suspense, state management' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', desc: 'Asynchronous event loop, closures, Web Workers, Promises' },
      { name: 'TypeScript', level: 'Proficient', desc: 'Type definitions, generics, interface contracts' },
      { name: 'Vite', level: 'Advanced', desc: 'Modern HMR tooling, Rollup optimization, dynamic imports' },
      { name: 'HTML5 Canvas API', level: 'Advanced', desc: '2D contexts, high-frame-rate rendering, input synchronization' },
      { name: 'Tailwind CSS', level: 'Advanced', desc: 'Responsive design tokens, dark themes, micro-animations' },
      { name: 'Three.js / WebGL', level: 'Intermediate', desc: '3D meshes, particle buffers, shaders, camera rigs' },
    ],
  },
  {
    name: 'Backend & Microservices',
    color: '#00f2fe',
    skills: [
      { name: 'Python 3.12 / 3.13', level: 'Advanced', desc: 'REST architecture, PyFlowchart, algorithmic services' },
      { name: 'Flask / FastAPI', level: 'Advanced', desc: 'Microservice routing, middleware, JSON schema validation' },
      { name: 'Node.js & Express', level: 'Advanced', desc: 'Event-driven server architecture, REST endpoints, auth flows' },
      { name: 'Vercel Serverless', level: 'Advanced', desc: 'Edge routing, serverless execution boundaries, CSP headers' },
      { name: 'RESTful API Design', level: 'Advanced', desc: 'Idempotency, status codes, bearer token authentication' },
    ],
  },
  {
    name: 'Databases & Cloud Architecture',
    color: '#ffd166',
    skills: [
      { name: 'PostgreSQL', level: 'Advanced', desc: 'Relational schemas, indexing, foreign keys, triggers' },
      { name: 'Supabase (Auth, RLS)', level: 'Expert', desc: 'Row Level Security policies, realtime triggers, JWT auth' },
      { name: 'SQLite 3', level: 'Advanced', desc: 'Embedded storage, session continuation, atomic transactions' },
      { name: 'IndexedDB (Browser)', level: 'Advanced', desc: 'Offline storage caching, keyval stores, cursor iteration' },
      { name: 'Schema Hardening', level: 'Advanced', desc: 'Fail-closed access models, data normalization' },
    ],
  },
  {
    name: 'Security & Zero-Trust',
    color: '#a855f7',
    skills: [
      { name: 'Web Crypto API', level: 'Advanced', desc: 'SubtleCrypto, AES-GCM 256-bit, browser key stores' },
      { name: 'PBKDF2 Key Derivation', level: 'Advanced', desc: '100k salt iterations, client memory key generation' },
      { name: 'Row Level Security (RLS)', level: 'Expert', desc: 'Multi-tenant data isolation, append-only security logs' },
      { name: 'Content Security Policy (CSP)', level: 'Advanced', desc: 'Strict origin lockdowns, anti-clickjacking, SRI' },
      { name: 'Fail-Closed Design', level: 'Expert', desc: 'Default-deny authorization, zero unauthenticated mutators' },
    ],
  },
  {
    name: 'Mobile & Tooling',
    color: '#10b981',
    skills: [
      { name: 'Android SDK & Kotlin', level: 'Proficient', desc: 'Accessibility Services, background workers, zero-permission' },
      { name: 'Git & GitHub CLI', level: 'Advanced', desc: 'Multi-branch workflows, rebasing, release automation' },
      { name: 'Vercel CLI & DevOps', level: 'Advanced', desc: 'Automated CI/CD deployments, DNS routing, edge configs' },
      { name: 'Linux / Shell Scripting', level: 'Proficient', desc: 'PowerShell, Bash, process automation, environment setup' },
    ],
  },
];

export const architecturePrinciples = [
  {
    id: 'fail-closed',
    title: 'Fail-Closed Security by Default',
    icon: 'Lock',
    tag: 'SEC-01',
    description:
      'All endpoints, webhooks, and mutation functions reject unauthorized requests before any processing occurs. No function executes anonymously.',
    detail: 'Enforces bearer token validation and abort controllers across client-server boundaries.',
  },
  {
    id: 'rls-isolation',
    title: 'Row Level Security (RLS) Isolation',
    icon: 'ShieldCheck',
    tag: 'SEC-02',
    description:
      'PostgreSQL tables enforce cryptographic auth.uid() = user_id checks at the database kernel level. No client can query or mutate another tenant’s records.',
    detail: 'Eliminates application-layer leakage by delegating tenant boundary enforcement directly to Postgres.',
  },
  {
    id: 'zero-knowledge',
    title: 'Zero-Knowledge Cryptography',
    icon: 'Key',
    tag: 'CRYPTO-01',
    description:
      'Sensitive user credentials and private notes are encrypted client-side using browser-native SubtleCrypto (AES-GCM-256) with PBKDF2 key derivation.',
    detail: 'Plaintext passwords never travel across HTTP networks or touch server disk storage.',
  },
  {
    id: 'offline-resiliency',
    title: 'Offline-First Dual-Engine Resiliency',
    icon: 'WifiOff',
    tag: 'SYS-01',
    description:
      'Interactive tools provide seamless local sandboxes (IndexedDB / SQLite) so network disruptions never halt user productivity.',
    detail: 'Background synchronization queues merge mutations seamlessly when connectivity restores.',
  },
];
