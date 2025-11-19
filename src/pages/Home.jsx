import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ChevronDown,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  ExternalLink,
  FileText,
} from "lucide-react";
import myPhoto from "../assets/cv1.jpg";
import { useNavigate } from "react-router-dom";
import myCV from "../assets/ALOUAN_Ayoub_CV_E.pdf";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "projects",
        "education",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const skills = {
    Backend: [
      "Java",
      "Spring Boot",
      "Microservices",
      "Django",
      "Flask",
      "Keycloak",
    ],
    Frontend: ["JavaScript", "React", "Angular", "Flutter"],
    "DevOps & Cloud": ["Docker", "AWS (EC2, S3)", "CI/CD"],
    Data: [
      "ETL",
      "PostgreSQL",
      "Elasticsearch",
      "SQL Server",
      "Python",
      "Celery",
    ],
    "Machine Learning": ["Pandas", "NumPy", "Scikit-learn"],
    Tools: ["Git/GitHub", "JUnit", "Postman", "SonarQube", "Agile/Scrum"],
  };

  const experiences = [
    {
      company: "IAWEB.DEV – Havet Digital",
      role: "Software Engineer & Data Scientist",
      period: "Aug 2025 – Oct 2025",
      type: "Fixed-term contract",
      achievements: [
        "Finalized DataPull platform (Spring Boot, React, AWS) with >90% stability",
        "Designed multi-agent prospecting system integrated with DataPull APIs",
        "Optimized microservices achieving <150ms response time",
      ],
    },
    {
      company: "IAWEB.DEV – Havet Digital",
      role: "Full-Stack Engineer",
      period: "Mar 2025 – Aug 2025",
      type: "Graduation Internship",
      achievements: [
        "Developed 4 Spring Boot microservices handling 3,000 req/min",
        "Built ETL pipeline processing 2M+ leads/day",
        "Deployed real-time search with Elasticsearch + PostgreSQL",
        "Achieved 90% uptime with AWS (EC2, S3) deployment",
      ],
    },
    {
      company: "Court of Appeal Marrakech",
      role: "Web Developer",
      period: "Jul 2024 – Sept 2024",
      type: "Internship",
      achievements: [
        "Built leave management system (Spring Boot + Angular) for 200+ employees",
        "Reduced administrative processing time by 60%",
      ],
    },
    {
      company: "EKBlocks Marrakech",
      role: "Web Developer",
      period: "Jul 2023 – Sept 2023",
      type: "Internship",
      achievements: [
        "Built school management application (Django + React)",
        "Developed student enrollment, classes, and teacher modules",
      ],
    },
  ];

  const projects = [
    {
      name: "DataPull",
      description: "Multi-agent B2B/B2C lead analysis and prospecting platform",
      tech: [
        "Spring Boot",
        "React",
        "AWS",
        "Elasticsearch",
        "PostgreSQL",
        "Docker",
      ],
      highlights: [
        "4 microservices handling 3,000 req/min",
        "ETL processing 2M+ leads/day",
        "90% uptime on AWS cloud",
        "<150ms response time",
      ],
    },
    {
      name: "Leave Management System",
      description: "Enterprise leave management for Court of Appeal",
      tech: ["Spring Boot", "Angular", "PostgreSQL"],
      highlights: [
        "Automated workflows for 200+ employees",
        "60% reduction in processing time",
        "Eliminated manual errors",
      ],
    },
    {
      name: "School Management System",
      description: "Complete school administration platform",
      tech: ["Django", "React", "PostgreSQL"],
      highlights: [
        "Student enrollment system",
        "Class and teacher management",
        "Real-time statistics",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Ayoub Alouan
            </h1>
            <div className="hidden md:flex gap-8">
              {[
                "Home",
                "About",
                "Skills",
                "Experience",
                "Projects",
                "Education",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors ${
                    activeSection === item.toLowerCase()
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center px-6 pt-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT — PHOTO WITH SAME STYLE */}
          <div className="flex justify-center">
            <div className="relative w-120 h-120 mx-auto">
              {/* GLOW EFFECT (SAME STYLE AS BEFORE) */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 to-cyan-400 blur-2xl opacity-40 animate-pulse"></div>

              {/* IMAGE RECTANGLE */}
              <img
                src={myPhoto}
                alt="Ayoub Alouan"
                className="relative w-full h-full object-cover rounded-3xl border-2 border-white shadow-2xl"
              />
            </div>
          </div>

          {/* RIGHT — TEXT */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-slide-up">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Ayoub Alouan
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-6 animate-fade-in">
              Software Engineer • Java • Spring Boot • React • AWS
            </p>

            <p className="text-lg text-gray-400 mb-8 max-w-xl animate-fade-in">
              Specialized in microservices, large-scale data platforms (ETL 2M+
              leads/day) and AI-powered cloud architectures.
            </p>

            {/* ICONS */}
            <div className="flex gap-4 mb-10 justify-center md:justify-start">
              <a
                href="https://github.com/ALOUAN01"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
                target="_blank"
              >
                <Github size={24} />
              </a>

              <a
                href="https://linkedin.com/in/ayoub-alouan"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
                target="_blank"
              >
                <Linkedin size={24} />
              </a>

              <a
                href="mailto:alouanayoub3@gmail.com"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
              >
                <Mail size={24} />
              </a>

              <a
                onClick={() => window.open(myCV, "_blank")}
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors cursor-pointer"
              >
                <FileText size={24} />
              </a>
            </div>

            {/* SCROLL DOWN */}
            <button
              onClick={() => scrollToSection("about")}
              className="animate-bounce text-cyan-400"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Software Engineer specialized in Java and Spring Boot
              microservices with Keycloak (RBAC, SSO), experienced in
              large-scale data processing (ETL 2M+ leads/day) and Cloud
              deployment (AWS/Docker).
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Strong expertise in React and scalable platforms integrating AI
              and high-performance optimization. Passionate about building
              robust, efficient solutions that solve real-world problems.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="text-cyan-400" size={20} />
                <span>Marrakech, Morocco</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="text-cyan-400" size={20} />
                <span>+212 652-634-966</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="text-cyan-400" size={20} />
                <span>alouanayoub3@gmail.com</span>
              </div>
            </div>
          </div>
          {/*<button
            onClick={() => navigate(`/about/${idx}`)}
            className="mt-4 px-3 py-1 bg-cyan-500 hover:bg-cyan-600 rounded text-white text-sm"
          >
            View More
          </button>
          */}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Code className="text-cyan-400" />
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all"
              >
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Briefcase className="text-cyan-400" />
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-400/50 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-cyan-400">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-gray-300">{exp.company}</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-gray-400">{exp.period}</p>
                    <p className="text-sm text-gray-500">{exp.type}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all hover:transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                  {project.name}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-400"
                    >
                      <span className="text-cyan-400">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <GraduationCap className="text-cyan-400" />
            Education & Certifications
          </h2>
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
                Engineering Degree in Computer Science and Networks
              </h3>
              <p className="text-lg text-gray-300 mb-1">EMSI – Marrakech</p>
              <p className="text-gray-400">2022 – 2025</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
                Preparatory Classes for Engineering Studies
              </h3>
              <p className="text-lg text-gray-300 mb-1">EMSI – Marrakech</p>
              <p className="text-gray-400">2020 – 2022</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Award className="text-cyan-400" size={20} />
                Certifications
              </h3>
              <ul className="space-y-2">
                {[
                  "Building Scalable Java Microservices with Spring Boot and Spring Cloud",
                  "Machine Learning with Python",
                  "Introduction to Git and GitHub",
                  "Introduction to DevOps",
                ].map((cert, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400">✓</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm always interested in hearing about new projects and
            opportunities.
          </p>
          <div className="flex flex-wrap gap-6 justify-center mb-12">
            <a
              href="mailto:alouanayoub3@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors font-semibold"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/ayoub-alouan-al"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors font-semibold"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://github.com/ALOUAN01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors font-semibold"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href=""
              onClick={() => window.open(myCV, "_blank")}
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors font-semibold"
            >
              <FileText size={20} />
              My CV
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-gray-300">
            <div>
              <MapPin className="mx-auto mb-2 text-cyan-400" size={24} />
              <p>Marrakech, Morocco</p>
            </div>
            <div>
              <Phone className="mx-auto mb-2 text-cyan-400" size={24} />
              <p>+212 652-634-966</p>
            </div>
            <div>
              <Mail className="mx-auto mb-2 text-cyan-400" size={24} />
              <p>alouanayoub3@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p className="mb-2">
            Languages: Arabic (Native) • French (Fluent) • English (Advanced)
          </p>
          <p>&copy; 2025 Ayoub Alouan. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
