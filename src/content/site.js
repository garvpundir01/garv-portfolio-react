/**
 * Single source of truth for every piece of content on the site.
 * Edit this file to update the portfolio — no JSX changes required.
 */

export const profile = {
  name: 'Garv Pundir',
  location: 'Madison, WI',
  email: 'garvpundir2004@gmail.com',
  phone: '+1 (608) 895-1235',
  github: 'https://github.com/garvpundir01',
  githubHandle: 'garvpundir01',
  linkedin: 'https://www.linkedin.com/in/garv-pundir',
  linkedinHandle: 'garv-pundir',
  resume: '/Garv_Pundir_Resume.pdf',
  role: 'CS · Data Science · Economics @ UW–Madison',
  availability: 'Open to new-grad SWE & AI/ML roles — available January 2027',
  tagline:
    'I build AI systems that survive contact with production — fine-tuning 8B-parameter models, shipping full-stack products, and making slow things fast.',
  intro: `I'm a senior at the University of Wisconsin–Madison triple-majoring in Computer Science,
    Data Science, and Economics. My work sits where machine learning meets real engineering:
    generative models for tabular data, LLM evaluation pipelines, and backends that hold up
    under load.`,
  intro2: `Right now I'm an undergraduate research assistant benchmarking generative architectures for
    synthetic data — GANs, diffusion models, and fine-tuned foundation models — against fidelity,
    downstream utility, and privacy-leakage risk. Before that I mentored 250 students through
    low-level systems programming and shipped IoT interfaces at a startup.`,
  intro3: `I care about the unglamorous parts: reproducible environments, honest benchmarks, and
    profiling until the bottleneck actually moves. I'm looking for software and AI/ML engineering
    roles starting after I graduate in December 2026.`,
};

/** Credibility strip under the hero. Keep to four — they should each be verifiable. */
export const highlights = [
  { value: '3.5×', label: 'inference speedup', detail: '21h → ~6h generation time' },
  { value: '8B', label: 'parameter model', detail: 'fine-tuned with LoRA' },
  { value: '250', label: 'students mentored', detail: '1 of 5 CS354 peer mentors' },
  { value: '3.6', label: 'GPA / triple major', detail: 'CS, Data Science, Economics' },
];

export const experience = [
  {
    role: 'Undergraduate Research Assistant',
    org: 'University of Wisconsin–Madison',
    period: 'Jun 2026 – Present',
    current: true,
    subtitle: 'Tabular Synthetic Data Generation & Model Benchmarking',
    stack: ['PyTorch', 'CUDA', 'Docker', 'LoRA', 'TabDLM', 'TabDiff', 'CTGAN'],
    points: [
      'Benchmarked 3 state-of-the-art generative architectures (CTGAN, TabDiff, an 8B-parameter LLM) across GAN, diffusion, and LLM paradigms — evaluating fidelity, downstream utility, and privacy-leakage risk on mixed-type security datasets.',
      'Synthesized high-fidelity tabular records spanning numerical, categorical, and unstructured-text attributes by fine-tuning an 8B-parameter foundation model (TabDLM) with LoRA.',
      'Accelerated inference throughput 3.5× — cutting generation time from 21 hours to ~6 hours for 5,500+ records — by diagnosing CUDA out-of-memory errors and tuning batch size and sampling-step depth on 48GB GPUs.',
      'Standardized reproducible benchmarking across all 3 paradigms by containerizing environments in Docker/Conda and automating schema-validation scripts for synthetic output.',
    ],
  },
  {
    role: 'Peer Mentor, CS354',
    org: 'UW–Madison, Dept. of Computer Sciences',
    period: 'Jan 2025 – May 2025',
    subtitle: 'Machine Organization & Systems Programming',
    stack: ['C', 'x86 Assembly', 'Virtual Memory', 'Cache Optimization'],
    points: [
      'Selected as 1 of 5 peer mentors for CS354 (250 students) and mentored ~50 students weekly on low-level systems programming — virtual memory, stack/heap allocation, pointer arithmetic, cache organization, and x86 assembly.',
      'Guided students in analyzing cache behavior and performance tradeoffs — spatial/temporal locality, cache-miss patterns, and optimization techniques in C — to strengthen their systems-level debugging skills.',
    ],
  },
  {
    role: 'Software Development Engineering Intern',
    org: 'Harmonizer Global',
    period: 'Aug 2024 – Oct 2024',
    subtitle: 'Remote — India',
    stack: ['JavaScript', 'REST APIs', 'IoT', 'Browser Profiling'],
    points: [
      'Shipped real-time temperature and precipitation visualization widgets across 4 IoT device types by integrating REST-based device APIs to fetch and render live sensor data.',
      'Cut client-side rendering latency ~40% by refactoring asynchronous data handling and eliminating unnecessary DOM reflows across web and embedded interfaces.',
      'Restored widget stability across heterogeneous IoT hardware by identifying and resolving memory leaks and performance bottlenecks through structured debugging and browser profiling.',
    ],
  },
];

