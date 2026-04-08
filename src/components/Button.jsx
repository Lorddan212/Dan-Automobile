import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  primary: "button-primary",
  secondary: "button-secondary",
  ghost: "button-ghost"
};

function content(children, Icon) {
  return (
    <>
      <span className="button-shine" />
      <span className="button-content">
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
    "button-base",
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
      className={`${classes} ${disabled ? "button-disabled" : ""}`}
    >
      {content(children, icon)}
    </motion.button>
  );
}

export default Button;
