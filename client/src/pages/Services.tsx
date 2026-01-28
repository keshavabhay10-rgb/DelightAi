import { motion } from "framer-motion";
import Sidebar from "@/components/layout/Sidebar";
import { useState, useEffect } from "react";

const services = [
  {
    id: "01",
    title: "Operations Audit",
    description: "Deep diagnostic analysis of your current business flows. We find the silence where efficiency should be.",
    image: "/client/src/assets/minimal_office_1.jpg"
  },
  {
    id: "02",
    title: "Neural Automation",
    description: "Implementing self-learning agents that handle logic-heavy tasks with zero biological error.",
    image: "/client/src/assets/minimal_office_2.jpg"
  },
  {
    id: "03",
    title: "Systemic Integration",
    description: "We don't just add tools; we weave a digital fabric that connects every department seamlessly.",
    image: "/client/src/assets/minimal_office_3.jpg"
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-white">
      <Sidebar />
      <main className="pt-32">
        <header className="px-6 md:px-24 mb-32">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-9xl font-light tracking-tighter leading-none"
          >
            SOLUTIONS<br /><span className="text-primary italic">ENGINEERED.</span>
          </motion.h1>
        </header>

        {services.map((service, index) => (
          <section key={service.id} className="min-h-screen py-24 px-6 md:px-24 border-t border-white/5 flex flex-col justify-center">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                 <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-50 mb-8">{service.id} — {service.title}</h2>
                 <p className="text-3xl md:text-5xl font-light tracking-tight leading-tight mb-12">
                   {service.description}
                 </p>
                 <button className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-primary pb-2">Explore Flow</button>
              </div>

              <motion.div 
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                viewport={{ once: true }}
                className={`aspect-square overflow-hidden ${index % 2 !== 0 ? "lg:order-1" : ""}`}
              >
                <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
              </motion.div>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
