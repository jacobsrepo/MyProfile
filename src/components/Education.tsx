"use client";

import { motion } from "framer-motion";
import { educationData, certificationsData } from "@/data/education";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <GraduationCap size={28} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Education</h2>
            </div>
            
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div key={index} className="glass-card p-6 rounded-2xl relative overflow-hidden group">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/50 group-hover:bg-primary transition-colors"></div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h3>
                  <p className="text-lg text-muted-foreground mb-1 font-medium">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground/80">{edu.period}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500">
                <Award size={28} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Certifications</h2>
            </div>
            
            <div className="glass-card p-8 rounded-2xl">
              <ul className="space-y-4">
                {certificationsData.map((cert, index) => (
                  <li key={index} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 group-hover:text-emerald-500 transition-colors border border-border">
                      <Award size={14} className="text-muted-foreground group-hover:text-emerald-500" />
                    </div>
                    <span className="text-foreground font-medium">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
