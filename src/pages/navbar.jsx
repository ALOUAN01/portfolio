import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X, FileText, Sun, Moon } from "lucide-react";
import myCV from "../assets/ALOUAN_Ayoub_CV_E.pdf";
import { profile } from "../data/profile";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

/* Light / dark switch. The initial theme is set in index.html (saved choice,
   otherwise the system setting); this button flips it and remembers it. */
function ThemeToggle() {
  const [dark, setDark] = useState(
    () => document.documentElement.dataset.theme === "dark"
  );

  const toggle = () => {
    const next = !dark;
    setDark(next);
    const root = document.documentElement;
    if (next) root.dataset.theme = "dark";
    else delete root.dataset.theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", next ? "#111814" : "#F5F7F4");
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable (private mode): theme still applies for this visit */
    }
  };

  return (
    <button
      onClick={toggle}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface text-ink transition-colors hover:border-ink"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

export default function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const onHome = location.pathname === "/";

  // Border under the bar once the page scrolls, and current-section tracking on the home page
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      if (!onHome) return;
      const current = [...navItems].reverse().find(({ id }) => {
        const el = document.getElementById(id);
        return el && el.getBoundingClientRect().top <= 120;
      });
      setActive(current ? current.id : "");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onHome]);

  // Close the mobile menu on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const goTo = (id) => {
    setOpen(false);
    if (onHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  const isActive = (id) =>
    (onHome && active === id) ||
    (id === "projects" && location.pathname.startsWith("/project"));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-paper/85 backdrop-blur-md transition-[border-color] ${
        scrolled || open ? "border-b border-line" : "border-b border-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
        aria-label="Main"
      >
        <button
          onClick={() => {
            setOpen(false);
            if (onHome) window.scrollTo({ top: 0, behavior: "smooth" });
            else navigate("/");
          }}
          className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight"
        >
          <span
            className="grid h-8 w-8 place-items-center rounded-md bg-ink text-sm font-semibold text-paper"
            aria-hidden="true"
          >
            AA
          </span>
          {profile.name}
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => goTo(id)}
                aria-current={isActive(id) ? "true" : undefined}
                className={`relative rounded-md px-3 py-2 text-sm transition-colors ${
                  isActive(id) ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-leaf transition-opacity ${
                    isActive(id) ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden="true"
                />
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={myCV}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-leaf sm:inline-flex"
          >
            <FileText size={16} aria-hidden="true" />
            Resume
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-paper lg:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-3 sm:px-8">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => goTo(id)}
                  className={`flex w-full items-center justify-between border-b border-line py-3.5 text-left text-base ${
                    isActive(id) ? "font-medium text-leaf" : "text-ink"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
            <li className="pt-4 pb-2 sm:hidden">
              <a
                href={myCV}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-ink px-4 py-3 text-sm font-medium text-paper"
              >
                <FileText size={16} aria-hidden="true" />
                Resume (PDF)
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
