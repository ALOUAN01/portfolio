import { useParams, useNavigate } from "react-router-dom";

export default function CertifDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const projects = [
    {
      name: "DataPull",
      description: "Multi-agent B2B/B2C platform...",
      details:
        "Full detailed description here, architecture, screenshots, APIs, technologies, challenges, etc.",
      tech: ["Spring Boot", "React", "AWS"],
    },
    {
      name: "Leave Management System",
      description: "Enterprise leave management...",
      details:
        "Detailed explanations, workflow diagrams, database schema, etc.",
      tech: ["Angular", "Spring Boot"],
    },
  ];

  const project = projects[id];

  return (
    <div className="min-h-screen bg-paper text-ink p-10">
      <button onClick={() => navigate(-1)} className="mb-6 text-leaf">
        ← Back
      </button>

      <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
      <p className="text-muted mb-6">{project.details}</p>

      <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
      <div className="flex gap-2 flex-wrap">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 border border-line bg-surface rounded-md text-sm text-ink"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
