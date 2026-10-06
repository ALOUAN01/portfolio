import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Download, ExternalLink, FileText, Maximize2 } from "lucide-react";
import Navbar from "./navbar";
import { internship as d } from "../data/internship";
import { getProjectById } from "../data/projects";
import { Footer, Tag, btnPrimary, btnSecondary } from "../components/ui";

const parts = [
  { id: "context", label: "Context" },
  { id: "method", label: "Method" },
  { id: "choices", label: "Technical choices" },
  { id: "design", label: "Design" },
  { id: "data", label: "Data collection" },
  { id: "platform", label: "Platform" },
  { id: "results", label: "Results" },
  { id: "lessons", label: "Lessons" },
  { id: "report", label: "Report" },
];

/* Section with its title in a left column on wide screens (same layout as the home page) */
function Part({ id, title, alt = false, children }) {
  return (
    <div className={`border-t border-line ${alt ? "bg-surface" : ""}`}>
      <section id={id} className="mx-auto max-w-6xl scroll-mt-20 px-5 py-14 sm:px-8 md:py-20">
        <div className="grid gap-8 md:grid-cols-[13rem_1fr] md:gap-12">
          <h2 className="text-2xl font-semibold md:sticky md:top-24 md:self-start md:text-[1.75rem]">
            {title}
          </h2>
          <div className="min-w-0">{children}</div>
        </div>
      </section>
    </div>
  );
}

/* Image that opens full size in a new tab */
function Figure({ src, caption, className = "" }) {
  return (
    <figure className={className}>
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden rounded-xl border border-line bg-surface"
      >
        <img src={src} alt={caption} loading="lazy" className="w-full" />
        <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-md bg-ink/75 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
          <Maximize2 size={12} aria-hidden="true" />
          Full size
        </span>
      </a>
      <figcaption className="mt-2 text-sm text-muted">{caption}</figcaption>
    </figure>
  );
}

