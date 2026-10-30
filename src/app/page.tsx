"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Code,
  Database,
  Cloud,
  GitBranch,
  Mail,
  Phone,
  ChevronDown,
  Star,
  Video,
  Play,
  Search,
  MoreHorizontal,
  Circle,
  ArrowUpRight,
  Download,
} from "lucide-react";

const skills = [
  {
    title: "Cloud Deployments",
    icon: Cloud,
    details: ["AWS EC2", "AWS S3", "AWS RDS"],
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Computer Science Foundations",
    icon: Database,
    details: ["Database internals (DBMS)", "Operating systems", "Object-oriented programming"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Problem Solving",
    icon: Code,
    details: ["Algorithmic problem solving", "LeetCode"],
    color: "from-purple-500 to-pink-500",
  },
];

const projects = [
  {
    number: "01",
    title: "StreamTweet",
    type: "Video discovery platform",
    description:
      "A video-focused platform for discovering content, finding creators, and keeping up with subscriptions. The experience is centered around helping viewers find what they want to watch.",
    features: [
      "A unified discovery feed brings videos and tweets together in one place. Explore creator posts, find something new to watch or read, and move between both types of content in one experience.",
      "Creator discovery helps viewers find people and explore the videos and tweets they share.",
      "Mongoose aggregation pipelines to retrieve and organize creator subscriptions and related video content.",
      "Secure user authentication and registration for accessing the video, creator, and subscription experience.",
      "Adaptive bitrate streaming adjusts video quality on the fly to match network conditions and help keep playback smooth.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Cloudinary", "MongoDB"],
    href: "https://streamtweet-web.onrender.com/",
    icon: Video,
    accent: "from-cyan-400 to-blue-500",
    preview: "stream",
  },
  {
    number: "02",
    title: "Nexus DBMS",
    type: "Interactive DBMS internals simulator",
    description:
      "An interactive visualizer for exploring how database engines handle queries, indexes, memory, concurrency, and distributed workloads. Nexus turns internal DBMS concepts into visible components and operation traces.",
    features: [
      "Explore B+ tree behavior, including splits at the configured order, linked leaf nodes, and insertion or search traversal traces.",
      "See query optimization concepts such as choosing an index scan, alongside connection-pool activity and cached query entries.",
      "Inspect buffer-pool behavior with a CLOCK sweep replacement policy, dirty-page tracking, and disk-flush events.",
      "Visualize concurrency and durability concepts through a locks table, write-ahead log (WAL), and pipeline logs.",
      "Follow distributed database concepts including proxy routing, write requests, simulated latency, cluster nodes, and replication lag.",
    ],
    tags: ["B+ Trees", "Query Optimization", "Buffer Pool", "WAL", "Replication"],
    href: "https://dbms-internals-visualizer.onrender.com/",
    icon: Database,
    accent: "from-violet-400 to-fuchsia-500",
    preview: "database",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section
        id="hero"
        className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 py-28"
      >
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.12)_1px,transparent_0)] bg-[length:22px_22px] opacity-20" />

        <motion.div
          className="container relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1fr_auto] md:gap-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Computer Science &amp; Engineering · JIIT</p>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
              Divyansh Sharma<span className="text-cyan-300">.</span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
              Exploring cloud deployments, database internals, and thoughtful software. I enjoy solving problems and building useful things for the web.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/divyansh3214"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              >
                <GitBranch size={18} />
                GitHub
              </a>
              <a
                href="https://leetcode.com/u/yanshuuuuu/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              >
                <Star size={18} />
                LeetCode
              </a>
              <a
                href="/Divyansh_Sharma_Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                <Download size={18} />
                Download resume
              </a>
            </div>
          </div>

          <div className="relative mx-auto h-72 w-60 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/20 sm:h-[26rem] sm:w-[21rem]">
            <Image
              src="/divyansh-sharma.png"
              alt="Portrait of Divyansh Sharma"
              fill
              priority
              sizes="(max-width: 640px) 15rem, 21rem"
              className="object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" />
            <ChevronDown size={20} className="absolute bottom-4 right-4 rounded-full border border-white/10 bg-slate-950/80 p-1 text-cyan-300 backdrop-blur" />
          </div>
        </motion.div>
      </section>

      <section id="about" className="bg-slate-950 py-24 md:py-28">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-12 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">A little about me</p>
              <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">Building with purpose<span className="text-cyan-300">.</span></h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-slate-400 md:text-lg">
              I’m a Computer Science & Engineering student at Jaypee Institute of Information Technology,
              with hands-on AWS deployment experience and a strong foundation in DBMS, operating systems,
              and object-oriented programming.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/20 sm:p-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">01 / Education</p>
              <h3 className="mb-5 text-2xl font-bold text-white">Academic background</h3>
              <div className="space-y-3 text-sm leading-relaxed text-slate-400">
                <p className="text-base font-medium text-slate-200">B.Tech in Computer Science &amp; Engineering</p>
                <p>Jaypee Institute of Information Technology</p>
                <p>Graduating May 2027 <span className="text-slate-600">·</span> CGPA 6.53 / 10.0</p>
                <div className="border-t border-white/10 pt-3">
                  <p>CBSE Class XII: 91.2% (2021)</p>
                  <p>CBSE Class X: 90.5% (2019)</p>
                </div>
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/20 sm:p-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">02 / Focus</p>
              <h3 className="mb-5 text-2xl font-bold text-white">What I’m exploring</h3>
              <div className="space-y-3 text-sm leading-relaxed text-slate-400">
                <p>Deploying applications with AWS EC2, S3, and RDS.</p>
                <p>Understanding database internals and core DBMS concepts.</p>
                <p>Strengthening foundations in operating systems and object-oriented programming.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="bg-slate-950 py-24 md:py-28">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-12 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Tools &amp; foundations</p>
              <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">Areas of focus<span className="text-cyan-300">.</span></h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-slate-400 md:text-lg">
              Core skills and concepts I’m building on as a computer science student.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
                >
                  <div className={`mb-5 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r ${skill.color} p-3 text-white`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-white">{skill.title}</h3>
                  <ul className="space-y-3 text-sm text-slate-400">
                    {skill.details.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="relative overflow-hidden bg-slate-950 py-24 text-white md:py-32">
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="container relative mx-auto px-6">
          <div className="mb-14 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">A few things I’ve built</p>
              <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">Selected work<span className="text-cyan-300">.</span></h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-slate-400 md:text-lg">
              Projects that bring together thoughtful interfaces, useful ideas, and a love of building for the web.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
              >
                <div className="relative flex h-64 items-center justify-center overflow-hidden border-b border-white/10 bg-slate-900 p-6 sm:h-72">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-[0.09] transition-opacity duration-300 group-hover:opacity-[0.15]`} />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.12)_1px,transparent_0)] bg-[length:22px_22px] opacity-40" />
                  {project.preview === "stream" ? (
                    <div className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-slate-950/90 p-5 shadow-2xl shadow-black/40 transition-transform duration-300 group-hover:-rotate-1 group-hover:scale-[1.02]">
                      <div className="mb-5 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${project.accent}`}>
                            <Video size={18} className="text-slate-950" />
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-white">StreamTweet</p>
                            <p className="text-xs text-slate-500">Videos · Creators · Subscriptions</p>
                          </div>
                        </div>
                        <MoreHorizontal size={20} className="text-slate-500" />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          ["Discover videos", "Explore something new"],
                          ["Find creators", "Meet your next favorite"],
                        ].map(([title, subtitle], index) => (
                          <div key={title} className="overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.035]">
                            <div className={`relative flex h-20 items-center justify-center bg-gradient-to-br ${index === 0 ? "from-cyan-900/80 to-blue-950" : "from-violet-900/80 to-fuchsia-950"}`}>
                              <Play size={18} className="text-white/90" />
                              <span className="absolute bottom-2 left-2 flex h-5 w-5 items-center justify-center rounded-full bg-slate-950/70">
                                <Video size={11} className="text-cyan-200" />
                              </span>
                            </div>
                            <div className="p-3">
                              <p className="text-xs font-medium text-slate-200">{title}</p>
                              <p className="mt-1 text-[10px] text-slate-500">{subtitle}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-slate-950/90 p-5 shadow-2xl shadow-black/40 transition-transform duration-300 group-hover:rotate-1 group-hover:scale-[1.02]">
                      <div className="mb-5 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${project.accent}`}>
                            <Database size={18} className="text-white" />
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-white">Nexus DBMS</p>
                            <p className="text-xs text-slate-500">Data workspace</p>
                          </div>
                        </div>
                        <Search size={17} className="text-slate-500" />
                      </div>
                      <div className="space-y-2.5">
                        {[
                          ["B+ Tree Index", "Splits & leaves"],
                          ["Buffer Pool", "CLOCK sweep"],
                          ["Write-Ahead Log", "Durability"],
                        ].map(([table, count], index) => (
                          <div key={table} className="flex items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.035] px-3.5 py-3">
                            <div className="flex items-center gap-3">
                              <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${index === 0 ? "bg-violet-400/15 text-violet-300" : index === 1 ? "bg-cyan-400/15 text-cyan-300" : "bg-fuchsia-400/15 text-fuchsia-300"}`}>
                                <Database size={15} />
                              </span>
                              <span className="font-mono text-xs text-slate-300">{table}</span>
                            </div>
                            <span className="text-[11px] text-slate-500">{count}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-500">
                        <Circle size={7} className="fill-emerald-400 text-emerald-400" />
                        Structured data at a glance
                      </div>
                    </div>
                  )}
                  <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-300">
                    {project.number} / Featured
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">{project.type}</p>
                      <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{project.title}</h3>
                    </div>
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${project.accent} text-slate-950`}>
                      <project.icon size={21} />
                    </span>
                  </div>

                  <p className="mb-6 leading-relaxed text-slate-400">{project.description}</p>
                  <div className="mb-7">
                    <h4 className="mb-3 text-sm font-semibold text-slate-200">Project highlights</h4>
                    <ul className="space-y-2.5 text-sm text-slate-400">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {"href" in project && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300 transition-colors hover:text-white"
                      >
                        Visit project <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 py-24 md:py-28">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-12 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Have something in mind?</p>
              <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">Let&apos;s connect<span className="text-cyan-300">.</span></h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-slate-400 md:text-lg">
              I’m happy to discuss projects, internships, or collaboration opportunities.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <a href="mailto:divyanshjmi@gmail.com" className="group flex items-start gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-7 transition hover:border-white/20 hover:bg-white/[0.07]">
                <Mail className="mt-1 h-6 w-6 text-cyan-300" />
                <div>
                  <h3 className="mb-1 font-semibold text-white">Email</h3>
                  <p className="text-sm text-slate-400 transition group-hover:text-slate-200">divyanshjmi@gmail.com</p>
                </div>
            </a>
            <a href="tel:+917876732847" className="group flex items-start gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-7 transition hover:border-white/20 hover:bg-white/[0.07]">
                <Phone className="mt-1 h-6 w-6 text-cyan-300" />
                <div>
                  <h3 className="mb-1 font-semibold text-white">Phone</h3>
                  <p className="text-sm text-slate-400 transition group-hover:text-slate-200">+91-7876732847</p>
                </div>
            </a>
            <a
              href="https://github.com/divyansh3214"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-7 transition hover:border-white/20 hover:bg-white/[0.07]"
            >
              <GitBranch className="h-6 w-6 text-cyan-300" />
              <span className="font-semibold text-white">GitHub <span className="font-normal text-slate-400 transition group-hover:text-slate-200">· github.com/divyansh3214</span></span>
              <ArrowUpRight className="ml-auto h-4 w-4 text-slate-500 transition group-hover:text-cyan-300" />
            </a>
            <a
              href="https://leetcode.com/u/yanshuuuuu/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-7 transition hover:border-white/20 hover:bg-white/[0.07]"
            >
              <Star className="h-6 w-6 text-cyan-300" />
              <span className="font-semibold text-white">LeetCode <span className="font-normal text-slate-400 transition group-hover:text-slate-200">· @yanshuuuuu</span></span>
              <ArrowUpRight className="ml-auto h-4 w-4 text-slate-500 transition group-hover:text-cyan-300" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950 py-8 text-white">
        <div className="container mx-auto flex max-w-6xl flex-col gap-2 px-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-slate-400">© 2026 Divyansh Sharma</p>
          <p className="text-slate-500">Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
