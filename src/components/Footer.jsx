import { motion } from "framer-motion";
import { Camera, Globe2, PlayCircle, Radio } from "lucide-react";
import { Link } from "react-router-dom";

const socials = [
  { label: "Instagram", href: "#", icon: Camera },
  { label: "LinkedIn", href: "#", icon: Globe2 },
  { label: "X", href: "#", icon: Radio },
  { label: "YouTube", href: "#", icon: PlayCircle }
];

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Cars", to: "/cars" },
  { label: "Contact", to: "/contact" }
];

function Footer() {
  return (
    <footer className="border-t border-white/8 px-4 pb-8 pt-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl px-2 py-2 sm:px-0">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr_0.9fr]">
          <div>
            <span className="inline-flex rounded-full border border-luxury-gold/20 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/70">
              DanAuto
            </span>
            <h2 className="mt-5 max-w-md font-display text-3xl uppercase leading-tight text-white">
              Luxury, AI-driven automobiles built for the modern African future.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-white/55">
              DanAuto delivers futuristic premium vehicles, intelligent services,
              private consultations, and a multi-model electric lineup priced in Naira.
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.3em] text-white/45">Navigate</h3>
            <div className="mt-5 flex flex-col gap-3">
              {footerLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="text-sm uppercase tracking-[0.24em] text-white/70 transition hover:text-luxury-gold"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.3em] text-white/45">Contact</h3>
            <div className="mt-5 space-y-4 text-sm leading-7 text-white/60">
              <p>Flagship Experience Centre, Victoria Island, Lagos</p>
              <p>+234 (0) 800 000 2026</p>
              <p>concierge@danauto.africa</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {socials.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    whileHover={{ y: -4, scale: 1.03 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white/70 transition hover:border-luxury-gold/40 hover:text-luxury-gold"
                    aria-label={item.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.24em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} DanAuto. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="transition hover:text-white/60">
              Privacy
            </a>
            <a href="#" className="transition hover:text-white/60">
              Terms
            </a>
            <a href="#" className="transition hover:text-white/60">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