function Checklist({ items }) {
  return (
    <ul className="space-y-2.5">
      {items.map((t) => (
        <li key={t} className="flex gap-3 leading-relaxed">
          <Check size={18} className="mt-1 shrink-0 text-leaf" aria-hidden="true" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export default function InternshipDetails() {
  const totalDays = d.sprints.reduce((s, x) => s + x.days, 0);
  const etlProject = d.etl.projectId ? getProjectById(d.etl.projectId) : null;

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />

      {/* Header */}
      <header className="mx-auto max-w-6xl px-5 pt-24 pb-12 sm:px-8 md:pt-28 md:pb-16">
        <Link to="/#experience" className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink">
          <ArrowLeft size={16} aria-hidden="true" />
          Experience
        </Link>
        <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted">
          <span className="rounded-full bg-leaf-soft px-2.5 py-0.5 font-medium text-leaf">{d.type}</span>
          <span>{d.company}</span>
          <span aria-hidden="true" className="h-3 w-px bg-line" />
          <span>{d.period}</span>
          <span aria-hidden="true" className="h-3 w-px bg-line" />
          <span>{d.location}</span>
        </div>
        <h1 className="mt-4 max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.03em] sm:text-5xl">
          {d.title}
        </h1>
        <p className="mt-5 max-w-3xl text-xl leading-relaxed text-muted">{d.subtitle}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#report" className={btnPrimary}>
            <FileText size={16} aria-hidden="true" />
            Read the full report
          </a>
          <a href={d.reportPdf} download className={btnSecondary}>
            <Download size={16} aria-hidden="true" />
            Download PDF
          </a>
        </div>

        <dl className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {d.facts.map((f) => (
            <div key={f.label} className="bg-surface p-5">
              <dt className="text-sm text-muted">{f.label}</dt>
              <dd className="mt-1 font-medium leading-snug">{f.value}</dd>
            </div>
          ))}
        </dl>

        <nav className="mt-8 flex flex-wrap gap-2" aria-label="On this page">
          {parts.map((p) => (
            <a key={p.id} href={`#${p.id}`} className="rounded-md border border-line bg-surface px-3 py-1.5 text-sm text-ink/80 transition-colors hover:border-ink hover:text-ink">
              {p.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        {/* 1. Context */}
        <Part id="context" title="Context">
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed">
            <div>
              <h3 className="text-base font-semibold">The company</h3>
              <p className="mt-2 text-ink/85">{d.context.company}</p>
            </div>
            <div>
              <h3 className="text-base font-semibold">The problem</h3>
              <p className="mt-2 text-ink/85">{d.context.problem}</p>
            </div>
            <div>
              <h3 className="text-base font-semibold">The project</h3>
              <p className="mt-2 text-ink/85">{d.context.solution}</p>
            </div>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {d.context.goals.map((g) => (
              <div key={g} className="flex gap-3 rounded-lg border border-line bg-surface p-4">
                <Check size={18} className="mt-0.5 shrink-0 text-leaf" aria-hidden="true" />
                <span>{g}</span>
              </div>
            ))}
          </div>
        </Part>

        {/* 2. Method */}
        <Part id="method" title="Method" alt>
          <p className="max-w-3xl text-lg leading-relaxed text-ink/85">
            The project followed Scrum: a product owner setting priorities, a scrum master, and a
            self-organised team, with sprint planning, daily scrums and sprint reviews. The work was
            split into {d.sprints.length} sprints over about {totalDays} working days.
          </p>
          <ol className="mt-8 space-y-3">
            {d.sprints.map((s) => (
              <li key={s.name} className="grid gap-2 rounded-xl border border-line bg-paper p-4 sm:grid-cols-[9rem_1fr_6rem] sm:items-center sm:gap-5">
                <div>
                  <p className="text-sm text-muted">{s.name}</p>
                  <p className="font-semibold">{s.title}</p>
                </div>
                <p className="text-sm leading-relaxed text-ink/80">{s.tasks}</p>
                <div className="sm:text-right">
                  <div className="h-1.5 rounded-full bg-line sm:ml-auto sm:w-20">
                    <div className="h-1.5 rounded-full bg-leaf" style={{ width: `${(s.days / 28) * 100}%` }} />
                  </div>
                  <p className="mt-1.5 text-sm text-muted">{s.days} days</p>
                </div>
              </li>
            ))}
          </ol>
          <Figure src="/images/internship/gantt.jpg" caption="Gantt chart of the internship (click to enlarge)" className="mt-8 max-w-2xl" />
        </Part>

        {/* 3. Technical choices */}
        <Part id="choices" title="Technical choices">
          <p className="max-w-3xl text-lg leading-relaxed text-ink/85">
            Every layer was benchmarked before being chosen. Two complete web applications were then
            built in parallel to compare fast prototyping with enterprise scalability.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {d.decisions.map((c) => (
              <div key={c.question} className="rounded-xl border border-line bg-surface p-5">
                <p className="text-sm text-muted">{c.question}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {c.options.map((o) => (
                    <span
                      key={o}
                      className={`rounded-md px-2.5 py-1 text-[13px] ${
                        c.choice.includes(o) || o === c.choice
                          ? "bg-leaf font-medium text-white"
                          : "border border-line text-ink/60 line-through decoration-ink/30"
                      }`}
                    >
                      {o}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink/80">{c.why}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-12 text-lg font-semibold">ETL frameworks compared</h3>
          <div className="mt-4 overflow-x-auto rounded-xl border border-line">
            <table className="w-full min-w-[560px] text-sm">
              <thead className="bg-surface text-left">
                <tr>
                  <th className="p-3 font-medium text-muted">Metric</th>
                  {d.etlBenchmark.columns.map((c, i) => (
                    <th key={c} className={`p-3 font-medium ${i === d.etlBenchmark.chosen ? "text-leaf" : "text-muted"}`}>
                      {c}
                      {i === d.etlBenchmark.chosen && " (chosen)"}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {d.etlBenchmark.rows.map((r) => (
                  <tr key={r[0]} className="border-t border-line">
                    {r.map((v, i) => (
                      <td key={i} className={`p-3 ${i === 0 ? "text-muted" : ""} ${i - 1 === d.etlBenchmark.chosen ? "bg-leaf-soft font-medium" : ""}`}>
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-muted">
            Celery + Flask was not the fastest, but it was the quickest to build and gave full control over the pipeline.
          </p>

          <h3 className="mt-12 text-lg font-semibold">From the first version to the final architecture</h3>
          <div className="mt-4 space-y-8">
            <div>
              <p className="font-medium">{d.stacks.v1.title}</p>
              <p className="mt-2 max-w-3xl leading-relaxed text-ink/80">{d.stacks.v1.text}</p>
              <Figure src={d.stacks.v1.image} caption="First architecture" className="mt-4 max-w-2xl" />
            </div>
            <div>
              <p className="font-medium">{d.stacks.v2.title}</p>
              <p className="mt-2 max-w-3xl leading-relaxed text-ink/80">{d.stacks.v2.text}</p>
              <div className="mt-4">
                <Checklist items={d.stacks.v2.reasons} />
              </div>
              <Figure src={d.stacks.v2.image} caption="Final architecture: React, Spring Boot microservices, Elasticsearch, ETL app and data sources" className="mt-5" />
            </div>
          </div>
        </Part>

        {/* 4. Design */}
        <Part id="design" title="Design" alt>
          <p className="max-w-3xl text-lg leading-relaxed text-ink/85">
            The system was modelled in UML: use case diagrams for each area, class diagrams for the three
            core data models, and sequence diagrams for the main flows.
          </p>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_20rem]">
            <div>
              <h3 className="text-lg font-semibold">Actors</h3>
              <dl className="mt-4 divide-y divide-line border-y border-line">
                {d.design.actors.map(([a, t]) => (
                  <div key={a} className="grid gap-1 py-3 sm:grid-cols-[11rem_1fr] sm:gap-4">
                    <dt className="font-medium">{a}</dt>
                    <dd className="text-ink/80">{t}</dd>
                  </div>
                ))}
              </dl>
              <h3 className="mt-10 text-lg font-semibold">Core data models</h3>
              <dl className="mt-4 grid gap-3">
                {d.design.models.map(([m, t]) => (
                  <div key={m} className="rounded-lg border border-line bg-paper p-4">
                    <dt className="font-mono text-sm font-semibold text-leaf">{m}</dt>
                    <dd className="mt-1 text-ink/80">{t}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <Figure src={d.design.sequenceImage} caption="Sequence diagram: B2B search with authentication" />
          </div>
        </Part>

        {/* 5. Data collection */}
        <Part id="data" title="Data collection">
          <p className="max-w-3xl text-lg leading-relaxed text-ink/85">
            Four complementary sources fed the platform, each one covering the limits of the others.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {d.collection.map((c) => (
              <div key={c.title} className="rounded-xl border border-line bg-surface p-5">
                <h3 className="font-semibold">{c.title}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink/80">
                  {c.points.map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <span className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-leaf" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <h3 className="mt-12 text-lg font-semibold">Cleaning and enrichment</h3>
          <dl className="mt-4 divide-y divide-line border-y border-line">
            {d.cleaning.map(([k, v]) => (
              <div key={k} className="grid gap-1 py-3 sm:grid-cols-[13rem_1fr] sm:gap-4">
                <dt className="font-medium">{k}</dt>
                <dd className="text-ink/80">{v}</dd>
              </div>
            ))}
          </dl>
        </Part>

        {/* 6. Platform */}
        <Part id="platform" title="Platform" alt>
          <p className="max-w-3xl text-lg leading-relaxed text-ink/85">
            The final backend is a set of Spring Boot microservices talking over REST, with Elasticsearch
            for search and Amazon S3 for files, hosted on AWS EC2.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {d.services.map((s) => (
              <div key={s.title} className="rounded-xl border border-line bg-paper p-5">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">{s.text}</p>
              </div>
            ))}
          </div>
          <h3 className="mt-12 text-lg font-semibold">ETL application</h3>
          <p className="mt-2 max-w-3xl leading-relaxed text-ink/80">{d.etl.text}</p>
          <Figure src={d.etl.image} caption="ETL architecture: Flask API, Celery workers and beat, data sources and Elasticsearch" className="mt-5 max-w-3xl" />
          {etlProject && (
            <Link to={`/project/${etlProject.id}`} className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-leaf underline-offset-4 hover:underline">
              See the ETL project page
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          )}
          <div className="mt-8 flex flex-wrap gap-1.5">
            {["Java", "Spring Boot", "Spring Data Elasticsearch", "Keycloak", "React", "Leaflet", "Python", "Flask", "Celery", "Redis", "MongoDB", "PostgreSQL", "Elasticsearch", "Docker", "AWS EC2 / S3", "JUnit", "Mockito", "PyTest"].map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </Part>

        {/* 7. Results */}
        <Part id="results" title="Results">
          <p className="max-w-3xl text-lg leading-relaxed text-ink/85">
            A working platform with B2B and B2C search, professional email discovery, company reputation
            analysis and an ETL application to process large datasets.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {d.results.map((r, i) => (
              <Figure key={r.src} src={r.src} caption={r.caption} className={i === 0 ? "md:col-span-2" : ""} />
            ))}
          </div>
        </Part>

        {/* 8. Lessons */}
        <Part id="lessons" title="Lessons" alt>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">What I learned</h3>
              <div className="mt-4">
                <Checklist items={d.lessons} />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Next steps for DataPull</h3>
              <ul className="mt-4 space-y-2.5">
                {d.nextSteps.map((n) => (
                  <li key={n} className="flex gap-3 leading-relaxed">
                    <ArrowRight size={17} className="mt-1 shrink-0 text-leaf" aria-hidden="true" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Part>

        {/* 9. Report */}
        <Part id="report" title="Report">
          <div className="flex flex-col gap-4 rounded-xl border border-line bg-surface p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-leaf-soft text-leaf">
                <FileText size={22} aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold leading-snug">{d.reportTitle}</p>
                <p className="mt-1 text-sm text-muted">
                  End-of-studies report · {d.school} · {d.reportPages} pages · French
                </p>
              </div>
            </div>
            <div className="flex shrink-0 gap-2">
              <a href={d.reportPdf} target="_blank" rel="noopener noreferrer" className={btnSecondary}>
                <ExternalLink size={16} aria-hidden="true" />
                Open
              </a>
              <a href={d.reportPdf} download className={btnPrimary}>
                <Download size={16} aria-hidden="true" />
                Download
              </a>
            </div>
          </div>

          {/* Inline viewer on larger screens (mobile browsers open the PDF instead) */}
          <object
            data={`${d.reportPdf}#view=FitH`}
            type="application/pdf"
            className="mt-6 hidden h-[85vh] w-full rounded-xl border border-line bg-surface md:block"
            aria-label="End-of-studies report"
          >
            <p className="p-6 text-muted">
              Your browser can&apos;t display the PDF here.{" "}
              <a href={d.reportPdf} className="font-medium text-leaf underline">Open the report</a>.
            </p>
          </object>
        </Part>
      </main>

      <div className="border-t border-line" />
      <Footer />
    </div>
  );
}
