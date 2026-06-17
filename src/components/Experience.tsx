"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/data/experience";
import { Calendar, Building } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Professional Experience</h2>
          <p className="text-lg text-muted-foreground">
            My journey in data engineering, analytics, and digitalization.
          </p>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-primary">
                <Building size={18} />
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl">
                <div className="flex flex-col mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-medium">
                    <span className="flex items-center gap-1">
                      <Building size={14} />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-sm leading-relaxed">
                      {bullet}
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
