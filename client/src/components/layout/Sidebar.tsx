import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import { Link } from "wouter";

const menuItems = [
  { label: "Solutions", href: "/services" },
  { label: "Methodology", href: "/vision" },
  { label: "Case Studies", href: "#" },
  { label: "Contact", href: "/contact" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  // Starts transparent on dark hero, transitions to warm white bg
  const navBg = useTransform(scrollY, [0, 400], ["rgba(0,0,0,0)", "rgba(248,246,243,0.9)"]);
  const navBorder = useTransform(scrollY, [0, 400], ["rgba(255,255,255,0)", "rgba(0,0,0,0.05)"]);
  const navColor = useTransform(scrollY, [0, 400], ["#ffffff", "#2e2a25"]);
  const logoInvert = useTransform(scrollY, [0, 400], ["invert(1)", "invert(0)"]);

  return (
    <>
      <motion.nav
        style={{ backgroundColor: navBg, borderColor: navBorder, color: navColor }}
        className="fixed top-0 left-0 right-0 h-20 z-50 flex items-center justify-between px-6 md:px-12 backdrop-blur-md transition-colors duration-500"
      >
        <div className="flex items-center gap-12">
          <Link href="/">
            <motion.div className="cursor-pointer" style={{ filter: logoInvert }}>
              <img src="/src/assets/logo.png" alt="DelightAI" className="h-10" />
            </motion.div>
          </Link>
        </div>

        <div className="hidden lg:flex gap-12 items-center">
          {menuItems.map((item) => (
            <Link key={item.label} href={item.href}>
              <motion.a
                whileHover={{ opacity: 0.5 }}
                className="text-[10px] font-medium tracking-[0.3em] uppercase cursor-pointer"
              >
                {item.label}
              </motion.a>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
            <span className="text-[10px] uppercase tracking-widest font-medium">Search</span>
            <Search size={14} />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#0d0d0d] text-white z-[60] flex flex-col p-12 lg:hidden"
          >
            <button onClick={() => setIsOpen(false)} className="self-end mb-12">
              <X size={32} />
            </button>
            <div className="flex flex-col gap-8">
              {menuItems.map((item) => (
                <Link key={item.label} href={item.href}>
                  <a onClick={() => setIsOpen(false)} className="text-4xl font-light tracking-tighter">
                    {item.label}
                  </a>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
