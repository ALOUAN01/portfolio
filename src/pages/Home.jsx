import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Languages,
  FileText,
  Check,
  ArrowRight,
} from "lucide-react";
import myPhoto from "../assets/cv1.jpg";
import cvEn from "../assets/Ayoub_Alouan_Resume_Software_Engineer.pdf";
import cvFr from "../assets/Ayoub_Alouan_CV_Ingenieur_Logiciel.pdf";
import Navbar from "./navbar";
import { getAllSkills } from "../data/skills";
import { getAllexperiences } from "../data/experiences";
import { getAllProjects, getProjectImpo } from "../data/projects";
import {
  profile,
  education,
  certifications,
  skillLabels,
} from "../data/profile";
import {
  Section,
  Tag,
  MediaThumb,
  Footer,
  btnPrimary,
  btnSecondary,
  iconBtn,
} from "../components/ui";

/* Areas shown under the title in the hero */
const focusAreas = [
  "Backend · Java & Python",
  "AI & LLMs",
  "Data & ETL",
  "Frontend",
  "Cloud & DevOps",
  "Testing & QA",
];
/* Puts figures like "500K+", "1,000", "150ms", "60%" in bold so results stand out */
function withMetrics(text) {
  // Skips codes like "B2B", "EC2" or "S3" (digit attached to letters)
  const parts = text.split(
    /((?<![A-Za-z\d])\d+(?:[.,]\d+)*(?:[KM]\+|%\+?|\+|ms)?(?![A-Za-z\d]))/g
  );
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-ink">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

export default function Home() {
  const location = useLocation();
  const skills = getAllSkills();
  const experiences = getAllexperiences();
  const projects = getProjectImpo();
  const totalProjects = getAllProjects().length;

  // Support links like /#contact coming from other pages
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const t = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 60);
    return () => clearTimeout(t);
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />

      <main>
        {/* Hero */}
        <section
          id="home"
          className="mx-auto grid max-w-6xl items-end gap-12 px-5 pt-28 pb-16 sm:px-8 md:grid-cols-[1fr_minmax(0,22rem)] md:pt-36 md:pb-24"
        >
          <div>
            <h1
              className="rise font-display text-[clamp(3.5rem,11vw,8rem)] leading-[0.9] font-semibold tracking-[-0.045em]"
              style={{ "--i": 0 }}
            >
              Ayoub
              <br />
              Alouan
            </h1>

            <p
              className="rise mt-8 font-display text-xl font-medium sm:text-2xl"
              style={{ "--i": 1 }}
            >
                            Software engineer
            </p>

            <p
              className="rise mt-4 max-w-xl text-lg leading-relaxed text-muted"
              style={{ "--i": 2 }}
            >
              I build software end to end: backend services in Java and Python,
              data pipelines, AI features, web interfaces, and the tests and
              cloud setup that keep them running in production.
            </p>

            <ul
              className="rise mt-5 flex max-w-xl flex-wrap gap-2"
              style={{ "--i": 2 }}
              aria-label="Areas I work in"
            >
              {focusAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-md border border-line bg-surface px-2.5 py-1 text-sm text-ink/80"
                >
                  {area}
                </li>
              ))}
            </ul>
            <div
              className="rise mt-9 flex flex-wrap items-center gap-3"
              style={{ "--i": 3 }}
            >
              <Link to="/projects" className={btnPrimary}>
                See my projects
              </Link>
              <a
                href={cvEn}
                target="_blank"
                rel="noopener noreferrer"
                className={btnSecondary}
              >
                <FileText size={16} aria-hidden="true" />
                Download resume
              </a>
              <span className="mx-1 hidden h-6 w-px bg-line sm:block" aria-hidden="true" />
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className={iconBtn}
                aria-label="GitHub profile"
              >
                <Github size={19} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={iconBtn}
                aria-label="LinkedIn profile"
              >
                <Linkedin size={19} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className={iconBtn}
                aria-label={`Email ${profile.email}`}
              >
                <Mail size={19} />
              </a>
            </div>
          </div>

          <figure
            className="rise w-full max-w-[15rem] sm:max-w-[18rem] md:max-w-[22rem]"
            style={{ "--i": 2 }}
          >
            <img
              src={myPhoto}
              alt="Portrait of Ayoub Alouan"
              className="aspect-[4/5] w-full rounded-2xl object-cover object-[50%_30%]"
            />
            <figcaption className="mt-3 flex items-center gap-2 text-sm text-muted">
              <MapPin size={15} className="text-leaf" aria-hidden="true" />
              Based in {profile.location}
            </figcaption>
          </figure>
        </section>

        {/* About */}
        <div className="border-t border-line">
          <Section id="about" title="About">
            <div className="max-w-2xl space-y-5 text-lg leading-relaxed">
              <p>
                I&apos;m a software engineer who works across the whole
                product, not just one layer. I build backend services in Java
                (Spring Boot microservices, Keycloak security) and in Python
                (Flask, FastAPI), data pipelines that process 500K+ leads a day,
                and AI features on top of LLM APIs, such as a multi-agent
                application that turns a plain-language request into a list of
                leads.
              </p>
              <p className="text-muted">
                I also build the interfaces in React, Next.js and Angular, test
                what I ship (JUnit, PyTest, Postman, SonarQube) and deploy it
                with Docker on AWS. What I care about is clear architecture and
                software that solves a real problem for the people using it,
                whatever the stack.
              </p>
            </div>

            <dl className="mt-10 grid gap-x-8 gap-y-5 border-t border-line pt-8 text-sm sm:grid-cols-2">
              {[
                { icon: MapPin, label: "Location", value: profile.location },
                {
                  icon: Mail,
                  label: "Email",
                  value: profile.email,
                  href: `mailto:${profile.email}`,
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: profile.phone,
                  href: profile.phoneHref,
                },
                { icon: Languages, label: "Languages", value: profile.languages },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-3">
                  <Icon size={18} className="mt-0.5 shrink-0 text-leaf" aria-hidden="true" />
                  <div>
                    <dt className="text-muted">{label}</dt>
                    <dd className="mt-0.5 text-ink">
                      {href ? (
                        <a href={href} className="hover:text-leaf">
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </Section>
        </div>

        {/* Skills */}
        <div className="border-t border-line bg-surface">
          <Section id="skills" title="Skills">
            <dl className="divide-y divide-line border-y border-line">
              {Object.entries(skills).map(([category, items]) => (
                <div
                  key={category}
                  className="grid gap-3 py-5 sm:grid-cols-[11rem_1fr] sm:gap-6"
                >
                                    <dt>
                    <span className="block font-display text-lg font-medium">
                      {skillLabels[category] || category}
                    </span>
                    <Link
                      to={`/skills/${category}`}
                      className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-leaf underline-offset-4 hover:underline"
                    >
                      View more
                      <span className="sr-only"> about {skillLabels[category] || category}</span>
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </dt>
                  <dd className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Tag key={skill}>{skill}</Tag>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </Section>
        </div>

        {/* Experience — a real sequence, so it's drawn as a timeline */}
        <div className="border-t border-line">
          <Section id="experience" title="Experience">
            <ol className="relative">
              {experiences.map((exp, idx) => (
                <li
                  key={idx}
                  className="relative grid gap-2 pb-12 pl-8 last:pb-0 md:grid-cols-[10rem_1fr] md:gap-8 md:pl-0"
                >
                  {/* Timeline rail and marker */}
                  <span
                    className="absolute top-2 bottom-0 left-[5px] w-px bg-line md:left-[11.5rem]"
                    aria-hidden="true"
                  />
                  <span
                    className={`absolute top-1.5 left-0 h-[11px] w-[11px] rounded-full border-2 md:left-[calc(11.5rem-5px)] ${
                      idx === 0
                        ? "border-leaf bg-leaf"
                        : "border-leaf bg-paper"
                    }`}
                    aria-hidden="true"
                  />

                  <div className="text-sm md:pt-0.5">
                    <p className="font-medium text-ink">{exp.period}</p>
                    <p className="text-muted">{exp.type}</p>
                  </div>

                  <div className="md:pl-10">
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="mt-1 text-muted">{exp.company}</p>
                    <ul className="mt-4 space-y-2.5">
                      {exp.achievements.map((a, i) => (
                        <li
                          key={i}
                          className="flex gap-3 leading-relaxed text-ink/80"
                        >
                          <span
                            className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-leaf"
                            aria-hidden="true"
                          />
                          <span>{withMetrics(a)}</span>
                        </li>
                      ))}
                    </ul>
                    {exp.detailsUrl && (
                      <Link
                        to={exp.detailsUrl}
                        className="mt-5 inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2.5 text-sm font-medium transition-colors hover:border-ink hover:text-leaf"
                      >
                        View more: the full internship project
                        <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </Section>
        </div>

        {/* Projects */}
        <div className="border-t border-line bg-surface">
          <Section
            id="projects"
            title="Selected projects"
            stacked
            aside={
              <Link
                to="/projects"
                className="font-medium text-leaf underline-offset-4 hover:underline"
              >
                View all {totalProjects} projects
              </Link>
            }
          >
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  to={`/project/${project.id}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-line bg-paper transition-colors hover:border-ink"
                >
                  <MediaThumb
                    media={project.media}
                    alt={`${project.name} screenshot`}
                    className="aspect-[16/9] w-full border-b border-line bg-leaf-soft"
                  />
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-semibold group-hover:text-leaf">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                      {project.tech.slice(0, 3).map((t) => (
                        <Tag key={t}>{t.replace(/\s*\(.*\)/, "")}</Tag>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Section>
        </div>

        {/* Education */}
        <div className="border-t border-line">
          <Section id="education" title="Education">
            <ul className="divide-y divide-line border-y border-line">
              {education.map((e) => (
                <li
                  key={e.degree}
                  className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <div>
                    <h3 className="text-lg font-semibold">{e.degree}</h3>
                    <p className="text-muted">{e.school}</p>
                  </div>
                  <p className="shrink-0 text-sm text-muted">{e.period}</p>
                </li>
              ))}
            </ul>

            <h3 className="mt-12 text-xl font-semibold">Certifications</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {certifications.map((c) => (
                <li key={c} className="flex gap-3 leading-relaxed">
                  <Check
                    size={18}
                    className="mt-1 shrink-0 text-leaf"
                    aria-hidden="true"
                  />
                  {c}
                </li>
              ))}
            </ul>
          </Section>
        </div>

        {/* Contact */}
        <section id="contact" className="border-t border-line bg-band text-white">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
            <h2 className="max-w-3xl text-4xl font-semibold sm:text-5xl md:text-6xl">
              Let&apos;s work together.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
              I&apos;m open to new projects and engineering roles. Email is the
              fastest way to reach me.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="mt-10 inline-block font-display text-2xl font-medium break-all text-white underline decoration-[#7cc46a] decoration-2 underline-offset-8 transition-colors hover:text-[#a9dc9b] sm:text-4xl"
            >
              {profile.email}
            </a>

            <div className="mt-12 flex flex-wrap gap-3">
              {[
                { href: profile.linkedin, icon: Linkedin, label: "LinkedIn", ext: true },
                { href: profile.github, icon: Github, label: "GitHub", ext: true },
                { href: cvEn, icon: FileText, label: "Resume (English)", ext: true },
                { href: cvFr, icon: FileText, label: "CV (français)", ext: true },
                { href: profile.phoneHref, icon: Phone, label: profile.phone },
              ].map(({ href, icon: Icon, label, ext }) => (
                <a
                  key={label}
                  href={href}
                  {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/5"
                >
                  <Icon size={16} aria-hidden="true" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
