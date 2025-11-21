export const projects = [
  {
    id: 1,
    name: 'DataPull',
    description: 'Multi-agent B2B/B2C lead analysis and prospecting platform',
    longDescription: 'DataPull is an innovative AI-powered prospecting platform that processes over 2 million leads per day. Built with microservices architecture, it provides real-time search capabilities and advanced data enrichment features.',
    tech: ['Spring Boot', 'React', 'AWS', 'Elasticsearch', 'PostgreSQL', 'Docker', 'Keycloak'],
    highlights: [
      '4 microservices handling 3,000 req/min',
      'ETL processing 2M+ leads/day',
      '90% uptime on AWS cloud',
      '<150ms response time'
    ],
     images: [
      '/images/datapull-1.jpg',
      '/images/datapull-2.jpg',
      
    ], // Ajoutez vos images dans public/projects/
    githubUrl: 'https://github.com/ALOUAN01/datapull',
    liveUrl: 'https://datapull.demo.com',
    category: 'Full-Stack',
    featured: true,
    date: '2025-08'
  },
  {
    id: 2,
    name: 'Leave Management System',
    description: 'Enterprise leave management for Court of Appeal',
    longDescription: 'Complete leave management system for the Court of Appeal of Marrakech, managing over 200 employees with automated workflows, approval processes, and real-time notifications.',
    tech: ['Spring Boot', 'Angular', 'PostgreSQL', 'JWT'],
    highlights: [
      'Automated workflows for 200+ employees',
      '60% reduction in processing time',
      'Eliminated manual errors',
      'Role-based access control'
    ],
     images: [
      '/projects/leave-management-1.jpg',
      '/projects/leave-management-2.jpg'
    ],
    githubUrl: 'https://github.com/ALOUAN01/leave-management',
    liveUrl: null,
    category: 'Full-Stack',
    featured: true,
    date: '2024-09'
  },
  {
    id: 3,
    name: 'School Management System',
    description: 'Complete school administration platform',
    longDescription: 'Comprehensive school management application built for EKBlocks, handling student enrollment, class management, teacher assignment, and academic tracking.',
    tech: ['Django', 'React', 'PostgreSQL', 'REST API'],
    highlights: [
      'Student enrollment system',
      'Class and teacher management',
      'Real-time statistics dashboard',
      'Parent portal integration'
    ],
     images: [
      '/projects/school-management-1.jpg',
      '/projects/school-management-2.jpg',
      '/projects/school-management-3.jpg',
      '/projects/school-management-4.jpg'
    ],
    githubUrl: 'https://github.com/ALOUAN01/school-management',
    liveUrl: null,
    category: 'Full-Stack',
    featured: false,
    date: '2023-09'
  },
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