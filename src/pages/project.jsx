import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, LayoutGrid, List, Star, Github, ExternalLink, X } from "lucide-react";
import { getAllProjects } from "../data/projects";
import Navbar from "./navbar";
import { Tag, MediaThumb, Footer, formatDate, btnPrimary } from "../components/ui";

const allProjects = getAllProjects();
const categories = ["All", ...new Set(allProjects.map((p) => p.category))];

const fieldClass =
  "h-11 rounded-lg border border-line bg-surface px-3 text-sm text-ink transition-colors focus:border-ink focus:outline-none";

export default function AllProjects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid");

  const filtered = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return allProjects
      .filter((p) => {
        const matchesSearch =
          !q ||
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tech.some((t) => t.toLowerCase().includes(q));
        return matchesSearch && (category === "All" || p.category === category);
      })
      .sort((a, b) => {
        if (sortBy === "featured") return b.featured - a.featured;
        if (sortBy === "date") return b.date.localeCompare(a.date);
        return a.name.localeCompare(b.name);
      });
  }, [searchTerm, category, sortBy]);

  const resetFilters = () => {
    setSearchTerm("");
    setCategory("All");
  };

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />

      <main className="mx-auto max-w-6xl px-5 pt-28 pb-24 sm:px-8 md:pt-36">
        <header className="max-w-2xl">
          <h1 className="text-5xl font-semibold tracking-[-0.035em] sm:text-6xl">
            Projects
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {allProjects.length} projects across backend, data, AI and mobile
            work, from internships to production platforms.
          </p>
        </header>

        {/* Filters */}
        <div className="mt-12 flex flex-col gap-3 border-y border-line py-4 md:flex-row md:items-center">
          <label className="relative flex-1">
            <span className="sr-only">Search projects</span>
            <Search
              size={17}
              className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-muted"
              aria-hidden="true"
            />
            <input
              type="search"
              placeholder="Search by name or technology (e.g. Spring Boot)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`${fieldClass} w-full pl-10 placeholder:text-muted`}
            />
          </label>

          <div className="flex gap-2">
            <label className="min-w-0 flex-1 md:w-60 md:flex-none">
              <span className="sr-only">Category</span>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={`${fieldClass} w-full cursor-pointer`}
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c === "All" ? "All categories" : c}
                  </option>
                ))}
              </select>
            </label>

            <label className="w-32 shrink-0">
              <span className="sr-only">Sort by</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={`${fieldClass} w-full cursor-pointer`}
              >
                <option value="featured">Featured</option>
                <option value="date">Newest</option>
                <option value="name">A–Z</option>
              </select>
            </label>

            <div
              className="flex shrink-0 rounded-lg border border-line bg-surface p-1"
              role="group"
              aria-label="Layout"
            >
              {[
                { mode: "grid", icon: LayoutGrid, label: "Grid view" },
                { mode: "list", icon: List, label: "List view" },
              ].map(({ mode, icon: Icon, label }) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  aria-label={label}
                  aria-pressed={viewMode === mode}
                  className={`grid h-9 w-9 place-items-center rounded-md transition-colors ${
                    viewMode === mode ? "bg-ink text-paper" : "text-muted hover:text-ink"
                  }`}
                >
                  <Icon size={17} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-muted" aria-live="polite">
          <span>
            Showing {filtered.length} of {allProjects.length}
          </span>
          {(searchTerm || category !== "All") && (
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-1 text-ink hover:text-leaf"
            >
              <X size={15} aria-hidden="true" />
              Clear filters
            </button>
          )}
        </div>

        {/* Results */}
        <div className="mt-8">
          {filtered.length === 0 ? (
            <div className="rounded-xl border border-dashed border-line px-6 py-16 text-center">
              <h2 className="text-2xl font-semibold">No project matches these filters</h2>
              <p className="mt-2 text-muted">
                Try another technology name, or show every category.
              </p>
              <button onClick={resetFilters} className={`${btnPrimary} mt-6`}>
                Show all projects
              </button>
            </div>
          ) : viewMode === "grid" ? (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <li key={p.id}>
                  <Link
                    to={`/project/${p.id}`}
                    className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition-colors hover:border-ink"
                  >
                    <MediaThumb
                      media={p.media}
                      alt={`${p.name} screenshot`}
                      className="aspect-[16/9] w-full border-b border-line bg-leaf-soft"
                    />
                    <div className="flex flex-1 flex-col p-5">
                      <ProjectMeta project={p} />
                      <h2 className="mt-2 text-lg font-semibold group-hover:text-leaf">
                        {p.name}
                      </h2>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
                        {p.description}
                      </p>
                      <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                        {p.tech.slice(0, 3).map((t) => (
                          <Tag key={t}>{t.replace(/\s*\(.*\)/, "")}</Tag>
                        ))}
                        {p.tech.length > 3 && <Tag>+{p.tech.length - 3}</Tag>}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="divide-y divide-line border-y border-line">
              {filtered.map((p) => (
                <li key={p.id} className="grid gap-5 py-8 md:grid-cols-[16rem_1fr] md:gap-8">
                  <Link
                    to={`/project/${p.id}`}
                    className="block overflow-hidden rounded-lg border border-line"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <MediaThumb
                      media={p.media}
                      alt=""
                      className="aspect-[16/10] w-full bg-leaf-soft"
                    />
                  </Link>
                  <div className="min-w-0">
                    <ProjectMeta project={p} />
                    <h2 className="mt-2 text-2xl font-semibold">
                      <Link to={`/project/${p.id}`} className="hover:text-leaf">
                        {p.name}
                      </Link>
                    </h2>
                    <p className="mt-2 max-w-2xl leading-relaxed text-muted">
                      {p.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                    <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
                      <Link to={`/project/${p.id}`} className="text-leaf hover:underline underline-offset-4">
                        Project details
                      </Link>
                      {p.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 hover:text-leaf"
                        >
                          <Github size={15} aria-hidden="true" />
                          Source code
                        </a>
                      )}
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 hover:text-leaf"
                        >
                          <ExternalLink size={15} aria-hidden="true" />
                          Live demo
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

function ProjectMeta({ project }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-muted">
      <span>{formatDate(project.date)}</span>
      {project.featured && (
        <span className="inline-flex items-center gap-1 rounded-full bg-leaf-soft px-2 py-0.5 font-medium text-leaf">
          <Star size={12} fill="currentColor" aria-hidden="true" />
          Featured
        </span>
      )}
    </div>
  );
}
