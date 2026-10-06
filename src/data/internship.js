// Content of the graduation internship page (/internship/datapull).
// Written from the end-of-studies report "Refonte d'une plateforme web de prospection
// B2B-B2C basée sur l'extraction, le traitement et la visualisation intelligente de données".

export const internship = {
  slug: "datapull",
  title: "DataPull: rebuilding a B2B/B2C lead-generation platform",
  subtitle:
    "End-of-studies internship: collecting, cleaning, enriching and searching business data at scale, from scraping to a microservices web platform.",
  company: "IAWEB.DEV – Havet Digital",
  location: "Marrakech, Morocco",
  period: "Mar 2025 – Aug 2025",
  type: "Graduation internship (PFE)",
  school: "EMSI Marrakech · Engineering degree in Computer Science",

  // Put the PDF exported from Word in public/docs/ with this exact name
  reportPdf: "/docs/Rapport_PFE_Ayoub_Alouan.pdf",
  reportTitle:
    "Refonte d'une plateforme web de prospection B2B-B2C basée sur l'extraction, le traitement et la visualisation intelligente de données « DataPull »",
  reportPages: 92,

  facts: [
    { label: "Duration", value: "6 months" },
    { label: "Method", value: "Scrum · 8 sprints" },
    { label: "Role", value: "Full-stack & data engineer" },
    { label: "Supervisors", value: "M. Ayoub Charef (EMSI) · M. Rabie El Kharaoua (IAWEB.DEV)" },
  ],

  context: {
    company:
      "IAWEB.DEV is the data and AI division of Havet Digital, a digital agency founded in 2018 in Lille and Paris. The division opened in Marrakech in 2024 to build data-driven, AI-powered web products for organisations of 11 to 5,000 employees.",
    problem:
      "Companies prospect with databases that are outdated, incomplete or inaccurate. Lead generation is slow, hard to scale and imprecise, and there is no single tool to clean, enrich and organise customer data, which means low conversion rates and wasted effort.",
    solution:
      "DataPull is a Platform-as-a-Service for lead generation. It collects business and consumer data from many sources, cleans and enriches it (including verified professional emails), and lets users search, filter, map and export prospects for B2B and B2C campaigns. My internship was the complete rebuild of the platform.",
    goals: [
      "Improve the quality and freshness of the data",
      "Process much larger volumes reliably",
      "Make the system scalable and maintainable",
      "Offer a faster, clearer user interface",
    ],
  },

  sprints: [
    { name: "Sprint 0", title: "Scoping", days: 15, tasks: "Business problem, functional needs, existing solutions and data sources, specifications, dev environment" },
    { name: "Sprint 1", title: "Technical study", days: 15, tasks: "Stack benchmarks, choice of frontend, backend, ETL and database, project setup, data models" },
    { name: "Sprint 2", title: "Scraping & ETL", days: 28, tasks: "Public APIs (INSEE, INPI, DataSoft), Selenium & BeautifulSoup scrapers, cleaning and deduplication, EC2/S3" },
    { name: "Sprint 3", title: "Spring Boot backend", days: 25, tasks: "JPA entities, B2B/B2C REST APIs, PostgreSQL and Elasticsearch, search and scoring endpoints" },
    { name: "Sprint 4", title: "User interface", days: 25, tasks: "React pages: dashboard, B2B/B2C search, visualisations, API integration, responsive design" },
    { name: "Sprint 5", title: "ETL pipelines", days: 20, tasks: "Celery + Flask async jobs, Celery Beat scheduling, Flower monitoring, large-volume tests" },
    { name: "Sprint 6", title: "Tests, security, deployment", days: 10, tasks: "JUnit, Mockito, PyTest, JWT security, Docker, deployment on AWS EC2 + S3" },
    { name: "Sprint 7", title: "Documentation", days: 5, tasks: "Technical and user documentation, Power BI demos, results and next steps" },
  ],

  decisions: [
    {
      question: "Backend framework",
      options: ["FastAPI", "Spring Boot", "Laravel"],
      choice: "Spring Boot",
      why: "Strict typing, mature ecosystem, built-in microservices support and very high enterprise adoption. FastAPI was faster to prototype but limited by Python's GIL at scale.",
    },
    {
      question: "Database & search",
      options: ["PostgreSQL", "Elasticsearch", "MongoDB"],
      choice: "Elasticsearch + PostgreSQL",
      why: "Elasticsearch for full-text search, fuzzy matching and aggregations on millions of profiles; PostgreSQL for structured, transactional data.",
    },
    {
      question: "Frontend",
      options: ["Vanilla JS", "React", "Angular", "Vue.js"],
      choice: "React",
      why: "Reusable components, fast development and a huge ecosystem, with an interactive UI that the first Jinja2 version could not offer.",
    },
    {
      question: "ETL pipeline",
      options: ["Apache Airflow", "Apache NiFi", "Celery + Flask", "AWS Glue"],
      choice: "Celery + Flask",
      why: "Fastest to build in Python, full control over the pipeline and the interface, modular and scalable, with acceptable throughput and failure rate.",
    },
  ],

  etlBenchmark: {
    columns: ["Apache Airflow", "Apache NiFi", "Celery + Flask", "AWS Glue"],
    rows: [
      ["Throughput (records/s)", "5,000", "8,500", "4,000", "12,000"],
      ["Latency (s)", "45", "30", "60", "25"],
      ["Failure rate", "1.2%", "0.9%", "1.8%", "0.7%"],
      ["Recovery time", "5–8 min", "3–5 min", "8–12 min", "2–4 min"],
    ],
    chosen: 2,
  },

  stacks: {
    v1: {
      title: "Version 1 · FastAPI + PostgreSQL + Jinja2",
      text: "A first application built quickly to demonstrate DataPull: asynchronous FastAPI endpoints, SQLAlchemy and PostgreSQL (JSONB), simple HTML pages with Jinja2, deployed with Docker on EC2. An ingestion script paused itself when the machine was overloaded and sized its workers from the available resources.",
      image: "/images/internship/architecture-v1.jpg",
    },
    v2: {
      title: "Version 2 · Spring Boot microservices + Elasticsearch + React",
      text: "The architecture kept for production. It traded the lightness of the first stack for horizontal scalability, advanced search and an interactive interface.",
      image: "/images/internship/architecture-v2.jpg",
      reasons: [
        "Scalability: Spring microservices and Elasticsearch scale horizontally",
        "Search: full-text search, fuzzy matching and aggregations",
        "Enterprise-ready: widely adopted stack and distributed architecture",
        "Dynamic UI: React instead of server-rendered Jinja2 pages",
      ],
    },
  },

  design: {
    actors: [
      ["User", "searches B2B and B2C data, professional emails, company information and reviews, and exports results"],
      ["Site administrator", "monitors data quality, API performance and errors, audits activity and plans maintenance"],
      ["Performance monitor", "detects errors, analyses logs and unusual behaviour, produces performance reports"],
      ["Data collector", "gathers raw data from APIs, public datasets and scrapers"],
      ["Data cleaner", "filters and scores the quality of raw and cleaned data"],
      ["Data updater", "keeps data fresh, segmented and traceable"],
    ],
    models: [
      ["B2B", "a business with its location, opening hours, contact details, Google reviews and online presence"],
      ["B2C", "an individual profile with personal, geographic and professional information"],
      ["ShadowPilot", "a company's online reputation: Trustpilot reviews, trust score and business metrics"],
    ],
    sequenceImage: "/images/internship/sequence-b2b-search.jpg",
  },

  collection: [
    {
      title: "Public APIs (INSEE, INPI, RNE)",
      points: [
        "Endpoints explored with Swagger and tested in Postman",
        "Python scripts with JWT authentication and automatic re-login",
        "Date-based pagination (30-day windows since 2010, 100 records per page) so a run can resume after an interruption",
        "Upsert into MongoDB with a unique index to avoid duplicates, 3 retries and rate-limit delays",
      ],
    },
    {
      title: "Open datasets (RNE, Opendatasoft)",
      points: [
        "Bulk downloads over FTP (FileZilla, then ftplib scripts)",
        "Custom parsers to standardise CSV and JSON formats",
        "Scheduled checks to pick up new dataset versions",
      ],
    },
       {
      title: "Web data collection",
      points: [
        "Collection of publicly available business information from online business directories",
        "Selenium for pages rendered with JavaScript, BeautifulSoup for parsing",
        "asyncio + aiohttp with a concurrency limit to keep the load on each site low",
        "Delays between requests, retries and error handling for long, stable runs",
        "Output structured with Pandas and checked before entering the cleaning pipeline",
      ],
    },
    {
      title: "Collection jobs on AWS EC2",
      points: [
        "Collection jobs distributed across several EC2 instances to run in parallel",
        "Mix of t3.small and t3.medium instances to balance cost and performance",
        "Instances stopped after 8 hours and costs followed in AWS Cost Explorer",
      ],
    },
  ],

  cleaning: [
    ["Contact standardisation", "fuzzy matching with RapidFuzz to fix city names, countries and missing geographic data, processed in batches"],
    ["Company enrichment", "professional email discovery (WHOIS lookups, website content) with validation, and French department / region mapping"],
    ["Data protection", "sensitive personal fields encrypted with Fernet (cryptography) while staying usable in the pipelines"],
    ["Quality tracking", "Power BI dashboards to spot gaps and duplicates before cleaning and to follow progress"],
  ],

  services: [
    {
      title: "Search & CRUD service",
      text: "Spring Boot + Spring Data Elasticsearch. Builds dynamic Bool queries from the user's filters: fuzzy Match queries (\"Parls\" finds \"Paris\"), Prefix, Wildcard and Term queries, sorted by relevance and paginated. Secured connection to the cluster with SSL.",
    },
    {
      title: "Email scripts service",
      text: "Generates likely professional email combinations from a name and a domain, then validates and enriches them. Talks to the search service to check existing records and store new ones.",
    },
    {
      title: "User management service",
      text: "Registration, login, profiles and roles with Keycloak (OpenID Connect, JWT). Access rules with @PreAuthorize (ROLE_USER, ROLE_ADMIN), roles synchronised between Keycloak and the local database.",
    },
    {
      title: "React frontend",
      text: "Component-based SPA with React Router and Axios, Bootstrap + Tailwind CSS. Search bar with exact or fuzzy mode, result grids with CSV / Excel / PDF export, Leaflet map with marker clustering, analytics dashboards.",
    },
  ],

  etl: {
    text: "A separate ETL application processes files up to 5 GB: Flask web interface and REST API, Celery workers with Redis as broker, Celery Beat for scheduled jobs, MongoDB, SQL databases and Elasticsearch as destinations. Large files are split into memory-bounded segments, and jobs are followed in real time on a dashboard and in Flower.",
    image: "/images/internship/etl-architecture.jpg",
    projectId: 7, // link to the ETL project page if it exists
  },

  results: [
    { src: "/images/internship/datapull-home.jpg", caption: "DataPull home page and services" },
    { src: "/images/internship/datapull-dashboard.jpg", caption: "Choosing between the B2B and B2C solutions" },
    { src: "/images/internship/datapull-b2b-map.jpg", caption: "B2B company search on an interactive map" },
    { src: "/images/internship/datapull-shadowpilot.jpg", caption: "ShadowPilot: top-rated companies and reputation" },
    { src: "/images/internship/etl-dashboard.jpg", caption: "ETL platform dashboard" },
  ],

  lessons: [
    "Adaptability: starting with FastAPI and PostgreSQL, then moving to Spring Boot and Elasticsearch as the needs grew, taught me to make lasting technical choices.",
    "Reliability first: a full ETL pipeline on real data showed how much clean, modular code and careful error handling matter.",
    "Cloud in practice: running EC2 instances and keeping costs under control taught me the trade-offs between performance and efficiency.",
    "Teamwork: working in Scrum showed the value of breaking problems down, iterating and shipping regularly.",
  ],

  nextSteps: [
    "AI lead scoring to predict which prospects are most likely to convert",
    "NLP to extract and classify data from unstructured sources",
    "API Gateway, service registry and full integration of the ETL application",
    "Centralised S3 storage, structured logs and monitoring (CloudWatch, Prometheus)",
    "CRM integrations and payments (Stripe)",
    "Privacy by design and consent management beyond GDPR",
  ],
};
