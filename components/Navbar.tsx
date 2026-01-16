"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-3 bg-white transition-all duration-300">
      <div className="flex items-center gap-2">
        <Image
          src="/images/tiera-icon.svg"
          alt="Tiera Logo"
          width={28}
          height={28}
          className="w-7 h-auto"
        />
        <span className="text-xl font-black tracking-tight text-foreground uppercase">
          Tiera
        </span>
      </div>

      <div className="hidden lg:flex items-center gap-10 text-[13px] font-bold text-foreground/70 tracking-wide">
        <Link href="#" className="hover:text-primary transition-colors">
          Products
        </Link>
        <Link href="#" className="hover:text-primary transition-colors">
          Solutions
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

