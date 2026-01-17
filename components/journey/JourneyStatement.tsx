"use client";

import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";

const JourneyStatement = () => {
  return (
    <section className="py-32 px-6 bg-zinc-50 border-y border-zinc-100">
      <div className="container max-w-4xl mx-auto text-center">
        <BlurFade delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[1.1] text-black">
            Tiera is about being in control. With Tiera, you get peace of mind knowing that your 
            <span className="text-primary italic"> internet connection is encrypted,</span> your devices are shielded 
            from malware and unwanted snoopers, and your digital life belongs to you.
          </h2>
        </BlurFade>
      </div>
    </section>
  );
};

export default JourneyStatement;

