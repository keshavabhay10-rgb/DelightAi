import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Layers, Eye, Mail, Menu, X } from "lucide-react";
import { Link } from "wouter";

const menuItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: Layers, label: "Services", href: "#services" },
  { icon: Eye, label: "Vision", href: "#vision" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarVariants = {
    closed: { width: "80px" },
    open: { width: "240px" },
  };

  return (
    <>
      {/* Mobile Toggle */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-card/80 backdrop-blur-md border border-white/10 rounded-full text-foreground shadow-lg"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop/Tablet Sidebar */}
      <motion.nav
        variants={sidebarVariants}
        animate={isOpen ? "open" : "closed"}
        initial="closed"
        onHoverStart={() => setIsOpen(true)}
        onHoverEnd={() => setIsOpen(false)}
        className="fixed left-0 top-0 h-screen bg-card/40 backdrop-blur-xl border-r border-white/5 z-40 hidden md:flex flex-col items-center py-10 transition-colors duration-300"
      >
        <div className="mb-12">
          <img 
            src="/src/assets/logo.png" 
            alt="DelightAI" 
            className="w-10 h-10 rounded-lg object-cover" 
          />
        </div>

        <div className="flex flex-col gap-8 w-full px-4">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all cursor-pointer relative overflow-hidden"
            >
              <item.icon className="min-w-[24px] text-secondary group-hover:text-primary transition-colors" />
              <AnimatePresence>
                {isOpen && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="font-medium whitespace-nowrap text-foreground/80 group-hover:text-foreground"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
              
              {/* Active/Hover Glow */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
            </a>
          ))}
        </div>

        <div className="mt-auto mb-8 w-full px-4">
          {isOpen && (
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="text-xs text-center text-muted-foreground"
             >
               © 2026 DelightAI
             </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed inset-0 bg-background/95 z-40 md:hidden flex flex-col justify-center items-center gap-8"
          >
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-display font-bold flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <item.icon /> {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
