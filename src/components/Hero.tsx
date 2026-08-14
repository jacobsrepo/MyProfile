"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { Download, ExternalLink, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients & Animated Blobs */}
      <div className="absolute top-0 inset-x-0 h-full w-full bg-background -z-10 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-emerald-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl mx-auto">
              <Image 
                src="/myselfgood_.png" 
                alt={profileData.hero.name} 
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
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
            <a
              href="/Sam_Jacob_Lebenslauf_Data_AI_Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)] hover:shadow-[0_0_30px_rgba(8,145,178,0.6)]"
            >
              <Download className="mr-2" size={20} />
              Download CV
            </a>
            <Link
              href="#projects"
              className="inline-flex items-center px-8 py-3.5 rounded-full glass border border-border text-foreground font-semibold hover:bg-white/10 dark:hover:bg-white/5 transition-all"
            >
              <ExternalLink className="mr-2" size={20} />
              View Projects
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center px-8 py-3.5 rounded-full glass border border-border text-foreground font-semibold hover:bg-white/10 dark:hover:bg-white/5 transition-all"
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
            className="flex flex-wrap justify-center gap-3 mt-4"
          >
            {profileData.hero.badges.map((badge, i) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="px-4 py-1.5 text-sm font-semibold rounded-full glass text-foreground border border-primary/20 hover:border-primary/50 hover:text-primary transition-colors cursor-default"
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
