import Link from "next/link";
import {
  Github,
  GraduationCap,
  Award,
  Music,
  BookOpen,
  Linkedin,
  Mail,
  ArrowRight,
  Code2,
  Layout,
  Database,
  Star,
  Zap,
  ExternalLink,
  Briefcase,
  Globe,
  Cpu,
  Layers,
  Terminal,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-300 selection:bg-blue-500 selection:text-white font-sans">
      <section className="relative flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />

        {/* <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Available for Hire
        </div> */}

        <h1 className="text-5xl md:text-7xl font-bold text-center text-white tracking-tight mb-6">
          Building{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
            Digital Logic
          </span>{" "}
          <br />
          That Matters.
        </h1>

        <p className="max-w-2xl text-center text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          Hi, I'm <strong className="text-white">Gaweshini Athurugiriya</strong>
          . A Frontend Engineer specializing in
          <span className="text-blue-400"> React.js</span>,{" "}
          <span className="text-violet-400">Next.js</span>, and modern UI
          performance.
        </p>

        <div className="flex gap-4 z-20 relative">
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2"
          >
            View Work <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/Gaweshi2000"
            target="_blank"
            className="px-8 py-3 rounded-lg bg-slate-800 text-white font-medium border border-slate-700 hover:bg-slate-700 transition-all flex items-center gap-2"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
        </div>
      </section>

      {/*  EDUCATION & ACHIEVEMENTS  */}
      <section className="py-24 px-6 max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education Column */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-blue-400" /> Academic
              Foundation
            </h2>
            <div className="space-y-8">
              <div className="relative pl-8 border-l border-slate-700">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                <h3 className="text-xl font-bold text-white">
                  B.Sc. (Hons) in Information Technology
                </h3>
                <p className="text-blue-400 font-medium">
                  SLIIT • Specialized in Data Science{" "}
                </p>
                <p className="text-slate-500 text-sm mt-1">2021 — 2025</p>
              </div>

              <div className="relative pl-8 border-l border-slate-700">
                <div className="absolute w-4 h-4 bg-slate-600 rounded-full -left-[9px] top-1" />
                <h3 className="text-lg font-semibold text-slate-300">
                  G.C.E. Advanced Level
                </h3>
                <p className="text-slate-400 font-medium">
                  Physical Science Stream
                </p>
                <p className="text-slate-500 text-sm mt-1">
                  Yashodara Devi Balika Maha Vidyalaya
                </p>
              </div>
            </div>
          </div>

          {/* Certifications & Skills Column */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
              <Award className="w-8 h-8 text-violet-400" /> Certifications &
              Growth
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-violet-500/5 border border-violet-500/30 shadow-[0_0_20px_rgba(139,92,246,0.1)] hover:bg-violet-500/10 transition group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-violet-500/20 text-violet-400 group-hover:scale-110 transition">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-white">
                        Leadership & Mission Alignment
                      </h3>
                      <span className="text-[10px] bg-violet-500/20 text-violet-300 px-2 py-0.5 rounded-full border border-violet-500/30 uppercase tracking-tighter">
                        Certified
                      </span>
                    </div>
                    <p className="text-violet-400 text-xs font-mono uppercase tracking-widest mb-2">
                      Ramindu Randeni Leadership Academy
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Successfully completed comprehensive training in
                      high-performance habits, strategic leadership, and
                      professional mission-alignment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-pink-500/30 transition">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-pink-500/10 text-pink-400">
                    <Music className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Vocal Performance
                    </h3>
                    <p className="text-pink-400 text-xs font-mono uppercase tracking-widest mb-2">
                      Rising Stars Voice Academy
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Student of Raini Goonethilake, focusing on the vocal
                      performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  WORK EXPERIENCE SECTION  */}
      <section className="py-24 px-6 max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <Briefcase className="w-8 h-8 text-blue-400" /> Work Experience
        </h2>
        <div className="space-y-12">
          <div className="relative pl-8 border-l border-slate-800">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-2" />
            <div className="flex flex-col md:flex-row md:justify-between mb-2">
              <h3 className="text-xl font-bold text-white">
                Frontend Engineer
              </h3>
              <span className="text-slate-500 font-mono text-sm">
                04/2024 — Present
              </span>
            </div>
            <p className="text-blue-400 font-medium mb-3 underline decoration-blue-500/30 underline-offset-4">
              Drenlo
            </p>
            <p className="text-slate-400 leading-relaxed max-w-3xl">
              Designed and developed user-facing interfaces using React.
              Collaborated with UI/UX teams to build responsive components and
              integrate RESTful APIs for musician-venue matchmaking platforms.
            </p>
          </div>

          <div className="relative pl-8 border-l border-slate-800">
            <div className="absolute w-3 h-3 bg-slate-700 rounded-full -left-[6.5px] top-2" />
            <div className="flex flex-col md:flex-row md:justify-between mb-2">
              <h3 className="text-xl font-bold text-white">
                Machine Learning Researcher
              </h3>
              <span className="text-slate-500 font-mono text-sm">
                02/2023 — 08/2023
              </span>
            </div>
            <p className="text-slate-400 font-medium mb-3">Drenlo </p>
            <p className="text-slate-400 leading-relaxed max-w-3xl">
              Collaborated on training machine learning models and ensuring
              accuracy using GCP and vector databases like Weaviate.
            </p>
          </div>
          <div className="relative pl-8 border-l border-slate-800">
            <div className="absolute w-3 h-3 bg-slate-700 rounded-full -left-[6.5px] top-2" />
            <div className="flex flex-col md:flex-row md:justify-between mb-2">
              <h3 className="text-xl font-bold text-white">
                Intern Data Scientist
              </h3>
              <span className="text-slate-500 font-mono text-sm">
                07/2022 — 02/2023
              </span>
            </div>
            <p className="text-slate-400 font-medium mb-3">ChampSoft</p>
            <p className="text-slate-400 leading-relaxed max-w-3xl">
              Integrated conversational AI models with frontend UI components
              and handled data-preprocessing for ML model evaluations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto relative z-10 border-t border-slate-800/50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical Ecosystem
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive look at the technologies I use to build
            high-performance, scalable digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/50 transition shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-4">Core Frontend</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />{" "}
                React.js & Next.js
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />{" "}
                TypeScript (ES6+)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> React
                Native
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />{" "}
                JavaScript & HTML5
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/50 transition shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-4">Styling & UI</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />{" "}
                Tailwind CSS & Sass
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />{" "}
                Material UI & Bootstrap
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> Styled
                Components
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />{" "}
                Responsive Design
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/50 transition shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 mb-4">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-4">Architecture</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />{" "}
                RESTful APIs & Axios
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />{" "}
                Firebase & Firestore
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" /> GCP
                & AWS Hosting
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />{" "}
                MySQL & MS SQL
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/50 transition shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-4">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-4">Specialized</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" /> ML:
                Python & Sentiment Analysis
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />{" "}
                State Management (Redux)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" /> Git,
                Vite & Webpack
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />{" "}
                Performance Optimization
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="py-24 px-6 max-w-6xl mx-auto relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 flex items-center gap-3">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Therapy App",
              tech: "React • OpenAI GPT • WebkitSpeech",
              desc: "Real-time transcription platform for counselors featuring AI-powered analysis through OpenAI and therapeutic recommendation generation.",
              tags: ["AI", "Real-time"],
              link: "https://therapy-app-97f0c.web.app",
              color: "cyan",
              icon: <Zap className="w-6 h-6" />,
            },
            {
              title: "North Star Extension",
              tech: "React • TypeScript • Plasmo",
              desc: "A productivity browser extension built to manage focus sessions using the Chrome Storage API for persistent state management.",
              tags: ["Chrome API", "TypeScript"],
              color: "blue",
              icon: <Code2 className="w-6 h-6" />,
            },
            {
              title: "BitMoby",
              tech: "React • Context API",
              desc: "Bitcoin-based mobile top-up application with an administrative panel.",
              tags: ["BTCPay"],
              color: "violet",
              icon: <Database className="w-6 h-6" />,
            },
            {
              title: "GigBridge",
              tech: "React.js • Google Maps API",
              desc: "Comprehensive music platform connecting artists with venues featuring interactive mapping and messaging.",
              tags: ["Marketplace", "Maps API"],
              color: "pink",
              icon: <Layout className="w-6 h-6" />,
            },
            {
              title: "D.A.N. Studio",
              tech: "React • GCP Vision • Firebase",
              desc: "AI-powered image and video search application utilizing GCP Vision API for scalable media management.",
              tags: ["GCP", "Vision API"],
              color: "orange",
              icon: <Star className="w-6 h-6" />,
            },
            {
              title: "DUMP Mobile",
              tech: "React Native • Firebase",
              desc: "File management mobile application built for seamless integration with GCP and Cloud Storage.",
              tags: ["Mobile", "React Native"],
              color: "green",
              icon: <ExternalLink className="w-6 h-6" />,
            },
          ].map((project, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl bg-slate-800/50 border border-slate-700 transition-all hover:shadow-2xl hover:border-blue-500/50"
            >
              <div className="absolute top-8 right-8 p-2 rounded-lg bg-blue-500/10 text-blue-400">
                {project.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-blue-400 text-sm font-mono mb-4">
                {project.tech}
              </p>
              <p className="text-slate-400 mb-6 leading-relaxed">
                {project.desc}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  {project.tags.map((tag, t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-slate-900 text-xs text-slate-400 border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-white hover:text-blue-400 transition flex items-center gap-1 text-sm font-medium"
                  >
                    {/* Visit App <ExternalLink className="w-4 h-4" /> */}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-2xl font-bold text-white mb-8">
          Beyond the Keyboard
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="px-6 py-3 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 flex items-center gap-2">
            <Music className="w-4 h-4 text-pink-400" /> Vocal Performance
          </div>
          <div className="px-6 py-3 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500" /> Nature & Travel
          </div>
        </div>
      </section>

      {/*  FOOTER  */}
      <footer className="py-12 border-t border-slate-800 text-center">
        <h3 className="text-2xl font-bold text-white mb-6">
          Let's build something great.
        </h3>
        <div className="flex justify-center gap-6">
          <a
            href="mailto:gaweshiathurugiriya2@gmail.com"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition"
          >
            <Mail className="w-5 h-5" /> Email Me
          </a>
          <a
            href="https://linkedin.com/in/gaweshini-athurugiriya-03a757221"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition"
          >
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>
        </div>
        <p className="text-slate-600 mt-10 text-sm">
          © 2025 Gaweshini Athurugiriya.
        </p>
      </footer>
    </main>
  );
}
