import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.43 21v-7.06h2.37l.36-2.76h-2.73V9.42c0-.8.23-1.34 1.37-1.34H16V5.62c-.23-.03-1-.1-1.89-.1-1.87 0-3.15 1.14-3.15 3.24v1.82H8.84v2.76h2.12V21h2.47Z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.88 8.33a1.46 1.46 0 1 1 0-2.92 1.46 1.46 0 0 1 0 2.92ZM5.62 9.74h2.53V18H5.62V9.74Zm4.12 0h2.43v1.13h.03c.34-.64 1.17-1.32 2.42-1.32 2.58 0 3.06 1.7 3.06 3.91V18h-2.53v-4.08c0-.97-.02-2.21-1.37-2.21-1.37 0-1.57 1.07-1.57 2.19V18H9.74V9.74Z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14.24 10.15 20.76 3h-1.54l-5.66 6.2L9.03 3H3.83l6.84 9.62L3.83 21h1.54l6-6.57L15.97 21h5.2l-6.93-10.85Zm-2.09 2.29-.69-.99-5.5-7.87h2.37l4.44 6.35.69.99 5.76 8.24h-2.37l-4.7-6.73Z" />
    </svg>
  );
}

function WhatsappIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.02 2.25c-5.36 0-9.7 4.24-9.7 9.47 0 1.67.45 3.31 1.32 4.76L2.25 21.75l5.45-1.42a9.88 9.88 0 0 0 4.32 1c5.36 0 9.73-4.24 9.73-9.5 0-5.23-4.37-9.58-9.73-9.58Zm0 17.48a8.1 8.1 0 0 1-4.12-1.12l-.3-.18-3.23.84.87-3.14-.2-.32a7.93 7.93 0 0 1-1.21-4.09c0-4.34 3.67-7.88 8.19-7.88 4.55 0 8.22 3.6 8.22 7.98 0 4.34-3.67 7.91-8.22 7.91Zm4.49-5.96c-.25-.12-1.47-.72-1.7-.8-.23-.08-.4-.12-.57.12-.16.25-.64.8-.78.97-.14.17-.29.2-.54.07-.25-.12-1.05-.39-2.01-1.24-.75-.67-1.25-1.5-1.4-1.75-.14-.25-.01-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.12-.57-1.34-.77-1.83-.21-.49-.41-.43-.57-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.05s.89 2.38 1.01 2.54c.12.16 1.75 2.65 4.23 3.72.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.17.21-.57.21-1.07.14-1.17-.06-.1-.23-.16-.48-.28Z" />
    </svg>
  );
}

const socials = [
  { label: "Facebook", href: "https://facebook.com/danauto", icon: FacebookIcon },
  { label: "LinkedIn", href: "https://linkedin.com/company/danauto", icon: LinkedinIcon },
  { label: "X", href: "https://x.com/danauto", icon: XIcon },
  { label: "WhatsApp", href: "https://wa.me/2348000002026", icon: WhatsappIcon }
];

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Cars", to: "/cars" },
  { label: "Contact", to: "/contact" }
];

const legalLinks = [
  { label: "Privacy", to: "/privacy" },
  { label: "Terms", to: "/terms" },
  { label: "Cookies", to: "/cookies" }
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-grid">
          <div>
            <span className="site-footer-badge">DanAuto</span>
            <h2 className="site-footer-title">
              Premium vehicle sourcing, sales, leasing, and service support
            </h2>
            <p className="site-footer-description">
              DanAuto helps clients compare vehicles, arrange inspections, plan
              payments, manage documentation, and keep cars maintained after delivery.
            </p>
          </div>

          <div>
            <h3 className="site-footer-heading">Navigate</h3>
            <div className="site-footer-links">
              {footerLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="site-footer-link"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="site-footer-heading">Contact</h3>
            <div className="site-footer-contact">
              <p>Plot 14 Admiralty Way, Lekki Phase 1, Lagos</p>
              <p>+234 (0) 800 000 2026</p>
              <p>bookings@danauto.africa</p>
              <p>Mon-Sat: 9:00 AM - 6:00 PM</p>
            </div>

            <div className="site-footer-socials">
              {socials.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -4, scale: 1.03 }}
                    className="site-footer-social-link"
                    aria-label={item.label}
                  >
                    <Icon className="site-footer-social-icon" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="site-footer-bottom">
          <p>© {new Date().getFullYear()} DanAuto. All rights reserved.</p>
          <div className="site-footer-bottom-links">
            {legalLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="site-footer-meta-link"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
