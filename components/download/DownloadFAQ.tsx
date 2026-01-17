"use client";

import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How can I download a VPN for my PC?",
    answer: "Downloading a VPN for your PC is quite easy. All you need to do is go to Tiera's download page and press the Download button to get the latest version of the app, or go to a dedicated download page for your operating system, like Windows or Linux, and get the app there."
  },
  {
    question: "Can I download a VPN for free?",
    answer: "While Tiera is a premium VPN service, we offer a 7-day free trial on mobile devices and a 30-day money-back guarantee. This allows you to test our full suite of security features risk-free before committing to a plan."
  },
  {
    question: "How do I choose the best VPN software for 2026?",
    answer: "The best VPN software should offer robust encryption, a verified no-logs policy, a large server network, and fast connection speeds. Tiera combines all these features with an intuitive interface and 24/7 support to ensure you have the best possible online protection."
  },
  {
    question: "Do I need a VPN on my iPhone?",
    answer: "Yes, using a VPN on your iPhone is highly recommended, especially when connecting to public Wi-Fi networks. Tiera encrypts your mobile data, protecting your personal information from hackers and snoopers while you're on the go."
  },
  {
    question: "What's the difference between paid VPNs vs. free VPNs?",
    answer: "Paid VPNs like Tiera provide superior security, unlimited bandwidth, and a strict no-logs policy. Free VPNs often limit your data, have fewer server locations, and may even sell your browsing data to third parties to cover their costs."
  }
];

const DownloadFAQ = () => {
  return (
    <section className="py-24 px-6 bg-[#f9fafb]">
      <div className="container max-w-4xl mx-auto flex flex-col items-center gap-16">
        
        {/* Header */}
        <BlurFade delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center text-[#1B1E4B]">
            Frequently asked questions
          </h2>
        </BlurFade>

        {/* Accordion Container */}
        <BlurFade delay={0.2} className="w-full">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-zinc-200">
                <AccordionTrigger className="text-[#1B1E4B] hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#1B1E4B]/60">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </BlurFade>
      </div>
    </section>
  );
};

export default DownloadFAQ;

