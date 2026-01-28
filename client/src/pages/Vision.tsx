import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import Sidebar from "@/components/layout/Sidebar";
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

export default function Vision() {
  const { scrollYProgress } = useScroll();
  const bgColor = useTransform(scrollYProgress, [0, 0.2], ["#0d0d0d", "#ffffff"]);
  const textColor = useTransform(scrollYProgress, [0, 0.2], ["#ffffff", "#0d0d0d"]);

  return (
    <motion.div style={{ backgroundColor: bgColor, color: textColor }} className="min-h-screen transition-colors duration-1000">
      <Sidebar />
      <main className="pt-32 px-6 md:px-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-24">
              Beyond the <span className="text-primary italic">Horizon.</span>
            </h1>
            
            <div className="grid md:grid-cols-2 gap-24">
              <div className="space-y-12">
                <p className="text-2xl font-light leading-relaxed opacity-70">
                  DelightAI was founded on the principle that technology should be invisible.
                </p>
                <div className="h-px w-full bg-current/10" />
                <p className="text-lg font-light leading-relaxed opacity-60">
                  Our vision for 2026 involves the seamless integration of generative intelligence with physical and digital interfaces.
                </p>
                <button className="text-[9px] uppercase tracking-[0.5em] font-bold border border-current px-10 py-4 hover:bg-current hover:text-background transition-all">Download Thesis</button>
              </div>
              
              <div className="relative border-l border-current/10 pl-12 space-y-16">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Integrity</h4>
                    <p className="text-sm opacity-50 font-light">Ethical AI is not a feature, it's our foundation.</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Precision</h4>
                    <p className="text-sm opacity-50 font-light">Every process automated serves a purpose. No excess.</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Elegance</h4>
                    <p className="text-sm opacity-50 font-light">Complex business flows delivered with simplicity.</p>
                  </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <SlideImage 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
          alt="Futuristic Vision" 
          className="mt-48 w-full h-[70vh]"
        />
        
        <section className="py-48 grid md:grid-cols-3 gap-16">
           <div className="space-y-6">
              <h5 className="text-4xl font-light">2026</h5>
              <p className="text-xs uppercase tracking-widest opacity-40">Global Deployment</p>
           </div>
           <div className="space-y-6">
              <h5 className="text-4xl font-light">140k+</h5>
              <p className="text-xs uppercase tracking-widest opacity-40">Agent Iterations</p>
           </div>
           <div className="space-y-6">
              <h5 className="text-4xl font-light">Zero</h5>
              <p className="text-xs uppercase tracking-widest opacity-40">Operational Friction</p>
           </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}
