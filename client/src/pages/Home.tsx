import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/layout/Footer";

function SlideImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div 
      ref={ref}
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
      transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
      className={`overflow-hidden ${className}`}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover grayscale" />
    </motion.div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  
  // Faster transition: 0 to 0.3 instead of 0.45
  const bgColor = useTransform(scrollYProgress, [0, 0.3], ["#0d0d0d", "#ffffff"]);
  const textColor = useTransform(scrollYProgress, [0, 0.3], ["#ffffff", "#0d0d0d"]);

  return (
    <motion.div 
      style={{ backgroundColor: bgColor, color: textColor }}
      className="min-h-screen"
    >
      <Sidebar />
      <main>
        <Hero />
        
        {/* Process Automation Section */}
        <section className="py-64 px-6 md:px-24">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-32 items-center">
            <SlideImage 
              src="/client/src/assets/minimal_office_1.jpg" 
              alt="Automation" 
              className="relative aspect-[4/5]"
            />
            
            <div className="space-y-12">
              <h2 className="text-[10px] uppercase tracking-[0.6em] font-bold opacity-40">Section 01 — Autonomy</h2>
              <h3 className="text-5xl md:text-7xl font-light tracking-tighter leading-none">
                Replacing <span className="italic">friction</span> with flow.
              </h3>
              <p className="text-xl opacity-70 font-light leading-relaxed max-w-md">
                We engineer bespoke AI agents that handle the heavy lifting of business operations. From supply chain logic to customer experience, we automate the predictable.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-32 px-6 md:px-24 grid md:grid-cols-2 gap-16">
          <SlideImage src="/client/src/assets/minimal_office_2.jpg" alt="Detail 1" className="aspect-square" />
          <SlideImage src="/client/src/assets/minimal_office_3.jpg" alt="Detail 2" className="aspect-square md:mt-32" />
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
              "Every process refined is a <span className="italic">victory</span> for clarity."
            </p>
            <div className="flex justify-center gap-12 mt-24">
               <div>
                 <h5 className="text-3xl font-light">40%</h5>
                 <p className="text-[9px] uppercase tracking-widest opacity-40">Cost Reduction</p>
               </div>
               <div>
                 <h5 className="text-3xl font-light">12x</h5>
                 <p className="text-[9px] uppercase tracking-widest opacity-40">Throughput Velocity</p>
               </div>
            </div>
          </motion.div>
        </section>

        <section className="pb-64 px-6 md:px-24">
          <SlideImage src="/client/src/assets/minimal_office_4.jpg" alt="Final Insight" className="w-full h-[80vh]" />
        </section>

        <section className="py-32 px-6 md:px-24 grid md:grid-cols-3 gap-8">
           <SlideImage src="/client/src/assets/minimal_detail_1.jpg" alt="Arch 1" className="aspect-[3/4]" />
           <SlideImage src="/client/src/assets/minimal_detail_2.jpg" alt="Arch 2" className="aspect-[3/4] md:mt-16" />
           <SlideImage src="/client/src/assets/minimal_detail_3.jpg" alt="Arch 3" className="aspect-[3/4] md:mt-32" />
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}
