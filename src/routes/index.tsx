import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import logoA from "@/assets/logo-a.png";
import resumeAsset from "@/assets/Armaan_Saad_Resume.pdf.asset.json";

import {
  ArrowUpRight, Download, Github, Linkedin, MessageCircle, Mail,
  Code2, Database, Brain, Cpu, Sparkles, GraduationCap, MapPin,
  Star, Layers, Rocket, Target, Send, ExternalLink, BarChart3,
  TrendingUp, CloudSun, Award, Briefcase, User,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Armaan Saad — AI & Data Science Portfolio" },
      { name: "description", content: "Armaan Saad — B.Tech AI & DS student, LLM enthusiast and full-stack developer building intelligent, user-focused solutions." },
      { property: "og:title", content: "Armaan Saad — AI & Data Science Portfolio" },
      { property: "og:description", content: "B.Tech AI & DS student. AI, LLMs, Data Analytics, Full-Stack." },
    ],
  }),
  component: Index,
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const TYPING = [
  "AI & LLM Enthusiast",
  "Data Analyst",
  "Full Stack Developer",
  "B.Tech AI & DS Student",
];

const SKILLS = [
  { name: "Python", icon: Code2 },
  { name: "C / C++", icon: Cpu },
  { name: "JavaScript", icon: Code2 },
  { name: "React", icon: Layers },
  { name: "Node.js", icon: Layers },
  { name: "MySQL", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "MERN Stack", icon: Rocket },
  { name: "Generative AI", icon: Sparkles },
  { name: "LLM Engineering", icon: Brain },
];

const PROJECTS = [
  {
    title: "Data Analytics Dashboard",
    desc: "Interactive dashboard to visualize, analyze and extract insights from large datasets in real time.",
    icon: BarChart3,
    status: "In Development",
    tags: ["Python", "React", "D3"],
  },
  {
    title: "Sales Prediction System",
    desc: "ML model that predicts future sales using historical data and regression techniques.",
    icon: TrendingUp,
    status: "In Development",
    tags: ["scikit-learn", "Pandas", "FastAPI"],
  },
  {
    title: "Weather Prediction App",
    desc: "Weather forecasting web app with real-time updates and ML-based short-term prediction.",
    icon: CloudSun,
    status: "In Development",
    tags: ["React", "OpenAPI", "TensorFlow"],
  },
];

const TIMELINE = [
  {
    period: "2023 — Present",
    title: "B.Tech in Artificial Intelligence & Data Science",
    org: "C. Abdul Hakeem College of Engineering & Technology, MelVisharam",
    detail: "3rd Year • Current CGPA 8.4 • Focused on AI, LLMs, and applied data analytics.",
    icon: GraduationCap,
  },
  {
    period: "2024 — Present",
    title: "Self-Directed AI & Full-Stack Learning",
    org: "Independent Study",
    detail: "Building production-grade projects across Generative AI, LLM tooling, and the MERN stack.",
    icon: Briefcase,
  },
  {
    period: "2021 — 2023",
    title: "Higher Secondary — Computer Science",
    org: "Vaniyambadi, Tamil Nadu",
    detail: "Strong foundation in mathematics and programming fundamentals.",
    icon: Award,
  },
];

function Index() {
  // Cursor orb
  const orbRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!orbRef.current) return;
      orbRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Reveal on scroll
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen text-foreground font-sans">
      <div className="bg-ambient" />
      <div className="bg-noise" />
      <div ref={orbRef} className="cursor-orb hidden md:block" />

      <Streaks />
      <Blobs />

      <Navbar />

      <main className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24 space-y-6">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Stats />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

