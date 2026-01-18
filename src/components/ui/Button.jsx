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
    "inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";

  // Variant styles
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-slate-800 text-slate-200 hover:bg-slate-700",
    outline: "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
  };

  // Combine styles
  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  // Render link button
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

  // Render normal button
  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
};

export default Button;
