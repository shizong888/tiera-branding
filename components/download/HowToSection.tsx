"use client";

import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";

const steps = [
  {
    title: "Get your VPN subscription",
    description: "If you're a first-time user, choose a plan and enter your email and payment details to activate your 7-day free trial, and create an account.",
    icon: "💳"
  },
  {
    title: "Download the VPN app",
    description: "Download the Tiera VPN app, browser extension, or the installation file from our website.",
    icon: "📥"
  },
  {
    title: "Sign in to your account",
    description: "Sign in, connect to any server, and enjoy safety and privacy online with a VPN!",
    icon: "👤"
  }
];

const HowToSection = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="container max-w-6xl mx-auto flex flex-col items-center gap-16">
        
        {/* Header */}
        <BlurFade delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1B1E4B] text-center">
            How to download a VPN and set it up
          </h2>
        </BlurFade>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {steps.map((step, i) => (
            <BlurFade key={i} delay={0.2 + i * 0.1}>
              <div className="flex flex-col items-center text-center gap-8 bg-[#f9fafb] p-10 rounded-[2.5rem] border border-transparent hover:border-zinc-100 transition-all h-full">
                {/* Grey Placeholder Graphic */}
                <div className="w-full aspect-[4/3] bg-zinc-200/50 rounded-2xl flex items-center justify-center text-4xl grayscale opacity-50 relative overflow-hidden">
                  <div className="absolute inset-0 border-2 border-dashed border-zinc-300 rounded-2xl m-4" />
                  <span className="relative z-10">{step.icon}</span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1B1E4B]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#1B1E4B]/60 font-medium leading-relaxed max-w-[280px] mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Bottom Note & Action */}
        <div className="flex flex-col items-center gap-8">
          <BlurFade delay={0.6}>
            <p className="text-[11px] font-medium text-[#1B1E4B]/40 text-center max-w-2xl">
              Note: Our free trial is available on all 12-month and 24-month plans. Accepted payment methods are by credit card or PayPal.
            </p>
          </BlurFade>
          
          <BlurFade delay={0.7}>
            <button className="px-8 py-3.5 bg-[#1B1E4B] text-white rounded-xl font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-[#1B1E4B]/10">
              Learn how to use a VPN
            </button>
          </BlurFade>
        </div>

      </div>
    </section>
  );
};

export default HowToSection;

