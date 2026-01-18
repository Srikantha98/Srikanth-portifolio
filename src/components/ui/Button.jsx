import React from "react";

const Button = ({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
}) => {
  // Base button styles
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 shadow-md";

  // Variant styles
  const variants = {
    primary:
      "bg-red-600 text-white hover:bg-red-700 hover:shadow-lg focus:ring-red-600",
    secondary:
      "bg-slate-800 text-slate-200 hover:bg-slate-700 hover:shadow-lg focus:ring-slate-600",
    outline:
      "border border-red-600 text-red-600 hover:bg-red-600 hover:text-white hover:shadow-lg focus:ring-red-600",
    gradient:
      "bg-gradient-to-r from-red-700 to-red-500 text-white hover:from-red-800 hover:to-red-600 hover:shadow-lg focus:ring-red-600",
  };

  // Combine styles
  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  // Render as anchor
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles}
      >
        {children}
      </a>
    );
  }

  // Render as button
  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
};

export default Button;
