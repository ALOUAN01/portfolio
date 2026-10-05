import { ArrowUp } from "lucide-react";
import { profile } from "../data/profile";

/* Shared class names so buttons look the same everywhere */
export const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-leaf";
export const btnSecondary =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink";
export const iconBtn =
  "inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-surface text-ink transition-colors hover:border-ink hover:text-leaf";

/* "2025-08" -> "Aug 2025" */
export function formatDate(value) {
  if (!value) return "";
  const [y, m] = value.split("-").map(Number);
  if (!m) return String(y);
  return new Date(y, m - 1, 1).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

/* A page section with its heading in a left column on wide screens.
   `stacked` puts the heading above the content (for wide grids). */
export function Section({ id, title, aside, children, stacked = false, className = "" }) {
  if (stacked) {
    return (
      <section
        id={id}
        className={`mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28 ${className}`}
      >
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold md:text-[2rem]">{title}</h2>
          {aside && <div className="text-sm text-muted">{aside}</div>}
        </div>
        {children}
      </section>
    );
  }
  return (
    <section
      id={id}
      className={`mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28 ${className}`}
    >
      <div className="grid gap-8 md:grid-cols-[13rem_1fr] md:gap-12">
        <div>
          <h2 className="text-3xl font-semibold md:sticky md:top-24 md:text-[2rem]">
            {title}
          </h2>
          {aside && <div className="mt-3 text-sm text-muted">{aside}</div>}
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}

export function Tag({ children }) {
  return (
    <span className="inline-block rounded-md border border-line bg-surface px-2.5 py-1 text-[13px] leading-5 text-ink/80">
      {children}
    </span>
  );
}

/* First image of a project, or the first frame of its video */
export function MediaThumb({ media = [], alt, className = "" }) {
  const item = media.find((m) => m.type === "image") || media[0];
  if (!item) {
    return <div className={`bg-leaf-soft ${className}`} aria-hidden="true" />;
  }
  const src = item.type === "video" ? item.poster : item.src;
  if (!src) {
    return <div className={`bg-leaf-soft ${className}`} aria-hidden="true" />;
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`object-cover object-left-top ${className}`}
    />
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-2 self-start text-ink transition-colors hover:text-leaf sm:self-auto"
        >
          <ArrowUp size={16} aria-hidden="true" />
          Back to top
        </button>
      </div>
    </footer>
  );
}
