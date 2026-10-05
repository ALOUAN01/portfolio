export const skills = {
  Backend: [
    "Java",
    "Spring Boot",
    "Microservices",
    "Django",
    "Flask",
    "Keycloak",
  ],
  Frontend: ["JavaScript", "React", "Angular", "Flutter"],
  DevOps_Cloud: ["Docker", "AWS (EC2, S3)", "CI/CD"],
  Data: ["ETL", "PostgreSQL", "Elasticsearch", "SQL Server", "Python", "Celery"],
  MachineLearning: ["Pandas", "NumPy", "Scikit-learn"],
  Tools: ["Git/GitHub", "JUnit", "Postman", "SonarQube", "Agile/Scrum"],
};

// Retourner toutes les skill categories
export const getAllSkills = () => skills;

// Retourner juste les noms de catégories
export const getSkillCategories = () => Object.keys(skills);

// Retourner les skills d'une catégorie
export const getSkillsByCategory = (category) => skills[category] || [];
