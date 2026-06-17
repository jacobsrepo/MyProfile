"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import { ArrowRight, Beaker, Database, Lightbulb, Activity, BarChart } from "lucide-react";

export default function Projects() {
  const getIconForType = (type: string) => {
    if (type.includes("Proof of Concept")) return <Beaker size={20} />;
    if (type.includes("Knowledge")) return <Lightbulb size={20} />;
    if (type.includes("ML")) return <Activity size={20} />;
    if (type.includes("Power Platform")) return <Database size={20} />;
    if (type.includes("Intelligence")) return <BarChart size={20} />;
    return <Beaker size={20} />;
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of internal tools, prototypes, and analytics dashboards demonstrating my technical capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card rounded-2xl p-8 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {getIconForType(project.type)}
              </div>
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium text-xs mb-4">
                {getIconForType(project.type)}
                {project.type}
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                {project.description}
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Key Highlights</h4>
                <ul className="space-y-2">
                  {project.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight size={14} className="mt-1 flex-shrink-0 text-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
