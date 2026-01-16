"use client";

import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Shield, Globe, ArrowRight } from "lucide-react";
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
        <BlurFade delay={0.4} className="w-full mt-48 relative">
          <div className="w-full relative z-10">
            {/* Top Row: Joined Featured Card */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-[#1B1E4B] p-12 lg:p-16 flex flex-col justify-center gap-8 border-b lg:border-b-0 lg:border-r border-white/10 rounded-t-[3rem] lg:rounded-tr-none lg:rounded-tl-[3rem]">
                <h3 className="text-2xl lg:text-[2rem] font-black tracking-tighter text-white leading-tight">
                Frictionless browsing <br />
                  <span className="text-secondary italic font-black">protected by a VPN</span>
                </h3>
                <p className="text-base text-white/60 font-medium max-w-md">
                Tiera protects your browsing wherever you go, switching seamlessly between networks without breaking your flow. A clean, intuitive design makes it easy to use.
                </p>
                <button className="flex items-center gap-2 text-xs font-black tracking-widest text-white hover:text-secondary transition-colors uppercase mt-4">
                  More about VPN <ArrowRight size={14} />
                </button>
              </div>
              
              <div className="relative bg-[#2A2D5E] min-h-[450px] rounded-t-[3rem] lg:rounded-tl-none lg:rounded-tr-[3rem]">
                {/* The "Poke Out" Image - Using clip-path to ensure ONLY top overflow */}
                <div 
                  className="absolute inset-0 pointer-events-none z-20"
                  style={{ clipPath: 'inset(-100% 0px 0px 0px)' }}
                >
                  <Image 
                    src="/images/asian-cover-transparent.png" 
                    alt="Tiera User" 
                    fill 
                    className="object-contain object-bottom scale-[2.0] origin-bottom translate-y-2"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1E4B]/40 to-transparent pointer-events-none rounded-tr-[3rem]" />
              </div>
            </div>

            {/* Bottom Row: Joined Three Columns */}
            <div className="grid grid-cols-1 md:grid-cols-12">
              
              {/* Box 1 (Teal) */}
              <div className="md:col-span-6 lg:col-span-5 bg-secondary p-12 flex flex-col justify-between gap-12 min-h-[450px] border-b md:border-b-0 md:border-r border-foreground/5 lg:rounded-bl-[3rem]">
                <h4 className="text-2xl font-black tracking-tighter text-foreground leading-tight">
                  Experience the web before advertising happened: free of ads, cookie pop-ups, & trackers.
                </h4>
                <div className="relative flex-1 flex items-center justify-center px-4">
                  <Image
                    src="/images/ad-block.png"
                    alt="Ad blocking illustration"
                    width={400}
                    height={300}
                    className="w-full h-auto object-contain"
                    unoptimized
                  />
                </div>
              </div>

              {/* Box 2 (Light Grey) */}
              <div className="md:col-span-6 lg:col-span-4 bg-muted p-12 flex flex-col justify-between gap-12 min-h-[450px] border-b md:border-b-0 lg:border-r border-foreground/5">
                <div className="relative flex-1 flex items-center justify-center -mx-12">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src="/images/shield-protection.png"
                      alt="Shield protection illustration"
                      width={600}
                      height={450}
                      className="w-full h-auto object-contain"
                      unoptimized
                      style={{
                        maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0) 85%)',
                        WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0) 85%)'
                      }}
                    />
                  </div>
                </div>
                <p className="text-sm font-bold text-foreground/60 leading-relaxed uppercase tracking-widest text-center">
                    Seamless protection, everywhere.
                </p>
              </div>

              {/* Box 3 (Stacked Stats) */}
              <div className="md:col-span-12 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:rounded-br-[3rem] lg:rounded-bl-none">
                <div className="bg-white p-12 flex flex-col items-center justify-center text-center gap-2 border-b md:border-b-0 lg:border-b border-zinc-100">
                  <div className="text-6xl font-black tracking-tighter text-foreground">100+</div>
                  <div className="text-[10px] font-black tracking-widest text-muted-foreground uppercase">Countries</div>
                  <div className="relative w-20 h-20 mt-4 text-secondary opacity-30">
                    <Globe size={80} strokeWidth={0.5} />
                  </div>
                </div>
                <div className="bg-[#1B1E4B] p-12 flex flex-col items-center justify-center text-center gap-2 rounded-br-[3rem]">
                  <div className="text-6xl font-black tracking-tighter text-white">4500+</div>
                  <div className="text-[10px] font-black tracking-widest text-white/40 uppercase">RAM-only servers</div>
                </div>
              </div>
            </div>

            {/* Global Container Border Overlay for Sharpness */}
            <div className="absolute inset-0 rounded-[3rem] border border-zinc-100 pointer-events-none shadow-2xl shadow-zinc-200/50" />
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default JourneyFeaturesGrid;

