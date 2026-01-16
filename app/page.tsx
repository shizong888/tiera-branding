"use client";

import Navbar from "@/components/Navbar";
import JourneyHero from "@/components/journey/JourneyHero";
import JourneyFeaturesGrid from "@/components/journey/JourneyFeaturesGrid";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-primary/30">
      <Navbar />
      <JourneyHero />
      <JourneyFeaturesGrid />

      {/* Footer for Journey */}
      <footer className="py-24 px-6 bg-[#f9fafb] border-t border-border">
        <div className="container max-w-6xl mx-auto flex flex-col items-center gap-16 text-center">
          <div className="flex items-center gap-3">
            <Image src="/images/tiera-icon.svg" alt="Logo" width={40} height={40} />
            <span className="text-2xl font-black uppercase tracking-tighter text-black">Tiera</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-left w-full">
            <div className="space-y-6">
              <h4 className="text-[10px] font-black tracking-widest text-zinc-400 uppercase">INFRASTRUCTURE</h4>
              <div className="flex flex-col gap-4 text-sm font-bold text-black">
                <a href="#" className="hover:text-primary transition-colors">Global Nodes</a>
                <a href="#" className="hover:text-primary transition-colors">Sentinel Protocol</a>
                <a href="#" className="hover:text-primary transition-colors">Heuristic Engine</a>
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-black tracking-widest text-zinc-400 uppercase">GOVERNANCE</h4>
              <div className="flex flex-col gap-4 text-sm font-bold text-black">
                <a href="#" className="hover:text-primary transition-colors">Jurisdictions</a>
                <a href="#" className="hover:text-primary transition-colors">No-Logs Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Audits</a>
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-black tracking-widest text-zinc-400 uppercase">COMPANY</h4>
              <div className="flex flex-col gap-4 text-sm font-bold text-black">
                <a href="#" className="hover:text-primary transition-colors">About Tiera</a>
                <a href="#" className="hover:text-primary transition-colors">The Hub</a>
                <a href="#" className="hover:text-primary transition-colors">Careers</a>
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-black tracking-widest text-zinc-400 uppercase">SUPPORT</h4>
              <div className="flex flex-col gap-4 text-sm font-bold text-black">
                <a href="#" className="hover:text-primary transition-colors">Documentation</a>
                <a href="#" className="hover:text-primary transition-colors">Status</a>
                <a href="#" className="hover:text-primary transition-colors">Contact</a>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-zinc-200 w-full flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] font-black tracking-widest uppercase text-zinc-400">© 2026 Tiera Security S.A. | PROTECTION REDEFINED.</p>
            <div className="flex gap-8 text-[10px] font-black tracking-widest uppercase text-zinc-400">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
