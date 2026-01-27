import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section id="vision" className="py-32 relative bg-card/30 backdrop-blur-sm border-y border-white/5">
      <div className="container mx-auto px-4 md:pl-32 pr-4 flex flex-col md:flex-row items-center gap-16">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-2xl opacity-20" />
            <img 
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop" 
              alt="Visionary Art" 
              className="relative rounded-2xl shadow-2xl border border-white/10 w-full object-cover aspect-[4/3] grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            We See A World <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Without Limits
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            At DelightAI, our vision is simple yet profound: technology should disappear. 
            It should be so seamless, so intuitive, and so beautiful that users forget 
            they are interacting with a machine. 
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            We are building the interface of tomorrow—where AI anticipates needs, 
            design evokes emotion, and software feels like magic.
          </p>
          
          <div className="flex gap-8">
            <div>
              <h4 className="text-3xl font-bold text-white mb-1">100+</h4>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Projects</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-white mb-1">50+</h4>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Partners</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-white mb-1">∞</h4>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Possibilities</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
