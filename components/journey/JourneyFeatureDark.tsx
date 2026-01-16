"use client";

import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { ArrowRight } from "lucide-react";

const JourneyFeatureDark = () => {
  return (
    <section className="py-24 px-6">
      <div className="container max-w-6xl mx-auto">
        <BlurFade delay={0.1}>
          <div className="relative w-full bg-[#1B1E4B] rounded-[3rem] p-12 md:p-24 overflow-hidden group shadow-2xl">
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
            
            <div className="relative z-10 max-w-2xl flex flex-col items-start gap-10">
              <BlurFade delay={0.2}>
                <div className="px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white text-[10px] font-black tracking-widest uppercase">
                  SENTINEL NODE OPTIMIZATION
                </div>
              </BlurFade>

              <BlurFade delay={0.3}>
                <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[1] text-white">
                  Experience the <span className="text-white">future of</span> speed <br />
                  <span className="text-primary italic">With our proprietary protocol</span>
                </h2>
              </BlurFade>

              <BlurFade delay={0.4}>
                <p className="max-w-xl text-lg text-zinc-300 font-medium leading-relaxed">
                  Beyond the bandwidth. Our sentinel engine decodes the nuances of 6,000+ global nodes to find 
                  the specific environment where your connection will truly thrive.
                </p>
              </BlurFade>

              <BlurFade delay={0.5} className="flex flex-col sm:flex-row items-center gap-8">
                <button className="bg-white text-[#1B1E4B] px-8 py-4 rounded-full font-bold flex items-center gap-4 hover:bg-zinc-200 transition-all">
                  EXPLORE GLOBAL NODES <ArrowRight size={20} />
                </button>
                <button className="text-[10px] font-black tracking-widest text-zinc-400 hover:text-white transition-colors uppercase">
                  VIEW INFRASTRUCTURE PLANS
                </button>
              </BlurFade>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default JourneyFeatureDark;
