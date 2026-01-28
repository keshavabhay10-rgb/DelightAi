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
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </motion.div>
  );
}

const services = [
  {
    id: "01",
    title: "Operations Audit",
    description: "Deep diagnostic analysis of your current business flows. We find the silence where efficiency should be.",
    image: "/client/src/assets/minimal_office_1.jpg"
  },
  {
    id: "02",
    title: "Neural Automation",
    description: "Implementing self-learning agents that handle logic-heavy tasks with zero biological error.",
    image: "/client/src/assets/minimal_office_2.jpg"
  },
  {
    id: "03",
    title: "Systemic Integration",
    description: "We don't just add tools; we weave a digital fabric that connects every department seamlessly.",
    image: "/client/src/assets/minimal_office_3.jpg"
  },
  {
    id: "04",
    title: "Cognitive Supply",
    description: "Anticipatory logistics and inventory management powered by predictive neural networks.",
    image: "/client/src/assets/minimal_detail_1.jpg"
  }
];

export default function ServicesPage() {
  const { scrollYProgress } = useScroll();
  const bgColor = useTransform(scrollYProgress, [0, 0.2], ["#0d0d0d", "#f8f6f3"]);
  const textColor = useTransform(scrollYProgress, [0, 0.2], ["#ffffff", "#2e2a25"]);

  return (
    <motion.div style={{ backgroundColor: bgColor, color: textColor }} className="min-h-screen">
      <Sidebar />
      <main className="pt-32">
        {/* Dark hero header */}
        <header className="px-6 md:px-24 mb-32 h-[60vh] flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-8xl font-medium tracking-tight leading-none"
            style={{ letterSpacing: "0.5px" }}
          >
            SOLUTIONS<br /><span className="italic opacity-70">ENGINEERED.</span>
          </motion.h1>
        </header>

        {services.map((service, index) => (
          <section
            key={service.id}
            className={`min-h-screen py-24 px-6 md:px-24 border-t border-current/5 flex flex-col justify-center ${index % 2 === 0 ? "bg-section-cool" : "bg-section-warm"}`}
          >
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                 <h2 className="text-[10px] uppercase tracking-[0.5em] font-medium opacity-50 mb-8">{service.id} — {service.title}</h2>
                 <p className="text-3xl md:text-5xl font-medium tracking-tight leading-tight mb-12">
                   {service.description}
                 </p>
                 <button className="text-[10px] uppercase tracking-[0.3em] font-medium border-b border-primary pb-2 hover:opacity-50 transition-all">Explore Flow</button>
              </div>

              <SlideImage
                src={service.image}
                alt={service.title}
                className={`aspect-square ${index % 2 !== 0 ? "lg:order-1" : ""}`}
              />
            </div>
          </section>
        ))}

        <section className="py-64 px-6 md:px-24 bg-section-neutral flex flex-col items-center">
           <h3 className="text-xs uppercase tracking-[0.8em] mb-12 text-muted-foreground">Beyond Tools</h3>
           <div className="grid md:grid-cols-2 gap-24 max-w-4xl">
              <p className="text-xl font-normal leading-relaxed text-foreground">Automation is not about removal. It is about redistribution of human brilliance to where it matters most.</p>
              <p className="text-xl font-normal leading-relaxed text-foreground">Our systems operate with 0.04% error thresholds, outperforming standard manual entry by 1400% in speed.</p>
           </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}
