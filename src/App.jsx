import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import SkillDetails from "./pages/SkillDetails";
import CertifDetails from "./pages/CertifDetails";
import AllProjects from "./pages/project";
import ScrollToTop from "./pages/ScrollToTop.jsx";
import InternshipDetails from "./pages/InternshipDetails";

function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/skill/:id" element={<SkillDetails />} />
        <Route path="/certification/:id" element={<CertifDetails />} />
        <Route path="/internship/datapull" element={<InternshipDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
