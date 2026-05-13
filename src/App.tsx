/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Cloud, 
  Code2, 
  Database, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Cpu, 
  Terminal, 
  Zap,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Layout,
  Layers,
  Map as MapIcon,
  Phone,
  LayoutDashboard
} from "lucide-react";
import React, { useState, useEffect } from "react";

// --- Data ---

const SKILLS = [
  {
    category: "Development",
    icon: <Code2 className="w-5 h-5" />,
    items: ["Apex (Triggers, Batch, Queueable)", "LWC / Aura", "SLDS", "SOQL / SOSL", "Platform Events", "REST / SOAP Callouts"]
  },
  {
    category: "Admin & Automation",
    icon: <LayoutDashboard className="w-5 h-5" />,
    items: ["Flows (Screen, Record-Triggered)", "Sales Cadences", "Validation Rules", "Approval Processes", "Permission Sets"]
  },
  {
    category: "Integrations",
    icon: <Database className="w-5 h-5" />,
    items: ["OAuth 2.0", "Stripe / Xero / OptimoRoute", "Named Credentials", "Data Loader", "Salesforce Sites"]
  },
  {
    category: "Tools & DevOps",
    icon: <Terminal className="w-5 h-5" />,
    items: ["Gearset", "Git / GitHub", "VS Code", "SFDX", "Postman", "Workbench"]
  }
];

const EXPERIENCE = [
  {
    title: "Software Developer",
    company: "Shrine Consultancy Services Private Limited",
    period: "08/2025 – Present",
    location: "Ahmedabad, Gujrat",
    highlights: [
      "Engineered a scalable CSV import framework using Apex Batch classes and NPSP to process high-volume donation records.",
      "Authored Apex Triggers, TDTM, and Record-Triggered Flows for end-to-end data validation across 10,000+ records.",
      "Developed LWC to extend nonprofit business workflows and surface actionable data to operations teams.",
      "Designed dynamic reports and dashboards providing real-time visibility into fundraising pipelines."
    ],
    tech: ["Salesforce NPSP", "Apex", "LWC", "Record-Triggered Flows", "SOQL", "Reports & Dashboards"]
  },
  {
    title: "Junior Salesforce Developer",
    company: "Growbiz Solutions",
    period: "05/2024 – 07/2025",
    location: "Mohali",
    highlights: [
      "Delivered end-to-end Sales Cloud, Service Cloud, and Marketing Cloud implementation for a national moving company.",
      "Integrated Stripe, Xero, and OptimoRoute via REST API callouts using Named Credentials and custom Apex handlers.",
      "Built an external-facing data capture form using Salesforce Sites for non-Salesforce users.",
      "Designed Journey Builder email campaigns with interaction tracking to trigger automated nurture sequences."
    ],
    tech: ["Sales Cloud", "Service Cloud", "Marketing Cloud", "Apex", "Stripe/Xero Integration", "Journey Builder", "Salesforce Sites"]
  }
];

const PROJECTS = [
  {
    name: "Piano Movers",
    role: "Salesforce Developer",
    description: "Multicloud implementation managing Leads, Accounts, and Work Orders. Integrated critical business tools for invoicing and routing.",
    tech: ["Sales Cloud", "Service Cloud", "Marketing Cloud", "Stripe", "Xero", "OptimoRoute"],
    icon: <Cloud className="w-6 h-6" />
  },
  {
    name: "Breakthrough T1D (JDRF)",
    role: "Salesforce Developer",
    description: "NPSP implementation for donation management. Built a robust CSV import framework and automated validation rules.",
    tech: ["NPSP", "Apex Batch", "LWC", "TDTM", "Flows"],
    icon: <Zap className="w-6 h-6" />
  },
  {
    name: "FoodChainid",
    role: "Salesforce Developer",
    description: "Standardized renewal workflows with Sales Engagement cadences. Implemented health-score branching for personalized engagement.",
    tech: ["Sales Engagement", "Cadences", "Branching Logic", "Flows"],
    icon: <Layers className="w-6 h-6" />
  },
  {
    name: "Enliven",
    role: "Salesforce Admin",
    description: "Health Cloud optimization. Implemented Salesforce Maps for nurse routing and patient heat-maps for geographical planning.",
    tech: ["Health Cloud", "Salesforce Maps", "Custom Objects", "Reporting"],
    icon: <MapIcon className="w-6 h-6" />
  }
];

