"use client";

import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Search, ArrowRight, Shield } from "lucide-react";
import Image from "next/image";

const JourneyHero = () => {
  return (
    <section className="relative pt-28 pb-0 bg-white min-h-[90vh] flex flex-col items-center overflow-visible">
      <div className="container max-w-[1600px] mx-auto px-4 lg:px-6 relative z-20">
        {/* Main Hero Card - Surfshark Style */}
        <div className="bg-secondary rounded-[3rem] lg:rounded-[4rem] relative overflow-hidden flex flex-col items-center pt-12 lg:pt-20 shadow-sm">
          
          {/* Creative Background Pattern - White Radial Waves */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
            <div className="absolute w-[140%] aspect-square border-[1px] border-white/40 rounded-full" />
            <div className="absolute w-[110%] aspect-square border-[1px] border-white/30 rounded-full" />
            <div className="absolute w-[80%] aspect-square border-[1px] border-white/20 rounded-full" />
            <div className="absolute w-[50%] aspect-square border-[1px] border-white/10 rounded-full" />
            <div className="absolute w-[30%] aspect-square border-[1px] border-white/5 rounded-full" />
          </div>

          <div className="flex flex-col items-center text-center gap-4 relative z-10 px-6 max-w-4xl">
            <BlurFade delay={0.1}>
              <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.05] text-foreground">
                Online security starts with a VPN
              </h1>
            </BlurFade>

            <BlurFade delay={0.2}>
              <p className="max-w-xl text-lg lg:text-xl text-foreground/70 font-medium leading-relaxed">
                Access the web safely and privately on unlimited devices.
              </p>
            </BlurFade>

            <BlurFade delay={0.3} className="flex flex-col items-center gap-4 mt-2">
              <button className="bg-primary text-white px-10 py-4 rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20">
                Get Tiera VPN
              </button>
              <div className="flex items-center gap-2 text-[10px] font-bold text-foreground/60 uppercase tracking-wider">
                <div className="w-4 h-4 rounded-full border border-foreground/20 flex items-center justify-center text-[10px]">↺</div>
                30-day money-back guarantee
              </div>
            </BlurFade>
          </div>

          {/* Hero Image - Shifted up for better visibility */}
          <BlurFade delay={0.4} className="relative w-full max-w-[1400px] mt-2 lg:mt-3 px-6 lg:px-0 translate-y-12">
            <div className="relative w-full aspect-[16/9] lg:aspect-[21/10]">
              <Image
                src="/images/hero-en.png"
                alt="Tiera Interface"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default JourneyHero;
