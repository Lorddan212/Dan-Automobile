import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Building2, Briefcase, CarFront, GalleryVertical, House, Menu, PhoneCall, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/", icon: House },
  { label: "About", to: "/about", icon: Building2 },
  { label: "Services", to: "/services", icon: Briefcase },
  { label: "Gallery", to: "/gallery", icon: GalleryVertical },
  { label: "Cars", to: "/cars", icon: CarFront },
  { label: "Contact", to: "/contact", icon: PhoneCall }
];

function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <motion.nav
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        className={[
          "mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 transition-all duration-500 sm:px-6",
          isScrolled
            ? "glass-panel shadow-luxury ring-1 ring-white/10"
            : "bg-transparent"
        ].join(" ")}
      >
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-luxury-gold/40 bg-white/10 shadow-[0_0_28px_rgba(201,164,92,0.18)]">
            <span className="font-display text-sm font-semibold tracking-[0.28em] text-luxury-gold">
              DA
            </span>
          </div>
          <div>
            <p className="font-display text-sm uppercase tracking-[0.35em] text-white">
              DanAuto
            </p>
            <p className="text-[10px] uppercase tracking-[0.32em] text-white/45">
              AI Luxury Mobility
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-2 xl:flex">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                [
                  "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm uppercase tracking-[0.2em] transition-colors duration-300",
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:text-white"
                ].join(" ")
              }
            >
              <Icon size={14} />
              {item.label}
            </NavLink>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white xl:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-[28px] border border-white/10 bg-[#05070c]/90 p-4 shadow-luxury backdrop-blur-2xl xl:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                <Link
                  key={item.label}
                  to={item.to}
                  className="inline-flex items-center gap-3 rounded-2xl border border-transparent px-4 py-3 text-sm uppercase tracking-[0.24em] text-white/70 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
                >
                  <Icon size={16} />
                  {item.label}
                </Link>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
