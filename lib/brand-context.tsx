"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type BrandStyle = "journey";

interface BrandContextType {
  style: BrandStyle;
  setStyle: (style: BrandStyle) => void;
}

const BrandContext = createContext<BrandContextType | undefined>(undefined);

export function BrandProvider({ children }: { children: React.ReactNode }) {
  const [style, setStyle] = useState<BrandStyle>("journey");

  useEffect(() => {
    document.documentElement.setAttribute("data-brand-style", style);
  }, [style]);

  return (
    <BrandContext.Provider value={{ style, setStyle }}>
      {children}
    </BrandContext.Provider>
  );
}

export function useBrand() {
  const context = useContext(BrandContext);
  if (context === undefined) {
    throw new Error("useBrand must be used within a BrandProvider");
  }
  return context;
}
