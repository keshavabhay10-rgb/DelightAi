import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section id="vision" className="py-32 relative bg-section-neutral border-y border-border/40">
      <div className="container mx-auto px-4 md:pl-32 pr-4 flex flex-col md:flex-row items-center gap-16">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <img
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"
            alt="Visionary Art"
            className="rounded-lg shadow-lg border border-border/40 w-full object-cover aspect-[4/3]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2"
        >
          <h2 className="text-4xl font-medium mb-6 text-foreground" style={{ letterSpacing: "0.5px" }}>
            We See A World <br />
            <span className="text-primary">Without Limits</span>
          </h2>
          <p className="text-[17px] text-muted-foreground mb-6 leading-[1.7]">
            At DelightAI, our vision is simple yet profound: technology should disappear.
            It should be so seamless, so intuitive, and so beautiful that users forget
            they are interacting with a machine.
          </p>
          <p className="text-[17px] text-muted-foreground mb-8 leading-[1.7]">
            We are building the interface of tomorrow—where AI anticipates needs,
            design evokes emotion, and software feels like magic.
          </p>

          <div className="flex gap-8">
            <div>
              <h4 className="text-3xl font-medium text-foreground mb-1">100+</h4>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Projects</p>
            </div>
            <div>
              <h4 className="text-3xl font-medium text-foreground mb-1">50+</h4>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Partners</p>
            </div>
            <div>
              <h4 className="text-3xl font-medium text-foreground mb-1">&infin;</h4>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Possibilities</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