export const projects = [
  {
    title: 'TimeCoin',
    period: 'Jan 2026 – May 2026',
    featured: true,
    context: 'CS 506 team project — 6 engineers, served as Product Owner',
    summary:
      'A time-banking marketplace where members mine and spend a shared currency for services. I owned the mining/rewards engine and the marketplace listing system.',
    points: [
      'Delivered 25.5 story points building the mining/rewards feature — cooldown timers, eligibility logic, and a scheduled service that batch-mints coins into the ledger.',
      'Built the marketplace listing engine (CRUD, search/browse) and secured all API endpoints with JWT + 2FA authentication and backend input validation, syncing listing completions to real-time transaction and balance updates.',
    ],
    stack: ['React', 'Java', 'Spring Boot', 'PostgreSQL', 'JWT'],
    link: 'https://github.com/garvpundir01/TimeCoin',
    linkLabel: 'View on GitHub',
  },
  {
    title: 'LLM-Based Course Alignment',
    period: 'Sept 2025 – Dec 2025',
    featured: true,
    context: 'Piloted on CS320',
    summary:
      'Automated course- and lecture-level instructional-quality analysis for faculty, using LLMs to check whether course materials actually deliver on their stated learning objectives.',
    points: [
      'Built a Flask backend with relational SQL schemas that used LLMs to validate alignment between learning objectives and course materials.',
    ],
    stack: ['Python', 'Flask', 'SQL', 'LLM APIs'],
  },
  {
    title: 'LLM Grading Quality Research',
    period: 'Sept 2024 – Jan 2025',
    featured: true,
    context: 'Research under Prof. Karumbaiah',
    summary:
      'Research into the reliability and fairness of LLM-based grading for student writing — how model evaluations shift with structure, coherence, grammar, and argument depth, and whether they track expert rubrics.',
    points: [
      'Built Python evaluation pipelines that benchmarked model output against rubrics for structure, coherence, argument strength, and grammar.',
      'Fine-tuned prompts and model parameters to improve grading consistency, producing more actionable and specific feedback for students.',
      'Extended the system beyond grading to generate personalized formative feedback adapted to each student’s demonstrated progress rather than static criteria.',
    ],
    stack: ['Python', 'NLP', 'Prompt Engineering', 'Evaluation Metrics'],
  },
  {
    title: 'Budgetly',
    period: '2025',
    summary:
      'A full-stack personal finance dashboard for tracking income, expenses, and budgets through interactive charts and monthly summaries.',
    points: [
      'Implemented secure authentication and session management with JWT, enabling personalized per-user dashboards.',
      'Designed a responsive UI from reusable React components — charts, progress bars, category management, transaction lists — over a Django + PostgreSQL backend exposing REST APIs.',
      'Built category pie charts, monthly bar charts, and income/expense summaries to turn raw transactions into readable financial insight.',
    ],
    stack: ['React', 'Django', 'PostgreSQL', 'REST', 'Chart.js'],
  },
  {
    title: 'Stock Prediction with LSTM',
    period: '2025',
    summary:
      'A time-series model forecasting stock prices with Long Short-Term Memory networks, covering the full pipeline from data acquisition through model evaluation.',
    points: [
      'Acquired and cleaned historical financial data, then built correlation matrices and visualizations to surface temporal trends.',
      'Trained and evaluated LSTM architectures against temporal patterns in the cleaned series.',
    ],
    stack: ['Python', 'LSTM', 'NumPy', 'pandas', 'Matplotlib'],
  },
  {
    title: 'ChatGPT for Materials Science',
    period: '2024',
    summary:
      'An investigation into whether LLMs can predict Li-ion cathode battery voltages — and where they quietly fail.',
    points: [
      'Designed prompting strategies in Python to query the ChatGPT API, then compared collected outputs against an established reference database to measure accuracy and reliability.',
      'Characterized the limits of LLMs in scientific data analysis, showing how prompt design shifts performance and where human validation stays necessary.',
    ],
    stack: ['OpenAI API', 'Python', 'Prompt Engineering', 'Data Validation'],
  },
];

