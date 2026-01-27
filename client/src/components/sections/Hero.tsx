import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-white px-6">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="text-center"
        >
          <motion.h1 
            whileHover={{ scale: 1.01 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-foreground mb-8 tracking-tight"
          >
            Delivering <span className="italic font-normal">Intelligence</span><br /> 
            through <span className="text-primary underline decoration-1 underline-offset-8">Delightful</span> Design.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-base md:text-lg text-muted-foreground font-light max-w-xl mx-auto mb-12 tracking-wide leading-relaxed"
          >
            We curate high-end digital solutions for the next era of commerce and connection. Minimal. Functional. Ethereal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center gap-6"
          >
            <Button variant="outline" className="rounded-none border-foreground px-10 h-12 uppercase tracking-[0.2em] text-xs hover:bg-foreground hover:text-white transition-all">
              The Collection
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Subtle geometric element */}
      <motion.div 
        animate={{ 
          rotate: [0, 90, 180, 270, 360],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vh] h-[80vh] border border-primary/5 rounded-full pointer-events-none -z-10"
      />
    </section>
  );
}
