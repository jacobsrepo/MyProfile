"use client";

import { motion } from "framer-motion";
import { rolesData } from "@/data/roles";
import { Briefcase, CheckCircle2 } from "lucide-react";

export default function RoleFit() {
  return (
    <section id="role-fit" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Target Roles</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My skill set is tailored for positions that bridge data engineering, business intelligence, and AI automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rolesData.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:shadow-primary/10 transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground leading-tight">{role.title}</h3>
              </div>
              
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-1">
                    <CheckCircle2 size={16} className="text-primary" />
                    Focus
                  </h4>
                  <p className="text-muted-foreground">{role.focus}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-1">
                    <CheckCircle2 size={16} className="text-primary" />
                    Relevant Skills
                  </h4>
                  <p className="text-muted-foreground">{role.skills}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-1">
                    <CheckCircle2 size={16} className="text-primary" />
                    Relevant Experience
                  </h4>
                  <p className="text-muted-foreground">{role.experience}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
