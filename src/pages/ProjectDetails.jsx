import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProjectById } from "../data/projects";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Calendar,
  Tag,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Navbar from "./navbar";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProjectById(parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center text-white p-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-6">
            The project you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // Gérer la navigation entre les images
  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navbar></Navbar>
      {/* Header avec navigation */}

      <div className="max-w-6xl mx-auto px-6 py-4"></div>
      <div className="max-w-6xl mx-auto px-6 py-4"></div>
      <div className="max-w-6xl mx-auto my-auto px-6 py-4">
        <button
          onClick={() => navigate(-1)}
          className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-2 group"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back
        </button>
      </div>

      {/* Contenu principal */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium">
                ⭐ Featured
              </span>
            )}
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            {project.name}
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            {project.description}
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-all inline-flex items-center gap-2 font-medium hover:scale-105 transform"
              >
                <ExternalLink size={20} />
                View Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all inline-flex items-center gap-2 font-medium hover:scale-105 transform"
              >
                <Github size={20} />
                View Source Code
              </a>
            )}
          </div>
        </div>

        {/* Carousel d'images */}
        {project.images && project.images.length > 0 && (
          <div className="mb-8">
            {/* Image principale */}
            <div className=" relative rounded-2xl overflow-hidden  group flex justify-center">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.name} - Image ${currentImageIndex + 1}`}
                className="max-w-3xl w-full md:w-3/4 lg:w-2/3 h-auto object-cover transition-transform duration-300 rounded-xl"
              />

              {/* Boutons de navigation */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* Compteur d'images */}
                  <div className="absolute top-4 right-4 bg-slate-900/80 px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {project.images.length}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {project.images.length > 1 && (
              <div className=" flex gap-3 overflow-x-auto pb-2">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all mt-4 ml-1 ${
                      currentImageIndex === index
                        ? "border-cyan-400 scale-105"
                        : "border-slate-700 hover:border-slate-500 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Grille de contenu */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Colonne principale */}
          <div className="lg:col-span-2 space-y-8">
            {/* About the Project */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-cyan-400 rounded-full"></span>
                About the Project
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.longDescription}
              </p>
            </div>

            {/* Key Features */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-cyan-400 rounded-full"></span>
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.highlights.map((highlight, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors"
                  >
                    <CheckCircle2
                      className="text-cyan-400 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span className="text-gray-300 text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">
                Project Info
              </h3>

              {/* Date */}
              {project.date && (
                <div className="mb-4 pb-4 border-b border-slate-700">
                  <div className="flex items-center gap-2 text-gray-400 mb-1">
                    <Calendar size={16} />
                    <span className="text-sm">Date</span>
                  </div>
                  <p className="text-white font-medium">{project.date}</p>
                </div>
              )}

              {/* Category */}
              <div className="mb-4 pb-4 border-b border-slate-700">
                <div className="flex items-center gap-2 text-gray-400 mb-1">
                  <Tag size={16} />
                  <span className="text-sm">Category</span>
                </div>
                <p className="text-white font-medium">{project.category}</p>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-sm text-gray-400 mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-sm text-gray-200 transition-colors border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="mt-6 pt-6 border-t border-slate-700 space-y-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm">View on GitHub</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Visit Live Site</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Interested in Working Together?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <button
            onClick={() => navigate("/#contact")}
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-all inline-flex items-center gap-2 font-medium hover:scale-105 transform"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-700 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-gray-400">
          <p>&copy; 2025 Ayoub Alouan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
