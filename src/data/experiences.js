export const experiences = [
  {
    company: "IAWEB.DEV – Havet Digital",
    role: "Software Engineer & Data Scientist",
    period: "Aug 2025 – Oct 2025",
    type: "Fixed-term contract",
    achievements: [
      "Finalized the production-grade DataPull platform (Spring Boot, React, AWS) achieving 90%+ runtime stability",
      "Designed and implemented a multi-agent B2B/B2C prospecting engine fully integrated with DataPull microservices",
      "Optimized distributed services to reach sub-150ms response times under real workload",
      "Strengthened data pipelines and cloud deployment workflows (EC2, S3, Dockerized environments)"
    ]
  },

  {
    company: "IAWEB.DEV – Havet Digital",
    role: "Full-Stack Engineer",
    period: "Mar 2025 – Aug 2025",
    type: "Graduation Internship",
    achievements: [
      "Developed and deployed 4 Spring Boot microservices handling up to 3,000 requests/min in production",
      "Engineered a high-performance ETL pipeline processing 2M+ leads/day (scraping → cleaning → enrichment → indexing)",
      "Implemented real-time search capabilities with Elasticsearch and PostgreSQL",
      "Configured AWS cloud infrastructure achieving 90% uptime with automated monitoring (CloudWatch, S3, EC2)",
      "Contributed to the platform’s architecture design, observability, RBAC security, and CI/CD improvements"
    ]
  },

  {
    company: "Court of Appeal – Marrakech",
    role: "Web Developer",
    period: "Jul 2024 – Sept 2024",
    type: "Internship",
    achievements: [
      "Developed a complete leave management system (Spring Boot + Angular) used by 200+ employees",
      "Designed multi-level approval workflow (employee → responsible → manager → replacement)",
      "Reduced administrative processing time by 60% by automating paper-based HR operations",
      "Implemented real-time notifications, JWT security, and role-based access control (RBAC)"
    ]
  },

  {
    company: "EKBlocks – Marrakech",
    role: "Web Developer",
    period: "Jul 2023 – Sept 2023",
    type: "Internship",
    achievements: [
      "Developed a full school management system (Django + React) with fully modular architecture",
      "Implemented student enrollment, classroom assignment, teacher management, modules, grades, and absence tracking",
      "Built structured REST APIs (Django REST Framework) and a modern React SPA UI",
      "Strengthened the digitalization of school processes through automated academic data workflows"
    ]
  }
];
// Fonction pour obtenir tous les projets
export const getAllexperiences = () => {
  return experiences;
};

// Fonction pour obtenir un projet par ID
export const getExperiencesById = (id) => {
  return experiences.find(experience => experience.id === id);
};

export const getExperiencesImpo = () => {
  const importantIds = [1, 2, 3];
  return experiences.filter(experience => importantIds.includes(experience.id));
};