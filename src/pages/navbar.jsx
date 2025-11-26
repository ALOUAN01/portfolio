import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Mail, Phone, Menu, X, Github, Linkedin, ExternalLink } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Education",
    "Contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (location.pathname === "/") {
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
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = -80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition + offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = -80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition + offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navigation Desktop */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-slate-900/80 backdrop-blur-2xl shadow-2xl  border-slate-700/50" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo avec effet néon */}
            <button
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }, 100);
              }}
              className="group relative text-2xl md:text-3xl font-bold transition-all duration-300"
            >
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              <span className="relative bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Ayoub Alouan
              </span>
            </button>

            {/* Desktop Menu - Redesigned */}
            <div className="hidden lg:flex items-center gap-2 bg-slate-800/80 backdrop-blur-2xl rounded-2xl px-2 py-2 border border-slate-700/50 shadow-2xl">
              {navItems.map((item) => {
                const isActive =
                  location.pathname === "/" &&
                  activeSection === item.toLowerCase();
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 group
                      ${
                        isActive
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                      }`}
                  >
                    {/* Active background with gradient */}
                    {isActive && (
                      <>
                        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/50"></span>
                        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 blur-xl opacity-50 animate-pulse"></span>
                      </>
                    )}
                    
                    {/* Hover effect */}
                    {!isActive && (
                      <span className="absolute inset-0 rounded-xl bg-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    )}
                    
                    <span className="relative z-10">{item}</span>
                  </button>
                );
              })}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://github.com/ALOUAN01"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-800/80 hover:bg-slate-700 border border-slate-700/50 rounded-xl transition-all hover:scale-110 hover:border-cyan-400/50"
              >
                <Github size={20} className="text-gray-300 hover:text-cyan-400 transition-colors" />
              </a>
              
              <button
                onClick={() => scrollToSection("contact")}
                className="group relative px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-medium text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
              >
                {/* Shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                <span className="relative flex items-center gap-2">
                  Let's Talk
                  <ExternalLink size={16} className="group-hover:rotate-12 transition-transform" />
                </span>
              </button>
            </div>

            {/* Mobile Hamburger Button - Redesigned */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative p-3.5 bg-slate-800/90 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all z-[60] group overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                {isMobileMenuOpen ? (
                  <X size={24} className="text-cyan-400 transition-transform duration-300 rotate-90" />
                ) : (
                  <Menu size={24} className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Ultra Modern */}
      <div
        className={`fixed inset-0 z-[55] lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop with blur */}
        <div
          className={`absolute inset-0 bg-slate-900/90 backdrop-blur-xl transition-all duration-500 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Sliding Panel */}
        <div
          className={`absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl transform transition-all duration-500 ease-out overflow-y-auto ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Decorative gradient border */}
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500"></div>
          
          <div className="p-8 relative">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, cyan 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            {/* Header */}
            <div className="relative flex justify-between items-center mb-12 mt-4">
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">
                  Navigation
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 bg-slate-800/80 rounded-xl hover:bg-slate-700 border border-slate-700/50 transition-all hover:scale-110 hover:rotate-90"
              >
                <X size={20} className="text-cyan-400" />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="relative space-y-2">
              {navItems.map((item, index) => {
                const isActive =
                  location.pathname === "/" &&
                  activeSection === item.toLowerCase();
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`group relative w-full text-left px-6 py-4 rounded-xl text-base font-medium transition-all duration-300 overflow-hidden
                      ${
                        isActive
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      }`}
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      animation: isMobileMenuOpen ? 'slideInLeft 0.5s ease-out both' : 'none'
                    }}
                  >
                    {/* Active state */}
                    {isActive && (
                      <>
                        <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600"></span>
                        <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 blur-xl opacity-50"></span>
                      </>
                    )}
                    
                    {/* Hover state */}
                    {!isActive && (
                      <span className="absolute inset-0 bg-slate-800/50 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    )}
                    
                    {/* Content */}
                    <span className="relative z-10 flex items-center justify-between">
                      <span>{item}</span>
                      <span className={`text-cyan-400 transition-transform duration-300 ${isActive || 'group-hover:translate-x-1'}`}>
                        →
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Contact Info - Redesigned */}
            <div className="relative mt-12 pt-8 border-t border-slate-700/50">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-4 font-semibold">
                Get in Touch
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:alouanayoub3@gmail.com"
                  className="group flex items-center gap-3 px-4 py-3 bg-slate-800/50 hover:bg-slate-800 rounded-xl transition-all hover:scale-105 border border-slate-700/50 hover:border-cyan-400/50"
                >
                  <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <Mail size={18} className="text-cyan-400" />
                  </div>
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors break-all">
                    alouanayoub3@gmail.com
                  </span>
                </a>
                
                <a
                  href="tel:+212652634966"
                  className="group flex items-center gap-3 px-4 py-3 bg-slate-800/50 hover:bg-slate-800 rounded-xl transition-all hover:scale-105 border border-slate-700/50 hover:border-cyan-400/50"
                >
                  <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <Phone size={18} className="text-cyan-400" />
                  </div>
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    +212 652-634-966
                  </span>
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-6 flex gap-3">
                <a
                  href="https://github.com/ALOUAN01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-800/50 hover:bg-slate-800 rounded-xl transition-all hover:scale-105 border border-slate-700/50 hover:border-cyan-400/50 text-gray-300 hover:text-cyan-400"
                >
                  <Github size={18} />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/ayoub-alouan-al"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-800/50 hover:bg-slate-800 rounded-xl transition-all hover:scale-105 border border-slate-700/50 hover:border-cyan-400/50 text-gray-300 hover:text-cyan-400"
                >
                  <Linkedin size={18} />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* CTA Button Mobile */}
            <button
              onClick={() => {
                scrollToSection("contact");
                setIsMobileMenuOpen(false);
              }}
              className="relative w-full mt-8 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white overflow-hidden group shadow-lg shadow-cyan-500/30"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-active:translate-x-full transition-transform duration-700"></span>
              <span className="relative flex items-center justify-center gap-2">
                Start a Project
                <ExternalLink size={18} className="group-hover:rotate-12 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </>
  );
}