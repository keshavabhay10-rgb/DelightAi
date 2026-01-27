import Sidebar from "@/components/layout/Sidebar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Vision from "@/components/sections/Vision";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-black">
      <Sidebar />
      <main className="md:pl-20">
        <Hero />
        <Services />
        <Vision />
        <Contact />
        
        <footer className="py-8 text-center text-muted-foreground text-sm border-t border-white/5 bg-black/40">
          <p>© 2026 DelightAI Inc. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
