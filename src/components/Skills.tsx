"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";
import { Code2 } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Technical Arsenal</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tools, languages, and frameworks I use to build data pipelines and AI solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Code2 size={20} />
                </div>
                <h3 className="text-xl font-bold text-foreground">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground border border-border hover:border-primary/50 hover:text-foreground transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
