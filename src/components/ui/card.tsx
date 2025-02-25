"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => (
  <div className={`rounded-2xl shadow-lg bg-gray-800 p-4 ${className}`}>
    {children}
  </div>
);
