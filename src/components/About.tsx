"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { User, ChevronRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
              <User size={16} />
              About Me
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Bridging the gap between <span className="text-gradient">data</span> and <span className="text-gradient">business value</span>.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {profileData.about.text}
            </p>
            <ul className="space-y-4">
              {profileData.about.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ChevronRight className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
              
              <h3 className="text-2xl font-bold mb-6 text-foreground relative z-10">
                {profileData.recruiterSummary.title}
              </h3>
              <ul className="space-y-4 relative z-10">
                {profileData.recruiterSummary.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-medium text-foreground">{bullet}</span>
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