/* ---------- Navbar ---------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = "home";
      for (const n of NAV) {
        const el = document.getElementById(n.id);
        if (el && el.getBoundingClientRect().top < 120) current = n.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-4 z-50 transition-all duration-500 ${scrolled ? "px-3" : "px-4"}`}>
      <nav
        className={`glass-strong mx-auto flex items-center justify-between rounded-full transition-all duration-500 ${
          scrolled ? "max-w-5xl px-3 py-2" : "max-w-6xl px-4 py-3"
        }`}
      >
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <span className="grid h-10 w-10 place-items-center rounded-2xl glass-strong p-1.5 shadow-glow">
            <img src={logoA} alt="Armaan Saad logo" className="h-full w-full object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]" />
          </span>
          <span className="hidden sm:block text-sm font-medium tracking-tight">Armaan Saad</span>
        </a>
        <ul className="hidden md:flex items-center gap-1 text-sm text-muted-foreground">
          {NAV.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className={`relative px-4 py-2 rounded-full transition-all ${
                  active === n.id ? "text-foreground glass" : "hover:text-foreground"
                }`}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="shimmer group flex items-center gap-1.5 rounded-full glass-strong px-4 py-2 text-sm font-medium"
        >
          Let's Connect
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
        </a>
      </nav>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [del, setDel] = useState(false);
  const [showCvModal, setShowCvModal] = useState(false);

  const handleDownloadCv = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open(resumeAsset.url, "_blank", "noopener,noreferrer");
    setShowCvModal(true);
  };

  const confirmDownload = () => {
    const a = document.createElement("a");
    a.href = resumeAsset.url;
    a.download = "Armaan_Saad_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setShowCvModal(false);
  };

  useEffect(() => {
    const phrase = TYPING[idx % TYPING.length];
    const tick = setTimeout(() => {
      if (!del) {
        const next = phrase.slice(0, text.length + 1);
        setText(next);
        if (next === phrase) setTimeout(() => setDel(true), 1400);
      } else {
        const next = phrase.slice(0, text.length - 1);
        setText(next);
        if (next === "") { setDel(false); setIdx((i) => i + 1); }
      }
    }, del ? 40 : 70);
    return () => clearTimeout(tick);
  }, [text, del, idx]);

  return (
    <section id="home" className="glass tilt-card rounded-3xl p-8 md:p-14 relative overflow-hidden animate-fade-up">
      <div className="absolute inset-x-0 top-0 h-px gradient-line" />
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5" />
            AI Enthusiast & Data Analyst
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/70 animate-pulse-glow" />
          </span>
          <div>
            <p className="text-lg md:text-xl text-muted-foreground font-light">Hi, I'm</p>
            <h1 className="mt-1 text-5xl md:text-7xl font-semibold tracking-tight text-chrome leading-[1.05]">
              Armaan Saad
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-foreground/90 font-light min-h-[2em]">
            <span className="caret">{text}</span>
          </p>
          <p className="max-w-xl text-sm md:text-base text-muted-foreground leading-relaxed">
            I build intelligent, data-driven and user-focused solutions that solve real-world problems
            using modern AI, LLMs and full-stack engineering.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#projects" className="shimmer group flex items-center gap-2 rounded-full glass-strong px-5 py-3 text-sm font-medium">
              View Projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </a>
            <a
              href={resumeAsset.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDownloadCv}
              className="shimmer group flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium"
            >
              Download CV
              <Download className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Liquid glass AI orb */}
        <div className="relative h-[320px] md:h-[420px] flex items-center justify-center">
          <div className="absolute inset-0 animate-blob">
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
          </div>
          <div className="relative glass-strong rounded-[2.5rem] w-56 h-72 md:w-64 md:h-80 flex flex-col items-center justify-center animate-float shadow-glow">
            <div className="text-6xl md:text-7xl font-semibold text-chrome tracking-tight">AI</div>
            <p className="absolute bottom-8 px-4 text-center text-[11px] md:text-xs text-muted-foreground italic">
              Turning Ideas into<br/>Intelligent Solutions
            </p>
            {/* Orbits */}
            <svg className="absolute -inset-10 pointer-events-none" viewBox="0 0 400 400">
              <ellipse cx="200" cy="200" rx="180" ry="60" fill="none" stroke="url(#g1)" strokeWidth="1" opacity="0.5" transform="rotate(-20 200 200)" />
              <ellipse cx="200" cy="200" rx="170" ry="55" fill="none" stroke="url(#g1)" strokeWidth="1" opacity="0.4" transform="rotate(15 200 200)" />
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0" stopColor="white" stopOpacity="0" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.8" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            {/* sparkles */}
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="absolute h-1 w-1 rounded-full bg-white animate-pulse-glow"
                style={{
                  top: `${20 + ((i * 37) % 60)}%`,
                  left: `${10 + ((i * 53) % 80)}%`,
                  animationDelay: `${i * 0.4}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  const stats = [
    { icon: GraduationCap, label: "3rd Year", sub: "B.Tech (AI & DS)" },
    { icon: MapPin, label: "Vaniyambadi", sub: "Tamil Nadu, India" },
    { icon: Star, label: "8.4 CGPA", sub: "Current" },
    { icon: Code2, label: "AI & LLM", sub: "Focused" },
  ];
  return (
    <section id="about" className="glass tilt-card reveal rounded-3xl p-8 md:p-12">
      <SectionHeader icon={<span className="grid h-7 w-7 place-items-center rounded-md glass"><User className="h-4 w-4 text-white" /></span>} title="About Me" />
      <div className="mt-8 grid lg:grid-cols-[1fr_1.1fr] gap-10">
        <div className="space-y-5 text-sm md:text-base text-muted-foreground leading-relaxed">
          <p>
            I'm <span className="text-foreground">Armaan Saad</span>, a 3rd year B.Tech (AI &amp; DS) student at
            C. Abdul Hakeem College of Engineering and Technology, MelVisharam. I'm passionate about
            Artificial Intelligence, Large Language Models, and Data Analytics.
          </p>
          <p>
            I enjoy building real-world projects that combine data, intelligence and modern web
            technologies — turning raw information into elegant, useful product experiences.
          </p>
          <a href="#projects" className="shimmer inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm">
            More About Me <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="glass tilt-card rounded-2xl p-5 flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl glass-strong">
                <s.icon className="h-5 w-5 text-foreground/90" />
              </div>
              <div>
                <p className="text-base font-medium">{s.label}</p>
                <p className="text-xs text-muted-foreground">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Skills ---------- */
function Skills() {
  return (
    <section id="skills" className="glass tilt-card reveal rounded-3xl p-8 md:p-12">
      <SectionHeader icon={<Layers className="h-5 w-5" />} title="Skills" />
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {SKILLS.map((s) => (
          <div
            key={s.name}
            className="glass tilt-card group rounded-2xl p-5 flex flex-col items-center justify-center gap-3 aspect-square text-center"
          >
            <div className="grid h-14 w-14 place-items-center rounded-2xl glass-strong transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-3">
              {"img" in s && (s as any).img ? (
                <img src={(s as any).img} alt={s.name} className="h-8 w-8 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]" />
              ) : (
                <s.icon className="h-6 w-6 text-foreground/90" />
              )}
            </div>
            <p className="text-xs md:text-sm font-medium text-foreground/90">{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Projects ---------- */
function Projects() {
  return (
    <section id="projects" className="glass tilt-card reveal rounded-3xl p-8 md:p-12">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <SectionHeader icon={<Rocket className="h-5 w-5" />} title="Projects" />
        <span className="shimmer inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-chrome">
          My Projects <Rocket className="h-4 w-4" />
        </span>
      </div>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.map((p) => (
          <article key={p.title} className="glass tilt-card group rounded-2xl p-6 flex flex-col">
            <div className="flex items-start justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-xl glass-strong">
                <p.icon className="h-5 w-5" />
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition" />
            </div>
            <h3 className="mt-5 text-lg font-semibold tracking-tight">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full glass px-2.5 py-0.5 text-[10px] text-muted-foreground">{t}</span>
              ))}
            </div>
            <div className="mt-5 pt-5 border-t border-white/5 flex items-center justify-between">
              <span className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse-glow" />
                {p.status}
              </span>
              <div className="flex gap-2">
                <a href="#" className="grid h-8 w-8 place-items-center rounded-full glass hover:bg-white/10 transition">
                  <Github className="h-3.5 w-3.5" />
                </a>
                <a href="#" className="grid h-8 w-8 place-items-center rounded-full glass hover:bg-white/10 transition">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-muted-foreground italic">
        I am currently building these projects as part of my learning journey in AI and Data Analytics.
      </p>
    </section>
  );
}

/* ---------- Education / Timeline ---------- */
function Education() {
  return (
    <section id="education" className="glass tilt-card reveal rounded-3xl p-8 md:p-12">
      <SectionHeader icon={<GraduationCap className="h-5 w-5" />} title="Experience & Education" />
      <div className="relative mt-10 pl-6 md:pl-10">
        <div className="absolute left-2 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="space-y-6">
          {TIMELINE.map((t, i) => (
            <div key={i} className="relative reveal">
              <span className="absolute -left-[18px] md:-left-[26px] top-6 grid h-4 w-4 place-items-center rounded-full glass-strong">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse-glow" />
              </span>
              <div className="glass tilt-card group rounded-2xl p-5 md:p-6">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl glass-strong">
                      <t.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{t.period}</p>
                      <h3 className="text-base md:text-lg font-medium">{t.title}</h3>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{t.org}</p>
                <p className="mt-2 text-sm text-foreground/80">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Stats ---------- */
function Stats() {
  const items = [
    { icon: Code2, label: "3+", sub: "Projects Planned" },
    { icon: Layers, label: "300+", sub: "Hours of Learning" },
    { icon: Star, label: "8.4", sub: "CGPA" },
    { icon: Target, label: "Goal", sub: "AI & LLM Engineer" },
  ];
  return (
    <section className="glass reveal rounded-3xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((s) => (
        <div key={s.sub} className="flex items-center gap-4 p-2">
          <div className="grid h-12 w-12 place-items-center rounded-xl glass-strong">
            <s.icon className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xl md:text-2xl font-semibold text-chrome">{s.label}</p>
            <p className="text-xs text-muted-foreground">{s.sub}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); setTimeout(() => setSent(false), 2500); }, 1200);
  };

  return (
    <section id="contact" className="glass tilt-card reveal rounded-3xl p-8 md:p-12">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-chrome">Let's Connect</h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-md">
            I'm open to opportunities and excited to collaborate on meaningful projects across AI,
            data, and product engineering.
          </p>
          <div className="mt-8 space-y-3">
            {[
              { icon: Mail, label: "Email", value: "armaanvnb2006@gmail.com", href: "mailto:armaanvnb2006@gmail.com" },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/armaan-saad", href: "https://www.linkedin.com/in/armaan-saad-120251306?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
              { icon: Github, label: "GitHub", value: "github.com/armaan24905", href: "https://github.com/armaan24905" },
              { icon: MessageCircle, label: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/qr/FG3D2ESSKPB4L1" },
            ].map((c) => (
              <a key={c.label} href={c.href} className="glass tilt-card group flex items-center gap-4 rounded-2xl p-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl glass-strong group-hover:shadow-glow">
                  <c.icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">{c.label}</p>
                  <p className="text-sm font-medium truncate">{c.value}</p>
                </div>
                <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition group-hover:rotate-45 group-hover:text-foreground" />
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={onSubmit} className="glass rounded-2xl p-6 md:p-8 space-y-5">
          <Field label="Name" id="name"><input id="name" required className="w-full bg-transparent outline-none text-sm placeholder:text-muted-foreground/60" placeholder="Your name" /></Field>
          <Field label="Email" id="email"><input id="email" type="email" required className="w-full bg-transparent outline-none text-sm placeholder:text-muted-foreground/60" placeholder="you@example.com" /></Field>
          <Field label="Message" id="msg">
            <textarea id="msg" required rows={5} className="w-full bg-transparent outline-none text-sm placeholder:text-muted-foreground/60 resize-none" placeholder="Tell me about the opportunity…" />
          </Field>
          <button
            type="submit"
            disabled={sending}
            className="shimmer group relative w-full overflow-hidden rounded-full glass-strong py-3 text-sm font-medium flex items-center justify-center gap-2 disabled:opacity-70"
          >
            <span className={`absolute inset-0 bg-gradient-to-r from-white/10 via-white/30 to-white/10 transition-transform duration-700 ${sending ? "translate-x-0" : "-translate-x-full"}`} />
            <span className="relative flex items-center gap-2">
              {sent ? "Sent ✓" : sending ? "Sending…" : "Send Message"}
              {!sending && !sent && <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <label htmlFor={id} className="block glass rounded-xl px-4 py-3 focus-within:border-white/20 transition">
      <span className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
      <div className="glass rounded-2xl px-6 py-5 flex items-center justify-between flex-wrap gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Armaan Saad. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a href="https://github.com/armaan24905" target="_blank" rel="noreferrer" className="hover:text-foreground transition"><Github className="h-4 w-4" /></a>
          <a href="https://www.linkedin.com/in/armaan-saad-120251306" target="_blank" rel="noreferrer" className="hover:text-foreground transition"><Linkedin className="h-4 w-4" /></a>
          <a href="https://wa.me/qr/FG3D2ESSKPB4L1" target="_blank" rel="noreferrer" className="hover:text-foreground transition"><MessageCircle className="h-4 w-4" /></a>
        </div>
      </div>
      <div className="mt-4 h-px gradient-line" />
    </footer>
  );
}

/* ---------- Helpers ---------- */
function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-9 w-9 place-items-center rounded-xl glass">{icon}</div>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
    </div>
  );
}

function Blobs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-white/[0.03] blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-white/[0.04] blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
      <div className="absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-white/[0.03] blur-3xl animate-blob" style={{ animationDelay: "6s" }} />
    </div>
  );
}

function Streaks() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute top-0 left-0 h-32 w-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-2xl animate-streak" />
      <div className="absolute top-1/2 left-0 h-24 w-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent blur-2xl animate-streak" style={{ animationDelay: "4s" }} />
    </div>
  );
}
