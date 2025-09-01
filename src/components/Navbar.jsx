import { useEffect, useState } from "react";
import { Menu, X, Home, User, Briefcase, Code, Phone, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero", icon: <Home size={22} /> },
  { name: "About", href: "#about", icon: <User size={22} /> },
  { name: "Skills", href: "#skills", icon: <BadgeCheck size={22} /> },
  { name: "Projects", href: "#projects", icon: <Code size={22} /> },
  { name: "Experience", href: "#experience", icon: <Briefcase size={22} /> },
  { name: "Contact", href: "#contact", icon: <Phone size={22} /> },
];

export const Navbar = () => {
  const [isscrolled, setIsscolled] = useState(false);
  const [activeHash, setActiveHash] = useState("#hero");

  useEffect(() => {
    const sectionIds = navItems.map(item => item.href.replace('#', ''));
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          let found = false;
          for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            const rect = section.getBoundingClientRect();
            if (rect.top <= 80 && rect.bottom > 80) {
              setActiveHash(`#${section.id}`);
              found = true;
              break;
            }
          }
          if (!found) setActiveHash("#hero");
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handlescroll = () => {
      setIsscolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  return (
    <>
      {/* Top Navbar (All screens) */}
      <nav
        className={cn(
          "fixed w-full z-40 transition-all duration-300",
          isscrolled
            ? "py-5 bg-background/80 backdrop-blur-md shadow-xs"
            : "py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Title: always visible, centered on mobile, left on desktop */}
          <a
            className="text-xl font-bold text-primary flex items-center ml-0"
            href="#hero"
          >
            <span className="relative z-10">
              <span className="text-glow text-foreground pr-1">
                {"<KaranUnix />"}
              </span>
              Portfolio
            </span>
          </a>
          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((items, key) => (
              <a
                key={key}
                href={items.href}
                className="text-foreground/80 hover:text-primary transition-colors-300"
              >
                {items.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Bottom Navbar (Mobile Only) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-background/90 backdrop-blur-xl shadow-lg md:hidden z-50 rounded-2xl border border-border">
        <div className="flex justify-around items-center py-2">
          {navItems.map((items, key) => {
            const isActive = activeHash === items.href;
            return (
              <a
                key={key}
                href={items.href}
                className={cn(
                  "flex flex-col items-center transition group",
                  isActive ? "text-primary" : "text-foreground/70 hover:text-primary"
                )}
              >
                <span className={cn(
                  "p-2 rounded-full transition",
                  isActive ? "bg-primary/10 text-primary" : "group-hover:bg-primary/10"
                )}>
                  {items.icon}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};
