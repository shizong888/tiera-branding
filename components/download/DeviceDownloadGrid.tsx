"use client";

import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Download, Monitor, Smartphone, Globe, Chrome, Compass, Wind } from "lucide-react";

const devices = [
  { name: "Windows app*", icon: Monitor, type: "app" },
  { name: "macOS app", icon: Globe, type: "app" }, // Simple icon like in screenshot
  { name: "Linux app", icon: Wind, type: "app" }, // Using Wind as a placeholder for Linux-style simple icon
  { name: "Android .APK", icon: Smartphone, type: "app" },
  { name: "iOS app", icon: Smartphone, type: "app" },
  { name: "Chrome extension", icon: Chrome, type: "extension" },
  { name: "Firefox extension", icon: Compass, type: "extension" },
  { name: "Edge extension", icon: Chrome, type: "extension" }
];

const DeviceDownloadGrid = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="container max-w-6xl mx-auto flex flex-col items-center gap-16">
        
        {/* Header */}
        <div className="text-center space-y-6 max-w-3xl">
          <BlurFade delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1B1E4B]">
              Get Tiera for all your devices
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="text-base text-[#1B1E4B]/60 leading-relaxed font-medium">
              Whether you&apos;re looking for a VPN (Virtual Private Network) app download for your smartphone, tablet, or desktop, Tiera has you covered. Download the latest VPN app and extension versions here:
            </p>
          </BlurFade>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {devices.map((device, i) => (
            <BlurFade key={i} delay={0.3 + i * 0.05}>
              <div className="group bg-[#f9fafb] p-8 rounded-3xl border border-transparent hover:border-zinc-200 transition-all cursor-pointer relative min-h-[160px] flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <div className="w-6 h-6 text-[#1B1E4B]">
                    <device.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-[#1B1E4B]/40 uppercase tracking-widest block">
                      Download
                    </span>
                    <h3 className="text-base font-bold text-[#1B1E4B]">
                      {device.name}
                    </h3>
                  </div>
                </div>
                
                <div className="absolute bottom-8 right-8 text-[#1B1E4B]/20 group-hover:text-primary transition-colors">
                  <Download size={20} />
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Footer Note */}
        <BlurFade delay={0.8}>
          <p className="text-[11px] font-medium text-[#1B1E4B]/40">
            *You can also download our installer for a <a href="#" className="underline hover:text-primary transition-colors">Windows ARM-based processor.</a>
          </p>
        </BlurFade>
      </div>
    </section>
  );
};

export default DeviceDownloadGrid;

