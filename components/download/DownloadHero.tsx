"use client";

import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import Image from "next/image";
import { Check } from "lucide-react";

const DownloadHero = () => {
  return (
    <section className="relative pt-28 pb-0 bg-white min-h-[90vh] flex flex-col items-center overflow-visible">
      <div className="container max-w-[1600px] mx-auto px-4 lg:px-6 relative z-20">
        {/* Main Hero Card - Matching Homepage Island Size */}
        <div className="bg-[#1B1E4B] rounded-[3rem] lg:rounded-[4rem] relative overflow-hidden flex flex-col lg:flex-row min-h-[85vh] lg:min-h-[90vh] shadow-2xl">
          
          {/* Left Side: Content - 2/3 width to ensure image centers over transition */}
          <div className="lg:flex-[2] px-8 pt-16 pb-64 lg:p-24 lg:pr-0 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-6 relative z-10">
            <div className="space-y-3 max-w-xl">
              <BlurFade delay={0.1}>
                <h1 className="text-3xl md:text-5xl lg:text-[4.5rem] font-bold tracking-tight leading-[1.05] text-white">
                  Download Tiera <br />
                  <span className="text-secondary italic">VPN app</span>
                </h1>
              </BlurFade>
              
              <BlurFade delay={0.2}>
                <p className="text-base lg:text-lg text-white/70 font-medium">
                  Fast and easy to use VPN for all your devices
                </p>
              </BlurFade>
            </div>

            <div className="flex flex-col items-start space-y-3 mx-auto lg:ml-0">
              {[
                "Fastest servers for smooth browsing and streaming",
                "Verified no-logs policy for greater privacy",
                "Trusted by over 3 million users worldwide"
              ].map((benefit, i) => (
                <BlurFade key={i} delay={0.3 + i * 0.1} className="flex items-center gap-3 text-white/80 font-medium text-sm lg:text-lg text-left">
                  <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                    <Check size={10} className="text-secondary" />
                  </div>
                  {benefit}
                </BlurFade>
              ))}
            </div>

            <BlurFade delay={0.6} className="flex flex-col sm:flex-row items-center lg:items-start gap-4 pt-4 w-full max-w-md lg:max-w-none">
              <button className="w-full lg:w-auto bg-secondary text-[#1B1E4B] px-10 py-5 lg:py-4 rounded-2xl font-black text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-secondary/20">
                Download app
              </button>
              <button className="w-full lg:w-auto bg-white text-[#1B1E4B] px-10 py-4 rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all border border-zinc-100">
                Start a free trial
              </button>
            </BlurFade>

            <BlurFade delay={0.7}>
              <p className="text-[10px] font-bold tracking-wider text-white/40 uppercase">
                New to VPNs? Try Tiera free for 7 days on 3 devices.
              </p>
            </BlurFade>
          </div>

          {/* Right Side: Teal Background - 1/3 width */}
          <div className="lg:flex-1 min-h-[220px] lg:min-h-0 relative bg-secondary rounded-b-[3rem] lg:rounded-b-none lg:rounded-r-[4rem] overflow-hidden">
            {/* Background Radial Waves */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
              <div className="absolute w-[160%] aspect-square border-[1px] border-white/30 rounded-full" />
              <div className="absolute w-[130%] aspect-square border-[1px] border-white/20 rounded-full" />
              <div className="absolute w-[100%] aspect-square border-[1px] border-white/10 rounded-full" />
              <div className="absolute w-[70%] aspect-square border-[1px] border-white/5 rounded-full" />
            </div>

            {/* Creative Wavy Line Art */}
            <div className="absolute inset-0 pointer-events-none z-10 opacity-40">
              {/* Refined wavy lines matching screenshot */}
              <div className="absolute top-[40%] -left-20 w-64 h-64 border-[1.5px] border-white rounded-full opacity-20" />
              <div className="absolute top-[20%] right-[-10%] w-48 h-48 border-[1px] border-white/30 rounded-full" />
            </div>
          </div>

          {/* The Phone Image - Perfectly centered over the color transition */}
          <div 
            className="absolute left-1/2 lg:left-[66.6%] -translate-x-1/2 bottom-0 h-[40%] lg:h-full w-[80%] lg:w-[40%] pointer-events-none z-20 overflow-visible"
            style={{ clipPath: 'inset(-100% -100% -100px -100%)' }}
          >
            <Image 
              src="/images/image-4-1.webp" 
              alt="Tiera App on Phone" 
              fill 
              className="object-contain object-bottom scale-[1.25] lg:scale-[0.9] translate-y-8 lg:translate-y-20 origin-bottom"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadHero;
