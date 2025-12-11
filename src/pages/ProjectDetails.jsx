import { useState, useEffect,useCallback } from "react";
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
  ArrowUp,
  Share2,
  Download,
  Eye,
  Code2,
  Lightbulb,
  ZoomIn,
  X,
} from "lucide-react";
import Navbar from "./navbar";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProjectById(parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      
      // Active section detection
      const sections = ["overview", "features", "tech"];
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };






  




  // Share functionality
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: project.name,
          text: project.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };



  const [isFullscreen, setIsFullscreen] = useState(false);

  const media = project?.media || [];
  const hasMultiple = media.length > 1;

  // Navigation carousel
  const nextImage = useCallback(() => {
    setCurrentImageIndex((i) => (i + 1) % media.length);
  }, [media.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((i) => (i - 1 + media.length) % media.length);
  }, [media.length]);

  const goToSlide = (index) => setCurrentImageIndex(index);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Clavier pour fullscreen
  useEffect(() => {
    if (!isFullscreen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") setIsFullscreen(false);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isFullscreen, nextImage, prevImage]);



  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Projet non trouvé</h1>
          <button
            onClick={() => navigate("/")}
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 rounded-xl transition flex items-center gap-3 mx-auto"
          >
            <ArrowLeft size={22} /> Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  const currentMedia = media[currentImageIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navbar />

      {/* Header avec navigation */}
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between mt-12">
          
          
          {/* Share Button */}
         
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
            {project.category}
          </span>
          {project.featured && (
            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium flex items-center gap-1">
              ⭐ Featured
            </span>
          )}
          {project.date && (
            <span className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm flex items-center gap-1.5">
              <Calendar size={14} />
              {project.date}
            </span>
          )}
          <button
  onClick={handleShare}
  className="ml-auto p-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-full transition-all"
  title="Share project"
>
  <Share2 size={18} />
</button>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent leading-tight">
          {project.name}
        </h1>

        <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
          {project.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-xl transition-all inline-flex items-center gap-2 font-medium hover:scale-105 transform shadow-lg hover:shadow-cyan-500/30"
            >
              <ExternalLink size={20} className="group-hover:rotate-12 transition-transform" />
              View Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 border border-slate-600 rounded-xl transition-all inline-flex items-center gap-2 font-medium hover:scale-105 transform"
            >
              <Github size={20} />
              Source Code
            </a>
          )}
        </div>
      </div>

      {/* Media Carousel - Improved */}
     

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div 
              id="overview"
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-colors"
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
                About the Project
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.longDescription}
              </p>
            </div>

            {/* Key Features */}
            <div 
              id="features"
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-colors"
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.highlights.map((highlight, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-3 p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all hover:scale-105"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <CheckCircle2
                      className="text-cyan-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
                      size={20}
                    />
                    <span className="text-gray-300 text-sm leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info - Sticky */}
            <div 
              id="tech"
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 sticky top-24"
            >
              <h3 className="text-xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
                <Code2 size={20} />
                Project Info
              </h3>

              {/* Category */}
              <div className="mb-4 pb-4 border-b border-slate-700">
                <div className="flex items-center gap-2 text-gray-400 mb-1">
                  <Tag size={16} />
                  <span className="text-sm">Category</span>
                </div>
                <p className="text-white font-medium">{project.category}</p>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm text-gray-400 mb-3 font-medium">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-cyan-500/20 hover:to-blue-500/20 rounded-lg text-sm text-gray-200 transition-all border border-slate-600 hover:border-cyan-400/50 hover:scale-105"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="pt-6 border-t border-slate-700 space-y-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors p-2 hover:bg-slate-700/50 rounded-lg"
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
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors p-2 hover:bg-slate-700/50 rounded-lg"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Visit Live Site</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
              {/* CAROUSEL – Parfaitement fonctionnel */}
      {media.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 my-24">
          <div className=" backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
            {/* Image principale */}
            <div className="relative bg-black/40">
              <div
                className="cursor-zoom-in flex justify-center items-center min-h-96 md:min-h-screen"
                onClick={() => setIsFullscreen(true)}
              >
                {currentMedia.type === "image" ? (
                  <img
                    src={currentMedia.src}
                    alt={`${project.name} - ${currentImageIndex + 1}`}
                    className="max-w-full max-h-screen object-contain"
                    loading="lazy"
                  />
                ) : (
                  <video controls className="max-w-full max-h-screen object-contain">
                    <source src={currentMedia.src} type="video/mp4" />
                    Votre navigateur ne supporte pas la vidéo.
                  </video>
                )}

                {/* Indicateur zoom */}
                <div className="absolute bottom-5 right-5 bg-black/70 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
                  <ZoomIn size={16} />
                  Cliquez pour agrandir
                </div>

                {/* Compteur */}
                {hasMultiple && (
                  <div className="absolute top-5 right-5 bg-black/70 backdrop-blur px-4 py-2 rounded-full text-sm font-medium">
                    {currentImageIndex + 1} / {media.length}
                  </div>
                )}

                {/* Flèches */}
                {hasMultiple && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full backdrop-blur transition hover:scale-110"
                      aria-label="Précédent"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full backdrop-blur transition hover:scale-110"
                      aria-label="Suivant"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Miniatures */}
            {hasMultiple && (
              <div className="p-2 bg-slate-900/70">
                <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-slate-600 pb-2">
                  {media.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => goToSlide(i)}
                      className={`flex-shrink-0 w-28 h-20 rounded-xl overflow-hidden border-3 transition-all mt-2 ml-2 ${
                        i === currentImageIndex
                          ? "border-cyan-400 shadow-lg scale-110"
                          : "border-slate-700 hover:border-slate-500"
                      }`}
                    >
                      {item.type === "image" ? (
                        <img
                          src={item.src}
                          alt={`Miniature ${i + 1}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center">
                          <span className="text-xs font-bold text-white">VIDÉO</span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Fullscreen */}
      {isFullscreen && currentMedia && (
        <div
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center"
          onClick={() => setIsFullscreen(false)}
        >
          <button
            className="absolute top-8 right-8 text-white/80 hover:text-white z-10 p-4 bg-white/10 rounded-full backdrop-blur"
            onClick={() => setIsFullscreen(false)}
          >
            <X size={16} />
          </button>

          {currentMedia.type === "image" ? (
            <img src={currentMedia.src} alt={project.name} className="max-w-full max-h-full object-contain" />
          ) : (
            <video controls autoPlay className="max-w-full max-h-full">
              <source src={currentMedia.src} type="video/mp4" />
            </video>
          )}

          {hasMultiple && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-8 top-1/2 -translate-y-1/2  p-6 bg-black/60 hover:bg-black/80 text-white rounded-full hover:bg-white/30"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-8 top-1/2 -translate-y-1/2  p-6 bg-black/60 hover:bg-black/80 text-white rounded-full hover:bg-white/30"
              >
                <ChevronRight size={16} />
              </button>
            </>
          )}
        </div>
      )}
        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20 text-center relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, cyan 1px, transparent 0)`,
              backgroundSize: '30px 30px'
            }}></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <button
              onClick={() => navigate("/#contact")}
              className="group px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-xl transition-all inline-flex items-center gap-2 font-medium hover:scale-105 transform shadow-lg hover:shadow-cyan-500/30"
            >
              Get in Touch
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-50 group"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-gray-400">
          <p>&copy; 2025 Ayoub Alouan. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        .scrollbar-thin::-webkit-scrollbar {
          height: 8px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #1e293b;
          border-radius: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #475569;
          border-radius: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #06b6d4;
        }
      `}</style>
    </div>
  );
}