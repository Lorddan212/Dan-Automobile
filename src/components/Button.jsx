import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  primary:
    "border border-luxury-gold/30 bg-[linear-gradient(135deg,rgba(201,164,92,0.28),rgba(125,211,252,0.18))] text-white shadow-[0_18px_40px_rgba(5,7,12,0.35)] hover:border-luxury-gold/50",
  secondary:
    "border border-white/12 bg-white/[0.06] text-white hover:bg-white/[0.12]",
  ghost:
    "border border-transparent bg-transparent text-white/75 hover:bg-white/[0.06] hover:text-white"
};

function content(children, Icon) {
  return (
    <>
      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.2)_50%,transparent_70%)] opacity-0 transition duration-500 group-hover:opacity-100 group-hover:translate-x-4" />
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon ? <Icon size={16} /> : null}
      </span>
    </>
  );
}

function Button({
  children,
  to,
  href,
  type = "button",
  variant = "primary",
  className = "",
  icon,
  onClick,
  disabled = false
}) {
  const classes = [
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-xs font-medium uppercase tracking-[0.26em] transition duration-300 hover:-translate-y-0.5",
    variants[variant],
    className
  ].join(" ");

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.985 }}>
        <Link to={to} className={classes}>
          {content(children, icon)}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.985 }}>
        <a href={href} className={classes}>
          {content(children, icon)}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      className={`${classes} ${disabled ? "cursor-not-allowed opacity-60" : ""}`}
    >
      {content(children, icon)}
    </motion.button>
  );
}

export default Button;
