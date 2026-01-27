import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Vision", href: "/vision" },
  { label: "Contact", href: "/contact" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-24 glass-minimal z-50 flex items-center justify-between px-6 md:px-12 border-b border-black/5 bg-white/80 backdrop-blur-xl">
        <Link href="/">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer"
          >
            <img src="/src/assets/logo.png" alt="DelightAI" className="h-10" />
          </motion.div>
        </Link>

        <div className="hidden md:flex gap-12 items-center">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <motion.a
                whileHover={{ y: -2 }}
                className={`text-xs font-bold tracking-[0.3em] uppercase cursor-pointer transition-all ${
                  location === item.href ? "text-primary border-b border-primary/20 pb-1" : "text-foreground/40 hover:text-foreground"
                }`}
              >
                {item.label}
              </motion.a>
            </Link>
          ))}
          <Button variant="outline" className="rounded-none border-foreground text-[10px] tracking-widest px-6 h-10 hover:bg-foreground hover:text-white transition-all uppercase font-bold">
            Portal
          </Button>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-12 md:hidden"
          >
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a 
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-light tracking-[0.3em] uppercase hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { Button } from "@/components/ui/button";
