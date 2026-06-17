"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in discussing data solutions or AI automation? Let's connect.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/3 space-y-6"
          >
            <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary mt-1">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Email</h3>
                <a href={`mailto:${profileData.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {profileData.contact.email}
                </a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary mt-1">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground">
                  {profileData.contact.location}
                </p>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-2xl bg-primary text-primary-foreground border-transparent">
              <h3 className="font-bold mb-3 text-xl">Let's build something</h3>
              <p className="text-primary-foreground/80 mb-6">
                From data pipelines to intelligent assistants.
              </p>
              <a href={`mailto:${profileData.contact.email}`} className="inline-flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-lg font-medium hover:bg-white/90 transition-colors w-full justify-center">
                <Send size={18} />
                Send a message
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-2/3"
          >
            <div className="glass-card p-8 rounded-2xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="your.email@example.com"
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="How can I help you?"
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-foreground text-background font-bold py-4 rounded-lg hover:bg-foreground/90 transition-all flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Inquiry
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
