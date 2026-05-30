import { useEffect, useState } from "react";
import ProjectCard from "./components/ProjectCard.tsx";
import WorkExperienceCard from "./components/WorkExperienceCard.tsx";
import Navbar from "./components/Navbar.tsx";
import profilePhoto from "./assets/IsabellaGingrich.JPG";
import resumePdf from "./assets/Resume.pdf";

const bioParagraphs = [
  "Hey there! My name is Isabella Gingrich and I'm a software engineer with 4+ years of developing and maintaining full-stack applications in .NET with C#, VB.NET, JavaScript and SQL.",
  "I'm a problem lover as much as a problem solver. To me, there's a specific kind of satisfaction that comes from chasing down a tricky bug and figuring out the root cause. I'm also drawn to the details most people don't notice and I love to perfect the little things, because to me they matter the most.",
  "I'm always looking to grow and I tend to learn fastest when I'm slightly in over my head.",
  "I've spent my career in an Agile team supporting production systems and regular releases, which means I know how to collaborate in a team, under pressure, and deliver on time. I've learned that communication is everything, and I take pride in my ability to translate technical language into business language for clients and non-tech folk.",
];

const skills = [
  { category: "Programming Languages", items: ["C#", "VB.NET", "SQL", "JavaScript", "TypeScript", "Java", "Python", "C", "C++"] },
  { category: "Tools & DevOps", items: ["Visual Studio", "VS Code", "Azure DevOps", "GitHub Copilot", "Git", "GitHub"] },
  { category: "Hardware & OS", items: ["Windows 10/11", "Linux (Ubuntu)"] },
  { category: "Productivity", items: ["Excel", "Word", "PowerPoint"] },
];

const experience = [
  {
    title: "Solution Specialist",
    company: "Deloitte",
    location: "Mechanicsburg, PA",
    period: "January 2022 – Present",
    bullets: [
      "Collaborated in an Agile Scrum team supporting maintenance and enhancement releases across 5+ enterprise applications, delivering fixes across the full stack including frontend (JavaScript, TypeScript, Razor) and backend services (C#, VB.NET, SQL).",
      "Executed production release validation and deployment verification to ensure successful and stable releases.",
      "Triaged and investigated production incidents by analyzing application behavior, reviewing logs and source code, and performing SQL-based analysis to identify root causes and determine solutions.",
      "Owned key client-facing processes as the primary contact for file processing, report generation, issue resolution, and data management. Acted as lead developer for a core client application.",
      "Developed hundreds of SQL scripts to rectify data errors at clients' request and created reusable templates to reduce manual effort needed for data management.",
    ],
  },
];

const projects = [
  {
    title: "Portfolio Website",
    description: "The very site you're looking at — built with Vite, React, and Tailwind CSS.",
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
    link: "https://github.com/isabellagingrich/isabellagingrich.github.io",
  },
  {
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["Lorem", "ipsum", "dolor"],
    link: "https://github.com",
  },
  {
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["Lorem", "ipsum", "dolor"],
    link: "https://github.com",
  },
];

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = ["home", "experience", "projects", "about", "contact"];
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <Navbar activeSection={activeSection} onNavigate={setActiveSection} />

      {/* Hero */}
      <section id="home" className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
        <p className="text-emerald-400 text-sm uppercase tracking-widest mb-4">
          {/*Available for work*/}
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Isabella Gingrich<br />
          <span className="text-slate-400"></span>
        </h1>
        <p className="text-slate-400 text-lg max-w-xl mb-10">
          A software engineer with 4+ years of experience developing and maintaining full-stack applications in .NET.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold rounded-lg transition-colors duration-200"
          >
            View Projects
          </button>
          <a
            href="mailto:isabella@isabellagingrich.com"
            className="px-6 py-3 border border-slate-700 hover:border-slate-400 rounded-lg transition-colors duration-200"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white mb-2">Experience</h2>
        <p className="text-slate-400 mb-10">Where I've worked...</p>

        <div className="flex flex-col gap-6">
          {experience.map((job) => (
            <WorkExperienceCard key={job.title + job.company} {...job} />
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white mb-2">Projects</h2>
        <p className="text-slate-400 mb-10">Things I've built recently...</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white mb-2">About</h2>
        <p className="text-slate-400 mb-10">A little bit about me...</p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12 mb-14">
          <div className="space-y-4">
            {bioParagraphs.map((p, i) => (
              <p key={i} className="text-slate-400 leading-relaxed">{p}</p>
            ))}
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src={profilePhoto}
              alt="Isabella Gingrich"
              className="w-56 h-56 lg:w-full lg:h-auto object-cover object-top rounded-xl border border-slate-800"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map(({ category, items }) => (
            <div key={category}>
              <h3 className="text-white text-sm font-semibold mb-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2 py-1 rounded-md bg-slate-800 text-emerald-400 border border-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white mb-2">Contact</h2>
        <p className="text-slate-400 mb-10">Get in touch</p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:isabella@isabellagingrich.com"
            className="group flex items-center gap-4 flex-1 bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-slate-600 transition-colors duration-200"
          >
            <span className="text-emerald-400 group-hover:text-emerald-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </span>
            <div>
              <p className="text-white text-sm font-medium">Email</p>
              <p className="text-slate-400 text-xs">isabella@isabellagingrich.com</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/isabella-gingrich/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 flex-1 bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-slate-600 transition-colors duration-200"
          >
            <span className="text-emerald-400 group-hover:text-emerald-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </span>
            <div>
              <p className="text-white text-sm font-medium">LinkedIn</p>
              <p className="text-slate-400 text-xs">isabella-gingrich</p>
            </div>
          </a>

          <a
            href="https://github.com/isabellagingrich"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 flex-1 bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-slate-600 transition-colors duration-200"
          >
            <span className="text-emerald-400 group-hover:text-emerald-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
            </span>
            <div>
              <p className="text-white text-sm font-medium">GitHub</p>
              <p className="text-slate-400 text-xs">isabellagingrich</p>
            </div>
          </a>

          <a
            href={resumePdf}
            download="Isabella_Gingrich_Resume.pdf"
            className="group flex items-center gap-4 flex-1 bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-slate-600 transition-colors duration-200"
          >
            <span className="text-emerald-400 group-hover:text-emerald-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                <polyline points="14 2 14 8 20 8"/>
                <path d="M12 18v-6"/>
                <path d="m9 15 3 3 3-3"/>
              </svg>
            </span>
            <div>
              <p className="text-white text-sm font-medium">Resume</p>
              <p className="text-slate-400 text-xs">Download PDF</p>
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-slate-600 py-10 text-sm border-t border-slate-800">
        Built with React + Vite + Tailwind CSS
      </footer>
    </div>
  );
}
