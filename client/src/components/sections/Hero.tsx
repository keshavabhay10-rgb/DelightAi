import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={ref} 
      id="home"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Parallax Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-background/30 z-10" /> {/* Overlay for text readability */}
        <img 
          src="/src/assets/hero-bg.png" 
          alt="Abstract Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20" />
      </motion.div>

      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 md:px-20 lg:px-32 flex flex-col items-start gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wide mb-6 backdrop-blur-sm">
            WELCOME TO 2026
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight text-white mb-6">
            Future Built <br />
            <span className="text-gradient">By Design.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
            DelightAI crafts digital experiences that feel alive. We blend cutting-edge intelligence with fluid aesthetics to build the impossible.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-14 px-8 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all hover:scale-105">
              Explore Our Work
            </Button>
            <Button variant="outline" size="lg" className="border-white/10 bg-white/5 hover:bg-white/10 text-white text-lg h-14 px-8 rounded-full backdrop-blur-md">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown />
        </motion.div>
      </motion.div>
    </section>
  );
}
