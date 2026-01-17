"use client";

import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";

const DownloadCTA = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="container max-w-6xl mx-auto">
        <BlurFade delay={0.1}>
          <div className="relative bg-[#1B1E4B] rounded-[3rem] lg:rounded-[4rem] overflow-hidden p-12 lg:p-24 flex flex-col items-center text-center gap-8">
            
            {/* Creative Background Elements matching Brand Style */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-[-20%] left-[-10%] w-[60%] aspect-square border-[1px] border-white/10 rounded-full" />
              <div className="absolute bottom-[-20%] right-[-10%] w-[50%] aspect-square border-[1px] border-white/10 rounded-full" />
              <div className="absolute top-[20%] right-[15%] w-4 h-4 rounded-full bg-secondary/20" />
              <div className="absolute bottom-[30%] left-[20%] w-2 h-2 rounded-full bg-secondary/40" />
            </div>

            <div className="relative z-10 space-y-4">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Still not sure? <br />
                <span className="text-secondary italic">Start your 7-day free trial</span>
              </h2>
            </div>

            <BlurFade delay={0.3} className="relative z-10 flex flex-col items-center gap-6">
              <button className="bg-secondary text-[#1B1E4B] px-12 py-5 rounded-2xl font-black text-xl hover:scale-[1.05] active:scale-[0.95] transition-all shadow-2xl shadow-secondary/20">
                Start free trial
              </button>
              <div className="flex items-center gap-2 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                <div className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center text-[8px]">↺</div>
                30-day money-back guarantee
              </div>
            </BlurFade>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default DownloadCTA;

