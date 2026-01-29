import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

const menuItems = [
  { label: "SOLUTIONS", href: "/" },
  { label: "METHODOLOGY", href: "/vision" },
  { label: "CASE STUDIES", href: "/services" },
  { label: "CONTACT", href: "/contact" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { scrollY } = useScroll();

  const navBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(248,246,243,0)", "rgba(248,246,243,0.92)"],
  );
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.1]);

  return (
    <>
      {/* Top Navigation Bar */}
      <motion.nav
        style={{
          backgroundColor: navBg,
          borderBottomColor: useTransform(
            borderOpacity,
            (o) => `rgba(46,42,37,${o})`,
          ),
        }}
        className="fixed top-0 left-0 right-0 h-[60px] z-50 flex items-center justify-between px-12 backdrop-blur-md border-b"
      >
        {/* Logo */}
        <Link href="/">
          <div
            className="cursor-pointer text-[22px] font-medium tracking-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Delight<span className="text-primary">AI</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-10 items-center">
          {menuItems.map((item) => (
            <Link key={item.label} href={item.href}>
              <a
                className={`text-[10px] font-medium tracking-[0.3em] uppercase cursor-pointer transition-opacity hover:opacity-100 ${
                  location === item.href ? "opacity-100" : "opacity-40"
                }`}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {/* Minimal Dot Navigation - Right Side */}
      <div className="hidden lg:block fixed right-10 top-1/2 -translate-y-1/2 z-50">
        <div className="flex flex-col gap-6">
          {menuItems.map((item) => (
            <Link key={item.label} href={item.href}>
              <div className="group relative cursor-pointer">
                <div
                  className={`w-[6px] h-[6px] rounded-full transition-all duration-300 ${
                    location === item.href
                      ? "bg-primary scale-150"
                      : "bg-muted-foreground/30 hover:bg-primary/50 hover:scale-125"
                  }`}
                />
                <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  <div className="bg-card border border-border/40 rounded-md px-3 py-1.5 text-[11px] tracking-wide">
                    {item.label}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className="fixed inset-0 bg-background z-[60] flex flex-col p-12 lg:hidden"
        >
          <button onClick={() => setIsOpen(false)} className="self-end mb-12">
            <X size={28} />
          </button>
          <div className="flex flex-col gap-8">
            {menuItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <a
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-light tracking-tight hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
