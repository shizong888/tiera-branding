"use client";

import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Shield, Smartphone, Zap, Lock, Wifi, EyeOff, XCircle, Headphones, Globe } from "lucide-react";

const benefits = [
  {
    title: "Enjoy greater online privacy",
    description: "You never know who might be snooping on your online activity. A VPN encrypts your internet connection and hides your IP (Internet Protocol) address, protecting your personal data, concealing your physical location, and keeping your browsing private.",
    icon: Shield
  },
  {
    title: "Protect unlimited devices",
    description: "Keep all your devices safe from internet dangers. With a single Tiera account, you get unlimited simultaneous connections, meaning you can secure all your household devices at no extra cost.",
    icon: Smartphone
  },
  {
    title: "Connect to the fastest server",
    description: "Need the fastest available connection? Just tap the Quick connect button, and Tiera will automatically link you to the best server. Already have a favorite? You can customize this button to auto-connect to a specific location instead.",
    icon: Zap
  },
  {
    title: "Personalize your security",
    description: "Tiera's Bypasser lets you pick specific apps and websites to exclude from the VPN connection. This way, you can use your actual IP address when needed while the rest of your internet traffic stays encrypted and protected.",
    icon: Lock
  },
  {
    title: "Maintain uninterrupted privacy",
    description: "If your VPN connection unexpectedly drops, Tiera's kill switch will disconnect you from the internet. This minimizes the risk of data leaks and ensures your sensitive information stays private and secure.",
    icon: EyeOff
  },
  {
    title: "Block ads, pop-ups, and trackers",
    description: "Forget intrusive ads, pop-ups, and trackers with the Tiera VPN browser extension. For an even smoother, ad-free surfing experience, open the Tiera VPN app, connect to a server, and turn Clean Web on.",
    icon: XCircle
  },
  {
    title: "Connect to a vast server network",
    description: "Tiera has 4,500+ servers in 100 countries, including the US, the UK, Canada, Hong Kong, and many more, making it easy to find a VPN server nearby. With thousands of options available, server congestion is unlikely, ensuring lightning-fast, reliable connections.",
    icon: Globe
  },
  {
    title: "Enhance your online security",
    description: "Tiera is more than just a VPN — it's a complete cybersecurity solution that goes beyond protecting your internet traffic. Even the Starter plan includes benefits such as Alternative ID, while higher-tier plans include Antivirus, a private search engine, and a data leak monitoring tool.",
    icon: Shield
  },
  {
    title: "Get double protection",
    description: "Tiera's Multi Hop feature (double VPN) routes your traffic via two VPN servers instead of one. You can manually select the entry and exit points for double encryption, data protection, and privacy.",
    icon: Lock
  }
];

const BenefitsGrid = () => {
  return (
    <section className="py-24 px-6 bg-[#f9fafb]">
      <div className="container max-w-6xl mx-auto flex flex-col items-center gap-16">
        
        {/* Header */}
        <BlurFade delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1B1E4B] text-center">
            Discover the top Tiera VPN app benefits
          </h2>
        </BlurFade>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {benefits.map((benefit, i) => (
            <BlurFade key={i} delay={0.2 + i * 0.05}>
              <div className="flex flex-col items-center text-center gap-8 bg-white p-10 rounded-[2.5rem] border border-transparent hover:border-zinc-200 transition-all h-full shadow-sm hover:shadow-md">
                {/* Grey Placeholder Graphic */}
                <div className="w-full aspect-square max-w-[160px] bg-[#f9fafb] rounded-full flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 border-2 border-dashed border-zinc-200 rounded-full m-4" />
                  <div className="relative z-10 text-[#1B1E4B]/20">
                    <benefit.icon size={48} strokeWidth={1.5} />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1B1E4B]">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#1B1E4B]/60 font-medium leading-relaxed">
                    {benefit.description}
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

export default BenefitsGrid;

