import Sidebar from "@/components/layout/Sidebar";
import Hero from "@/components/sections/Hero";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white">
      <Sidebar />
      <main>
        <Hero />
        
        {/* New Feature Section */}
        <section className="py-32 px-6 md:px-24 bg-muted/30">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] overflow-hidden scanline"
            >
              <img src="/client/src/assets/minimal_arch_1.jpg" alt="Architecture" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100" />
              <div className="absolute inset-0 border-[20px] border-background m-8 pointer-events-none" />
            </motion.div>
            
            <div className="space-y-12">
              <h2 className="text-xs uppercase tracking-[0.5em] font-bold text-primary">Manifesto</h2>
              <p className="text-4xl md:text-5xl font-light leading-tight tracking-tighter">
                We bridge the gap between <span className="italic">biological intuition</span> and <span className="text-secondary">digital precision</span>.
              </p>
              <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-md">
                In 2026, the interface is no longer a screen. It's a feeling. DelightAI architects environments where intelligence flows naturally.
              </p>
              <div className="flex gap-12 pt-8">
                <div>
                  <h4 className="text-2xl font-light">0.4ms</h4>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Response Latency</p>
                </div>
                <div>
                  <h4 className="text-2xl font-light">99.9%</h4>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Uptime Fidelity</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-48 px-6 md:px-24 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-muted-foreground mb-12">Selective Philosophy</h2>
            <p className="text-3xl md:text-5xl font-light leading-snug tracking-tight mb-16">
              "To create something <span className="italic underline underline-offset-8 decoration-primary/30">extraordinary</span>, one must first focus on the mundane with extraordinary care."
            </p>
            <div className="w-px h-24 bg-primary/20 mx-auto" />
          </motion.div>
        </section>

        {/* Secondary Image Grid */}
        <section className="pb-32 px-6 md:px-24 grid md:grid-cols-3 gap-8">
           {[2, 3, 1].map((i) => (
             <motion.div 
               key={i}
               whileHover={{ y: -10 }}
               className="aspect-square overflow-hidden relative group"
             >
               <img src={`/client/src/assets/minimal_arch_${i}.jpg`} alt="Detail" className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" />
               <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-all" />
             </motion.div>
           ))}
        </section>
        
        <footer className="py-12 px-6 md:px-24 border-t border-black/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-muted-foreground gap-8 bg-white">
          <p>© 2026 DelightAI Inc. — San Francisco</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">X.com</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
