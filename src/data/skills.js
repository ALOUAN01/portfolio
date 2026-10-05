// Skills grouped by category (display names are in profile.js → skillLabels).
// Built from the CV and the technologies used in the portfolio projects.
export const skills = {
  Backend: [
    "Java (8/11/17)",
    "Spring Boot",
    "Spring Cloud",
    "Spring Security",
    "Microservices",
    "REST APIs",
    "JPA / Hibernate",
    "Keycloak (SSO / RBAC)",
    "JWT",
    "Maven",
  ],
  Frontend: [
    "Angular",
    "React",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5 / CSS3",
    "Tailwind CSS",
    "Flutter",
  ],
  Data: [
    "Python",
    "Flask",
    "Django REST Framework",
    "ETL pipelines",
    "Celery + Redis",
    "Pandas",
    "Data visualization",
  ],
  AI: [
    "LLM APIs (OpenAI, Gemini)",
    "Multi-agent systems",
    "Hugging Face Transformers",
    "Fine-tuning (CodeBERT, LoRA)",
    "scikit-learn",
    "OCR (Tesseract, Google Vision)",
    "OpenCV",
  ],
  Databases: [
    "PostgreSQL",
    "MySQL",
    "SQL Server",
    "MongoDB",
    "Elasticsearch",
    "Redis (caching)",
  ],
  CloudDevOps: [
    "Docker",
    "Docker Compose",
    "AWS (EC2, S3, Lambda, API Gateway)",
    "Jenkins (CI/CD)",
    "Git / GitHub",
  ],
  Quality: [
    "JUnit 5",
    "Mockito",
    "PyTest",
    "Postman",
    "Selenium",
    "SonarQube",
    "Agile / Scrum",
  ],
};

// Retourner toutes les skill categories
export const getAllSkills = () => skills;

// Retourner juste les noms de catégories
export const getSkillCategories = () => Object.keys(skills);

// Retourner les skills d'une catégorie
export const getSkillsByCategory = (category) => skills[category] || [];