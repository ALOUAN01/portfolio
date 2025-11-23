export const projects = [
  {
  id: 1,
  name: 'DataPull',
  description: 'Scalable AI-Powered B2B/B2C Lead Intelligence & Data Enrichment Platform',

  longDescription:
    "DataPull is a cloud-native intelligent prospecting platform capable of extracting, cleaning, enriching, and analyzing over 2 million business leads per day. Built on a distributed microservices architecture and a real-time search engine, it combines advanced ETL pipelines, machine-driven enrichment, geospatial exploration, lead scoring, and dynamic data visualization to deliver actionable business insights at scale.",

  tech: [
    'Spring Boot (Microservices)',
    'React + TailwindCSS',
    'AWS (EC2, S3, CloudWatch)',
    'Elasticsearch (Full-Text Search & Aggregations)',
    'PostgreSQL + JSONB',
    'Docker & Docker Compose',
    'Keycloak (IAM, SSO, RBAC)',
    'Celery + Python ETL',
    'Selenium / BeautifulSoup'
  ],

  highlights: [
    'Distributed architecture with 4 autonomous and horizontally scalable microservices',
    '3,000+ requests/min under real workload with load balancing & optimized caching',
    'Big-Data ETL pipeline processing 2M+ records/day with intelligent enrichment',
    'Sub-150ms real-time search powered by Elasticsearch (full-text & aggregations)',
    'Automated scraping + API integrations (INSEE, INPI, DataSoft)',
    'Email enrichment engine (MX validation, pattern discovery, scoring)',
    'Advanced security: Keycloak RBAC, JWT tokens, refresh flows, SSO',
    'Full observability: Centralized logs, AWS CloudWatch dashboards & alerts',
    'Dockerized deployment + S3 storage for large-scale datasets',
    'Modern React UI with smart filters, interactive maps, analytics dashboards',
    'Resilient pipeline with retry strategies, background workers & Redis queues',
    'End-to-end data lifecycle: ingestion → cleaning → enrichment → indexing'
  ],

  images: [
    '/images/datapull-1.jpg',
    '/images/datapull-2.jpg',
    '/images/datapull-dashboard.jpg',
    '/images/datapull-etl.jpg'
  ],

  githubUrl: 'https://github.com/ALOUAN01/datapull',
  liveUrl: 'https://datapull.demo.com',

  category: 'Full-Stack / Data Engineering / Cloud',
  featured: true,
  date: '2025-08'
}
,
  {
  id: 2,
  name: 'Leave Management System',
  description:
    'Enterprise-grade leave management platform with automated workflows and multi-level approval',

  longDescription:
    "The Leave Management System is a full-stack enterprise application developed for the Court of Appeal of Marrakech to digitalize and automate the entire leave-management process for more than 200 employees. The platform provides end-to-end request handling, multi-level approval workflows, secure authentication, real-time notifications, advanced role management, and analytics dashboards to streamline HR operations and eliminate manual processing.",

  tech: [
    'Spring Boot (REST APIs)',
    'Angular (Reactive UI)',
    'PostgreSQL',
    'JWT Authentication',
    'Spring Security',
    'Bootstrap / Tailwind'
  ],

  highlights: [
    'Automated approval workflows with multi-role validation (employee → responsible → manager)',
    'Used daily by 200+ employees at the Court of Appeal of Marrakech',
    '60% reduction in leave processing time after deployment',
    'Full elimination of manual errors and paper-based processes',
    'Role-Based Access Control (RBAC) with granular permissions',
    'Real-time email/SMS notifications for approvals and updates',
    'Dynamic reporting: leave balance, annual statistics, pending validations',
    'Calendar visualization of all employee leaves (per user and per department)',
    'Secure JWT-based authentication with session timeout & refresh strategy'
  ],

  images: [
    '/images/leaveManage.jpg',
    '/images/leaveManage1.jpg',
    '/images/leaveManage2.jpg',
    '/images/leaveManage3.jpg'
  ],

  githubUrl: 'https://github.com/ALOUAN01/leave-management',
  liveUrl: null,

  category: 'Full-Stack / Enterprise Application',
  featured: true,
  date: '2024-09'
}
,
  {
  id: 3,
  name: 'School Management System',
  description:
    'Full-stack school administration platform for student, teacher, class and academic data management',

  longDescription:
    "The School Management System is a complete full-stack web application developed for EKBlocks to digitalize and optimize the daily administrative operations of educational institutions. It centralizes student information, teacher records, class structures, modules, grades and attendance, while offering a modern and intuitive interface built with React. The backend, powered by Django and Django REST Framework, ensures clean data modeling, secure APIs and scalable academic management workflows.",

  tech: [
    'Django',
    'Django REST Framework',
    'React',
    'PostgreSQL / SQLite',
    'REST API',
    'Bootstrap / Custom CSS'
  ],

  highlights: [
    'End-to-end student lifecycle: registration, editing, academic tracking',
    'Teacher management with role assignment and module allocation',
    'Classroom management: enrollment, module assignment, dynamic updates',
    'Real-time statistics dashboard for academic and administrative insights',
    'Grade and attendance tracking for all modules and levels',
    'Clean REST API architecture using Django REST Framework',
    'SPA interface with reusable React components and optimized UI/UX',
    'Secure CRUD operations with fully modeled entities (Students, Teachers, Modules, Grades, Absences)',
    'Modular design allowing future extensions (parent portal, messaging, scheduling)'
  ],

  images: [
    '/images/ManageSchool.jpg',
    '/images/ManageSchool1.jpg',
    '/images/ManageSchool2.jpg',
    '/images/ManageSchool3.jpg',
    '/images/ManageSchool4.jpg'
  ],

  githubUrl: 'https://github.com/ALOUAN01/school-management',
  liveUrl: null,

  category: 'Full-Stack / Academic Systems',
  featured: false,
  date: '2023-09'
}
,
  {
    id: 4,
    name: 'E-Commerce Platform',
    description: 'Modern e-commerce solution with payment integration',
    longDescription: 'Full-featured e-commerce platform with product management, shopping cart, secure payment processing, and order tracking.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    highlights: [
      'Secure payment integration',
      'Real-time inventory management',
      'Admin dashboard',
      'Mobile responsive design'
    ],
    image: '/projects/ecommerce.jpg',
    githubUrl: 'https://github.com/ALOUAN01/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
    category: 'Full-Stack',
    featured: false,
    date: '2024-03'
  }
];

// Fonction pour obtenir tous les projets
export const getAllProjects = () => {
  return projects;
};

// Fonction pour obtenir les projets en vedette
export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

// Fonction pour obtenir un projet par ID
export const getProjectById = (id) => {
  return projects.find(project => project.id === id);
};

export const getProjectImpo = () => {
  const importantIds = [1, 2, 3];
  return projects.filter(project => importantIds.includes(project.id));
};


// Fonction pour obtenir les projets par catégorie
export const getProjectsByCategory = (category) => {
  return projects.filter(project => project.category === category);
};

// Fonction pour obtenir les catégories uniques
export const getCategories = () => {
  return [...new Set(projects.map(project => project.category))];
};