export const publications = {
  venue: 'World Journal of Engineering, Research and Technology',
  items: [
    { title: 'Internet of Things', url: 'https://www.wjert.org/home/article_abstract/1014' },
    { title: 'LiDAR Technology', url: 'https://www.wjert.org/home/article_abstract/1068' },
  ],
};

export const skills = [
  {
    group: 'Languages',
    items: ['Java', 'Python', 'C', 'C++', 'SQL', 'JavaScript', 'TypeScript', 'HTML/CSS', 'R'],
  },
  {
    group: 'AI / ML',
    items: [
      'LLM API integration (OpenAI, Anthropic)',
      'LoRA / PEFT fine-tuning',
      'RAG pipelines',
      'LangChain',
      'Vector databases (FAISS, Chroma)',
      'Generative models (GANs, diffusion)',
      'PyTorch',
      'CUDA',
      'WandB',
      'Scikit-learn',
      'LSTM',
      'NumPy',
      'pandas',
    ],
  },
  {
    group: 'Frameworks',
    items: ['React', 'Node.js', 'Flask', 'FastAPI', 'Spring Boot', 'Django', 'JUnit', 'Docker'],
  },
  { group: 'Databases', items: ['PostgreSQL', 'MySQL', 'SQLite', 'NoSQL'] },
  {
    group: 'Tools & Practice',
    items: ['Git', 'Agile Development', 'Linux', 'Bash', 'Vim', 'IntelliJ', 'Visual Studio'],
  },
];

export const education = {
  school: 'University of Wisconsin–Madison',
  location: 'Madison, WI',
  degree: 'B.S. Computer Science, Data Science, and Economics',
  period: 'Expected December 2026',
  gpa: '3.6 / 4.0',
  honors: ['Dean’s List — Spring 2023', 'Dean’s List — Spring 2025'],
  coursework: [
    'Artificial Intelligence',
    'Data Structures & Algorithms',
    'Machine Organization (CS354)',
    'Database Management Systems',
    'Software Engineering',
    'Object-Oriented Programming',
    'UI/UX Design',
    'Data Science Programming II',
    'Data Science Modelling II',
    'Intermediate Microeconomic Theory',
    'Intermediate Macroeconomic Theory',
    'Introduction to Computer Engineering',
  ],
};

/** Long-form narrative for the /my-story route. */
export const story = {
  title: 'My Story',
  lede: 'The most defining thing on this site isn’t on my resume.',
  quote: 'Scars are proof that we survived — and I choose to wear mine with pride.',
  paragraphs: [
    'In April 2023, I was in a car accident that left me severely injured. The recovery was long and difficult, physically and mentally — and it became the most defining period of my life.',
    'While I was healing, I made a choice: to use it as a foundation to rebuild stronger, more focused, and more determined than before. It wasn’t easy. Every step forward became a reminder of what I was capable of.',
    'Since then I’ve returned to my academic and personal pursuits with more clarity and resilience. Whether it’s mentoring students, building intelligent systems, or pushing through hard problems in backend development, I approach every challenge with a mindset forged by recovery.',
    'That chapter fuels everything I do. It taught me patience, persistence, and perspective — and I carry it into every project I build, every problem I solve, and every opportunity I earn.',
  ],
};

export const navSections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];
