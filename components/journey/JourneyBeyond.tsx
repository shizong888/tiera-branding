"use client";

import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Shield, Key, FileText, Zap, Layout } from "lucide-react";

const JourneyBeyond = () => {
  return (
    <section className="py-32 px-6 bg-background overflow-hidden">
      <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-24">
        {/* Visual Side */}
        <div className="flex-1 w-full flex justify-center relative">
          <BlurFade delay={0.1} className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
            {/* Soft background glow */}
            <div className="absolute w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            
            {/* Orbiting Icons */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-card rounded-2xl shadow-xl border border-border flex flex-col items-center gap-1 group hover:scale-110 transition-transform">
              <Key size={18} className="text-secondary" />
              <span className="text-[8px] font-black tracking-widest text-muted-foreground uppercase">LEGAL</span>
            </div>
            
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 p-4 bg-card rounded-2xl shadow-xl border border-border flex flex-col items-center gap-1 group hover:scale-110 transition-transform">
              <Zap size={18} className="text-accent" />
              <span className="text-[8px] font-black tracking-widest text-muted-foreground uppercase">UTIL</span>
            </div>

            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-card rounded-2xl shadow-xl border border-border flex flex-col items-center gap-1 group hover:scale-110 transition-transform">
              <Layout size={18} className="text-primary" />
              <span className="text-[8px] font-black tracking-widest text-muted-foreground uppercase">HUB</span>
            </div>

            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 p-4 bg-card rounded-2xl shadow-xl border border-border flex flex-col items-center gap-1 group hover:scale-110 transition-transform">
              <FileText size={18} className="text-secondary" />
              <span className="text-[8px] font-black tracking-widest text-muted-foreground uppercase">VISA</span>
            </div>

            {/* Central Node */}
            <div className="relative z-10 w-32 h-32 bg-foreground rounded-[2rem] flex flex-col items-center justify-center gap-2 shadow-2xl">
              <Shield size={32} className="text-primary" />
              <span className="text-[8px] font-black tracking-widest text-background uppercase text-center leading-tight">SENTINEL CORE<br/>SECURED</span>
            </div>

            {/* Orbit paths (dashed circles) */}
            <div className="absolute inset-0 border border-border/50 rounded-full" />
            <div className="absolute inset-12 border border-border/30 rounded-full" />
          </BlurFade>
        </div>

        {/* Text Side */}
        <div className="flex-1 flex flex-col items-start gap-8">
          <BlurFade delay={0.2}>
            <div className="px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black tracking-widest uppercase">
              02. Holistic Support
            </div>
          </BlurFade>
          
          <BlurFade delay={0.3}>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-[1] text-foreground">
              Beyond <br />
              <span className="text-primary italic">Protection.</span>
            </h2>
          </BlurFade>

          <BlurFade delay={0.4}>
            <p className="max-w-md text-lg text-muted-foreground font-medium leading-relaxed">
              Beyond encrypting your data, if you&apos;re establishing a digital presence across borders, we connect you with trusted jurisdictional advisors and encryption specialists. Our Knowledge Hub gives you access to essential information to help you scale quickly, including guidance on sovereign data, secure hosting, and discovering local node advantages.
            </p>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default JourneyBeyond;
