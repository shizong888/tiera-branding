"use client";

import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Shield, Globe, Server, ArrowRight } from "lucide-react";
import Image from "next/image";

const JourneyFeaturesGrid = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="container max-w-5xl mx-auto flex flex-col items-center gap-16">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl">
          <BlurFade delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-foreground text-[10px] font-bold tracking-widest uppercase">
              <Shield size={12} fill="currentColor" />
              VPN
            </div>
          </BlurFade>
          
          <BlurFade delay={0.2}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Secure your connection
            </h2>
          </BlurFade>

          <BlurFade delay={0.3}>
            <p className="text-lg text-foreground/60 font-medium leading-relaxed">
              Protecting your connection is key. Surfing the web, you&apos;re exposed to many risks: data breaches, hacking attacks, & snoopers. One solution to fight them all — a VPN.
            </p>
          </BlurFade>
        </div>

        {/* Joined Grid Container */}
        <BlurFade delay={0.4} className="w-full">
          <div className="w-full rounded-[3rem] overflow-hidden border border-zinc-100 shadow-2xl shadow-zinc-200/50">
            
            {/* Top Row: Joined Featured Card */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-[#1B1E4B] p-12 lg:p-16 flex flex-col justify-center gap-8 border-b lg:border-b-0 lg:border-r border-white/5">
                <h3 className="text-4xl lg:text-5xl font-black tracking-tighter text-white uppercase leading-[0.9]">
                  Effortless online <br />
                  privacy <span className="text-secondary italic">with a VPN</span>
                </h3>
                <p className="text-base text-white/60 font-medium max-w-md">
                  Tiera connects, reconnects, stays alert, and protects you online 24/7 wherever you go. With its intuitive design, you will master it in no time.
                </p>
                <button className="flex items-center gap-2 text-xs font-black tracking-widest text-white hover:text-secondary transition-colors uppercase mt-4">
                  More about VPN <ArrowRight size={14} />
                </button>
              </div>
              <div className="relative bg-[#2A2D5E] min-h-[400px]">
                {/* This represents the image from the screenshot */}
                <div className="absolute inset-0 flex items-center justify-center text-white/5">
                  <Shield size={200} strokeWidth={0.5} />
                </div>
                <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-t from-[#1B1E4B]/40 to-transparent z-10" />
              </div>
            </div>

            {/* Bottom Row: Joined Three Columns */}
            <div className="grid grid-cols-1 md:grid-cols-12">
              
              {/* Box 1 (Teal) */}
              <div className="md:col-span-6 lg:col-span-5 bg-secondary p-12 flex flex-col justify-between gap-12 min-h-[450px] border-b md:border-b-0 md:border-r border-foreground/5">
                <h4 className="text-2xl font-black tracking-tighter text-foreground leading-tight uppercase">
                  Experience the web before advertising happened: free of ads, cookie pop-ups, & trackers.
                </h4>
                <div className="relative flex-1 flex items-center justify-center">
                  {/* Illustration placeholder */}
                  <div className="w-full h-48 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-foreground/5 scale-150">
                      <Shield size={160} strokeWidth={0.5} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 2 (Light Grey) */}
              <div className="md:col-span-6 lg:col-span-4 bg-muted p-12 flex flex-col justify-between gap-12 min-h-[450px] border-b md:border-b-0 lg:border-r border-foreground/5">
                <div className="relative flex-1 flex items-center justify-center">
                  <div className="text-foreground/5">
                    <Globe size={180} strokeWidth={0.5} />
                  </div>
                </div>
                <p className="text-sm font-bold text-foreground/60 leading-relaxed uppercase tracking-widest text-center">
                  Work, play, and explore without a glitch connected to high-speed VPN servers.
                </p>
              </div>

              {/* Box 3 (Stacked Stats) */}
              <div className="md:col-span-12 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
                <div className="bg-white p-12 flex flex-col items-center justify-center text-center gap-2 border-b md:border-b-0 lg:border-b border-zinc-100">
                  <div className="text-6xl font-black tracking-tighter text-foreground">100+</div>
                  <div className="text-[10px] font-black tracking-widest text-muted-foreground uppercase">Countries</div>
                  <div className="relative w-20 h-20 mt-4 text-secondary opacity-30">
                    <Globe size={80} strokeWidth={0.5} />
                  </div>
                </div>
                <div className="bg-[#1B1E4B] p-12 flex flex-col items-center justify-center text-center gap-2">
                  <div className="text-6xl font-black tracking-tighter text-white">4500+</div>
                  <div className="text-[10px] font-black tracking-widest text-white/40 uppercase">RAM-only servers</div>
                </div>
              </div>

            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default JourneyFeaturesGrid;

