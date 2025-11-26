import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Filter,
  Grid3x3,
  List,
  Calendar,
  Code,
  ExternalLink,
  Github,
  ArrowUp,
  Star,
  TrendingUp,
} from "lucide-react";
import { getAllProjects } from "../data/projects";
import Navbar from "./navbar";

const mockProjects = getAllProjects();

export default function AllProjects() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Categories
  const categories = ["All", ...new Set(mockProjects.map((p) => p.category))];

  // Filter and sort projects
  const filteredProjects = mockProjects
    .filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tech.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "featured") {
        return b.featured - a.featured;
      } else if (sortBy === "date") {
        return b.date.localeCompare(a.date);
      } else {
        return a.name.localeCompare(b.name);
      }
    });

  const stats = {
    total: mockProjects.length,
    featured: mockProjects.filter((p) => p.featured).length,
    categories: categories.length - 1,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navbar />
      {/* Hero Section */}
      <div className="relative border-b border-slate-700 overflow-hidden ">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, cyan 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-2 sm:px-2 py-2 sm:py-4 mt-16">
          <div className="mb-4 sm:mb-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-2 sm:mb-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              All Projects
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed">
              Explore my complete portfolio of{" "}
              <span className="text-cyan-400 font-semibold">
                {stats.total} projects
              </span>{" "}
              spanning across {stats.categories} categories
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-2xl">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-slate-700">
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <Code size={16} className="sm:w-5 sm:h-5" />
                <span className="text-xl sm:text-2xl font-bold">
                  {stats.total}
                </span>
                <p className="text-xs sm:text-sm text-gray-400">
                  Total Projects
                </p>
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-slate-700">
              <div className="flex items-center gap-2 text-yellow-400 mb-1">
                <Star size={16} className="sm:w-5 sm:h-5" />
                <span className="text-xl sm:text-2xl font-bold">
                  {stats.featured}
                </span>
                <p className="text-xs sm:text-sm text-gray-400">Featured</p>
              </div>
              
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-slate-700">
              <div className="flex items-center gap-2 text-purple-400 mb-1">
                <TrendingUp size={16} className="sm:w-5 sm:h-5" />
                <span className="text-xl sm:text-2xl font-bold">
                  {stats.categories}
                </span>
                <p className="text-xs sm:text-sm text-gray-400">Categories</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section - Sticky - Mobile Optimized */}
      <div className=" top-16 sm:top-20 z-20 border-b border-slate-700 bg-slate-900/95 backdrop-blur-lg shadow-lg">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 py-2 sm:py-4">
          {/* Search Bar - Full width on mobile */}
          <div className="relative mb-3">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              size={18}
            />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all text-base"
            />
          </div>

          {/* Filters Row - Optimized for mobile */}
          <div className="flex gap-2">
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="flex-1 min-w-0 px-3 py-2.5 bg-slate-800/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 cursor-pointer transition-all text-sm"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "All" ? "All Categories" : cat}
                </option>
              ))}
            </select>

            {/* Sort Filter */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="flex-1 min-w-0 px-3 py-2.5 bg-slate-800/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 cursor-pointer transition-all text-sm"
            >
              <option value="featured">Featured</option>
              <option value="date">Newest</option>
              <option value="name">A-Z</option>
            </select>

            {/* View Toggle */}
            <div className="flex gap-1 bg-slate-800/50 p-1 rounded-xl border border-slate-600 flex-shrink-0">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2.5 rounded-lg transition-all ${
                  viewMode === "grid"
                    ? "bg-cyan-500 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-slate-700"
                }`}
                aria-label="Grid view"
              >
                <Grid3x3 size={18} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2.5 rounded-lg transition-all ${
                  viewMode === "list"
                    ? "bg-cyan-500 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-slate-700"
                }`}
                aria-label="List view"
              >
                <List size={18} />
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-3 flex items-center justify-between text-xs sm:text-sm">
            <span className="text-gray-400">
              <span className="text-cyan-400 font-semibold">
                {filteredProjects.length}
              </span>{" "}
              of{" "}
              <span className="text-cyan-400 font-semibold">
                {mockProjects.length}
              </span>
            </span>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="text-cyan-400 hover:text-cyan-300 transition-colors text-xs sm:text-sm"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Projects Grid/List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12 sm:py-20">
            <div className="text-4xl sm:text-6xl mb-4">🔍</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              No projects found
            </h3>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-xl transition-all text-sm sm:text-base"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === "grid" ? (
          // Grid View
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-400/50 transition-all hover:transform hover:scale-105 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20"
                onClick={() => navigate(`/project/${project.id}`)}
                style={{
                  animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s both`,
                }}
              >
                {/* Content */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="px-2.5 py-1 bg-cyan-500/20 text-cyan-400 rounded-lg text-xs font-medium">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-2.5 py-1 bg-yellow-500/20 text-yellow-400 rounded-lg text-xs font-medium flex items-center gap-1">
                        <Star size={12} fill="currentColor" />
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-cyan-400 group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {project.name}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-slate-700/50 rounded-lg text-xs text-gray-400 border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2.5 py-1 bg-slate-700/50 rounded-lg text-xs text-cyan-400 border border-slate-600">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Calendar size={14} />
                      <span>{project.date}</span>
                    </div>
                    <span className="text-cyan-400 text-sm flex items-center gap-1 group-hover:gap-2 transition-all font-medium">
                      View Details
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // List View
          <div className="space-y-4 sm:space-y-6">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-cyan-400/50 transition-all cursor-pointer overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20"
                onClick={() => navigate(`/project/${project.id}`)}
                style={{
                  animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s both`,
                }}
              >
                <div className="flex flex-col p-4 sm:p-6 md:p-8">
                  <div className="flex-1">
                    <div className="flex items-center flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-lg text-sm font-medium">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-lg text-sm font-medium flex items-center gap-1">
                          <Star size={14} fill="currentColor" />
                          Featured
                        </span>
                      )}
                      <div className="flex items-center gap-2 text-sm text-gray-400 ml-auto">
                        <Calendar size={16} />
                        <span>{project.date}</span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      {project.name}
                    </h3>

                    <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-4 sm:mb-6">
                      {project.highlights.slice(0, 3).map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-400"
                        >
                          <span className="text-cyan-400 mt-1">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-slate-700/50 rounded-lg text-sm text-gray-300 border border-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4 border-t border-slate-700">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 px-4 py-2.5 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-all flex items-center justify-center gap-2 font-medium text-sm sm:text-base"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 px-4 py-2.5 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all flex items-center justify-center gap-2 font-medium text-sm sm:text-base"
                      >
                        <Github size={18} />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 p-3 sm:p-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-50 group"
          aria-label="Scroll to top"
        >
          <ArrowUp
            size={20}
            className="sm:w-6 sm:h-6 group-hover:-translate-y-1 transition-transform"
          />
        </button>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-700 mt-12 sm:mt-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 text-center text-gray-400 text-sm sm:text-base">
          <p className="mb-2">Built with ❤️ using React & Tailwind CSS</p>
          <p>&copy; 2025 Ayoub Alouan. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
