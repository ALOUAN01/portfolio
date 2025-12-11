import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import SkillDetails from "./pages/SkillDetails";
import CertifDetails from "./pages/CertifDetails";
import AllProjects from "./pages/project";
import { Analytics } from '@vercel/analytics/react';
import ScrollToTop from './pages/ScrollToTop.jsx';
import './App.css'

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
