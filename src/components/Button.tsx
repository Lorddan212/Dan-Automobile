import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { JSXElementConstructor, MouseEventHandler, ReactNode } from "react";
import type { To } from "react-router-dom";

const variants = {
  primary: "button-primary",
  secondary: "button-secondary",
  ghost: "button-ghost"
};

export interface ButtonProps {
  children?: ReactNode;
  to?: To;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: keyof typeof variants;
  className?: string;
  icon?: JSXElementConstructor<{ size: number }>;
  /** Used by the native-button branch; link branches keep their existing behavior. */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

function content(children: ReactNode, Icon: ButtonProps["icon"]) {
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
}: ButtonProps) {
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
