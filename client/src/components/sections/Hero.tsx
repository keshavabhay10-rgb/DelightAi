import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const wheelRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const wheelScale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  return (
    <section
      ref={containerRef}
      className="relative h-[200vh] w-full bg-[#0d0d0d]"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Text Overlay */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="text-center z-10 mb-8"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.8em" }}
            animate={{ opacity: 4.0, letterSpacing: "0.4em" }}
            transition={{ duration: 1.2 }}
            className="text-[15px] uppercase font-medium mb-6 block text-white/60"
          >
            Engineered for Tomorrow
          </motion.span>

          <h1
            className="text-5xl md:text-6xl font-medium tracking-tight leading-tight mb-8 text-white"
            style={{ letterSpacing: "-0.01em" }}
          >
            DELIGHT<span className="italic text-white/60">AI</span>
          </h1>

          <Button
            variant="outline"
            className="rounded-sm border-white/20 text-white px-10 h-14 uppercase tracking-[0.35em] text-[10px] hover:bg-white hover:text-[#0d0d0d] transition-all bg-transparent"
          >
            Explore Systems
          </Button>
        </motion.div>

        {/* Gear Graphic */}
        <motion.div
          style={{
            rotate: wheelRotate,
            scale: wheelScale,
          }}
          className="absolute w-[100vh] h-[100vh] pointer-events-none opacity-60"
        >
          <img
            src="/src/assets/WheelwithNoBG.png"
            alt="Core"
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Status Indicators */}
        <div className="absolute right-12 bottom-12 hidden lg:flex flex-col gap-3 text-[9px] uppercase tracking-[0.35em] font-medium text-white/30">
          <div className="flex items-center gap-3">
            <div className="w-1 h-1 bg-primary rounded-full" />
            System Active
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1 h-1 bg-white/50 rounded-full" />
            0.4ms Latency
          </div>
        </div>
      </div>
    </section>
  );
}
