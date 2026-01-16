"use client";

import Navbar from "@/components/Navbar";
import JourneyHero from "@/components/journey/JourneyHero";
import JourneyFeaturesGrid from "@/components/journey/JourneyFeaturesGrid";
import JourneyMoreThanVPN from "@/components/journey/JourneyMoreThanVPN";
import JourneyStatement from "@/components/journey/JourneyStatement";
import JourneyBeyond from "@/components/journey/JourneyBeyond";
import JourneyFeatureDark from "@/components/journey/JourneyFeatureDark";
import JourneyDashboard from "@/components/journey/JourneyDashboard";
import JourneyInformationControl from "@/components/journey/JourneyInformationControl";
import JourneyMatcher from "@/components/journey/JourneyMatcher";
import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-primary/30">
      <Navbar />
      <JourneyHero />
      <JourneyFeaturesGrid />
      <JourneyMoreThanVPN />
      
      {/* Trust Section */}
      <section className="py-24 px-6 border-y border-border overflow-hidden bg-[#f9fafb]">
        <div className="container mx-auto">
          <Marquee className="[--duration:20s]" pauseOnHover>
            <div className="flex items-center gap-16 px-8 text-black uppercase opacity-30 italic font-black text-2xl">
              <span>USA TODAY</span>
              <span className="lowercase">CNN</span>
              <span className="lowercase">techradar</span>
              <span className="capitalize">Forbes</span>
              <span className="lowercase">tom&apos;s guide</span>
              <span>INDEPENDENT</span>
              <span>CNET</span>
            </div>
          </Marquee>
        </div>
      </section>

      <JourneyStatement />
      <JourneyBeyond />
      <JourneyFeatureDark />
      <JourneyDashboard />
      <JourneyInformationControl />
      <JourneyMatcher />

      {/* Device Compatibility Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container max-w-6xl mx-auto flex flex-col items-center text-center gap-12">
          <BlurFade delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-black uppercase">A VPN service available for all your devices</h2>
          </BlurFade>
          
          <BlurFade delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 w-full">
              {['Windows', 'macOS', 'iOS', 'Android', 'Linux', 'TV'].map((device) => (
                <div key={device} className="flex flex-col items-center gap-3 p-6 rounded-3xl border border-zinc-100 bg-[#f9fafb] hover:bg-white hover:shadow-2xl hover:shadow-zinc-200 hover:border-primary transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-zinc-400 group-hover:text-primary transition-colors">
                    <div className="w-6 h-6 bg-current opacity-50 rounded" />
                  </div>
                  <span className="text-sm font-bold text-black">{device}</span>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 bg-[#f9fafb]">
        <div className="container mx-auto max-w-4xl">
          <BlurFade delay={0.1}>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-16 text-center text-black uppercase">Frequently Asked Questions</h2>
          </BlurFade>
          
          <div className="space-y-4">
            {[
              { q: "What is a VPN?", a: "A VPN (Virtual Private Network) is a service that protects your internet connection and privacy online. It creates an encrypted tunnel for your data, protects your online identity by hiding your IP address, and allows you to use public Wi-Fi hotspots safely." },
              { q: "How many devices can I use Tiera on?", a: "With a single Tiera account, you can secure up to 10 devices simultaneously, including your laptop, phone, tablet, and smart TV." },
              { q: "Does Tiera log my data?", a: "No. Tiera operates under a strict no-logs policy. We do not track, collect, or share your private data." }
            ].map((item, i) => (
              <BlurFade key={i} delay={0.2 + i * 0.1}>
                <div className="p-8 rounded-[2rem] border border-border bg-white hover:border-primary transition-all group shadow-sm hover:shadow-2xl hover:shadow-zinc-200">
                  <h3 className="text-xl font-bold mb-4 text-black">{item.q}</h3>
                  <p className="text-muted-foreground font-medium">{item.a}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      
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
