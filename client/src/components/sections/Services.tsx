import { motion } from "framer-motion";
import { Code, Brain, Palette, Smartphone, Globe, Sparkles } from "lucide-react";

const services = [
  {
    id: "01",
    title: "AI Solutions",
    description: "Intelligent systems that learn, adapt, and evolve with your business needs.",
    icon: Brain,
    color: "from-purple-500 to-indigo-500"
  },
  {
    id: "02",
    title: "Web Development",
    description: "Blazing fast, SEO-optimized web applications built on the latest tech stack.",
    icon: Globe,
    color: "from-cyan-500 to-blue-500"
  },
  {
    id: "03",
    title: "UI/UX Design",
    description: "Intuitive interfaces designed with empathy and precision for maximum engagement.",
    icon: Palette,
    color: "from-pink-500 to-rose-500"
  },
  {
    id: "04",
    title: "Mobile Apps",
    description: "Native and cross-platform mobile experiences that users love to touch.",
    icon: Smartphone,
    color: "from-amber-500 to-orange-500"
  },
  {
    id: "05",
    title: "Future Tech",
    description: "AR/VR, Blockchain, and IoT integration for the brave new world.",
    icon: Sparkles,
    color: "from-emerald-500 to-green-500"
  },
  {
    id: "06",
    title: "DevOps & Cloud",
    description: "Scalable infrastructure and automated pipelines for continuous delivery.",
    icon: Code,
    color: "from-slate-500 to-gray-500"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      type: "spring",
      bounce: 0.3
    }
  })
};

export default function Services() {
  return (
    <section id="services" className="min-h-screen py-24 relative overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 md:pl-32 pr-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Our <span className="text-secondary">Craft</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            We don't just write code; we architect solutions. Explore our suite of futuristic services designed to propel you forward.
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
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative h-[320px] p-8 rounded-3xl overflow-hidden glass-card cursor-pointer"
            >
              {/* Gradient Border Glow */}
              <div className="absolute inset-0 p-[1px] bg-gradient-to-br from-white/10 to-transparent rounded-3xl -z-10" />
              
              {/* Hover Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors text-white">
                    <service.icon size={32} />
                  </div>
                  <span className="text-4xl font-display font-bold text-white/10 group-hover:text-white/20 transition-colors">
                    {service.id}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-white/80 transition-colors leading-relaxed">
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
