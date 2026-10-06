// Detail pages for each skill category (/skills/:category).
// Keys must match the categories in skills.js. Project ids come from projects.js.

export const skillDetails = {
  Backend: {
    tagline: "Java and Spring Boot are my main stack.",
    background: [
      "Most of my work is on the backend. I started with Spring Boot on a leave management system for the Court of Appeal of Marrakech, with JWT security and a multi-level approval workflow used by 200+ employees.",
      "At IAWEB.DEV I designed the backend of DataPull as Spring Boot microservices: a search service on Elasticsearch, an email service and a user service secured with Keycloak. I also use Spring Boot in my personal projects for parsing code, OCR and mobile backends.",
    ],
    tools: [
      { name: "Java (8/11/17)", use: "Main language for backend services, from REST controllers to code analysis with JavaParser." },
      { name: "Spring Boot", use: "Every Java backend I build: REST APIs, configuration, scheduled and async tasks." },
      { name: "Spring Cloud", use: "Building blocks for microservices: configuration and communication between services." },
      { name: "Spring Security", use: "Securing APIs with JWT and role-based access (@PreAuthorize, ROLE_USER / ROLE_ADMIN)." },
      { name: "Microservices", use: "DataPull split into search, email and user services talking over REST." },
      { name: "REST APIs", use: "Paginated, filterable endpoints consumed by React, Angular and Flutter front ends." },
      { name: "JPA / Hibernate", use: "Entity modelling and persistence for users, roles, leave requests and tasks." },
      { name: "Keycloak (SSO / RBAC)", use: "Registration, login, roles and token validation for the DataPull platform." },
      { name: "JWT", use: "Stateless authentication between front ends and APIs, with refresh flows." },
      { name: "Maven", use: "Dependency management and builds for all Spring projects." },
    ],
    experiences: [
      { company: "IAWEB.DEV – Havet Digital", how: "Spring Boot microservices for DataPull, Elasticsearch search service, Keycloak security." },
      { company: "Court of Appeal – Marrakech", how: "Spring Boot backend of the leave management system with JWT and RBAC." },
    ],
    projects: [
      { id: 1, how: "Microservices backend with Spring Data Elasticsearch and Keycloak." },
      { id: 2, how: "REST API, multi-level approval workflow and JWT security." },
      { id: 4, how: "Repository cloning and Java parsing with JavaParser, authentication." },
      { id: 5, how: "OCR service with Tess4J (Tesseract) and secured endpoints." },
      { id: 6, how: "Backend of the Flutter app with Spring Security and JWT." },
    ],
  },

  Frontend: {
    tagline: "Clear, responsive interfaces in React and Angular.",
    background: [
      "I build the front ends of my own backends, which helps me design APIs that are easy to use. I work mostly with React for data-heavy dashboards and with Angular for structured business applications.",
      "On DataPull I built the React interface: advanced search with exact and fuzzy modes, result grids with exports, an interactive Leaflet map and analytics dashboards. I also built a mobile app with Flutter.",
    ],
    tools: [
      { name: "Angular", use: "Business applications with forms and workflows: leave management, DPD, ScanerCard." },
      { name: "React", use: "Dashboards and search interfaces: DataPull, School Management, this portfolio." },
      { name: "TypeScript", use: "Typed components and services in Angular, safer refactoring." },
      { name: "JavaScript (ES6+)", use: "Everyday language of the web front ends, Axios calls, state handling." },
      { name: "HTML5 / CSS3", use: "Accessible, semantic markup and responsive layouts." },
      { name: "Tailwind CSS", use: "Design tokens, light and dark themes and responsive styling, including this portfolio." },
      { name: "Flutter", use: "Cross-platform mobile app (TaskFlow) with Provider state management." },
    ],
    experiences: [
      { company: "IAWEB.DEV – Havet Digital", how: "React front end of DataPull: search, maps, exports and dashboards." },
      { company: "Court of Appeal – Marrakech", how: "Angular interface for leave requests, approvals and statistics." },
      { company: "EKBlocks – Marrakech", how: "React interface of the school management system." },
    ],
    projects: [
      { id: 1, how: "React SPA with React Router, Axios, Leaflet map and analytics dashboards." },
      { id: 2, how: "Angular reactive interface for employees, managers and HR." },
      { id: 3, how: "React SPA for students, teachers, classes and grades." },
      { id: 4, how: "Angular interface to submit repositories and read the analysis." },
      { id: 5, how: "Angular interface with live camera capture and extracted fields." },
      { id: 6, how: "Flutter mobile app with Material Design." },
    ],
  },

  Data: {
    tagline: "Pipelines that turn raw data into clean, usable data.",
    background: [
      "During my internship I worked on the full data chain of DataPull: collecting business data from public APIs, open datasets and scrapers, then cleaning, enriching and loading it.",
      "I built the ETL application with Flask and Celery to process files of up to 10 GB, with fuzzy matching, email discovery and encryption of sensitive fields. I also use Python with Django REST for application backends.",
    ],
    tools: [
      { name: "Python", use: "Scrapers, API collectors, cleaning modules, ETL jobs and ML notebooks." },
      { name: "Flask", use: "Web interface and REST API of the ETL application, and a multi-agent service." },
      { name: "Django REST Framework", use: "REST backends for the school management system, DPD and ScanerCard." },
      { name: "ETL pipelines", use: "Extract from APIs and files, transform (cleaning, enrichment), load into MongoDB, SQL and Elasticsearch." },
      { name: "Celery + Redis", use: "Asynchronous jobs, queues by file size and scheduled runs with Celery Beat." },
      { name: "Pandas", use: "Structuring scraped data, cleaning and exporting datasets." },
      { name: "Data visualization", use: "Power BI dashboards to follow data quality, Recharts in the web app." },
    ],
    experiences: [
      { company: "IAWEB.DEV – Havet Digital", how: "Data collection, cleaning and enrichment, and the ETL application of DataPull." },
      { company: "EKBlocks – Marrakech", how: "Django REST Framework APIs for the school management system." },
    ],
    projects: [
      { id: 7, how: "Flask + Celery ETL platform for files up to 10 GB." },
      { id: 1, how: "Data collection from APIs, open datasets and scrapers feeding the platform." },
      { id: 3, how: "Django REST Framework backend and data model." },
      { id: 4, how: "Django service for the AI analysis." },
    ],
  },

  AI: {
    tagline: "Putting models to work inside real applications.",
    background: [
      "I use AI where it solves a concrete problem: language models to understand user queries, OCR to read identity cards, and code models to detect design patterns.",
      "In PatternHunter I compared a classic TF-IDF + SVM pipeline with full fine-tuning of CodeBERT and LoRA fine-tuning, and tested the models on hand-written code to measure how well they generalise.",
    ],
    tools: [
      { name: "LLM APIs (OpenAI, Gemini)", use: "Query understanding and smart search in DataPull, code analysis in DPD." },
      { name: "Multi-agent systems", use: "Prospecting engine where agents collaborate with the DataPull services." },
      { name: "Hugging Face Transformers", use: "Loading, fine-tuning and evaluating CodeBERT." },
      { name: "Fine-tuning (CodeBERT, LoRA)", use: "Full fine-tuning and LoRA (0.94% of weights trained) for design pattern classification." },
      { name: "scikit-learn", use: "TF-IDF + SVM baseline, metrics and confusion matrices." },
      { name: "OCR (Tesseract, Google Vision)", use: "Hybrid OCR engine to extract fields from ID cards." },
      { name: "OpenCV", use: "Card detection, cropping, perspective correction and regions of interest." },
    ],
    experiences: [
      { company: "IAWEB.DEV – Havet Digital", how: "ChatGPT integration for query analysis and a multi-agent prospecting service." },
    ],
    projects: [
      { id: 8, how: "TF-IDF + SVM, CodeBERT and LoRA compared on 8 design patterns." },
      { id: 4, how: "AI analysis of Java code to recommend design patterns." },
      { id: 5, how: "Tesseract + Google Vision OCR with OpenCV preprocessing." },
      { id: 1, how: "Language models for user query analysis and intelligent search." },
    ],
  },

  Databases: {
    tagline: "Choosing the right store for each kind of data.",
    background: [
      "I pick the database from the use case: PostgreSQL or MySQL for structured, transactional data, Elasticsearch for search, MongoDB for semi-structured data and Redis for caching and queues.",
      "For DataPull I benchmarked PostgreSQL, Elasticsearch and MongoDB before building a real-time search on Elasticsearch with fuzzy, prefix and boolean queries.",
    ],
    tools: [
      { name: "PostgreSQL", use: "Structured data with JSONB for enriched records, leave management data." },
      { name: "MySQL", use: "Relational storage for ScanerCard and TaskFlow." },
      { name: "SQL Server", use: "Relational databases and SQL queries in academic and business contexts." },
      { name: "MongoDB", use: "Raw company data from public APIs (upserts with a unique index) and ETL outputs." },
      { name: "Elasticsearch", use: "Full-text and fuzzy search, aggregations and paginated results for B2B and B2C profiles." },
      { name: "Redis (caching)", use: "Celery broker, real-time job statistics and caching." },
    ],
    experiences: [
      { company: "IAWEB.DEV – Havet Digital", how: "Elasticsearch search architecture, PostgreSQL and MongoDB for collected data." },
      { company: "Court of Appeal – Marrakech", how: "PostgreSQL database of the leave management system." },
    ],
    projects: [
      { id: 1, how: "Elasticsearch for search, PostgreSQL for structured data." },
      { id: 7, how: "MongoDB, SQL databases and Elasticsearch as ETL destinations, Redis as broker." },
      { id: 2, how: "PostgreSQL data model for employees, requests and approvals." },
      { id: 5, how: "MySQL for scans and users." },
      { id: 6, how: "MySQL behind the Spring Boot API." },
    ],
  },

  CloudDevOps: {
    tagline: "Shipping applications in containers to the cloud.",
    background: [
      "I containerise my applications with Docker and Docker Compose so they run the same way everywhere, and deploy them on AWS.",
      "During my internship I ran a fleet of EC2 instances across several regions for data collection, kept costs under control with AWS Cost Explorer, and deployed the DataPull services on EC2 with S3 for storage.",
    ],
    tools: [
      { name: "Docker", use: "Images for Spring Boot, Flask, Django and front-end apps." },
      { name: "Docker Compose", use: "Multi-container setups: microservices, Redis, databases, Celery workers." },
      { name: "AWS (EC2, S3, Lambda, API Gateway)", use: "EC2 hosting and scraping fleet, S3 storage for large datasets." },
      { name: "Jenkins (CI/CD)", use: "Automated build, test and deployment pipelines." },
      { name: "Git / GitHub", use: "Version control, branches and pull requests on every project." },
    ],
    experiences: [
      { company: "IAWEB.DEV – Havet Digital", how: "Docker deployment on AWS EC2 and S3, EC2 fleet for data collection." },
    ],
    projects: [
      { id: 1, how: "Dockerised services deployed on AWS EC2 with S3 storage." },
      { id: 7, how: "Docker Compose setup scaling workers horizontally and vertically." },
      { id: 4, how: "Multi-container orchestration with Docker Compose." },
      { id: 5, how: "Spring Boot, Django and MySQL in Docker Compose." },
    ],
  },

  Quality: {
    tagline: "Tests and code quality from the start.",
    background: [
      "I test backends with JUnit 5 and Mockito, Python code with PyTest, and APIs with Postman before connecting the front end.",
      "I work in Scrum: sprint planning, daily meetings and reviews, as during my internship where the project was split into 8 sprints.",
    ],
    tools: [
      { name: "JUnit 5", use: "Unit and integration tests of Spring Boot services." },
      { name: "Mockito", use: "Mocking repositories and external services in backend tests." },
      { name: "PyTest", use: "Tests of the ETL application and Python modules." },
      { name: "Postman", use: "Exploring public APIs and testing every REST endpoint." },
      { name: "Selenium", use: "Browser automation for end-to-end tests and scraping." },
      { name: "SonarQube", use: "Static analysis to track bugs, code smells and coverage." },
      { name: "Agile / Scrum", use: "Sprints, daily scrums and reviews within the team." },
    ],
    experiences: [
      { company: "IAWEB.DEV – Havet Digital", how: "JUnit, Mockito and PyTest tests, Scrum with 8 sprints." },
    ],
    projects: [
      { id: 1, how: "JUnit and Mockito tests of the backend services." },
      { id: 7, how: "PyTest tests and large-volume robustness tests." },
      { id: 2, how: "API testing with Postman during development." },
    ],
  },
};
