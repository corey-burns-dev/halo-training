import type React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  to,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}) => {
  const baseStyles =
    "group relative font-black italic tracking-widest uppercase text-xl px-10 py-5 -skew-x-15 transition-all duration-300 overflow-hidden inline-block cursor-pointer";

  const variants = {
    primary: "bg-brand-primary hover:bg-white text-brand-dark",
    secondary: "bg-brand-secondary hover:bg-white text-white hover:text-brand-dark",
    outline: "bg-black/40 backdrop-blur-md border-2 border-white/20 hover:border-brand-primary text-white",
  };

  const innerStyles = "relative z-10 flex skew-x-15 items-center gap-3";

  const content = (
    <>
      {variant === "primary" && (
        <span className="absolute inset-0 bg-brand-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
      )}
      <span className={innerStyles}>{children}</span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {content}
    </button>
  );
};
