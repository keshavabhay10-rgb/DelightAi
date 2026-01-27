import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-32 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-black z-0" />
      
      <div className="container relative z-10 mx-auto px-4 md:pl-32 pr-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-4"
          >
            Start Your <span className="text-primary">Journey</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Ready to build something extraordinary? Let's talk.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-3xl border border-white/5">
              <h3 className="text-2xl font-bold mb-2">Get in touch</h3>
              <p className="text-muted-foreground mb-6">Fill out the form and we'll get back to you within 24 hours.</p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors">
                  <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">@</span>
                  hello@delightai.com
                </div>
                <div className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors">
                  <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">#</span>
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors">
                  <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">📍</span>
                  San Francisco, CA
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">First Name</label>
                <Input className="bg-white/5 border-white/10 focus:border-primary/50 text-white h-12" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Last Name</label>
                <Input className="bg-white/5 border-white/10 focus:border-primary/50 text-white h-12" placeholder="Doe" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Email</label>
              <Input className="bg-white/5 border-white/10 focus:border-primary/50 text-white h-12" placeholder="john@example.com" type="email" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Message</label>
              <Textarea className="bg-white/5 border-white/10 focus:border-primary/50 text-white min-h-[150px]" placeholder="Tell us about your project..." />
            </div>

            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-lg font-medium rounded-xl">
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
