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
  FileText,
} from "lucide-react";
import myPhoto from "../assets/cv1.jpg";
import { useNavigate } from "react-router-dom";
import myCV from "../assets/ALOUAN_Ayoub_CV_E.pdf";
import { getProjectImpo } from "../data/projects";
import Navbar from "./navbar";
import { getAllSkills } from "../data/skills";
import { getAllexperiences } from "../data/experiences";
export default function Portfolio() {
  const navigate = useNavigate();
  const skills = getAllSkills();

  const experiences = getAllexperiences();

  const projects = getProjectImpo();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navbar */}
      <Navbar></Navbar>
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
                className="relative w-full h-full object-cover rounded-2xl border-2 border-white shadow-2xl"
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
                href="https://linkedin.com/in/ayoub-alouan-al"
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

            {/* SCROLL DOWN 
            <button
              onClick={() => scrollToSection("about")}
              className="animate-bounce text-cyan-400"
            >
              <ChevronDown size={32} />
            </button>*/}
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
          {/* Header avec titre et bouton */}
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-4xl font-bold text-center mb-6">
              Featured Projects
            </h2>
            <button
              onClick={() => navigate('/projects')}
              className="group relative flex items-center gap-3 px-8 py-3.5 
                         bg-gradient-to-r from-slate-700 to-slate-600
                         hover:from-cyan-500 hover:to-blue-500
                         border-2 border-slate-600 hover:border-transparent
                         rounded-xl text-white font-semibold text-base
                         transition-all duration-300 
                         hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30
                         overflow-hidden"
            >
              {/* Effet de brillance au survol */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
              
              <span className="relative z-10">View All Projects</span>
              <span className="relative z-10 transform transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>

          {/* Grille des projets */}
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
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="space-y-1">
                  {project.highlights.slice(0, 3).map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-400"
                    >
                      <span className="text-cyan-400">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="group absolute right-4 bottom-0 flex items-center gap-2 px-4 py-2 
                            text-cyan-300 -sm font-medium 
                            transition-all duration-300 "
                >
                  see more
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
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
