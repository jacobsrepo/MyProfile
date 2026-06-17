"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export default function CVDownloads() {
  const cvOptions = [
    { name: "Data & AI Engineer CV", file: "/cv/Sam_Jacob_Lebenslauf_Data_AI_Engineer.pdf" },
    { name: "Machine Learning Engineer CV", file: "/cv/Sam_Jacob_Lebenslauf_Machine_Learning_Engineer.pdf" },
    { name: "Data Analyst / BI CV", file: "/cv/Sam_Jacob_Lebenslauf_DataAnalyst.pdf" }
  ];

  return (
    <section id="cv" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
            <FileText size={16} />
            Resume
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Download My CV</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the version that best matches your open role.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cvOptions.map((cv, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={cv.file}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card flex flex-col items-center justify-center p-6 rounded-2xl hover:bg-primary/5 hover:border-primary/30 transition-all group h-full text-center"
              >
                <div className="w-12 h-12 rounded-full bg-muted group-hover:bg-primary text-muted-foreground group-hover:text-primary-foreground flex items-center justify-center mb-4 transition-colors">
                  <Download size={24} />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{cv.name}</h3>
                <p className="text-xs text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to view/download
                </p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
