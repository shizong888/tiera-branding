"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";

const tabs = [
  {
    id: "guarantee",
    label: "Money-back guarantee",
    content: "Try Tiera risk-free for 30 days. If it’s not right for you, simply contact us within 30 days for a full refund. No friction, no questions."
  },
  {
    id: "household",
    label: "Household protection",
    content: "One Tiera subscription protects all your devices at once, so your entire household stays secure under a single account. No juggling plans or settings. During the free trial, you can test Tiera on up to three devices."
  },
  {
    id: "logs",
    label: "No-logs policy",
    content: "What you do online stays private. Tiera does not monitor, track, or store your browsing activity. Your traffic is encrypted, your data remains yours, and your privacy stays intact."
  },
  {
    id: "support",
    label: "24/7 support",
    content: "Whenever you need help, Tiera support is available 24/7. Reach out anytime via live chat or email and get assistance from a real person."
  },
  {
    id: "tech",
    label: "High-tech",
    content: "Tiera is simple on the surface and purpose-built underneath. We’ve developed our own proprietary networking technology, built on the latest VPN protocols, to keep your connection fast, stable, and secure without compromising quality."
  }
];

const JourneyTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="container max-w-5xl mx-auto flex flex-col items-center gap-12">
        {/* Tab Headers */}
        <BlurFade delay={0.1} className="w-full">
          <div className="relative w-full border-b border-zinc-100 flex justify-center lg:justify-between items-center overflow-x-auto lg:overflow-x-visible no-scrollbar pb-px">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-4 text-sm font-bold tracking-tight transition-colors whitespace-nowrap ${
                  activeTab === tab.id ? "text-foreground" : "text-muted-foreground hover:text-foreground/60"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </BlurFade>

        {/* Tab Content */}
        <div className="w-full max-w-3xl min-h-[120px] relative flex justify-center text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex items-center justify-center"
            >
              <p className="text-lg lg:text-xl text-foreground/70 font-medium leading-relaxed">
                {tabs.find((t) => t.id === activeTab)?.content}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default JourneyTabs;

