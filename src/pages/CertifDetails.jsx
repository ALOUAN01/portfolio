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
    <div className="min-h-screen bg-slate-900 text-white p-10">
      <button onClick={() => navigate(-1)} className="mb-6 text-cyan-400">
        ← Back
      </button>

      <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
      <p className="text-gray-300 mb-6">{project.details}</p>

      <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
      <div className="flex gap-2 flex-wrap">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 bg-slate-700 rounded-full text-sm text-gray-200"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
