import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Maximize2,
  Play,
  Share2,
  Star,
  X,
} from "lucide-react";
import { getAllProjects, getProjectById } from "../data/projects";
import Navbar from "./navbar";
import { Footer, Tag, formatDate, btnPrimary, btnSecondary } from "../components/ui";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProjectById(parseInt(id, 10));
  const media = project?.media || [];
  const hasMultiple = media.length > 1;

  const [index, setIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Reset the gallery when moving to another project
  useEffect(() => {
    setIndex(0);
    setFullscreen(false);
  }, [id]);

  const next = useCallback(() => setIndex((i) => (i + 1) % media.length), [media.length]);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + media.length) % media.length),
    [media.length]
  );

  // Keyboard controls in fullscreen
  useEffect(() => {
    if (!fullscreen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setFullscreen(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [fullscreen, next, prev]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: project.name,
          text: project.description,
          url: window.location.href,
        });
      } catch {
        /* share sheet dismissed */
      }
    } else {
      await navigator.clipboard?.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-paper text-ink">
        <Navbar />
        <main className="mx-auto flex max-w-6xl flex-col items-start px-5 pt-40 pb-24 sm:px-8">
          <h1 className="text-4xl font-semibold">This project doesn&apos;t exist</h1>
          <p className="mt-3 text-muted">
            The link may be outdated. Browse the full list instead.
          </p>
          <button onClick={() => navigate("/projects")} className={`${btnPrimary} mt-8`}>
            <ArrowLeft size={16} aria-hidden="true" />
            All projects
          </button>
        </main>
      </div>
    );
  }

  const all = getAllProjects();
  const pos = all.findIndex((p) => p.id === project.id);
  const nextProject = all[(pos + 1) % all.length];
  const current = media[index];

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />

      <main className="mx-auto max-w-6xl px-5 pt-24 pb-24 sm:px-8 md:pt-28">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          All projects
        </Link>

        {/* Header */}
        <header className="mt-8 max-w-3xl">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted">
            <span>{project.category}</span>
            <span aria-hidden="true" className="h-3 w-px bg-line" />
            <span>{formatDate(project.date)}</span>
            {project.featured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-leaf-soft px-2 py-0.5 text-[13px] font-medium text-leaf">
                <Star size={12} fill="currentColor" aria-hidden="true" />
                Featured
              </span>
            )}
          </div>
          <h1 className="mt-4 text-4xl leading-[1.05] font-semibold tracking-[-0.035em] sm:text-5xl md:text-6xl">
            {project.name}
          </h1>
          <p className="mt-5 text-xl leading-relaxed text-muted">{project.description}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={btnPrimary}
              >
                <Github size={16} aria-hidden="true" />
                Source code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={btnSecondary}
              >
                <ExternalLink size={16} aria-hidden="true" />
                Live demo
              </a>
            )}
            <button onClick={handleShare} className={btnSecondary}>
              <Share2 size={16} aria-hidden="true" />
              {copied ? "Link copied" : "Share"}
            </button>
          </div>
        </header>

        {/* Gallery */}
        {current && (
          <section className="mt-14" aria-label="Screenshots and demo">
            <div className="relative overflow-hidden rounded-2xl border border-line bg-surface">
              <div className="flex aspect-[16/10] items-center justify-center bg-well sm:aspect-[16/9]">
                {current.type === "image" ? (
                  <button
                    onClick={() => setFullscreen(true)}
                    className="group h-full w-full cursor-zoom-in"
                    aria-label="Open image in full screen"
                  >
                    <img
                      src={current.src}
                      alt={`${project.name}, screenshot ${index + 1}`}
                      className="h-full w-full object-contain"
                    />
                  </button>
                ) : (
                  <video
                    key={current.src}
                    controls
                    playsInline
                    preload="metadata"
                    poster={current.poster}
                    className="h-full w-full bg-black object-contain"
                  >
                    <source src={current.src} type="video/mp4" />
                  </video>
                )}
              </div>

              {current.type === "image" && (
                <button
                  onClick={() => setFullscreen(true)}
                  className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-lg bg-band/80 px-3 py-1.5 text-xs font-medium text-white backdrop-blur hover:bg-band"
                >
                  <Maximize2 size={13} aria-hidden="true" />
                  Full screen
                </button>
              )}

              {hasMultiple && (
                <>
                  <GalleryArrow side="left" onClick={prev} />
                  <GalleryArrow side="right" onClick={next} />
                </>
              )}
            </div>

            {hasMultiple && (
              <div className="mt-4 flex items-center gap-3">
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {media.map((m, i) => (
                    <button
                      key={m.src}
                      onClick={() => setIndex(i)}
                      aria-label={`Show ${m.type === "video" ? "video" : "screenshot"} ${i + 1}`}
                      aria-current={i === index ? "true" : undefined}
                      className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-colors ${
                        i === index ? "border-leaf" : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={m.type === "video" ? m.poster : m.src}
                        alt=""
                        className="h-full w-full object-cover object-top"
                        loading="lazy"
                      />
                      {m.type === "video" && (
                        <span className="absolute inset-0 grid place-items-center bg-band/40 text-white">
                          <Play size={18} fill="currentColor" aria-hidden="true" />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
                <span className="ml-auto shrink-0 text-sm text-muted tabular-nums">
                  {index + 1} / {media.length}
                </span>
              </div>
            )}
          </section>
        )}

        {/* Body */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
          <div className="min-w-0">
            <section>
              <h2 className="text-2xl font-semibold">About the project</h2>
              <p className="mt-4 max-w-[68ch] text-lg leading-relaxed text-ink/85">
                {project.longDescription}
              </p>
            </section>

            <section className="mt-14">
              <h2 className="text-2xl font-semibold">What it does</h2>
              <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 leading-relaxed">
                    <Check size={18} className="mt-1 shrink-0 text-leaf" aria-hidden="true" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-line bg-surface p-6">
              <h2 className="text-lg font-semibold">Tech stack</h2>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              {(project.githubUrl || project.liveUrl) && (
                <div className="mt-6 space-y-2 border-t border-line pt-5 text-sm font-medium">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-leaf"
                    >
                      <Github size={16} aria-hidden="true" />
                      View on GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-leaf"
                    >
                      <ExternalLink size={16} aria-hidden="true" />
                      Visit live site
                    </a>
                  )}
                </div>
              )}
            </div>
          </aside>
        </div>

        {/* Next project + contact */}
        <div className="mt-20 grid gap-4 border-t border-line pt-10 sm:grid-cols-2">
          <Link
            to={`/project/${nextProject.id}`}
            className="group rounded-xl border border-line bg-surface p-6 transition-colors hover:border-ink"
          >
            <span className="text-sm text-muted">Next project</span>
            <span className="mt-1 flex items-center justify-between gap-4 font-display text-xl font-semibold group-hover:text-leaf">
              {nextProject.name}
              <ArrowRight size={20} className="shrink-0" aria-hidden="true" />
            </span>
          </Link>
          <Link
            to="/#contact"
            className="group rounded-xl border border-line bg-band p-6 text-white transition-colors hover:border-ink"
          >
            <span className="text-sm text-white/70">Interested in working together?</span>
            <span className="mt-1 block font-display text-xl font-semibold">Get in touch</span>
          </Link>
        </div>
      </main>

      <Footer />

      {/* Fullscreen viewer */}
      {fullscreen && current?.type === "image" && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-band/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot viewer"
          onClick={() => setFullscreen(false)}
        >
          <img
            src={current.src}
            alt={`${project.name}, screenshot ${index + 1}`}
            className="max-h-full max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setFullscreen(false)}
            className="absolute top-4 right-4 grid h-11 w-11 place-items-center rounded-lg bg-white/10 text-white hover:bg-white/20"
            aria-label="Close"
            autoFocus
          >
            <X size={20} />
          </button>
          {hasMultiple && (
            <>
              <GalleryArrow side="left" onClick={prev} dark />
              <GalleryArrow side="right" onClick={next} dark />
              <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-white/70 tabular-nums">
                {index + 1} / {media.length}
              </span>
            </>
          )}
        </div>
      )}
    </div>
  );
}

function GalleryArrow({ side, onClick, dark = false }) {
  const Icon = side === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      aria-label={side === "left" ? "Previous" : "Next"}
      className={`absolute top-1/2 ${side === "left" ? "left-3" : "right-3"} grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full transition-colors ${
        dark
          ? "bg-white/10 text-white hover:bg-white/20"
          : "border border-line bg-surface/90 text-ink shadow-sm backdrop-blur hover:border-ink"
      }`}
    >
      <Icon size={20} />
    </button>
  );
}
