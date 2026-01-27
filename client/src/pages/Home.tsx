import Sidebar from "@/components/layout/Sidebar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-foreground selection:bg-primary selection:text-white">
      <Sidebar />
      <main>
        <Hero />
        <section className="py-24 px-6 md:px-24">
          <div className="max-w-4xl">
            <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-muted-foreground mb-8">Selected Philosophy</h2>
            <p className="text-2xl md:text-4xl font-light leading-snug tracking-tight">
              We believe in the power of <span className="italic underline underline-offset-4 decoration-primary/30">omission</span>. 
              By removing the unnecessary, we reveal the essential intelligence of your brand.
            </p>
          </div>
        </section>
        
        <footer className="py-12 px-6 md:px-24 border-t border-black/5 flex justify-between items-center text-[10px] uppercase tracking-widest text-muted-foreground">
          <p>© 2026 DelightAI Inc.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Legal</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
