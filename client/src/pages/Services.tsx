import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Sidebar from "@/components/layout/Sidebar";

const services = [
  {
    title: "AI Solutions",
    description: "Neural networks architected for human-centric problems. We build agents that think like you do.",
    accent: "bg-[#a30502]",
    text: "text-primary"
  },
  {
    title: "Web Development",
    description: "High-performance interfaces that bridge the gap between imagination and reality.",
    accent: "bg-[#f78b04]",
    text: "text-secondary"
  },
  {
    title: "UI/UX Design",
    description: "Visual systems that breathe. We prioritize whitespace, typography, and emotion.",
    accent: "bg-[#153a42]",
    text: "text-[#153a42]"
  },
  {
    title: "Future Systems",
    description: "Web3, IoT, and beyond. Preparing your infrastructure for the 2030 digital landscape.",
    accent: "bg-[#027f93]",
    text: "text-[#027f93]"
  }
];

function ServiceSection({ service, index }: { service: typeof services[0], index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const x = useTransform(scrollYProgress, [0, 0.3], [index % 2 === 0 ? -50 : 50, 0]);

  return (
    <motion.section 
      ref={ref}
      style={{ opacity, scale, x }}
      className="min-h-screen flex flex-col items-center justify-center p-6 md:p-24 overflow-hidden"
    >
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className={index % 2 !== 0 ? "md:order-2" : ""}>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className={`w-20 h-1 mb-8 ${service.accent}`} 
          />
          <h2 className="text-4xl md:text-6xl font-light mb-8 tracking-tighter">
            {service.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-md">
            {service.description}
          </p>
          <motion.button 
            whileHover={{ x: 10 }}
            className={`mt-12 text-xs uppercase tracking-[0.3em] font-medium ${service.text} border-b border-current pb-2`}
          >
            Inquire Details
          </motion.button>
        </div>
        
        <div className={`relative aspect-square glass-minimal border border-black/5 flex items-center justify-center p-12 ${index % 2 !== 0 ? "md:order-1" : ""}`}>
           <div className={`absolute inset-0 opacity-5 ${service.accent}`} />
           <motion.div 
             animate={{ rotate: index % 2 === 0 ? 45 : -45 }}
             className="text-8xl font-display font-thin text-black/5"
           >
             {String(index + 1).padStart(2, '0')}
           </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <Sidebar />
      <main className="pt-16">
        <header className="h-[60vh] flex flex-col items-center justify-center text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, letterSpacing: "1em" }}
            animate={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ duration: 1.5 }}
            className="text-xs uppercase font-medium text-muted-foreground mb-6"
          >
            Service Suite
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-light tracking-tight"
          >
            The <span className="italic">Standard</span> of Excellence.
          </motion.h2>
        </header>
        
        {services.map((service, index) => (
          <ServiceSection key={index} service={service} index={index} />
        ))}

        <section className="h-screen flex flex-col items-center justify-center text-center px-6">
          <h3 className="text-2xl font-light mb-8">Ready to elevate?</h3>
          <button className="px-12 py-4 border border-foreground uppercase tracking-[0.2em] text-xs hover:bg-foreground hover:text-white transition-all">
            Get in Touch
          </button>
        </section>
      </main>
    </div>
  );
}
