"use client";

import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Zap, Globe, Shield, Lock, Eye, AlertCircle } from "lucide-react";

const features = [
  { 
    title: "The fastest VPN service", 
    desc: "Unmatched speed and post-quantum encryption, our new security standard for 2026.", 
    icon: Zap,
    grid: "md:col-span-2 md:row-span-2"
  },
  { 
    title: "Global network of servers", 
    desc: "Choose from thousands of Tiera nodes covering 178+ locations.", 
    icon: Globe,
    grid: "md:col-span-1 md:row-span-2"
  },
  { 
    title: "Invisible protection from malware", 
    desc: "No need to think about it — automatically block phishing, malware, and trackers.", 
    icon: Shield,
    grid: "md:col-span-1 md:row-span-1"
  },
  { 
    title: "Never type a password again", 
    desc: "Secure vault for passkeys — an easier way to log in on all your devices.", 
    icon: Lock,
    grid: "md:col-span-1 md:row-span-1"
  },
  { 
    title: "Safer accounts and peace of mind", 
    desc: "Get instant alerts about leaked data and minimize digital risk.", 
    icon: AlertCircle,
    grid: "md:col-span-1 md:row-span-1"
  },
  { 
    title: "Stay protected with Sentinel Core", 
    desc: "Autonomous security that adapts to your browsing patterns in real-time.", 
    icon: Eye,
    grid: "md:col-span-1 md:row-span-1"
  },
];

const JourneyMoreThanVPN = () => {
  return (
    <section className="pt-32 pb-32 px-6 bg-background transition-colors duration-500">
      <div className="container max-w-6xl mx-auto flex flex-col gap-16">
        <BlurFade delay={0.1}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground leading-none">
            More than <br />
            <span className="text-primary italic">a VPN.</span>
          </h2>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {features.map((feature, idx) => (
            <BlurFade key={idx} delay={0.2 + idx * 0.05} className={feature.grid}>
              <div className="group h-full flex flex-col justify-between p-8 bg-muted border border-border rounded-[2rem] hover:bg-card hover:shadow-xl hover:shadow-primary/5 transition-all cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-background shadow-sm flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                  <feature.icon size={20} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold tracking-tight text-foreground">{feature.title}</h3>
                  <p className="text-sm font-medium text-muted-foreground leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyMoreThanVPN;
