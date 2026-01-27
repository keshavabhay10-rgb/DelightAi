import { motion } from "framer-motion";
import Sidebar from "@/components/layout/Sidebar";

export default function Vision() {
  return (
    <div className="bg-white min-h-screen">
      <Sidebar />
      <main className="pt-32 px-6 md:px-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-12">
              Beyond the <span className="text-primary">Horizon.</span>
            </h1>
            
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <p className="text-xl font-light leading-relaxed text-muted-foreground">
                  DelightAI was founded on the principle that technology should be invisible. Not a tool we fight with, but an extension of our own capability.
                </p>
                <div className="h-px w-full bg-black/5" />
                <p className="text-base font-light leading-relaxed text-muted-foreground">
                  Our vision for 2026 and beyond involves the seamless integration of generative intelligence with physical and digital interfaces. We are moving away from screens and towards environments.
                </p>
              </div>
              
              <div className="relative">
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: "100%" }}
                  transition={{ duration: 1.5, ease: "circOut" }}
                  className="absolute left-0 top-0 w-[1px] bg-secondary" 
                />
                <div className="pl-8 py-4 space-y-12">
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-foreground mb-4">Integrity</h4>
                    <p className="text-sm text-muted-foreground font-light">Ethical AI is not a feature, it's our foundation.</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-foreground mb-4">Precision</h4>
                    <p className="text-sm text-muted-foreground font-light">Every pixel serves a purpose. No excess.</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-foreground mb-4">Elegance</h4>
                    <p className="text-sm text-muted-foreground font-light">Complex systems delivered simply.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 w-full h-[60vh] bg-[#2b1718]/5 flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000"
        >
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
            alt="Futuristic Vision" 
            className="w-full h-full object-cover opacity-50"
          />
        </motion.div>
      </main>
    </div>
  );
}
