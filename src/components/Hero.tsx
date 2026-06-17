"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { Download, ExternalLink, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 inset-x-0 h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
              {profileData.hero.name}
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-gradient mb-6">
              {profileData.hero.role}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 font-medium">
              {profileData.hero.subtitle}
            </p>
            <p className="text-base md:text-lg text-muted-foreground/80 mb-10 leading-relaxed max-w-3xl mx-auto">
              {profileData.hero.intro}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Link
              href="#cv"
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25"
            >
              <Download className="mr-2" size={20} />
              Download CV
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center px-6 py-3 rounded-full bg-card border border-border text-foreground font-semibold hover:bg-muted transition-all shadow-sm"
            >
              <ExternalLink className="mr-2" size={20} />
              View Projects
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-full bg-card border border-border text-foreground font-semibold hover:bg-muted transition-all shadow-sm"
            >
              <Mail className="mr-2" size={20} />
              Contact Me
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center gap-4 mb-12"
          >
             <a href={profileData.contact.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card border border-border hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
             </a>
             <a href={profileData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card border border-border hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
             </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {profileData.hero.badges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
