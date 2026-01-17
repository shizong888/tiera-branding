"use client";

import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Radar, AlertCircle } from "lucide-react";

const JourneyInformationControl = () => {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="container max-w-6xl mx-auto flex flex-col gap-16">
        <BlurFade delay={0.1}>
          <div className="flex flex-col md:flex-row items-end justify-between gap-12">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.9] text-foreground">
              Control your <br />
              <span className="text-muted-foreground font-black">personal</span> <br />
              <span className="text-primary italic">information online.</span>
            </h2>
            <button className="bg-primary text-primary-foreground px-10 py-5 rounded-full font-black text-sm tracking-widest uppercase hover:scale-105 transition-all shadow-xl shadow-primary/20">
              Get Tiera VPN
            </button>
          </div>
        </BlurFade>

        <BlurFade delay={0.2}>
          <div className="relative w-full bg-[#1B1E4B] rounded-[3rem] p-12 md:p-24 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-10">
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-white">Know about threats instantly</h3>
              <p className="max-w-md text-xl text-white/60 font-medium leading-relaxed">
                Get alerts about leaked passwords and personal data the moment it happens on the dark web.
              </p>
              <button className="text-sm font-black tracking-widest text-secondary hover:text-white transition-colors uppercase flex items-center gap-2">
                WHAT IS DATA MONITOR? <span className="text-xl">→</span>
              </button>
            </div>

            <div className="flex-1 relative flex justify-center items-center">
              {/* Radar Mock Visual */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border border-white/10 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent animate-radar origin-center rounded-full" />
                <div className="w-1/2 h-1/2 rounded-full border border-white/5" />
                <div className="w-1/4 h-1/4 rounded-full border border-white/5" />
                
                {/* Threat pips */}
                <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-accent rounded-full shadow-[0_0_20px_rgba(242,208,79,0.8)] animate-pulse" />
                <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-secondary rounded-full shadow-[0_0_15px_rgba(111,227,218,0.6)] animate-pulse" />
                
                <div className="absolute top-8 right-8 bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full flex items-center gap-2">
                  <AlertCircle size={12} className="text-accent" />
                  <span className="text-[8px] font-black text-accent tracking-widest uppercase">THREATS IDENTIFIED</span>
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default JourneyInformationControl;
