import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "./navbar";
import { getAllSkills } from "../data/skills";
import { skillDetails } from "../data/skillDetails";
import { skillLabels } from "../data/profile";
import { getProjectById } from "../data/projects";
import { Footer, MediaThumb, btnPrimary } from "../components/ui";

export default function SkillCategory() {
  const { category } = useParams();
  const skills = getAllSkills();
  const keys = Object.keys(skills);
  const detail = skillDetails[category];
  const label = skillLabels[category] || category;

  if (!skills[category] || !detail) {
    return (
      <div className="min-h-screen bg-paper text-ink">
        <Navbar />
        <main className="mx-auto max-w-6xl px-5 pt-40 pb-24 sm:px-8">
          <h1 className="text-4xl font-semibold">This skill page doesn&apos;t exist</h1>
          <p className="mt-3 text-muted">The link may be outdated. Go back to the skills list.</p>
          <Link to="/#skills" className={`${btnPrimary} mt-8`}>
            <ArrowLeft size={16} aria-hidden="true" />
            All skills
          </Link>
        </main>
      </div>
    );
  }

  const pos = keys.indexOf(category);
  const next = keys[(pos + 1) % keys.length];
  const projects = detail.projects
    .map((p) => ({ ...p, project: getProjectById(p.id) }))
    .filter((p) => p.project);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />

      <main className="mx-auto max-w-6xl px-5 pt-24 pb-20 sm:px-8 md:pt-28">
        <Link to="/#skills" className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink">
          <ArrowLeft size={16} aria-hidden="true" />
          Skills
        </Link>

        {/* Header */}
        <header className="mt-8 grid gap-10 md:grid-cols-[1fr_18rem] md:gap-16">
          <div>
            <p className="text-sm font-medium text-leaf">Skill · {pos + 1} of {keys.length}</p>
            <h1 className="mt-3 text-4xl leading-[1.08] font-semibold tracking-[-0.03em] sm:text-5xl">{label}</h1>
            <p className="mt-4 text-xl text-muted">{detail.tagline}</p>
            <div className="mt-8 max-w-2xl space-y-4 text-lg leading-relaxed text-ink/85">
              {detail.background.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <aside className="self-start rounded-xl border border-line bg-surface p-5">
            <p className="text-sm text-muted">At a glance</p>
            <dl className="mt-3 space-y-3">
              <div className="flex items-baseline justify-between">
                <dt>Tools</dt>
                <dd className="font-display text-2xl font-semibold">{detail.tools.length}</dd>
              </div>
              <div className="flex items-baseline justify-between border-t border-line pt-3">
                <dt>Projects</dt>
                <dd className="font-display text-2xl font-semibold">{projects.length}</dd>
              </div>
              <div className="flex items-baseline justify-between border-t border-line pt-3">
                <dt>Jobs &amp; internships</dt>
                <dd className="font-display text-2xl font-semibold">{detail.experiences.length}</dd>
              </div>
            </dl>
          </aside>
        </header>

        {/* Tools */}
        <section className="mt-16 border-t border-line pt-12" aria-labelledby="tools-title">
          <h2 id="tools-title" className="text-2xl font-semibold">Tools and how I use them</h2>
          <dl className="mt-6 grid gap-x-10 sm:grid-cols-2">
            {detail.tools.map((t) => (
              <div key={t.name} className="border-b border-line py-4">
                <dt className="font-semibold">{t.name}</dt>
                <dd className="mt-1 leading-relaxed text-ink/80">{t.use}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Experience */}
        <section className="mt-16" aria-labelledby="exp-title">
          <h2 id="exp-title" className="text-2xl font-semibold">Where I used it at work</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {detail.experiences.map((e) => (
              <li key={e.company} className="rounded-xl border border-line bg-surface p-5">
                <p className="font-semibold">{e.company}</p>
                <p className="mt-2 leading-relaxed text-ink/80">{e.how}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Projects */}
        <section className="mt-16" aria-labelledby="proj-title">
          <h2 id="proj-title" className="text-2xl font-semibold">Projects using it</h2>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map(({ id, how, project }) => (
              <li key={id}>
                <Link
                  to={`/project/${id}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition-colors hover:border-ink"
                >
                  <MediaThumb
                    media={project.media}
                    cover={project.cover}
                    alt={`${project.name} screenshot`}
                    className="aspect-[16/9] w-full border-b border-line bg-leaf-soft"
                  />
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-semibold group-hover:text-leaf">{project.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/80">{how}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-medium text-leaf">
                      Project details
                      <ArrowRight size={15} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Other categories */}
        <nav className="mt-16 border-t border-line pt-10" aria-label="Other skills">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap gap-2">
              {keys.map((k) => (
                <Link
                  key={k}
                  to={`/skills/${k}`}
                  aria-current={k === category ? "page" : undefined}
                  className={`rounded-md border px-3 py-1.5 text-sm transition-colors ${
                    k === category ? "border-ink bg-ink text-paper" : "border-line bg-surface text-ink/80 hover:border-ink"
                  }`}
                >
                  {skillLabels[k] || k}
                </Link>
              ))}
            </div>
            <Link to={`/skills/${next}`} className={btnPrimary}>
              Next: {skillLabels[next] || next}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </nav>
      </main>

      <div className="border-t border-line" />
      <Footer />
    </div>
  );
}
