import { Button } from "@/components/ui/button";

const Footer = () => (
  <footer className="bg-foreground text-background py-32 px-6 md:px-24 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px bg-background/10" />

    <div className="footer-logo absolute bottom-[-5%] left-1/2 -translate-x-1/2 pointer-events-none select-none text-background">
      DelightAI
    </div>

    <div className="relative z-10 grid grid-cols-2 md:grid-cols-6 gap-12 mb-32">
      <div className="col-span-2 md:col-span-1">
        <h5 className="text-[10px] uppercase tracking-[0.4em] font-medium mb-8">Solutions</h5>
        <div className="flex flex-col gap-4 text-xs text-background/50">
          <a href="#" className="hover:text-primary transition-colors">Core Audit</a>
          <a href="#" className="hover:text-primary transition-colors">Neural Flows</a>
          <a href="#" className="hover:text-primary transition-colors">Automation</a>
          <a href="#" className="hover:text-primary transition-colors">Integration</a>
        </div>
      </div>
      <div>
        <h5 className="text-[10px] uppercase tracking-[0.4em] font-medium mb-8">Methodology</h5>
        <div className="flex flex-col gap-4 text-xs text-background/50">
          <a href="#" className="hover:text-primary transition-colors">HPC Cockpit</a>
          <a href="#" className="hover:text-primary transition-colors">Performance</a>
        </div>
      </div>
      <div>
        <h5 className="text-[10px] uppercase tracking-[0.4em] font-medium mb-8">About Us</h5>
        <div className="flex flex-col gap-4 text-xs text-background/50">
          <a href="#" className="hover:text-primary transition-colors">Our Vision</a>
          <a href="#" className="hover:text-primary transition-colors">Technology</a>
          <a href="#" className="hover:text-primary transition-colors">Partners</a>
        </div>
      </div>
      <div>
        <h5 className="text-[10px] uppercase tracking-[0.4em] font-medium mb-8">Documents</h5>
        <div className="flex flex-col gap-4 text-xs text-background/50">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
          <a href="#" className="hover:text-primary transition-colors">Cookie Settings</a>
        </div>
      </div>
      <div className="col-span-2 flex flex-col items-end">
        <h5 className="text-[10px] uppercase tracking-[0.4em] font-medium mb-8">Contact</h5>
        <div className="flex flex-col gap-4 text-right mb-8">
          <p className="text-xs text-background/50">+1 (555) 000-0000</p>
          <p className="text-xs text-background/50">hello@delightai.com</p>
        </div>
        <Button variant="outline" className="rounded-full border-background/20 px-8 h-12 uppercase tracking-widest text-[9px] text-background hover:bg-background hover:text-foreground transition-all">
          Contact Us
        </Button>
      </div>
    </div>

    <div className="flex justify-between items-center text-[9px] uppercase tracking-widest text-background/20">
      <p>&copy; 2026 DelightAI Global</p>
      <div className="flex gap-4">
        <span>+</span>
        <span>+</span>
      </div>
    </div>
  </footer>
);

export default Footer;
