import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  const { scrollYProgress } = useScroll();
  
  // Transition from dark to white
  const bgColor = useTransform(scrollYProgress, [0, 0.45], ["#0d0d0d", "#ffffff"]);
  const textColor = useTransform(scrollYProgress, [0, 0.45], ["#ffffff", "#0d0d0d"]);

  return (
    <motion.div 
      style={{ backgroundColor: bgColor, color: textColor }}
      className="min-h-screen transition-colors duration-1000"
    >
      <Sidebar />
      <main>
        <Hero />
        
        {/* Process Automation Section */}
        <section className="py-64 px-6 md:px-24">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-32 items-center">
            <motion.div 
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <img src="/client/src/assets/minimal_office_1.jpg" alt="Automation" className="w-full h-full object-cover grayscale" />
            </motion.div>
            
            <div className="space-y-12">
              <h2 className="text-[10px] uppercase tracking-[0.6em] font-bold opacity-40">Section 01 — Autonomy</h2>
              <h3 className="text-5xl md:text-7xl font-light tracking-tighter leading-none">
                Replacing <span className="italic">friction</span> with flow.
              </h3>
              <p className="text-xl opacity-70 font-light leading-relaxed max-w-md">
                We engineer bespoke AI agents that handle the heavy lifting of business operations. From supply chain logic to customer experience, we automate the predictable so you can focus on the exceptional.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section with Slide-in Animations */}
        <section className="py-32 px-6 md:px-24 grid md:grid-cols-2 gap-16">
          <motion.div 
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            viewport={{ once: true }}
            className="aspect-square overflow-hidden"
          >
            <img src="/client/src/assets/minimal_office_2.jpg" alt="Detail 1" className="w-full h-full object-cover grayscale" />
          </motion.div>
          <motion.div 
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
            viewport={{ once: true }}
            className="aspect-square overflow-hidden md:mt-32"
          >
            <img src="/client/src/assets/minimal_office_3.jpg" alt="Detail 2" className="w-full h-full object-cover grayscale" />
          </motion.div>
        </section>

        <section className="py-64 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h4 className="text-[10px] uppercase tracking-[0.6em] font-bold opacity-40 mb-16">Section 02 — Intelligence</h4>
            <p className="text-4xl md:text-6xl font-light tracking-tight leading-snug">
              "The ultimate sophistication is <span className="italic">simplicity</span>. We find it through automation."
            </p>
          </motion.div>
        </section>

        <section className="pb-64 px-6 md:px-24">
          <motion.div 
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1.8, ease: [0.19, 1, 0.22, 1] }}
            className="w-full h-[80vh] overflow-hidden"
          >
            <img src="/client/src/assets/minimal_office_4.jpg" alt="Final Insight" className="w-full h-full object-cover grayscale" />
          </motion.div>
        </section>
      </main>
      
      <footer className="py-16 px-6 md:px-24 border-t border-current/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.5em] opacity-40 gap-8">
        <p>© 2026 DelightAI Global</p>
        <div className="flex gap-12">
          <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Contact</a>
        </div>
      </footer>
    </motion.div>
  );
}
