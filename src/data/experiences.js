export const experiences = [
  {
    company: "IAWEB.DEV – Havet Digital",
    role: "Software Engineer",
    period: "Aug 2025 – Dec 2025",
    type: "Full-time",
    achievements: [
      "Designed a multi-agent lead-generation application: CrewAI agents and the ChatGPT API turn a natural-language request into a search plan and run it against DataPull",
      "Built its Python / Flask back end (REST APIs on top of the DataPull services) and its Next.js front end",
      "Took the DataPull platform (Spring Boot, React) to production: stabilisation, Docker containerisation and deployment on AWS (EC2, S3)",
      "Wrote unit, integration and API tests (JUnit 5, Mockito, Postman) for critical features and followed code quality in SonarQube",
    ],
  },

  {
    company: "IAWEB.DEV – Havet Digital",
    role: "Full-Stack Engineer",
    period: "Mar 2025 – Aug 2025",
    type: "Graduation internship",
    detailsUrl: "/internship/datapull", // "View more" page
    achievements: [
      "Built the Spring Boot back end as 4 microservices (Gateway, B2B, B2C, Users) handling up to 1,000 requests/min, secured with Keycloak (SSO, RBAC, JWT)",
      "Built Python ETL pipelines (Flask, Celery / Redis) that clean, normalise and enrich 500K+ leads a day, with files up to 10 GB",
      "Collected data from public APIs and web pages (Selenium, BeautifulSoup, asyncio) and prototyped the first version with FastAPI and PostgreSQL",
      "Implemented real-time search with Elasticsearch and PostgreSQL: fuzzy queries, filters and aggregations",
      "Built the React front end (dashboards, interactive map, exports), tested with JUnit, Mockito and PyTest, and deployed with Docker on AWS EC2 / S3",
    ],
  },

  {
    company: "Court of Appeal – Marrakech",
    role: "Web Developer",
    period: "Jul 2024 – Sep 2024",
    type: "Internship",
    achievements: [
      "Developed a leave-management system (Spring Boot, Angular) used by 200+ employees",
      "Designed a multi-level approval workflow (employee → manager → replacement) with notifications and statistics",
      "Reduced administrative processing time by 60% by replacing paper-based HR steps",
      "Secured access with JWT and role-based access control (RBAC); ran functional and integration tests before delivery",
    ],
  },

  {
    company: "EKBlocks – Marrakech",
    role: "Web Developer",
    period: "Jul 2023 – Sep 2023",
    type: "Internship",
    achievements: [
      "Developed a school-management system with Django REST Framework and a React single-page app",
      "Implemented enrolment, class assignment, teacher management, grades and absence tracking",
      "Ran functional tests of the main features before delivery",
    ],
  },
];

// Fonction pour obtenir tous les projets
export const getAllexperiences = () => {
  return experiences;
};

// Fonction pour obtenir un projet par ID
export const getExperiencesById = (id) => {
  return experiences.find((experience) => experience.id === id);
};

export const getExperiencesImpo = () => {
  const importantIds = [1, 2, 3];
  return experiences.filter((experience) => importantIds.includes(experience.id));
};
