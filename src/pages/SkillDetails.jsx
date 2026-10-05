import { useParams } from "react-router-dom";

export default function SkillDetails() {
  const { id } = useParams();

  const skills = {
    Backend: ["Java", "Spring Boot", "Django"],
    Frontend: ["React", "Angular"],
    DevOps: ["Docker", "CI/CD"],
  };

  const flatSkills = Object.values(skills).flat();
  const skill = flatSkills[id];

  return (
    <div className="min-h-screen bg-paper text-ink p-10">
      <h1 className="text-4xl font-bold mb-4">{skill}</h1>
      <p className="text-muted">Detailed description about {skill}…</p>
    </div>
  );
}
