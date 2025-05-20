import React from "react";

function Button({
  children,
  type = "button",
  variant = "primary",
  disabled = false,
  size = "medium",
  onClick,
  style,
  className,
}) {
  const baseStyle = {
    borderRadius: 8,
    fontWeight: 600,
    border: "none",
    cursor: disabled ? "not-allowed" : "pointer",
  };

  const variants = {
    primary: {
      background: disabled ? "#B0B8C1" : "#3692FF",
      color: "#fff",
    },
    secondary: {
      background: "#F4F6FA",
      color: "#4E5968",
    },
  };

  const sizes = {
    small: {
      padding: "6px 12px",
      fontSize: 14,
    },
    medium: {
      padding: "8px 16px",
      fontSize: 16,
      height: 40,
    },
    large: {
      padding: "12px 24px",
      fontSize: 18,
    },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        ...baseStyle,
        ...variants[variant],
        ...sizes[size],
        ...style,
      }}
      className={className}
    >
      {children}
    </button>
  );
}

export default Button;
