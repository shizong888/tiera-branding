"use client";

import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const comparisonData = [
  {
    feature: "Data collection risk",
    free: "High: free options often track your activity and share data with third parties",
    tiera: {
      text: "Low: Tiera's strict no-logs policy is ",
      link: "independently verified"
    }
  },
  {
    feature: "Speed and bandwidth",
    free: "Restricted: speed throttling and bandwidth limits are common",
    tiera: {
      text: "Unlimited: no bandwidth or speed caps are in place"
    }
  },
  {
    feature: "Ads and trackers",
    free: "Common: free tools may inject ads or allow trackers",
    tiera: {
      text: "Blocked: Clean Web offers built-in ad and tracker blocking"
    }
  },
  {
    feature: "Customer support",
    free: "Limited: often no live help and slow response times",
    tiera: {
      text: "24/7: live chat and email support are available"
    }
  },
  {
    feature: "VPN servers and locations",
    free: "Few: frequently have overloaded servers that slow your connection",
    tiera: {
      text: "Thousands: lets you connect to 4,500+ high-speed servers in 100 countries"
    }
  },
  {
    feature: "Encryption",
    free: "Unreliable: may lack strong encryption standards",
    tiera: {
      text: "Strong: robust encryption for increased data and privacy protection"
    }
  }
];

const ComparisonSection = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="container max-w-5xl mx-auto flex flex-col items-center gap-12">
        
        {/* Header */}
        <div className="text-center space-y-6 max-w-3xl">
          <BlurFade delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1B1E4B]">
              Tiera vs. free VPNs
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="text-base text-[#1B1E4B]/60 leading-relaxed font-medium">
              Free VPNs often compromise on privacy and performance. Tiera VPN offers a more secure and reliable browsing experience you can trust.
            </p>
          </BlurFade>
        </div>

        {/* Table Container with Rounded Corners */}
        <BlurFade delay={0.3} className="w-full">
          <div className="border border-zinc-200 rounded-3xl overflow-hidden shadow-sm bg-white">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#E5E7EB]/50 hover:bg-[#E5E7EB]/50 border-b-zinc-200">
                  <TableHead className="py-6 px-8 text-[#1B1E4B] font-bold text-base w-[250px]"></TableHead>
                  <TableHead className="py-6 px-8 text-[#1B1E4B] font-bold text-base">Free VPNs</TableHead>
                  <TableHead className="py-6 px-8 text-[#1B1E4B] font-bold text-base">Tiera VPN</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, i) => (
                  <TableRow key={i} className="border-b-zinc-100 hover:bg-zinc-50/50 transition-colors">
                    <TableCell className="py-6 px-8 font-bold text-[#1B1E4B] text-sm">
                      {row.feature}
                    </TableCell>
                    <TableCell className="py-6 px-8 text-[#1B1E4B]/60 text-sm font-medium leading-relaxed">
                      {row.free}
                    </TableCell>
                    <TableCell className="py-6 px-8 text-[#1B1E4B] text-sm font-medium leading-relaxed">
                      <span className="font-bold">{row.tiera.text.split(':')[0]}:</span>
                      {row.tiera.text.split(':')[1]}
                      {row.tiera.link && (
                        <a href="#" className="underline hover:text-primary transition-colors">
                          {row.tiera.link}
                        </a>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default ComparisonSection;

