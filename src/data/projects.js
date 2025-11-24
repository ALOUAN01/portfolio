export const projects = [
  {
    id: 1,
    name: "DataPull",
    description:
      "Scalable AI-Powered B2B/B2C Lead Intelligence & Data Enrichment Platform",

    longDescription:
      "DataPull is a cloud-native intelligent prospecting platform capable of extracting, cleaning, enriching, and analyzing over 2 million business leads per day. Built on a distributed microservices architecture and a real-time search engine, it combines advanced ETL pipelines, machine-driven enrichment, geospatial exploration, lead scoring, and dynamic data visualization to deliver actionable business insights at scale.",

    tech: [
      "Spring Boot (Microservices)",
      "React + TailwindCSS",
      "AWS (EC2, S3, CloudWatch)",
      "Elasticsearch (Full-Text Search & Aggregations)",
      "PostgreSQL + JSONB",
      "Docker & Docker Compose",
      "Keycloak (IAM, SSO, RBAC)",
      "Celery + Python ETL",
      "Selenium / BeautifulSoup",
    ],

    highlights: [
      "Distributed architecture with 4 autonomous and horizontally scalable microservices",
      "3,000+ requests/min under real workload with load balancing & optimized caching",
      "Big-Data ETL pipeline processing 2M+ records/day with intelligent enrichment",
      "Sub-150ms real-time search powered by Elasticsearch (full-text & aggregations)",
      "Automated scraping + API integrations (INSEE, INPI, DataSoft)",
      "Email enrichment engine (MX validation, pattern discovery, scoring)",
      "Advanced security: Keycloak RBAC, JWT tokens, refresh flows, SSO",
      "Full observability: Centralized logs, AWS CloudWatch dashboards & alerts",
      "Dockerized deployment + S3 storage for large-scale datasets",
      "Modern React UI with smart filters, interactive maps, analytics dashboards",
      "Resilient pipeline with retry strategies, background workers & Redis queues",
      "End-to-end data lifecycle: ingestion → cleaning → enrichment → indexing",
    ],
    media: [
      { type: "image", src: "/images/datapull-1.jpg" },
      { type: "image", src: "/images/datapull-2.jpg" },
    ],

    githubUrl: "https://github.com/ALOUAN01/datapull",
    liveUrl: "https://datapull.demo.com",

    category: "Full-Stack / Data Engineering / Cloud",
    featured: true,
    date: "2025-08",
  },
  {
    id: 2,
    name: "Leave Management System",
    description:
      "Enterprise-grade leave management platform with automated workflows and multi-level approval",

    longDescription:
      "The Leave Management System is a full-stack enterprise application developed for the Court of Appeal of Marrakech to digitalize and automate the entire leave-management process for more than 200 employees. The platform provides end-to-end request handling, multi-level approval workflows, secure authentication, real-time notifications, advanced role management, and analytics dashboards to streamline HR operations and eliminate manual processing.",

    tech: [
      "Spring Boot (REST APIs)",
      "Angular (Reactive UI)",
      "PostgreSQL",
      "JWT Authentication",
      "Spring Security",
      "Bootstrap / Tailwind",
    ],

    highlights: [
      "Automated approval workflows with multi-role validation (employee → responsible → manager)",
      "Used daily by 200+ employees at the Court of Appeal of Marrakech",
      "60% reduction in leave processing time after deployment",
      "Full elimination of manual errors and paper-based processes",
      "Role-Based Access Control (RBAC) with granular permissions",
      "Real-time email/SMS notifications for approvals and updates",
      "Dynamic reporting: leave balance, annual statistics, pending validations",
      "Calendar visualization of all employee leaves (per user and per department)",
      "Secure JWT-based authentication with session timeout & refresh strategy",
    ],

    media: [
      { type: "image", src: "/images/leaveManage.jpg" },
      { type: "image", src: "/images/leaveManage1.jpg" },
      { type: "image", src: "/images/leaveManage2.jpg" },
      { type: "image", src: "/images/leaveManage3.jpg" },
    ],

    githubUrl: "https://github.com/ALOUAN01/leave-management",
    liveUrl: null,

    category: "Full-Stack / Enterprise Application",
    featured: true,
    date: "2024-09",
  },
  {
    id: 3,
    name: "School Management System",
    description:
      "Full-stack school administration platform for student, teacher, class and academic data management",

    longDescription:
      "The School Management System is a complete full-stack web application developed for EKBlocks to digitalize and optimize the daily administrative operations of educational institutions. It centralizes student information, teacher records, class structures, modules, grades and attendance, while offering a modern and intuitive interface built with React. The backend, powered by Django and Django REST Framework, ensures clean data modeling, secure APIs and scalable academic management workflows.",

    tech: [
      "Django",
      "Django REST Framework",
      "React",
      "PostgreSQL / SQLite",
      "REST API",
      "Bootstrap / Custom CSS",
    ],

    highlights: [
      "End-to-end student lifecycle: registration, editing, academic tracking",
      "Teacher management with role assignment and module allocation",
      "Classroom management: enrollment, module assignment, dynamic updates",
      "Real-time statistics dashboard for academic and administrative insights",
      "Grade and attendance tracking for all modules and levels",
      "Clean REST API architecture using Django REST Framework",
      "SPA interface with reusable React components and optimized UI/UX",
      "Secure CRUD operations with fully modeled entities (Students, Teachers, Modules, Grades, Absences)",
      "Modular design allowing future extensions (parent portal, messaging, scheduling)",
    ],

    media: [
      { type: "image", src: "/images/ManageSchool.jpg" },
      { type: "image", src: "/images/ManageSchool1.jpg" },
      { type: "image", src: "/images/ManageSchool2.jpg" },
      { type: "image", src: "/images/ManageSchool3.jpg" },
      { type: "image", src: "/images/ManageSchool4.jpg" },
    ],

    githubUrl: "https://github.com/ALOUAN01/school-management",
    liveUrl: null,

    category: "Full-Stack / Academic Systems",
    featured: false,
    date: "2023-09",
  },
  {
    id: 4,
    name: "AI Design Pattern Detector (DPD)",
    description:
      "AI-powered tool for automated code analysis and intelligent design pattern recommendations",

    longDescription:
      "DPD (Design Pattern Detector) is an AI-driven multi-service platform designed to analyze source code and recommend appropriate software design patterns based on structural and functional characteristics. The system combines intelligent backend analysis, secure authentication, and an interactive Angular frontend to help developers make informed architectural decisions and improve code quality.",

    tech: [
      "Django (Python)",
      "Spring Boot (Java)",
      "JavaParser",
      "Angular",
      "MySQL",
      "JWT Authentication",
      "Docker & Docker Compose",
    ],

    highlights: [
      "AI-assisted code analysis across Python and Java backend services",
      "Automated design pattern recommendation (Singleton, Factory, Observer, etc.)",
      "Multi-service architecture: Django for AI/analysis, Spring Boot for parsing and authentication",
      "Secure JWT-based authentication with role-based access control",
      "Interactive Angular interface for uploading, analyzing and visualizing results",
      "REST APIs enabling cross-service communication and modularity",
      "Dockerized environment with full multi-container orchestration",
      "Extensible architecture ready for more design patterns and AI integration",
    ],

    media: [{ type: "video", src: "/videos/DPD-1.mp4" }],

    githubUrl: "https://github.com/ALOUAN01/DPD", // met ton vrai dépôt ici si tu veux
    liveUrl: null,

    category: "AI / Full-Stack / Software Engineering Tools",
    featured: true,
    date: "2025-01",
  },
  {
    id: 5,
    name: "ScanerCard – Moroccan ID OCR System",
    description:
      "AI-powered OCR platform for automatic extraction of personal information from Moroccan ID cards",

    longDescription:
      "ScanerCard is an advanced multi-service OCR platform designed to automatically extract structured information from Moroccan national ID cards using computer vision, deep OCR technologies, and modern web architecture. The system integrates Spring Boot (Tesseract OCR), Django (Google Vision API + OpenCV), and a fully interactive Angular frontend to provide real-time scanning, automatic cropping, ROI detection, data validation, and secure processing of sensitive identity information.",

    tech: [
      "Spring Boot (Tess4J OCR)",
      "Django REST Framework (Google Vision API)",
      "OpenCV",
      "Angular",
      "MySQL",
      "JWT Authentication",
      "Docker & Docker Compose",
    ],

    highlights: [
      "Hybrid OCR engine: Tesseract (Java) + Google Vision (Python) for high accuracy",
      "Automatic ID card cropping and contour detection with OpenCV",
      "Region of Interest (ROI) detection for precise extraction (name, CIN, birthdate, etc.)",
      "Real-time camera capture and in-browser scanning (Angular)",
      "Interactive dashboard showing extracted text and structured fields",
      "Secure JWT authentication with full role-based access",
      "REST microservices integrating Spring Boot, Django & MySQL",
      "Automated cleanup of temporary files and secure data handling (GDPR-ready)",
      "Fully containerized multi-service deployment with Docker Compose",
    ],

    media: [
      { type: "video", src: "/videos/canerCard-Demo.mp4" },
      { type: "image", src: "/images/scanercard1.jpg" },
      { type: "image", src: "/images/scanercard2.jpg" },
      { type: "image", src: "/images/scanercard3.jpg" },
      { type: "image", src: "/images/scanercard4.jpg" },
    ],

    githubUrl: "https://github.com/PFAProject01/", // dépôt indiqué dans ton rapport
    liveUrl: null,

    category: "AI / OCR / Full-Stack",
    featured: true,
    date: "2024-06",
  },
  {
  id: 6,
  name: "TaskFlow – Task & Project Management App",
  description:
    "Cross-platform mobile productivity application with Spring Boot backend, secure authentication and real-time task tracking.",

  longDescription:
    "TaskFlow is a fully integrated task and project management platform built with Flutter for the mobile interface and Spring Boot for the backend services. The application enables users to create, prioritize and manage tasks within projects, collaborate through comments, and track progress in real-time. The backend provides secure authentication with JWT, role-based access, CRUD APIs for projects and tasks, user management, and persistent storage. The Flutter client offers a modern, animated and intuitive experience with dynamic dashboards, live system indicators (battery, network, time), and smooth multi-screen navigation.",

  tech: [
    "Flutter",
    "Dart",
    "Spring Boot",
    "Spring Security (JWT)",
    "MySQL",
    "REST API",
    "Provider / State Management",
    "Material Design"
  ],

  highlights: [
    "Mobile-first architecture built with Flutter and connected to a Spring Boot backend",
    "Secure authentication using JWT tokens and Spring Security",
    "REST APIs for users, projects, tasks, comments and status updates",
    "Dynamic dashboard with project status categories (Ongoing, In Process, Completed, Cancelled)",
    "Task creation with deadline, priority, description and assigned members",
    "Real-time task updates synchronized via backend APIs",
    "Interactive Task Details screen with edit modal and status management",
    "Beautiful Flutter UI with live system indicators (battery, connectivity, current time)",
    "Local validation + API validation for reliable data consistency",
    "Scalable backend structure: Controllers, Services, Repositories following clean architecture"
  ],

  media: [
      { type: "image", src: "/images/taskapp1.jpg", },
      { type: "image", src: "/images/taskapp2.jpg", },
      { type: "image", src: "/images/taskapp3.jpg", },
      { type: "image", src: "/images/taskapp4.jpg", },
      { type: "image", src: "/images/taskapp5.jpg", },
      { type: "image", src: "/images/taskapp6.jpg", },
      { type: "image", src: "/images/taskapp7.jpg", },
      { type: "image", src: "/images/taskapp8.jpg", },
      { type: "image", src: "/images/taskapp9.jpg", },
      { type: "image", src: "/images/taskapp10.jpg", },
      { type: "image", src: "/images/taskapp11.jpg", },
    ],

  githubUrl: "https://github.com/ALOUAN01/task-management",
  liveUrl: null,

  category: "Mobile / Full-Stack / Productivity",
  featured: false,
  date: "2023-06"
}

];

// Fonction pour obtenir tous les projets
export const getAllProjects = () => {
  return projects;
};

// Fonction pour obtenir les projets en vedette
export const getFeaturedProjects = () => {
  return projects.filter((project) => project.featured);
};

// Fonction pour obtenir un projet par ID
export const getProjectById = (id) => {
  return projects.find((project) => project.id === id);
};

export const getProjectImpo = () => {
  const importantIds = [1, 2, 3];
  return projects.filter((project) => importantIds.includes(project.id));
};

// Fonction pour obtenir les projets par catégorie
export const getProjectsByCategory = (category) => {
  return projects.filter((project) => project.category === category);
};

// Fonction pour obtenir les catégories uniques
export const getCategories = () => {
  return [...new Set(projects.map((project) => project.category))];
};
