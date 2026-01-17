"use client";

import React from "react";
import Link from "next/link";
import AnimatedLogo from "./AnimatedLogo";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-3 bg-white transition-all duration-300">
      <Link href="/" className="flex items-center gap-2">
        <AnimatedLogo width={44} height={44} className="w-11 h-auto" />
        <span className="text-xl font-black tracking-tight text-foreground uppercase">
          Tiera
        </span>
      </Link>

      <div className="hidden lg:flex items-center gap-10 text-[13px] font-bold text-foreground/70 tracking-wide">
        <Link href="/" className="hover:text-primary transition-colors">
          Products
        </Link>
        <Link href="/download" className="hover:text-primary transition-colors">
          Download
        </Link>
        <Link href="#" className="hover:text-primary transition-colors">
          Security
        </Link>
        <Link href="#" className="hover:text-primary transition-colors">
          Pricing
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-[13px] font-bold text-foreground/70 hover:text-primary transition-colors">
          Log in
        </button>
        <button className="px-6 py-2.5 rounded-xl bg-primary text-white text-[13px] font-bold hover:bg-foreground transition-all shadow-lg shadow-primary/20">
          Get Tiera VPN
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

