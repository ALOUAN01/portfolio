import React, { useState } from "react";
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
} from "lucide-react";
import { getAllProjects } from "../data/projects";
import Navbar from "./navbar";

// Simuler vos données de projets
const mockProjects = getAllProjects();

export default function AllProjects() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'

  // Extraire toutes les catégories
  const categories = ["All", ...new Set(mockProjects.map((p) => p.category))];

  // Filtrer les projets
  const filteredProjects = mockProjects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
         <Navbar></Navbar>
      {/* Header Section */}
      <div className="border-b border-slate-700 px-14 py-12">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <button
            onClick={() => navigate("/")}
            className="text-cyan-400 hover:text-cyan-300 transition-colors mb-6 inline-flex items-center gap-2"
          >
            ← Back to Home
          </button>

          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            All Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Explore my complete portfolio of software engineering projects,
            ranging from full-stack applications to AI-powered solutions.
          </p>
        </div>
      </div>

      {/* Filters Section */}
      <div className="border-b border-slate-700 bg-slate-800/30 sticky top-0 z-10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <div className="flex gap-4 items-center w-full md:w-auto">
              {/* Category Filter */}
              <div className="flex items-center gap-2 flex-1 md:flex-initial">
                <Filter size={18} className="text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2.5 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors cursor-pointer flex-1 md:flex-initial"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex gap-2 bg-slate-700/50 p-1 rounded-lg border border-slate-600">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded transition-colors ${
                    viewMode === "grid"
                      ? "bg-cyan-500 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <Grid3x3 size={18} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded transition-colors ${
                    viewMode === "list"
                      ? "bg-cyan-500 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-400">
            Showing {filteredProjects.length} of {mockProjects.length} projects
          </div>
        </div>
      </div>

      {/* Projects Grid/List */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">No projects found</h3>
            <p className="text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        ) : viewMode === "grid" ? (
          // Grid View
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all hover:transform hover:scale-105 cursor-pointer group"
                onClick={() => navigate(`/project/${project.id}`)}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded text-xs font-medium">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-yellow-400">⭐</span>
                    )}
                  </div>
                  <Code className="text-gray-400 group-hover:text-cyan-400 transition-colors" size={20} />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold mb-2 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-400">
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
                  <span className="text-cyan-400 text-sm group-hover:gap-2 flex items-center gap-1 transition-all">
                    View Details
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // List View
          <div className="space-y-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all cursor-pointer group"
                onClick={() => navigate(`/project/${project.id}`)}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Left Side - Main Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded text-sm font-medium">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded text-sm font-medium">
                          ⭐ Featured
                        </span>
                      )}
                      <div className="flex items-center gap-2 text-sm text-gray-400 ml-auto">
                        <Calendar size={16} />
                        <span>{project.date}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold mb-2 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      {project.name}
                    </h3>

                    <p className="text-gray-300 mb-4">{project.description}</p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-4">
                      {project.highlights.slice(0, 3).map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-400"
                        >
                          <span className="text-cyan-400 mt-1">→</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-gray-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Side - Actions */}
                  <div className="flex md:flex-col gap-3 items-center justify-center md:justify-start">
                    <button className="p-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors">
                      <ExternalLink size={20} />
                    </button>
                    <button className="p-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
                      <Github size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-700 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-gray-400">
          <p>&copy; 2025 Ayoub Alouan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}