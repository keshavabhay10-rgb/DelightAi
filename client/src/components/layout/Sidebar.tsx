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
      <nav className="fixed top-0 left-0 right-0 h-16 glass-minimal z-50 flex items-center justify-between px-6 md:px-12">
        <Link href="/">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
          >
            <img src="/src/assets/logo.png" alt="DelightAI" className="h-6" />
          </motion.div>
        </Link>

        <div className="hidden md:flex gap-10">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <motion.a
                whileHover={{ y: -2 }}
                className={`text-sm font-medium tracking-widest uppercase cursor-pointer transition-colors ${
                  location === item.href ? "text-primary" : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {item.label}
              </motion.a>
            </Link>
          ))}
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a 
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-light tracking-[0.2em] uppercase"
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
