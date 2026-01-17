"use client";

import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Compass, Zap, Shield, Heart } from "lucide-react";

const JourneyMatcher = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1 w-full flex flex-col gap-12">
          <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center border border-zinc-100 shadow-sm text-primary">
            <Compass size={24} />
          </div>
          
          <BlurFade delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1] text-foreground">
              Lifestyle <br />
              <span className="text-primary/30 italic">matcher.</span>
            </h2>
          </BlurFade>

          <BlurFade delay={0.2}>
            <p className="max-w-md text-lg text-muted-foreground font-medium leading-relaxed">
              We don&apos;t just encrypt data; we protect your life. Our sentinel protocol matches your daily routines 
              to the specific nodes of your digital neighborhood.
            </p>
          </BlurFade>

          <div className="space-y-4">
            {[
              { title: "Remote work", desc: "Precise latency optimization for your specific cloud tools and meetings.", icon: Zap },
              { title: "Private streaming", desc: "Unrestricted access to global content libraries without buffering.", icon: Shield },
              { title: "Family safety", desc: "Centralized protection for all your household devices and children.", icon: Heart },
            ].map((item, i) => (
              <BlurFade key={i} delay={0.3 + i * 0.1}>
                <div className="flex items-start gap-6 p-6 rounded-[2rem] border border-zinc-100 bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:text-primary transition-colors">
                    <item.icon size={20} />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h3 className="text-xs font-black tracking-widest uppercase text-black">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-medium">{item.desc}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>

        <div className="flex-1 w-full flex justify-center relative">
          <BlurFade delay={0.4} className="w-full max-w-xl aspect-square bg-zinc-50 rounded-[4rem] p-12 flex flex-col items-center justify-center">
            <div className="relative w-full bg-white rounded-[3rem] p-12 shadow-2xl border border-border flex flex-col gap-16">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-[8px] font-black tracking-widest text-zinc-400 uppercase">Protocol analysis</span>
                  <h4 className="text-sm font-black italic tracking-tighter uppercase">Tiera sentinel</h4>
                </div>
                <div className="bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  -14 ms latency
                </div>
              </div>

              {/* Timeline Graphic */}
              <div className="relative w-full h-1 bg-zinc-100 rounded-full">
                <div className="absolute top-0 left-0 w-3/4 h-full bg-primary rounded-full" />
                <div className="absolute top-1/2 left-[0%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-white bg-zinc-200 shadow-sm" />
                <div className="absolute top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-4 border-white bg-primary shadow-xl flex items-center justify-center text-white">
                  <Zap size={16} />
                </div>
                <div className="absolute top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-4 border-white bg-secondary shadow-xl flex items-center justify-center text-foreground">
                  <Shield size={16} />
                </div>
                
                <span className="absolute top-8 left-[0%] -translate-x-1/2 text-[8px] font-black tracking-widest text-muted-foreground uppercase">Offline</span>
                <span className="absolute top-8 left-[40%] -translate-x-1/2 text-[8px] font-black tracking-widest text-primary uppercase">Work</span>
                <span className="absolute top-8 left-[75%] -translate-x-1/2 text-[8px] font-black tracking-widest text-secondary uppercase">Secured</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                  <span className="text-[8px] font-black tracking-widest text-zinc-400 uppercase">Avg speed</span>
                  <p className="text-lg font-black italic tracking-tighter">940 mbps</p>
                </div>
                <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                  <span className="text-[8px] font-black tracking-widest text-zinc-400 uppercase">Match score</span>
                  <p className="text-lg font-black italic tracking-tighter text-primary">98% Perfect</p>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default JourneyMatcher;

