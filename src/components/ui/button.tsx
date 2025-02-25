"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "outline" | "solid";
  className?: string;
}

export const Button = ({ children, variant = "solid", className = "", ...props }: ButtonProps) => {
  const baseStyles = "px-4 py-2 rounded-full font-medium transition";
  const variantStyles =
    variant === "outline"
      ? "border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
      : "bg-blue-500 text-white hover:bg-blue-600";

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};
