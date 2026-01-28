import { motion, useScroll, useTransform } from "framer-motion";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Contact() {
  const { scrollYProgress } = useScroll();
  const bgColor = useTransform(scrollYProgress, [0, 0.2], ["#0d0d0d", "#f8f6f3"]);
  const textColor = useTransform(scrollYProgress, [0, 0.2], ["#ffffff", "#2e2a25"]);

  return (
    <motion.div style={{ backgroundColor: bgColor, color: textColor }} className="min-h-screen">
      <Sidebar />
      <main className="pt-32 px-6 md:px-24 flex flex-col items-center">
        <div className="max-w-2xl w-full text-center pb-32">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-medium tracking-tight mb-12"
            style={{ letterSpacing: "0.5px" }}
          >
            Initiate <span className="italic opacity-70">Contact.</span>
          </motion.h1>
          <p className="text-xl opacity-50 font-normal tracking-wide mb-24 max-w-lg mx-auto">
            We are currently accepting select partnerships for the Q3 2026 automation cycle.
          </p>

          <form className="space-y-16 text-left" onSubmit={e => e.preventDefault()}>
            <div className="space-y-8">
              <label className="text-[10px] uppercase tracking-[0.5em] font-medium opacity-30">The Inquiry</label>
              <div className="grid grid-cols-1 gap-12">
                <Input className="rounded-none border-b border-current/20 px-0 h-16 text-2xl font-normal focus:border-primary transition-all bg-transparent" placeholder="Full Name" />
                <Input className="rounded-none border-b border-current/20 px-0 h-16 text-2xl font-normal focus:border-primary transition-all bg-transparent" placeholder="Organization" />
                <Input className="rounded-none border-b border-current/20 px-0 h-16 text-2xl font-normal focus:border-primary transition-all bg-transparent" placeholder="Project Scale" />
                <Input className="rounded-none border-b border-current/20 px-0 h-16 text-2xl font-normal focus:border-primary transition-all bg-transparent" placeholder="Message" />
              </div>
            </div>

            <Button className="w-full rounded-none h-20 bg-primary text-primary-foreground hover:bg-white hover:text-[#0d0d0d] uppercase tracking-[0.5em] text-[10px] transition-all">
              Send Transmission
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
}
