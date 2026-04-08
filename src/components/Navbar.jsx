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

  const getNavLinkClass = ({ isActive }) =>
    [
      "nav-link",
      isActive ? "nav-link-active" : "nav-link-idle"
    ].join(" ");

  const getMobileNavLinkClass = ({ isActive }) =>
    [
      "mobile-menu-link",
      isActive ? "mobile-menu-link-active" : "mobile-menu-link-idle"
    ].join(" ");

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
    <header className="site-header">
      <motion.nav
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        className={[
          "site-nav",
          isScrolled ? "site-nav-scrolled" : "site-nav-resting"
        ].join(" ")}
      >
        <Link to="/" className="brand-link">
          <div className="brand-mark">
            <span className="brand-mark-text">DA</span>
          </div>
          <div className="brand-copy">
            <p className="brand-name">DanAuto</p>
            <p className="brand-tagline">Luxury Mobility</p>
          </div>
        </Link>

        <div className="desktop-nav">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.to === "/"}
                className={getNavLinkClass}
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
          className="nav-toggle"
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
            className="mobile-menu"
          >
            <div className="mobile-menu-list">
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    end={item.to === "/"}
                    className={getMobileNavLinkClass}
                  >
                    <Icon size={16} />
                    {item.label}
                  </NavLink>
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
