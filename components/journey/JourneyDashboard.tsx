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
              <h2 className="text-5xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.9] text-white uppercase">
                UNDERSTAND <br />
                THE EXTENT OF <br />
                <span className="text-primary italic text-6xl lg:text-8xl xl:text-9xl">ONLINE THREATS.</span>
              </h2>
            </BlurFade>
          </div>
          
          <BlurFade delay={0.2} className="md:w-1/3">
            <button className="bg-secondary text-[#1B1E4B] px-10 py-5 rounded-full font-black text-sm tracking-widest uppercase hover:scale-105 transition-all shadow-xl shadow-secondary/20">
              LEARN MORE
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
                <span className="text-5xl lg:text-7xl xl:text-8xl font-black italic tracking-tighter">1.2 BILLION</span>
                <span className="text-[10px] font-black tracking-widest text-white/40 uppercase text-white">MALWARE INFECTIONS PREVENTED IN 2026</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-5xl lg:text-7xl xl:text-8xl font-black italic tracking-tighter">1 BILLION</span>
                <span className="text-[10px] font-black tracking-widest text-white/40 uppercase text-white">PRIVATE DATA FILES SHIELDED FROM LEAKS</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl lg:text-5xl xl:text-6xl font-black italic tracking-tighter text-primary">300,000</span>
                <span className="text-[10px] font-black tracking-widest text-white/40 uppercase text-white">NEW DAILY MALWARE SIGNATURES IDENTIFIED</span>
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
                <p className="text-sm font-medium text-white/40 leading-relaxed uppercase tracking-widest">OF ALL BREACHES WERE CAUSED BY PHISHING AND STOLEN CREDENTIALS.</p>
              </div>
            </div>

            <div className="flex-1 p-10 bg-[#131635] border border-white/5 rounded-[3rem] flex flex-col justify-between">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border-2 border-primary border-t-transparent animate-spin" />
              </div>
              <div className="space-y-4">
                <span className="text-2xl font-black italic leading-tight uppercase tracking-tight text-white">Less than a second</span>
                <p className="text-sm font-medium text-white/40 leading-relaxed uppercase tracking-widest">IS THE TIME IT TAKES TO CRACK ANY OF THE TOP 10 MOST POPULAR PASSWORDS.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyDashboard;
