import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Mail, Phone, Menu, X } from "lucide-react";

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-xl shadow-2xl" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }, 100);
              }}
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              Ayoub Alouan
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center bg-slate-800/60 backdrop-blur-xl rounded-full px-8 py-2 border border-cyan-500/20 shadow-2xl relative overflow-hidden">
              <div
                className="absolute inset-0 -z-10"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.15), transparent)",
                  transform: `translateX(${
                    navItems
                      .map((i) => i.toLowerCase())
                      .indexOf(activeSection) * 100
                  }%)`,
                  transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              />

              <div className="relative flex gap-1">
                {navItems.map((item) => {
                  const isActive =
                    location.pathname === "/" &&
                    activeSection === item.toLowerCase();
                  return (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 z-10
                        ${
                          isActive
                            ? "text-white font-semibold"
                            : "text-gray-400 hover:text-gray-100"
                        }`}
                    >
                      {isActive && (
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/50 -z-10 animate-pulse" />
                      )}
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-3 bg-slate-800/80 backdrop-blur-xl rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all relative z-[60]"
            >
              {isMobileMenuOpen ? (
                <X size={28} className="text-white" />
              ) : (
                <Menu size={28} className="text-cyan-400" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[55] md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Overlay - Fond noir */}
        <div
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-500 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Sidebar - Glisse de GAUCHE à DROITE */}
        <div
          className={`absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-cyan-500/30 shadow-2xl transform transition-transform duration-500 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } overflow-y-auto`}
        >
          <div className="p-8">
            {/* Header du menu */}
            <div className="flex justify-between items-center mb-12 mt-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Menu
              </h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition"
              >
                <X size={24} />
              </button>
            </div>

            {/* Liste des liens */}
            <div className="space-y-4">
              {navItems.map((item) => {
                const isActive =
                  location.pathname === "/" &&
                  activeSection === item.toLowerCase();
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`w-full text-left px-6 py-4 rounded-xl text-lg font-medium transition-all
                      ${
                        isActive
                          ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50"
                          : "text-gray-300 hover:bg-slate-800 hover:text-white"
                      }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-slate-700">
              <p className="text-sm text-gray-400 mb-4">Contact</p>
              <div className="space-y-3 text-gray-300">
                <a
                  href="mailto:alouanayoub3@gmail.com"
                  className="flex items-center gap-3 hover:text-cyan-400 transition-colors"
                >
                  <Mail size={18} className="text-cyan-400" />
                  <span className="text-sm break-all">alouanayoub3@gmail.com</span>
                </a>
                <a
                  href="tel:+212652634966"
                  className="flex items-center gap-3 hover:text-cyan-400 transition-colors"
                >
                  <Phone size={18} className="text-cyan-400" />
                  <span className="text-sm">+212 652-634-966</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}