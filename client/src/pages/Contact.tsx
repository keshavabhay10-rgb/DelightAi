import { motion } from "framer-motion";
import Sidebar from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      <Sidebar />
      <main className="pt-32 px-6 md:px-24 flex flex-col items-center">
        <div className="max-w-2xl w-full text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-light tracking-tighter mb-8"
          >
            Initiate <span className="italic">Contact.</span>
          </motion.h1>
          <p className="text-muted-foreground font-light tracking-wide mb-16">
            We are currently accepting select partnerships for the Q3 2026 cycle.
          </p>
          
          <form className="space-y-12 text-left" onSubmit={e => e.preventDefault()}>
            <div className="space-y-6">
              <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground">The Inquiry</label>
              <div className="grid grid-cols-1 gap-8">
                <Input variant="ghost" className="rounded-none border-b border-black/10 px-0 h-12 text-lg font-light focus:border-primary" placeholder="Full Name" />
                <Input variant="ghost" className="rounded-none border-b border-black/10 px-0 h-12 text-lg font-light focus:border-primary" placeholder="Email Address" />
                <Input variant="ghost" className="rounded-none border-b border-black/10 px-0 h-12 text-lg font-light focus:border-primary" placeholder="Organization" />
                <Input variant="ghost" className="rounded-none border-b border-black/10 px-0 h-12 text-lg font-light focus:border-primary" placeholder="Project Brief" />
              </div>
            </div>
            
            <Button className="w-full rounded-none h-16 bg-[#2b1718] text-white hover:bg-black uppercase tracking-[0.4em] text-xs transition-all">
              Send Transmission
            </Button>
          </form>
          
          <div className="mt-24 grid grid-cols-3 gap-8 pb-12">
            <div>
              <h5 className="text-[10px] uppercase tracking-widest font-bold mb-2">Social</h5>
              <div className="flex flex-col gap-1 text-xs text-muted-foreground font-light">
                <a href="#">LinkedIn</a>
                <a href="#">X / Twitter</a>
              </div>
            </div>
            <div>
              <h5 className="text-[10px] uppercase tracking-widest font-bold mb-2">Locate</h5>
              <p className="text-xs text-muted-foreground font-light leading-relaxed">
                404 Void St.<br />San Francisco, CA
              </p>
            </div>
            <div>
              <h5 className="text-[10px] uppercase tracking-widest font-bold mb-2">Connect</h5>
              <p className="text-xs text-muted-foreground font-light">hello@delightai.com</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
