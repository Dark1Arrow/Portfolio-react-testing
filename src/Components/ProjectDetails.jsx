import React from 'react';
import { ArrowLeft, ExternalLink, Figma, Code, SunMoon } from 'lucide-react';

const ProjectDetails = () => {
  const project = {
    title: "Heritage Darshan",
    description: "A sophisticated platform for documenting and exploring architectural landmarks with real-time data integration.",
    bannerImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS", "Framer Motion"],
    liveLink: "#",
    figmaLink: "#",
    overview: "This project was developed to bridge the gap between historical documentation and modern digital accessibility. The goal was to create a highly visual, performant application that allows users to explore cultural heritage sites through a minimalist, intuitive interface.",
    features: [
      "Dynamic Geo-location tagging for heritage sites.",
      "High-performance image optimization for rapid loading.",
      "Integrated administrative dashboard for site management.",
      "Responsive glassmorphism UI/UX design."
    ]
  };

  return (
    <div className="min-h-screen bg-[#111111] text-zinc-400 font-sans selection:bg-[#4ADE80] selection:text-[#111111]">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-zinc-800/50 bg-[#111111]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button className="flex items-center gap-2 text-sm font-medium hover:text-[#4ADE80] transition-colors group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </button>
          <button className="p-2 rounded-full hover:bg-zinc-800/50 transition-colors">
            <SunMoon size={20} className="text-[#4ADE80]" />
          </button>
        </div>
      </nav>

      <main className="pt-20 pb-20">
        {/* Big Banner */}
        <div className="px-6 max-w-7xl mx-auto mt-8">
          <div className="relative h-[450px] w-full rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
            <img 
              src={project.bannerImage} 
              alt={project.title} 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10">
              <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-700 text-xs font-medium text-white backdrop-blur-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-[#4ADE80] text-sm uppercase tracking-[0.2em] font-bold mb-4">Overview</h2>
              <p className="text-xl leading-relaxed text-zinc-300">
                {project.overview}
              </p>
            </section>

            <section>
              <h2 className="text-[#4ADE80] text-sm uppercase tracking-[0.2em] font-bold mb-6">Key Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-[#166534] transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-[#166534]/20 flex items-center justify-center mb-4 group-hover:bg-[#4ADE80]/20 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-[#4ADE80]" />
                    </div>
                    <p className="text-zinc-300 text-sm leading-relaxed">{feature}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Sidebar - Links & Style Guide */}
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800 backdrop-blur-sm sticky top-28">
              <h3 className="text-white font-semibold mb-6">Project Assets</h3>
              <div className="space-y-3">
                <a href={project.liveLink} className="flex items-center justify-center gap-3 w-full py-4 bg-[#4ADE80] text-[#111111] font-bold rounded-xl hover:shadow-[0_0_20px_rgba(74,222,128,0.3)] transition-all">
                  <ExternalLink size={18} /> Live Demo
                </a>
                <a href={project.figmaLink} className="flex items-center justify-center gap-3 w-full py-4 bg-zinc-800 text-white font-bold rounded-xl hover:bg-zinc-700 transition-all border border-zinc-700">
                  <Figma size={18} /> Figma Design
                </a>
              </div>

              <hr className="my-8 border-zinc-800" />

              <h3 className="text-white font-semibold mb-6">Design Tokens</h3>
              <div className="space-y-4">
                <TokenRow label="Primary Base" value="#111111" tailwind="bg-zinc-950" color="#111111" />
                <TokenRow label="Accent" value="#4ADE80" tailwind="text-emerald-400" color="#4ADE80" />
                <TokenRow label="Secondary" value="zinc-400" tailwind="text-zinc-400" color="#a1a1aa" />
                <TokenRow label="Glows" value="#166534" tailwind="shadow-emerald-900" color="#166534" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const TokenRow = ({ label, value, tailwind, color }) => (
  <div className="flex items-center justify-between">
    <div>
      <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">{label}</p>
      <p className="text-xs text-zinc-300">{value} / {tailwind.replace('bg-', '').replace('text-', '')}</p>
    </div>
    <div 
      className="w-8 h-8 rounded-md border border-white/10" 
      style={{ backgroundColor: color }}
    />
  </div>
);

export default ProjectDetails;