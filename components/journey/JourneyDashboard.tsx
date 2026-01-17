"use client";

import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Shield, Lock, Globe, Star } from "lucide-react";

const JourneyDashboard = () => {
  return (
    <section className="py-32 px-6 bg-[#1B1E4B] text-white overflow-hidden">
      <div className="container max-w-6xl mx-auto flex flex-col gap-24">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="flex-1 flex flex-col items-start gap-10">
            <BlurFade delay={0.1}>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] text-white">
                Understand <br />
                the extent of <br />
                <span className="text-primary italic text-4xl lg:text-6xl xl:text-7xl">online threats.</span>
              </h2>
            </BlurFade>
          </div>
          
          <BlurFade delay={0.2} className="md:w-1/3">
            <button className="bg-secondary text-[#1B1E4B] px-10 py-5 rounded-full font-black text-sm tracking-widest uppercase hover:scale-105 transition-all shadow-xl shadow-secondary/20">
              Learn more
            </button>
          </BlurFade>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Stat Card */}
          <div className="md:col-span-2 relative p-16 bg-[#131635] border border-white/5 rounded-[3rem] overflow-hidden group shadow-2xl">
            {/* Background graph mock */}
            <div className="absolute bottom-0 inset-x-0 h-1/2 flex items-end justify-between px-16 gap-4 opacity-20 text-primary">
              <div className="w-full h-[40%] bg-primary rounded-t-full" />
              <div className="w-full h-[80%] bg-muted-foreground rounded-t-full" />
              <div className="w-full h-[60%] bg-secondary rounded-t-full" />
            </div>

            <div className="relative z-10 flex flex-col gap-12 text-white">
              <div className="flex flex-col gap-2">
                <span className="text-4xl lg:text-6xl xl:text-7xl font-black italic tracking-tighter uppercase leading-none">1.2 Billion</span>
                <span className="text-[10px] font-black tracking-widest text-white/40 uppercase">Malware infections prevented in 2026</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl lg:text-6xl xl:text-7xl font-black italic tracking-tighter uppercase leading-none">1 Billion</span>
                <span className="text-[10px] font-black tracking-widest text-white/40 uppercase">Private data files shielded from leaks</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-3xl lg:text-4xl xl:text-5xl font-black italic tracking-tighter text-primary uppercase leading-none">300,000</span>
                <span className="text-[10px] font-black tracking-widest text-white/40 uppercase">New daily malware signatures identified</span>
              </div>
            </div>
          </div>

          {/* Side Cards */}
          <div className="flex flex-col gap-8">
            <div className="flex-1 p-10 bg-[#131635] border border-white/5 rounded-[3rem] flex flex-col justify-between">
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="w-[31%] h-full bg-secondary" />
              </div>
              <div className="space-y-4">
                <span className="text-4xl font-black italic text-white">31%</span>
                <p className="text-sm font-medium text-white/40 leading-relaxed tracking-widest uppercase">of all breaches were caused by phishing and stolen credentials.</p>
              </div>
            </div>

            <div className="flex-1 p-10 bg-[#131635] border border-white/5 rounded-[3rem] flex flex-col justify-between">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border-2 border-primary border-t-transparent animate-spin" />
              </div>
              <div className="space-y-4">
                <span className="text-2xl font-black italic leading-tight uppercase tracking-tight text-white">Less than a second</span>
                <p className="text-sm font-medium text-white/40 leading-relaxed tracking-widest uppercase">is the time it takes to crack any of the top 10 most popular passwords.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyDashboard;