const EDUCATION = [
  {
    degree: "BE (Computer Science)",
    school: "Chitkara University",
    year: "2024",
    location: "Baddi, Himachal Pradesh",
    score: "88.9%"
  },
  {
    degree: "12th Standard",
    school: "Blue Bells School",
    year: "2020",
    location: "Naraingarh, Ambala",
    score: "89% (CBSE)"
  }
];

// --- Components ---

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Stack", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <div className="min-h-screen bg-bg selection:bg-brand selection:text-bg">
      {/* Dynamic Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-bg/80 backdrop-blur-md border-b border-border py-4" : "py-8"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="font-display font-bold text-lg md:text-xl tracking-tighter text-white hover:text-brand transition-colors whitespace-nowrap">
            ABHINAV CHANANA
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-10 items-center text-[10px] font-mono uppercase tracking-[0.2em]">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="hover:text-white transition-colors">{link.name}</a>
            ))}
            <a href="#contact" className="px-5 py-2 border border-brand/30 rounded-full hover:bg-brand hover:text-bg transition-all">Connect</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-zinc-400 hover:text-white" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-current transition-all ${isMenuOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
              <span className={`h-0.5 w-full bg-current transition-all ${isMenuOpen ? "opacity-0" : ""}`}></span>
              <span className={`h-0.5 w-full bg-current transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-bg border-b border-border overflow-hidden"
            >
              <div className="flex flex-col gap-4 p-8 items-center font-mono text-[10px] uppercase tracking-[0.2em]">
                {navLinks.map(link => (
                  <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="hover:text-brand transition-colors">{link.name}</a>
                ))}
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-3 border border-brand/30 rounded-full text-brand">Connect</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero: Bold Typographic Entrance */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.4em] text-brand">
              <div className="w-6 md:w-10 h-[1px] bg-brand text-nowrap"></div>
              <span>Cloud Solutions Architect</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-display font-black leading-[0.85] tracking-tighter text-white uppercase break-words">
              Salesforce<br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>Developer</span>
            </h1>
            <p className="max-w-xl text-base md:text-xl text-zinc-400 font-light leading-relaxed">
              Engineering scalable, business-driven solutions across <span className="text-white font-medium">Sales, Service, and Marketing Cloud</span> with 2+ years of hands-on technical expertise.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-8 py-4 bg-brand text-bg font-bold rounded-full hover:bg-white transition-all flex items-center gap-2 group">
                Review My Work <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex gap-4 items-center">
                <a href="https://github.com/abhhinav7" target="_blank" className="p-4 bg-surface border border-border rounded-full hover:border-brand transition-colors">
                  <Github className="w-5 h-5 text-white" />
                </a>
                <a href="https://linkedin.com/in/abhhinav7" target="_blank" className="p-4 bg-surface border border-border rounded-full hover:border-brand transition-colors">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Technical Hardware Label Decoration */}
          <div className="hidden lg:block">
            <div className="glass-card p-8 rotate-1 space-y-6 tech-border">
              <div className="tech-label">Status: Active</div>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                  <span>Core Architecture</span>
                  <span>99.9% Reliable</span>
                </div>
                <div className="h-40 bg-zinc-950/50 rounded-lg p-4 font-mono text-[11px] text-brand/80 overflow-hidden">
                  <p>{">"} initializing_stack...</p>
                  <p>{">"} APEX_VERSION: 60.0</p>
                  <p>{">"} LWC_ENGINE: READY</p>
                  <p>{">"} MARKETING_CLOUD: CONNECTED</p>
                  <p>{">"} INTEGRATIONS: STRIPE, XERO, OPTIMOROUTE</p>
                  <p className="animate-pulse">{">"} awaiting_instructions_</p>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-1 bg-brand"></div>
                  <div className="h-1 bg-border"></div>
                  <div className="h-1 bg-border"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 bg-surface/30 px-6 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="section-label">Experience</div>
          <div className="space-y-24 mt-16">
            {EXPERIENCE.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-12"
              >
                <div className="space-y-4">
                  <span className="text-brand font-mono text-sm">{exp.period}</span>
                  <h3 className="text-3xl font-bold leading-none">{exp.title}</h3>
                  <p className="text-white font-medium">{exp.company}</p>
                  <p className="text-zinc-500 text-sm flex items-center gap-2">
                    <MapIcon className="w-3 h-3 text-brand" /> {exp.location}
                  </p>
                </div>
                <div className="space-y-8">
                  <ul className="space-y-5">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex gap-4 text-zinc-400 group leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand/30 group-hover:bg-brand mt-2 transition-colors shrink-0"></div>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-bg border border-border rounded-lg text-[10px] font-mono text-zinc-500 uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills: Bento Grid Layout */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="section-label">Technical Arsenal</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {SKILLS.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-10 group hover:border-brand/40"
              >
                <div className="w-12 h-12 bg-bg border border-border rounded-2xl flex items-center justify-center mb-8 text-brand group-hover:scale-110 group-hover:bg-brand group-hover:text-bg transition-all duration-500">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-6 text-white tracking-tight">{skill.category}</h3>
                <ul className="space-y-4">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-400 text-sm font-light group/item leading-tight">
                      <div className="w-1 h-1 rounded-full bg-brand/30 group-hover/item:bg-brand group-hover/item:scale-125 transition-all shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <div className="section-label">Selected Implementations</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {PROJECTS.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="tech-border bg-bg group"
              >
                <div className="tech-label">{project.role}</div>
                <div className="p-10 space-y-8">
                  <div className="flex justify-between items-start">
                    <div className="p-4 bg-surface border border-border rounded-2xl text-brand group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                      {project.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-4 text-white tracking-tighter uppercase">{project.name}</h3>
                    <p className="text-zinc-400 font-light leading-relaxed mb-8">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-surface border border-border rounded-full text-[9px] font-black uppercase text-zinc-500 tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Personal Metric */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="section-label">Education</div>
            <div className="space-y-12 mt-12">
              {EDUCATION.map((edu, index) => (
                <div key={index} className="flex gap-8 group">
                  <div className="p-5 bg-surface border border-border rounded-3xl text-zinc-500 group-hover:text-brand transition-colors shrink-0">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{edu.degree}</h3>
                    <p className="text-zinc-400">{edu.school}</p>
                    <div className="flex gap-4 text-xs font-mono text-zinc-600">
                      <span>{edu.year}</span>
                      <span>{edu.location}</span>
                      <span className="text-brand font-bold">{edu.score}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface/50 border border-border p-12 rounded-[40px] space-y-8 flex flex-col justify-center">
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase leading-none">
              Solving<br />Complexities<span className="text-brand">.</span>
            </h3>
            <p className="text-xl text-zinc-400 font-light leading-relaxed">
              My approach focuses on <span className="text-white font-medium">clean architecture</span> and <span className="text-white font-medium">efficient automation</span>. I thrive on translating intricate business requirements into high-performing Salesforce solutions that deliver measurable impact and technical excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-24 md:py-40 px-6 border-t border-border bg-gradient-to-b from-bg to-zinc-950">
        <div className="max-w-7xl mx-auto text-center space-y-12 md:space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-display font-black tracking-tighter text-white uppercase leading-[0.85] break-words">
              Let's Scale Your<br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1px #38bdf8" }}>Environment</span>
            </h2>
            <p className="text-zinc-500 max-w-lg mx-auto text-base md:text-xl font-light leading-relaxed">
              Open to new opportunities and challenges within innovative engineering teams.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href="mailto:abhinavchanana0001@gmail.com" className="w-full md:w-auto px-10 py-5 bg-white text-bg font-black rounded-full hover:bg-brand transition-all flex items-center justify-center gap-3">
              <Mail className="w-5 h-5" /> Start Conversation
            </a>
            <div className="w-full md:w-auto px-10 py-5 border border-border border-dashed rounded-full text-white font-mono text-xs md:text-sm tracking-widest text-center">
              +91-9466451888
            </div>
          </div>

          <div className="pt-24 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-border pt-12 text-[10px] font-mono text-zinc-700 tracking-[0.3em] uppercase">
            <p>&copy; 2026 ABHINAV CHANANA / v2.0.0</p>
            <div className="flex gap-12">
              <a href="https://linkedin.com/in/abhhinav7" className="hover:text-brand transition-colors">LinkedIn</a>
              <a href="https://github.com/abhhinav7" className="hover:text-brand transition-colors">GitHub</a>
              <span className="text-zinc-800">Ahmedabad, IND</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
