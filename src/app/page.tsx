"use client";

import { motion } from "framer-motion";
import {
  Code,
  Database,
  Cloud,
  GitBranch,
  Award,
  Mail,
  Phone,
  ExternalLink,
  ChevronDown,
  Star,
  Zap,
  Globe,
} from "lucide-react";

const skills = [
  {
    title: "Languages",
    icon: Code,
    details: ["C/C++", "JavaScript"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Web Development",
    icon: Globe,
    details: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "Tailwind CSS"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Full Stack / Frameworks",
    icon: Zap,
    details: ["MERN Stack", "MongoDB/SQL", "Express", "React", "Node", "Django"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    details: ["AWS (EC2, S3, IAM, VPC, Auto Scaling, Load Balancing, EBS/EFS)", "Docker", "GitHub Actions"],
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Databases",
    icon: Database,
    details: ["MongoDB", "MySQL"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Version Control",
    icon: GitBranch,
    details: ["Git", "GitHub", "GitLab", "Bitbucket"],
    color: "from-slate-500 to-gray-500",
  },
];

const projects = [
  {
    title: "Full-Stack E-Commerce Web App",
    period: "March 2026 – April 2026",
    description:
      "Built an end-to-end e-commerce platform with a responsive storefront, secure backend, and payment-ready checkout flow.",
    features: [
      "Product catalog, cart, checkout, and order management",
      "REST APIs for authentication and inventory control",
      "JWT-based authentication for users and admins",
    ],
    tags: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "AWS"],
  },
  {
    title: "Personal Portfolio Website",
    period: "April 2026",
    description:
      "Designed and developed this portfolio website to showcase my skills, projects, and contact information with modern UI and animation effects.",
    features: [
      "Responsive layout with animated hero and glassmorphism cards",
      "Smooth section scrolling and vibrant gradient styling",
      "Showcase of skills, certifications, and featured projects in a polished UI",
    ],
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "React", "Lucide Icons"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.35)_1px,transparent_0)] bg-[length:24px_24px]"></div>

        <motion.div
          className="container mx-auto px-6 text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <span className="text-4xl font-bold gradient-text">DS</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text tracking-tight">
            Divyansh Sharma
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 font-light max-w-3xl mx-auto leading-relaxed">
            B.Tech CSE student specializing in full-stack web development, cloud architecture, and modern UI experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://github.com"
              className="glass px-6 py-3 rounded-full hover-lift flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <GitBranch size={20} />
              GitHub
            </a>
            <a
              href="https://leetcode.com/u/yanshuuuuu/"
              className="glass px-6 py-3 rounded-full hover-lift flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              <Star size={20} />
              LeetCode
            </a>
            <a
              href="https://codechef.com"
              className="glass px-6 py-3 rounded-full hover-lift flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors"
            >
              <Award size={20} />
              CodeChef
            </a>
          </div>

          <ChevronDown
            size={36}
            className="mx-auto animate-bounce text-gray-400 cursor-pointer"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          />
        </motion.div>
      </section>

      <section id="about" className="py-20 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-6"></div>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
              I am a B.Tech CSE student at Jaypee Institute of Information Technology, Noida with a CGPA of 6.7.
              I enjoy building polished web applications, learning cloud services, and solving algorithmic problems.
            </p>
          </div>

          <div className="glass p-8 rounded-3xl hover-lift shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 text-center md:text-left">
                <h3 className="text-xl font-semibold text-gray-800">Education</h3>
                <p className="text-gray-600">CBSE Class XII: 91.2%</p>
                <p className="text-gray-600">CBSE Class X: 90.5%</p>
              </div>
              <div className="space-y-4 text-center md:text-left">
                <h3 className="text-xl font-semibold text-gray-800">Location</h3>
                <p className="text-gray-600">Noida, India</p>
                <p className="text-gray-600">Roll No: 9923103119</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-6"></div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="glass p-6 rounded-3xl hover-lift shadow-lg"
                >
                  <div className={`inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-r ${skill.color} text-white mb-5`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{skill.title}</h3>
                  <ul className="space-y-2 text-gray-600">
                    {skill.details.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 block mt-1"></span>
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

      <section id="projects" className="py-20 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-6"></div>
          </div>

          <div className="space-y-10">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass p-8 rounded-3xl hover-lift shadow-xl"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-blue-600 font-medium">{project.period}</p>
                  </div>
                  <ExternalLink size={24} className="text-gray-400 hover:text-blue-600 transition-colors" />
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key features</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Let's Connect</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-6"></div>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
              I’m always happy to discuss new projects, internships, or collaboration opportunities.
            </p>
          </div>

          <div className="glass p-10 rounded-3xl hover-lift shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-start gap-4">
                <Mail className="w-8 h-8 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">divyanshjmi@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-8 h-8 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+91-7876732847</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com"
                className="glass p-4 rounded-full hover-lift text-gray-700 hover:text-blue-600 transition-colors"
              >
                <GitBranch size={24} />
              </a>
              <a
                href="https://leetcode.com"
                className="glass p-4 rounded-full hover-lift text-gray-700 hover:text-orange-600 transition-colors"
              >
                <Star size={24} />
              </a>
              <a
                href="https://codechef.com"
                className="glass p-4 rounded-full hover-lift text-gray-700 hover:text-green-600 transition-colors"
              >
                <Award size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© 2026 Divyansh Sharma. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
