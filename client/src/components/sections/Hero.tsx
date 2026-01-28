import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Wheel animations: Breathing, Rotating, and Moving
  const wheelRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const wheelX = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "30%", "-20%"]);
  const wheelY = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "10%", "5%"]);
  const wheelScale = useTransform(scrollYProgress, [0, 1], [1, 1.8]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[250vh] w-full flex flex-col items-center">
      {/* Sticky Hero Content */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-6 overflow-hidden">
        <motion.div
          style={{ opacity: contentOpacity }}
          className="text-center z-10 mb-12"
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "1em" }}
            animate={{ opacity: 0.5, letterSpacing: "0.6em" }}
            className="text-[10px] uppercase font-bold mb-8 block"
          >
            Engineered for Delight
          </motion.span>
          <h1 className="text-6xl md:text-9xl font-light tracking-tighter leading-none mb-12">
            DELIGHT<br /><span className="italic">AI</span>
          </h1>
          <Button variant="outline" className="rounded-none border-white/20 px-12 h-16 uppercase tracking-[0.4em] text-[10px] hover:bg-white hover:text-black transition-all">
            Inquire Flow
          </Button>
        </motion.div>

        {/* The Automation Core (The Wheel) - The central "Living" entity */}
        <motion.div
          style={{ 
            rotate: wheelRotate, 
            x: wheelX, 
            y: wheelY,
            scale: wheelScale,
          }}
          className="relative w-[130vh] h-[130vh] mt-[-10vh] pointer-events-none"
        >
          <motion.div 
            className="animate-breathe w-full h-full flex items-center justify-center"
            style={{ filter: "drop-shadow(0 0 40px rgba(163, 5, 2, 0.1))" }}
          >
            <img 
              src="/src/assets/automation-core.png" 
              alt="Automation Core" 
              className="w-full h-full object-contain opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>
          
          {/* Subtle architectural markers around the core */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div className="w-[1px] h-48 bg-primary" />
            <div className="h-[1px] w-48 bg-primary" />
            <div className="absolute w-[80%] h-[80%] border border-primary/10 rounded-full" />
          </div>
        </motion.div>

        {/* Status markers like the reference */}
        <div className="absolute right-12 bottom-12 hidden lg:flex flex-col gap-4 text-[9px] uppercase tracking-widest font-bold opacity-40">
          <div className="flex items-center gap-4"><div className="w-1 h-1 bg-primary rounded-full" /> System Active</div>
          <div className="flex items-center gap-4"><div className="w-1 h-1 bg-white rounded-full" /> 0.4ms Latency</div>
        </div>
      </div>
    </section>
  );
}
