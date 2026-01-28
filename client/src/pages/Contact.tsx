import { motion, useScroll, useTransform } from "framer-motion";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Contact() {
  const { scrollYProgress } = useScroll();
  const bgColor = useTransform(scrollYProgress, [0, 0.2], ["#0d0d0d", "#ffffff"]);
  const textColor = useTransform(scrollYProgress, [0, 0.2], ["#ffffff", "#0d0d0d"]);

  return (
    <motion.div style={{ backgroundColor: bgColor, color: textColor }} className="min-h-screen transition-colors duration-1000">
      <Sidebar />
      <main className="pt-32 px-6 md:px-24 flex flex-col items-center">
        <div className="max-w-2xl w-full text-center pb-32">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-light tracking-tighter mb-12"
          >
            Initiate <span className="italic">Contact.</span>
          </motion.h1>
          <p className="text-xl opacity-50 font-light tracking-wide mb-24 max-w-lg mx-auto">
            We are currently accepting select partnerships for the Q3 2026 automation cycle.
          </p>
          
          <form className="space-y-16 text-left" onSubmit={e => e.preventDefault()}>
            <div className="space-y-8">
              <label className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-30">The Inquiry</label>
              <div className="grid grid-cols-1 gap-12">
                <Input variant="ghost" className="rounded-none border-b border-current/20 px-0 h-16 text-2xl font-light focus:border-primary transition-all" placeholder="Full Name" />
                <Input variant="ghost" className="rounded-none border-b border-current/20 px-0 h-16 text-2xl font-light focus:border-primary transition-all" placeholder="Organization" />
                <Input variant="ghost" className="rounded-none border-b border-current/20 px-0 h-16 text-2xl font-light focus:border-primary transition-all" placeholder="Project Scale" />
                <Input variant="ghost" className="rounded-none border-b border-current/20 px-0 h-16 text-2xl font-light focus:border-primary transition-all" placeholder="Message" />
              </div>
            </div>
            
            <Button className="w-full rounded-none h-20 bg-primary text-white hover:bg-black uppercase tracking-[0.5em] text-[10px] transition-all">
              Send Transmission
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
}
