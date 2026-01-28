import { motion } from "framer-motion";
import { Code, Brain, Palette, Smartphone, Globe, Sparkles } from "lucide-react";

const services = [
  {
    id: "01",
    title: "AI Solutions",
    description: "Intelligent systems that learn, adapt, and evolve with your business needs.",
    icon: Brain,
  },
  {
    id: "02",
    title: "Web Development",
    description: "Blazing fast, SEO-optimized web applications built on the latest tech stack.",
    icon: Globe,
  },
  {
    id: "03",
    title: "UI/UX Design",
    description: "Intuitive interfaces designed with empathy and precision for maximum engagement.",
    icon: Palette,
  },
  {
    id: "04",
    title: "Mobile Apps",
    description: "Native and cross-platform mobile experiences that users love to touch.",
    icon: Smartphone,
  },
  {
    id: "05",
    title: "Future Tech",
    description: "AR/VR, Blockchain, and IoT integration for the brave new world.",
    icon: Sparkles,
  },
  {
    id: "06",
    title: "DevOps & Cloud",
    description: "Scalable infrastructure and automated pipelines for continuous delivery.",
    icon: Code,
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.19, 1, 0.22, 1]
    }
  })
};

export default function Services() {
  return (
    <section id="services" className="min-h-screen py-24 relative overflow-hidden bg-section-cool">
      <div className="container mx-auto px-4 md:pl-32 pr-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-medium mb-4 text-foreground" style={{ letterSpacing: "0.5px" }}>
            Our <span className="text-primary">Craft</span>
          </h2>
          <p className="text-muted-foreground text-[17px] leading-[1.7] max-w-2xl">
            We don't just write code; we architect solutions. Explore our suite of services designed to propel you forward.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -6 }}
              className="group relative h-[320px] p-8 rounded-lg overflow-hidden bg-background border border-border/60 cursor-pointer transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/15 transition-colors">
                    <service.icon size={28} />
                  </div>
                  <span className="text-4xl font-medium text-foreground/8 group-hover:text-foreground/15 transition-colors">
                    {service.id}
                  </span>
                </div>

                <div>
                  <h3 className="text-[22px] font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-[1.7] text-[15px]">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
